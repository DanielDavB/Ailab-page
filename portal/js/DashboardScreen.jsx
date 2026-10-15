const { Button, Card, Badge, Tag, Icon, Eyebrow, Stat, Tabs } = window.AiLabDesignSystem_1d6ea7;

function DashboardScreen({ onOpen, onNavigate }) {
  const D = window.PORTAL_DATA;
  const totalDeliverables = D.projects.reduce((n, p) => n + p.deliverables.length, 0);
  return (
    <PortalPage>
      <PageHead eyebrow={D.client.name} title={'Hola, ' + D.client.contact.split(' ')[0]} lead="Esto es lo que está pasando con tus proyectos ahora mismo."
        action={<Button variant="secondary" onClick={() => onNavigate('soporte')} iconLeft={<Icon name="message-circle" size={16} />}>Soporte</Button>} />

      <div className="ail-g2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, background: 'var(--border)', marginTop: 32, border: '1px solid var(--border)' }}>
        {[['2', 'Proyectos activos'], [String(totalDeliverables), 'Entregables recibidos'], ['12 sep', 'Próxima entrega'], ['1', 'Pendiente de tu lado']].map(([v, l]) => (
          <div key={l} style={{ background: 'var(--bg)', padding: 24 }}>
            <div style={{ font: 'var(--type-mono)', fontWeight: 700, fontSize: 'var(--text-32)', color: 'var(--text-strong)' }}>{v}</div>
            <div style={{ marginTop: 6, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 24 }}>
        {D.projects.map((p) => (
          <Card key={p.id} interactive padding="32px" onClick={() => onOpen(p.id)}>
            <div className="ail-g" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48, alignItems: 'start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <h2 style={{ fontSize: 'var(--text-24)' }}>{p.name}</h2>
                  <StatusPill status={p.status} />
                </div>
                <p style={{ marginTop: 12, font: 'var(--type-body)', color: 'var(--text-body)', maxWidth: '58ch' }}>{p.summary}</p>
                <div style={{ marginTop: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
                    <span>Fase {String(p.phase).padStart(2, '0')} · {D.phases[p.phase - 1]}</span>
                    <span>{p.progress}%</span>
                  </div>
                  <Progress value={p.progress} />
                </div>
                <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8, font: 'var(--type-small)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>
                  Ver proyecto <Icon name="arrow-right" size={16} />
                </div>
              </div>
              <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[['Próxima entrega', p.next], ['Fecha', p.nextDate], ['Inició', p.started]].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{k}</div>
                    <div style={{ marginTop: 4, font: 'var(--type-body)', fontWeight: 500, color: 'var(--text-strong)' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="ail-g" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
            <Eyebrow>Actividad reciente</Eyebrow>
            <button onClick={() => onNavigate('actividad')} style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'var(--type-small)', color: 'var(--text-accent)' }}>Ver todo</button>
          </div>
          <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {D.projects[0].activity.slice(0, 4).map((a) => (
              <li key={a.text} style={{ display: 'flex', gap: 16 }}>
                <Icon name={a.icon} size={18} style={{ color: 'var(--text-muted)', flex: 'none', marginTop: 2 }} />
                <div>
                  <div style={{ font: 'var(--type-body)', color: 'var(--text-body)' }}>{a.text}</div>
                  <div style={{ marginTop: 2, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{a.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Card padding="32px" tone="inverse">
          <Eyebrow tone="inverse">Pendiente de tu lado</Eyebrow>
          <h3 style={{ marginTop: 16, fontSize: 'var(--text-24)', color: '#F5F5F5' }}>Aprobar la arquitectura de conciliación de facturas</h3>
          <p style={{ marginTop: 12, font: 'var(--type-small)', color: 'var(--gray-400)' }}>Enviada el 3 de septiembre. Sin tu visto bueno no arrancamos la construcción.</p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
            <Button variant="accent" onClick={() => onOpen('facturas')}>Revisar</Button>
            <Button variant="secondary" style={{ color: '#F5F5F5', borderColor: 'var(--gray-600)' }} onClick={() => onNavigate('soporte')}>Tengo dudas</Button>
          </div>
        </Card>
      </div>
    </PortalPage>
  );
}

function ProjectScreen({ id, onBack, onNavigate }) {
  const D = window.PORTAL_DATA;
  const p = D.projects.find((x) => x.id === id) || D.projects[0];
  const [tab, setTab] = React.useState('Avance');
  return (
    <PortalPage>
      <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
        <Icon name="arrow-left" size={14} /> Mis proyectos
      </button>
      <div className="ail-stack" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, paddingBottom: 32, borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Eyebrow>Fase {String(p.phase).padStart(2, '0')} · {D.phases[p.phase - 1]}</Eyebrow>
            <StatusPill status={p.status} />
          </div>
          <h1 style={{ marginTop: 12, fontSize: 'var(--text-44)', maxWidth: '20ch' }}>{p.name}</h1>
          <p style={{ marginTop: 12, font: 'var(--type-body)', color: 'var(--text-muted)', maxWidth: '62ch' }}>{p.summary}</p>
        </div>
        <div style={{ minWidth: 260 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
            <span>Avance</span><span>{p.progress}%</span>
          </div>
          <Progress value={p.progress} />
          <div style={{ marginTop: 16, font: 'var(--type-small)', color: 'var(--text-body)' }}>Próxima entrega · <strong>{p.next}</strong>, {p.nextDate}</div>
        </div>
      </div>

      <div style={{ marginTop: 32 }}>
        <Tabs tabs={['Avance', 'Entregables', 'Actividad']} value={tab} onChange={setTab} />
      </div>

      {tab === 'Avance' && (
        <div className="ail-g" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'start' }}>
          <PhaseTimeline project={p} />
          <Card padding="28px" tone="subtle">
            <Eyebrow marker={false}>Entregables de esta fase</Eyebrow>
            <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {p.deliverables.filter((d) => d.phase === p.phase).map((d) => (
                <li key={d.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Icon name="file-text" size={18} style={{ color: 'var(--text-muted)', flex: 'none', marginTop: 2 }} />
                  <div>
                    <div style={{ font: 'var(--type-body)', fontWeight: 500 }}>{d.name}</div>
                    <button style={{ marginTop: 4, background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'var(--type-small)', color: 'var(--text-accent)' }}>{d.action}</button>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
              <Button variant="secondary" fullWidth onClick={() => onNavigate('soporte')}>Preguntar sobre esta fase</Button>
            </div>
          </Card>
        </div>
      )}

      {tab === 'Entregables' && <div style={{ marginTop: 40 }}><DeliverablesTable rows={p.deliverables.map((d) => ({ ...d, project: p.name }))} /></div>}

      {tab === 'Actividad' && (
        <div style={{ marginTop: 40, maxWidth: 720 }}><ActivityFeed items={p.activity} /></div>
      )}
    </PortalPage>
  );
}

Object.assign(window, { DashboardScreen, ProjectScreen });
