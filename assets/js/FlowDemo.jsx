/* Demo animada "en vivo" de una automatización (caso Distribuidora del Norte).
   Sidebar con todos los pasos + stage tipo terminal con UN diagrama acumulativo:
   cada paso agrega una pieza (nodo + conexión) y nada se borra. Retroceder quita las piezas posteriores. */

const FLOW_STEPS = [
  { cmd: 'whatsapp.on("mensaje")', title: 'Entra el pedido', sub: 'Un cliente escribe por WhatsApp', tag: 'entrada', node: 'wa' },
  { cmd: 'agente.leer(mensaje)', title: 'El agente entiende', sub: 'IA extrae producto, cantidad y cliente', tag: 'ia', node: 'agent', link: 'wa-agent' },
  { cmd: 'catalogo.buscar(precios)', title: 'Consulta precios', sub: 'Lee catálogo e inventario vigentes', tag: 'datos', node: 'cat', link: 'agent-cat' },
  { cmd: 'cotizacion.enviar()', title: 'Cotiza y responde', sub: 'Cotización en 4 min, no en 2 horas', tag: 'respuesta', node: 'quote', link: 'agent-quote' },
  { cmd: 'erp.alta_pedido()', title: 'Alta en el ERP', sub: 'Al aprobarse, el pedido se registra solo', tag: 'sistema', node: 'erp', link: 'quote-erp' },
  { cmd: 'reporte.diario()', title: 'Reporte al equipo', sub: 'Resumen y alertas sin captura manual', tag: 'control', node: 'rep', link: 'erp-rep' },
];

/* Layout fijo del diagrama final. Ningún nodo se mueve entre pasos.
   'wide' es horizontal (escritorio); 'narrow' apila el mismo sistema en vertical para celular. */
const NH = 78;
const FLOW_META = {
  wa: { label: 'WhatsApp', meta: 'cliente · 09:42' },
  agent: { label: 'Agente IA', meta: 'LLM + reglas' },
  cat: { label: 'Catálogo', meta: 'Sheets · precios' },
  quote: { label: 'Cotización', meta: 'PDF + mensaje' },
  erp: { label: 'ERP', meta: 'pedido #4821' },
  rep: { label: 'Reporte', meta: 'diario · alertas' },
};
const LAYOUT_SPEC = {
  wide: {
    w: 1000, h: 400, nw: 180,
    pos: { wa: [20, 161], agent: [290, 161], cat: [290, 20], quote: [560, 161], erp: [800, 161], rep: [560, 302] },
    links: { 'wa-agent': ['wa', 'right', 'agent', 'left'], 'agent-cat': ['agent', 'top', 'cat', 'bottom'], 'agent-quote': ['agent', 'right', 'quote', 'left'], 'quote-erp': ['quote', 'right', 'erp', 'left'], 'erp-rep': ['erp', 'bottom', 'rep', 'right', 'vh'] },
    summary: [560, 20, 420],
  },
  narrow: {
    w: 420, h: 600, nw: 170,
    pos: { wa: [20, 20], agent: [20, 150], cat: [230, 150], quote: [20, 280], erp: [230, 280], rep: [230, 410] },
    links: { 'wa-agent': ['wa', 'bottom', 'agent', 'top'], 'agent-cat': ['agent', 'right', 'cat', 'left'], 'agent-quote': ['agent', 'bottom', 'quote', 'top'], 'quote-erp': ['quote', 'right', 'erp', 'left'], 'erp-rep': ['erp', 'bottom', 'rep', 'top'] },
    summary: [20, 510, 380],
  },
};

/* Conector ortogonal con esquina redondeada. mode 'vh' = vertical primero, 'hv' = horizontal primero. */
function elbowPath([x1, y1], [x2, y2], mode = 'hv', r = 14) {
  if (x1 === x2 || y1 === y2) return `M${x1} ${y1} L${x2} ${y2}`;
  const sx = Math.sign(x2 - x1), sy = Math.sign(y2 - y1);
  return mode === 'vh'
    ? `M${x1} ${y1} L${x1} ${y2 - sy * r} Q${x1} ${y2} ${x1 + sx * r} ${y2} L${x2} ${y2}`
    : `M${x1} ${y1} L${x2 - sx * r} ${y1} Q${x2} ${y1} ${x2} ${y1 + sy * r} L${x2} ${y2}`;
}

/* Resuelve nodos (x/y/w) y conexiones ancladas a los bordes reales de cada nodo. */
function buildLayout(spec) {
  const nodes = {};
  Object.entries(spec.pos).forEach(([id, [x, y]]) => { nodes[id] = { x, y, ...FLOW_META[id] }; });
  const edge = (id, side) => {
    const n = nodes[id], W = spec.nw;
    return { right: [n.x + W, n.y + NH / 2], left: [n.x, n.y + NH / 2], top: [n.x + W / 2, n.y], bottom: [n.x + W / 2, n.y + NH] }[side];
  };
  const links = {};
  Object.entries(spec.links).forEach(([id, [a, sa, b, sb, mode]]) => { links[id] = elbowPath(edge(a, sa), edge(b, sb), mode); });
  return { ...spec, nodes, links };
}
const FLOW_LAYOUTS = { wide: buildLayout(LAYOUT_SPEC.wide), narrow: buildLayout(LAYOUT_SPEC.narrow) };

