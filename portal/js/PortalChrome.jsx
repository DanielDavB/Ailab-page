const { Button, Icon, Badge, Eyebrow } = window.AiLabDesignSystem_1d6ea7;

const PORTAL_NAV = [
  { id: 'dashboard', label: 'Mis proyectos' },
  { id: 'entregables', label: 'Entregables' },
  { id: 'actividad', label: 'Actividad' },
  { id: 'soporte', label: 'Soporte' },
];

function PortalWordmark({ size = 16 }) {
  return (
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: size, letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#FFFFFF' }}>
      Ai<span style={{ color: 'var(--orange)' }}>Lab</span>
    </span>
  );
}

function PortalHeader({ route, onNavigate, onLogout }) {
  const D = window.PORTAL_DATA;
  const [menu, setMenu] = React.useState(false);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: '#0D0D0D', borderBottom: '1px solid var(--gray-800)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', height: 64, display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <PortalWordmark />
          <span style={{ width: 1, height: 16, background: 'var(--gray-700)' }}></span>
          <span style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gray-500)' }}>Portal</span>
        </div>
        <nav style={{ display: 'flex', gap: 28, marginRight: 'auto' }}>
          {PORTAL_NAV.map((n) => (
            <button key={n.id} onClick={() => onNavigate(n.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-11)', fontWeight: 600, letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase',
              color: route === n.id || (route === 'proyecto' && n.id === 'dashboard') ? '#FFFFFF' : 'var(--gray-500)',
              borderBottom: `1px solid ${route === n.id || (route === 'proyecto' && n.id === 'dashboard') ? 'var(--orange)' : 'transparent'}`,
              transition: 'var(--transition-base)',
            }}>{n.label}</button>
          ))}
        </nav>
        <div style={{ position: 'relative' }}>
          <button onClick={() => setMenu(!menu)} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <span style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', font: 'var(--type-small)', fontWeight: 600, color: '#F5F5F5' }}>{D.client.contact}</span>
              <span style={{ display: 'block', font: 'var(--type-mono)', fontSize: 'var(--text-11)', color: 'var(--gray-500)' }}>{D.client.name}</span>
            </span>
            <span style={{ width: 36, height: 36, background: 'var(--orange)', color: '#0D0D0D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13 }}>{D.client.initials}</span>
          </button>
          {menu && (
            <div style={{ position: 'absolute', right: 0, top: 52, minWidth: 200, background: '#111111', border: '1px solid var(--gray-800)', zIndex: 30 }}>
              {[['Cuenta', () => { setMenu(false); onNavigate('cuenta'); }], ['Cerrar sesión', () => { setMenu(false); onLogout(); }]].map(([label, fn]) => (
                <button key={label} onClick={fn} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '14px 16px', background: 'none', border: 'none', borderBottom: '1px solid var(--gray-900)', cursor: 'pointer', font: 'var(--type-small)', color: 'var(--gray-300)' }}>{label}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function PortalPage({ children }) {
  return <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 40px 96px' }}>{children}</div>;
}

function PageHead({ eyebrow, title, lead, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ marginTop: 12, fontSize: 'var(--text-44)' }}>{title}</h1>
        {lead && <p style={{ marginTop: 12, font: 'var(--type-body)', color: 'var(--text-muted)' }}>{lead}</p>}
      </div>
      {action}
    </div>
  );
}

const STATUS_TONE = { 'A tiempo': 'neutral', 'En revisión': 'accent', 'Bloqueado': 'solid' };

function StatusPill({ status }) {
  return <Badge tone={STATUS_TONE[status] || 'neutral'}>{status}</Badge>;
}

function Progress({ value, dark = false }) {
  return (
    <div style={{ height: 4, background: dark ? 'var(--gray-800)' : 'var(--border)' }}>
      <div style={{ width: value + '%', height: '100%', background: 'var(--orange)' }}></div>
    </div>
  );
}

/** Vertical 5-phase timeline for one project. */
function PhaseTimeline({ project, compact = false }) {
  const D = window.PORTAL_DATA;
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {D.phases.map((label, i) => {
        const d = project.phaseDetail[i];
        const done = d.state === 'done', current = d.state === 'current';
        return (
          <li key={label} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 20, position: 'relative', paddingBottom: i === 4 ? 0 : 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 32, height: 32, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: done ? 'var(--gray-1000)' : (current ? 'var(--orange)' : 'var(--bg)'),
                border: `1px solid ${done ? 'var(--gray-1000)' : (current ? 'var(--orange)' : 'var(--border-strong)')}`,
                color: done ? '#F5F5F5' : (current ? '#0D0D0D' : 'var(--text-muted)'),
                fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 12,
              }}>{done ? <Icon name="check" size={14} /> : String(i + 1).padStart(2, '0')}</div>
              {i < 4 && <div style={{ flex: 1, width: 1, background: done ? 'var(--gray-1000)' : 'var(--border)' }}></div>}
            </div>
            <div style={{ paddingTop: 4 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span style={{ font: 'var(--type-body)', fontWeight: 600, color: current || done ? 'var(--text-strong)' : 'var(--text-muted)' }}>{label}</span>
                <span style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: current ? 'var(--text-accent)' : 'var(--text-muted)' }}>{d.date}</span>
              </div>
              {!compact && <p style={{ marginTop: 6, font: 'var(--type-small)', color: 'var(--text-body)' }}>{d.note}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

Object.assign(window, { PortalWordmark, PortalHeader, PortalPage, PageHead, StatusPill, Progress, PhaseTimeline });
