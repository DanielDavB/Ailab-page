const { Button, Icon, Eyebrow } = window.AiLabDesignSystem_1d6ea7;

const NAV = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'casos', label: 'Casos' },
  { id: 'metodologia', label: 'Metodología' },
  { id: 'academia', label: 'Academia' },
  { id: 'nosotros', label: 'Equipo' },
];

function Wordmark({ color = '#FFFFFF', size = 20 }) {
  return (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: size, letterSpacing: '-0.03em', textTransform: 'uppercase', color }}>
      Ai<span style={{ color: 'var(--orange)' }}>Lab</span>
    </span>
  );
}

function Header({ route, onNavigate, onCta, onLogin }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: '#0D0D0D', borderBottom: '1px solid var(--gray-800)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', height: 72, display: 'flex', alignItems: 'center', gap: 40 }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ border: 'none', display: 'inline-flex' }}><Wordmark /></a>
        <nav style={{ display: 'flex', gap: 28, marginRight: 'auto' }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => onNavigate(n.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-11)', fontWeight: 600,
              letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase',
              color: route === n.id ? '#FFFFFF' : 'var(--gray-500)',
              borderBottom: `1px solid ${route === n.id ? 'var(--orange)' : 'transparent'}`,
              transition: 'var(--transition-base)',
            }}
              onMouseEnter={(e) => { if (route !== n.id) e.currentTarget.style.color = '#D0D0D0'; }}
              onMouseLeave={(e) => { if (route !== n.id) e.currentTarget.style.color = 'var(--gray-500)'; }}
            >{n.label}</button>
          ))}
        </nav>
        <button onClick={onLogin} style={{
          background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-11)', fontWeight: 600, letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--gray-300)',
        }}><Icon name="lock" size={14} />Iniciar sesión</button>
        <Button variant="accent" size="sm" onClick={onCta} style={{ whiteSpace: 'nowrap' }}>Agendar diagnóstico</Button>
      </div>
    </header>
  );
}

function Footer({ onNavigate }) {
  const col = (title, items) => (
    <div key={title}>
      <Eyebrow tone="inverse" marker={false}>{title}</Eyebrow>
      <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([label, route]) => (
          <li key={label}>
            <button onClick={() => route && onNavigate(route)} style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: route ? 'pointer' : 'default', font: 'var(--type-small)', color: 'var(--gray-400)' }}>{label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer style={{ background: '#0D0D0D', color: 'var(--gray-400)', padding: '64px 0 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, paddingBottom: 48, borderBottom: '1px solid var(--gray-800)' }}>
          <div>
            <Wordmark />
            <p style={{ marginTop: 16, font: 'var(--type-body)', color: 'var(--gray-400)', maxWidth: '34ch' }}>
              Consultoría y automatización con IA para pequeñas y medianas empresas. Te lo construimos y te enseñamos a operarlo.
            </p>
            <p style={{ marginTop: 24, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gray-600)' }}>Durango, México · LATAM</p>
          </div>
          {col('Servicios', [['Agentes de IA', 'servicios'], ['Automatización de procesos', 'servicios'], ['Integraciones', 'servicios'], ['Capacitación de equipos', 'academia']])}
          {col('Empresa', [['Casos', 'casos'], ['Metodología', 'metodologia'], ['Academia', 'academia'], ['Equipo', 'nosotros']])}
          {col('Contacto', [['hola@ailabschool.com', null], ['Agendar diagnóstico', 'contacto'], ['Portal de clientes', 'login'], ['LinkedIn', null]])}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', color: 'var(--gray-600)' }}>
          <span>© 2026 AILAB · AILABSCHOOL.COM</span>
          <span style={{ display: 'flex', gap: 16 }}>
            <button onClick={() => onNavigate('privacidad')} style={{ background: 'none', border: 'none', color: 'var(--gray-600)', font: 'inherit', letterSpacing: 'inherit', cursor: 'pointer' }}>AVISO DE PRIVACIDAD</button>
            <span>DURANGO · REMOTO</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function Section({ children, tone = 'light', style, bg }) {
  return (
    <section style={{ background: tone === 'dark' ? '#0D0D0D' : (tone === 'subtle' ? 'var(--bg-subtle)' : 'var(--bg)'), padding: '120px 0', ...(bg ? { position: 'relative', overflow: 'hidden' } : null), ...style }}>
      {bg}
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)' }}>{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title, lead, tone = 'light', action }) {
  const dark = tone === 'dark';
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48 }}>
      <div style={{ maxWidth: '52ch' }}>
        <Eyebrow tone={dark ? 'inverse' : 'accent'}>{eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 16, fontSize: 'var(--text-44)', color: dark ? '#F5F5F5' : 'var(--text-strong)' }}>{title}</h2>
        {lead && <p style={{ marginTop: 24, font: 'var(--type-lead)', color: dark ? 'var(--gray-400)' : 'var(--text-body)' }}>{lead}</p>}
      </div>
      {action}
    </div>
  );
}

/** ALL-CAPS display line with one word rendered as orange outline. */
function StrokeHeading({ lines, size = 'var(--text-80)', color = '#FFFFFF' }) {
  return (
    <h1 style={{ fontSize: size, lineHeight: 1.02, letterSpacing: '-0.03em', textTransform: 'uppercase', color, margin: 0 }}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: 'block' }}>
          {line.map((part, j) => typeof part === 'string' ? part : (
            <span key={j} style={{ color: 'transparent', WebkitTextStroke: '2px var(--orange)' }}>{part.stroke}</span>
          ))}
        </span>
      ))}
    </h1>
  );
}