function useNarrow(query = '(max-width: 640px)') {
  const mq = window.matchMedia ? window.matchMedia(query) : null;
  const [on, setOn] = React.useState(mq ? mq.matches : false);
  React.useEffect(() => {
    if (!mq) return;
    const fn = (e) => setOn(e.matches);
    mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn);
    return () => (mq.removeEventListener ? mq.removeEventListener('change', fn) : mq.removeListener(fn));
  }, []);
  return on;
}

const ORANGE = '#FF6700', MINT = '#3CE8B0';
const STEP_MS = 4200, FINAL_MS = 8000;

function FlowDemo() {
  const last = FLOW_STEPS.length - 1;
  const wrap = React.useRef(null);
  const inView = useInView(wrap, { threshold: 0.35, once: false });
  const [cur, setCur] = React.useState(REDUCED ? last : 0);
  const [cycle, setCycle] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [typed, setTyped] = React.useState(REDUCED ? FLOW_STEPS[last].cmd.length : 0);
  const [complete, setComplete] = React.useState(REDUCED);
  const playing = inView && !paused && !REDUCED;
  const L = FLOW_LAYOUTS[useNarrow() ? 'narrow' : 'wide'];
  const NW = L.nw;
  const [sx, sy, sw] = L.summary;

  /* Typing effect del comando del paso activo. */
  React.useEffect(() => {
    if (REDUCED) return;
    setTyped(0);
    const cmd = FLOW_STEPS[cur].cmd;
    let n = 0;
    const iv = setInterval(() => { n++; setTyped(n); if (n >= cmd.length) clearInterval(iv); }, 38);
    return () => clearInterval(iv);
  }, [cur, cycle]);

  /* En el último paso, tras armarse la última pieza, el sistema completo se marca como listo. */
  React.useEffect(() => {
    if (REDUCED) return;
    setComplete(false);
    if (cur !== last) return;
    const t = setTimeout(() => setComplete(true), 1500);
    return () => clearTimeout(t);
  }, [cur, cycle]);

  const go = (i) => { setCur(Math.max(0, Math.min(last, i))); setCycle((c) => c + 1); };
  const next = () => (cur === last ? go(0) : go(cur + 1));

  /* Estado de cada pieza según el paso activo. */
  const stateOf = (i) => (i > cur ? 'hidden' : complete ? 'done' : i === cur ? 'active' : 'past');

  return (
    <div ref={wrap} className="ail-flow">
      {/* SIDEBAR: todos los pasos siempre visibles */}
      <div className="ail-flow-side">
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {FLOW_STEPS.map((s, i) => {
            const st = i === cur ? 'active' : i < cur || complete ? 'done' : 'todo';
            return (
              <li key={s.cmd}>
                <button onClick={() => go(i)} className={'ail-flow-item ail-flow-' + st} aria-current={i === cur ? 'step' : undefined}>
                  <span className="ail-flow-num">{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ minWidth: 0, flex: 1 }}>
                    <span className="ail-flow-title">{s.title}</span>
                    <span className="ail-flow-sub">{s.sub}</span>
                  </span>
                  <span className="ail-flow-tag">{st === 'done' ? '✓' : s.tag}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <div className="ail-flow-ctrl">
          <button onClick={() => go(cur - 1)} disabled={cur === 0} aria-label="Paso anterior">◀ prev</button>
          <button onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Reproducir' : 'Pausar'}>{paused ? '▶ play' : '❚❚ pausa'}</button>
          <button onClick={next} aria-label="Paso siguiente">next ▶</button>
        </div>
      </div>

      {/* STAGE: ventana tipo terminal */}
      <div className="ail-flow-stage">
        <div className="ail-flow-bar">
          <span className="ail-dot" style={{ background: '#FF5F57' }} />
          <span className="ail-dot" style={{ background: '#FEBC2E' }} />
          <span className="ail-dot" style={{ background: '#28C840' }} />
          <span style={{ marginLeft: 12, color: 'var(--gray-600)' }}>flujo_pedidos.n8n</span>
          <span style={{ marginLeft: 'auto', color: complete ? MINT : 'var(--gray-500)' }}>{String(cur + 1).padStart(2, '0')}/{String(FLOW_STEPS.length).padStart(2, '0')}</span>
        </div>
        <div style={{ padding: '18px 22px 0' }}>
          <div className="ail-flow-cmd">
            <span style={{ color: MINT }}>$</span> {FLOW_STEPS[cur].cmd.slice(0, typed)}<span className="ail-caret" style={{ background: ORANGE }} />
          </div>
          <div className="ail-flow-track">
            <div key={cur + '-' + cycle} className="ail-flow-fill"
              onAnimationEnd={next}
              style={{ animationDuration: (cur === last ? FINAL_MS : STEP_MS) + 'ms', animationPlayState: playing ? 'running' : 'paused', background: complete ? MINT : ORANGE }} />
          </div>
        </div>

        <svg viewBox={`0 0 ${L.w} ${L.h}`} className="ail-flow-svg" role="img" aria-label="Diagrama del flujo: WhatsApp, agente de IA, catálogo, cotización, ERP y reporte">
          <defs>
            <pattern id="ail-grid" width="25" height="25" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,.06)" />
            </pattern>
          </defs>
          <rect width={L.w} height={L.h} fill="url(#ail-grid)" />

          {/* Conexiones: se dibujan en vivo con stroke-dashoffset y llevan un paquete de datos viajando */}
          {FLOW_STEPS.map((s, i) => {
            if (!s.link) return null;
            const st = stateOf(i);
            const color = st === 'active' ? ORANGE : MINT;
            return (
              <g key={s.link}>
                <path id={'ail-l-' + s.link} d={L.links[s.link]} pathLength="1" fill="none"
                  stroke={color} strokeWidth="2" strokeLinecap="round"
                  style={{
                    strokeDasharray: 1, strokeDashoffset: st === 'hidden' ? 1 : 0,
                    opacity: st === 'hidden' ? 0 : st === 'past' ? 0.45 : 1,
                    transition: st === 'hidden' ? 'none' : 'stroke-dashoffset .8s cubic-bezier(.6,0,.2,1), opacity .4s ease, stroke .4s ease',
                  }} />
                {(st === 'active' || st === 'done') && !REDUCED && (
                  <circle key={cycle + st} r="4.5" fill={color} style={{ filter: `drop-shadow(0 0 6px ${color})` }}>
                    <animateMotion dur={st === 'done' ? '2.2s' : '1.4s'} begin={st === 'active' ? '0.8s' : (i * 0.25) + 's'} repeatCount="indefinite">
                      <mpath href={'#ail-l-' + s.link} />
                    </animateMotion>
                  </circle>
                )}
              </g>
            );
          })}

          {/* Nodos: aparecen con stagger después de su conexión */}
          {FLOW_STEPS.map((s, i) => {
            const n = L.nodes[s.node];
            const st = stateOf(i);
            const fresh = i === cur && !complete;
            const d = fresh && s.link ? 450 : 0;
            const stroke = st === 'active' ? ORANGE : MINT;
            return (
              <g key={s.node} className="ail-flow-node" style={{
                opacity: st === 'hidden' ? 0 : 1,
                transform: st === 'hidden' ? 'scale(.85) translateY(10px)' : 'none',
                transition: st === 'hidden' ? 'none' : `opacity .5s ease ${d}ms, transform .6s cubic-bezier(.2,.9,.3,1.3) ${d}ms`,
              }}>
                {st === 'active' && <rect x={n.x - 6} y={n.y - 6} width={NW + 12} height={NH + 12} rx="10" fill="none" stroke={ORANGE} className="ail-flow-halo" />}
                <rect x={n.x} y={n.y} width={NW} height={NH} rx="6"
                  fill={st === 'active' ? 'rgba(255,103,0,.12)' : '#121212'}
                  stroke={stroke} strokeOpacity={st === 'past' ? 0.5 : 1} strokeWidth="1.5"
                  style={{ transition: 'fill .4s ease, stroke .4s ease', filter: st === 'active' ? 'drop-shadow(0 0 14px rgba(255,103,0,.45))' : 'none' }} />
                <text x={n.x + 14} y={n.y + 24} className="ail-flow-t-num" fill={stroke} fillOpacity={st === 'past' ? 0.7 : 1}>{String(i + 1).padStart(2, '0')} · {s.tag}</text>
                <text x={n.x + 14} y={n.y + 50} className="ail-flow-t-label" fill={st === 'past' ? '#A8A8A8' : '#F5F5F5'}>{n.label}</text>
                <text x={n.x + 14} y={n.y + 68} className="ail-flow-t-meta" style={{ opacity: st === 'hidden' ? 0 : 1, transition: `opacity .4s ease ${d + 180}ms` }}>{n.meta}</text>
              </g>
            );
          })}

          {/* Paso final: el sistema completo, con su resultado */}
          <g style={{ opacity: complete ? 1 : 0, transform: complete ? 'none' : 'translateY(-8px)', transition: 'opacity .6s ease, transform .6s ease' }}>
            <rect x={sx} y={sy} width={sw} height="78" rx="6" fill="rgba(60,232,176,.08)" stroke={MINT} strokeWidth="1" strokeDasharray="4 4" />
            <text x={sx + 20} y={sy + 26} className="ail-flow-t-num" fill={MINT}>✓ SISTEMA COMPLETO · OPERANDO 24/7</text>
            <text x={sx + 20} y={sy + 58} className="ail-flow-t-label" fill="#F5F5F5">−40 h/mes · errores &lt;1%</text>
          </g>
        </svg>

        <div className="ail-flow-foot">
          <span>entrada → ia → datos → respuesta → sistema → control</span>
          <span style={{ color: complete ? MINT : 'var(--gray-600)' }}>{complete ? '● en producción' : '○ construyendo…'}</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FlowDemo });
