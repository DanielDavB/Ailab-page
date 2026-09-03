/* Motion helpers for the AiLab landing. Respects prefers-reduced-motion. */
const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Interactive AI/comms network: nodes drift, link when close, and react to the cursor. */
function NetworkBg({ density = 0.00009, color = '255,103,0' }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    let raf, w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999, active: false };
    let nodes = [];

    const build = () => {
      const count = Math.max(28, Math.min(90, Math.round(w * h * density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 0.9, pulse: Math.random() * Math.PI * 2,
      }));
    };
    const resize = () => {
      const rect = parent.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const LINK = 150, PULL = 190;
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x)); n.y = Math.max(0, Math.min(h, n.y));
        if (mouse.active) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.hypot(dx, dy);
          if (d < PULL && d > 0.001) {
            const f = (1 - d / PULL) * 0.035;
            n.vx += (dx / d) * f; n.vy += (dy / d) * f;
          }
        }
        const sp = Math.hypot(n.vx, n.vy);
        if (sp > 0.55) { n.vx *= 0.94; n.vy *= 0.94; }
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const near = mouse.active && (Math.hypot(mouse.x - (a.x + b.x) / 2, mouse.y - (a.y + b.y) / 2) < 170);
            ctx.strokeStyle = near ? 'rgba(' + color + ',' + (0.5 * (1 - d / LINK)).toFixed(3) + ')' : 'rgba(255,255,255,' + (0.13 * (1 - d / LINK)).toFixed(3) + ')';
            ctx.lineWidth = near ? 1 : 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        n.pulse += 0.02;
        const near = mouse.active && Math.hypot(mouse.x - n.x, mouse.y - n.y) < 170;
        const glow = 0.55 + Math.sin(n.pulse) * 0.25;
        ctx.fillStyle = near ? 'rgba(' + color + ',' + Math.min(1, glow + 0.35).toFixed(3) + ')' : 'rgba(216,216,216,' + (glow * 0.5).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + (near ? 1.2 : 0), 0, Math.PI * 2); ctx.fill();
        if (near) {
          ctx.strokeStyle = 'rgba(' + color + ',0.35)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 7, 0, Math.PI * 2); ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x > -60 && mouse.y > -60 && mouse.x < w + 60 && mouse.y < h + 60;
    };
    const onLeave = () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; };

    resize();
    const ro = new ResizeObserver(resize); ro.observe(parent);
    window.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    if (REDUCED) { ctx.clearRect(0, 0, w, h); draw(0); cancelAnimationFrame(raf); }
    else raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); window.removeEventListener('mousemove', onMove); parent.removeEventListener('mouseleave', onLeave); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
}

/** Fades + lifts children into view once. `delay` in ms, `from` = up | left | right | scale. */
function Reveal({ children, delay = 0, from = 'up', style, as: Tag = 'div' }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(REDUCED);
  React.useEffect(() => {
    if (REDUCED || !ref.current) return;
    let done = false;
    const show = () => { if (!done) { done = true; setSeen(true); } };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { show(); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(ref.current);
    /* Red de seguridad: si el observer no dispara (contenido ya visible al primer paint), revela igual. */
    const rafId = requestAnimationFrame(() => {
      const r = ref.current && ref.current.getBoundingClientRect();
      if (r && r.top < (window.innerHeight || 800) && r.bottom > 0) show();
    });
    const t = setTimeout(show, 700);
    return () => { io.disconnect(); cancelAnimationFrame(rafId); clearTimeout(t); };
  }, []);
  const hidden = { up: 'translateY(28px)', left: 'translateX(-28px)', right: 'translateX(28px)', scale: 'scale(0.97)' }[from];
  return (
    <Tag ref={ref} data-reveal="1" style={{
      opacity: seen ? 1 : 0,
      transform: seen ? 'none' : hidden,
      filter: seen ? 'none' : 'blur(6px)',
      transition: `opacity .7s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.7,.2,1) ${delay}ms, filter .7s ease ${delay}ms`,
      willChange: 'opacity, transform',
      ...style,
    }}>{children}</Tag>
  );
}

/** Staggers Reveal over a list of children. */
function RevealGroup({ children, step = 90, from = 'up', style }) {
  return (
    <div style={style}>
      {React.Children.map(children, (c, i) => <Reveal key={i} delay={i * step} from={from} style={{ display: 'contents' }}>{c}</Reveal>)}
    </div>
  );
}

/** Counts a numeric stat up when it scrolls into view. Keeps prefixes/suffixes ("+120", "3.2x", "48h"). */
function CountUp({ value, duration = 1200 }) {
  const ref = React.useRef(null);
  const [txt, setTxt] = React.useState(REDUCED ? value : null);
  React.useEffect(() => {
    if (REDUCED || !ref.current) return;
    const m = String(value).match(/^([^\d]*)([\d.]+)(.*)$/);
    if (!m) { setTxt(value); return; }
    const [, pre, numStr, post] = m;
    const target = parseFloat(numStr);
    const decimals = (numStr.split('.')[1] || '').length;
    setTxt(pre + (0).toFixed(decimals) + post);
    let started = false;
    const run = () => {
      if (started) return; started = true;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setTxt(pre + (target * eased).toFixed(decimals) + post);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      run();
    }, { threshold: 0.5 });
    io.observe(ref.current);
    const t = setTimeout(() => { io.disconnect(); run(); }, 900);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [value]);
  return <span ref={ref}>{txt === null ? value : txt}</span>;
}

/** Seamless horizontal marquee. Pauses on hover. */
function Marquee({ items, speed = 38 }) {
  const row = (key) => (
    <div key={key} aria-hidden={key === 'b'} style={{ display: 'flex', gap: 32, paddingRight: 32, flex: 'none' }}>
      {items.map((n) => (
        <span key={n} className="ail-marquee-item" style={{ font: 'var(--type-body)', fontWeight: 500, color: 'var(--gray-600)', whiteSpace: 'nowrap', transition: 'color .3s ease' }}>{n}</span>
      ))}
    </div>
  );
  return (
    <div className="ail-marquee" style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}>
      <div className="ail-marquee-track" style={{ display: 'flex', width: 'max-content', animation: REDUCED ? 'none' : `ail-marquee ${speed}s linear infinite` }}>
        {row('a')}{row('b')}
      </div>
    </div>
  );
}

/** Wraps a card so it lifts and its border warms on hover. */
function Lift({ children, y = 6 }) {
  const [on, setOn] = React.useState(false);
  return (
    <div onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)} style={{
      transform: on && !REDUCED ? `translateY(-${y}px)` : 'none',
      transition: 'transform .4s cubic-bezier(.2,.7,.2,1), box-shadow .4s ease',
      boxShadow: on ? '0 18px 40px -24px rgba(13,13,13,.45)' : 'none',
      height: '100%',
    }}>{children}</div>
  );
}

Object.assign(window, { NetworkBg, Reveal, RevealGroup, CountUp, Marquee, Lift, REDUCED });