const PHASES = [
  { n: '01', title: 'Diagnóstico', body: 'Entendemos tu operación y dónde se pierde tiempo o dinero.', output: 'Mapa de oportunidades priorizado' },
  { n: '02', title: 'Diseño de la solución', body: 'Definimos qué se automatiza, con qué herramientas y qué sigue haciendo una persona.', output: 'Arquitectura y alcance por escrito' },
  { n: '03', title: 'Construcción', body: 'Entregas incrementales que ya puedes probar. No meses de silencio.', output: 'Automatización funcionando por partes' },
  { n: '04', title: 'Puesta en marcha', body: 'Salida controlada, monitoreo y tu equipo capacitado para operarlo.', output: 'Sistema en producción + equipo entrenado' },
  { n: '05', title: 'Acompañamiento', body: 'Ajustes, nuevas oportunidades y soporte continuo.', output: 'Mejora basada en uso real' },
];

function Roadmap({ tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: dark ? 'var(--gray-800)' : 'var(--border)' }}>
      {PHASES.map((p) => (
        <div key={p.n} style={{ background: dark ? '#0D0D0D' : 'var(--bg)', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 16, minHeight: 280 }}>
          <div style={{ font: 'var(--type-mono)', fontWeight: 700, fontSize: 'var(--text-32)', color: 'var(--orange)' }}>{p.n}</div>
          <h4 style={{ fontSize: 'var(--text-18)', color: dark ? '#F5F5F5' : 'var(--text-strong)' }}>{p.title}</h4>
          <p style={{ font: 'var(--type-small)', color: dark ? 'var(--gray-400)' : 'var(--text-body)', marginBottom: 'auto' }}>{p.body}</p>
          <div style={{ paddingTop: 16, borderTop: `1px solid ${dark ? 'var(--gray-800)' : 'var(--border)'}` }}>
            <div style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Output</div>
            <div style={{ marginTop: 6, font: 'var(--type-small)', fontWeight: 500, color: dark ? '#F5F5F5' : 'var(--text-strong)' }}>{p.output}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Wordmark, Header, Footer, Section, SectionHead, StrokeHeading, Roadmap, PHASES });
