const { Button, Card, Badge, Tag, Icon, Eyebrow, Input, Select, Switch, Checkbox, Tabs } = window.AiLabDesignSystem_1d6ea7;

function DeliverablesTable({ rows, showProject = false }) {
  const cell = { padding: '16px 16px 16px 0', borderBottom: '1px solid var(--border)', font: 'var(--type-body)', color: 'var(--text-body)', textAlign: 'left', verticalAlign: 'top' };
  const head = { ...cell, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', paddingTop: 0, borderBottom: '1px solid var(--border-strong)' };
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead><tr>
        <th style={head}>Entregable</th>
        {showProject && <th style={head}>Proyecto</th>}
        <th style={head}>Tipo</th><th style={head}>Fase</th><th style={head}>Fecha</th><th style={{ ...head, textAlign: 'right', paddingRight: 0 }}>Acción</th>
      </tr></thead>
      <tbody>
        {rows.map((d, i) => (
          <tr key={i}>
            <td style={{ ...cell, fontWeight: 500, color: 'var(--text-strong)' }}>{d.name}</td>
            {showProject && <td style={{ ...cell, color: 'var(--text-muted)' }}>{d.project}</td>}
            <td style={cell}><Tag>{d.type}</Tag></td>
            <td style={{ ...cell, font: 'var(--type-mono)', fontSize: 'var(--text-13)' }}>{String(d.phase).padStart(2, '0')}</td>
            <td style={{ ...cell, color: 'var(--text-muted)' }}>{d.date}</td>
            <td style={{ ...cell, textAlign: 'right', paddingRight: 0 }}>
              <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, font: 'var(--type-small)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>
                {d.action} <Icon name="arrow-down-to-line" size={14} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ActivityFeed({ items }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {items.map((a, i) => (
        <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 20, paddingBottom: i === items.length - 1 ? 0 : 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: 32, height: 32, flex: 'none', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}><Icon name={a.icon} size={14} /></div>
            {i < items.length - 1 && <div style={{ flex: 1, width: 1, background: 'var(--border)' }}></div>}
          </div>
          <div style={{ paddingTop: 6 }}>
            <div style={{ font: 'var(--type-body)', color: 'var(--text-strong)' }}>{a.text}</div>
            <div style={{ marginTop: 4, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{a.date} · 2026{a.project ? ' · ' + a.project : ''}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function DeliverablesScreen() {
  const D = window.PORTAL_DATA;
  const [filter, setFilter] = React.useState('Todos');
  const all = D.projects.flatMap((p) => p.deliverables.map((d) => ({ ...d, project: p.name })));
  const rows = filter === 'Todos' ? all : all.filter((d) => d.type === filter);
  return (
    <PortalPage>
      <PageHead eyebrow="Archivo" title="Entregables" lead="Todo lo que hemos entregado, con fecha y acceso directo." />
      <div style={{ display: 'flex', gap: 8, margin: '32px 0 32px' }}>
        {['Todos', 'Documento', 'Automatización', 'Manual'].map((t) => <Tag key={t} selected={filter === t} onSelect={() => setFilter(t)}>{t}</Tag>)}
      </div>
      <DeliverablesTable rows={rows} showProject />
    </PortalPage>
  );
}

function ActivityScreen() {
  const D = window.PORTAL_DATA;
  const items = D.projects.flatMap((p) => p.activity.map((a) => ({ ...a, project: p.name })));
  return (
    <PortalPage>
      <PageHead eyebrow="Bitácora" title="Actividad" lead="Cada movimiento en tus proyectos, del más reciente al más antiguo." />
      <div style={{ marginTop: 40, maxWidth: 760 }}><ActivityFeed items={items} /></div>
    </PortalPage>
  );
}

function SupportScreen({ onSent }) {
  const [topic, setTopic] = React.useState('');
  return (
    <PortalPage>
      <PageHead eyebrow="Soporte" title="¿En qué te ayudamos?" lead="Respondemos en horario hábil, normalmente el mismo día." />
      <div className="ail-g" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[['message-circle', 'WhatsApp', 'Lo más rápido para dudas de operación.', 'Abrir WhatsApp'],
            ['mail', 'Correo', 'hola@ailabschool.com · respuesta en menos de 24h', 'Escribir correo'],
            ['calendar', 'Videollamada', 'Agenda 30 minutos con tu consultor.', 'Ver horarios']].map(([icon, t, b, cta]) => (
            <Card key={t} padding="24px" style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <div style={{ width: 44, height: 44, flex: 'none', background: 'var(--gray-1000)', color: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={20} /></div>
              <div style={{ marginRight: 'auto' }}>
                <div style={{ font: 'var(--type-body)', fontWeight: 600 }}>{t}</div>
                <div style={{ marginTop: 2, font: 'var(--type-small)', color: 'var(--text-muted)' }}>{b}</div>
              </div>
              <Button variant="secondary" size="sm">{cta}</Button>
            </Card>
          ))}
        </div>
        <Card padding="32px">
          <h2 style={{ fontSize: 'var(--text-20)' }}>Levantar un ticket</h2>
          <form onSubmit={(e) => { e.preventDefault(); onSent(); }} style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Select label="Proyecto" options={window.PORTAL_DATA.projects.map((p) => p.name)} />
            <Select label="Tipo" options={['Algo no está funcionando', 'Duda de uso', 'Solicitud de cambio', 'Otro']} />
            <Input label="Asunto" placeholder="El agente no responde fuera de horario" value={topic} onChange={(e) => setTopic(e.target.value)} required />
            <Button variant="accent" fullWidth type="submit">Enviar ticket</Button>
          </form>
        </Card>
      </div>
    </PortalPage>
  );
}

function AccountScreen({ onSaved }) {
  const D = window.PORTAL_DATA;
  const [notif, setNotif] = React.useState(true);
  const [weekly, setWeekly] = React.useState(false);
  const cell = { padding: '16px 16px 16px 0', borderBottom: '1px solid var(--border)', font: 'var(--type-body)', color: 'var(--text-body)', textAlign: 'left' };
  return (
    <PortalPage>
      <PageHead eyebrow="Cuenta" title={D.client.name} lead="Datos de la empresa y accesos al portal."
        action={<Button variant="accent" onClick={onSaved}>Guardar cambios</Button>} />
      <div className="ail-g" style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <Eyebrow>Datos de la empresa</Eyebrow>
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Input label="Razón social" defaultValue={D.client.name} />
            <Input label="RFC" defaultValue={D.client.rfc} />
            <Input label="Contacto principal" defaultValue={D.client.contact} />
            <Input label="Correo" defaultValue={D.client.email} />
          </div>
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Eyebrow>Notificaciones</Eyebrow>
            <Switch label="Avisarme cuando haya un entregable nuevo" checked={notif} onChange={setNotif} />
            <Switch label="Resumen semanal por correo" checked={weekly} onChange={setWeekly} />
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Eyebrow>Usuarios con acceso</Eyebrow>
            <Button variant="secondary" size="sm" iconLeft={<Icon name="plus" size={14} />}>Invitar</Button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 24 }}>
            <tbody>
              {D.users.map((u) => (
                <tr key={u.email}>
                  <td style={{ ...cell, fontWeight: 500, color: u.active ? 'var(--text-strong)' : 'var(--text-muted)' }}>
                    {u.name}
                    <div style={{ marginTop: 2, font: 'var(--type-small)', fontWeight: 400, color: 'var(--text-muted)' }}>{u.email}</div>
                  </td>
                  <td style={{ ...cell, textAlign: 'right' }}>{u.active ? <Tag>{u.role}</Tag> : <Badge tone="accent">Pendiente</Badge>}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <Eyebrow>Plan</Eyebrow>
            <p style={{ marginTop: 16, font: 'var(--type-body)', color: 'var(--text-body)' }}>{D.client.plan}</p>
            <p style={{ marginTop: 8, font: 'var(--type-small)', color: 'var(--text-muted)' }}>Facturación mensual · siguiente corte 30 sep 2026</p>
          </div>
        </div>
      </div>
    </PortalPage>
  );
}

Object.assign(window, { DeliverablesTable, ActivityFeed, DeliverablesScreen, ActivityScreen, SupportScreen, AccountScreen });
