const { Button, Card, Badge, Icon, Eyebrow, Stat, Switch, Tooltip } = window.AiLabDesignSystem_1d6ea7;

const PLANS = [
  { name: 'Diagnóstico', price: '$18,000', period: 'una vez', items: ['Sesión de 90 minutos', 'Mapa de procesos', 'Plan priorizado a 90 días'], featured: false },
  { name: 'Automatización', price: '$42,000', period: 'por flujo', items: ['Diagnóstico incluido', 'Implementación en n8n o Make', 'Menos de 48h por flujo', '30 días de soporte'], featured: true },
  { name: 'Agente de IA', price: 'A medida', period: 'proyecto', items: ['Agente con tu información', 'Integración a CRM / WhatsApp', 'Capacitación del equipo', 'Monitoreo mensual'], featured: false },
];

function ServicesScreen({ onCta }) {
  const [annual, setAnnual] = React.useState(false);
  const C = window.AILAB_CONTENT;
  return (
    <div>
      <Section tone="dark" style={{ padding: '96px 0' }}>
        <Eyebrow tone="inverse">Servicios</Eyebrow>
        <div style={{ marginTop: 24 }}>
          <StrokeHeading size="var(--text-60)" lines={[['Lo que hacemos'], ['y con ', { stroke: 'qué' }]]} />
        </div>
        <p style={{ marginTop: 32, font: 'var(--type-lead)', color: 'var(--gray-400)', maxWidth: '58ch' }}>
          Cinco frentes. Casi siempre empezamos por uno solo, el que más horas libera, y de ahí crecemos.
        </p>
      </Section>

      <Section style={{ padding: '96px 0' }}>
        <div style={{ display: 'grid', gap: 1, background: 'var(--border)' }}>
          {C.services.map((s) => (
            <div key={s.n} className="ail-g" style={{ background: 'var(--bg)', display: 'grid', gridTemplateColumns: '120px 1.2fr 1fr', gap: 48, padding: '48px 0' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 60, lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px var(--border-strong)' }}>{s.n}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Icon name={s.icon} size={24} style={{ color: 'var(--text-strong)' }} />
                  <h3 style={{ fontSize: 'var(--text-32)' }}>{s.title}</h3>
                </div>
                <p style={{ marginTop: 16, font: 'var(--type-lead)', color: 'var(--text-body)' }}>{s.line}</p>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 10, font: 'var(--type-body)', color: 'var(--text-muted)' }}>
                    <Icon name="check" size={16} style={{ color: 'var(--orange)', flex: 'none', marginTop: 5 }} />{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 48 }}>
          <span style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--text-muted)', marginRight: 16, alignSelf: 'center' }}>Stack habitual</span>
          {['n8n', 'Make', 'MCP', 'WhatsApp Business API', 'Supabase', 'Google Workspace', 'CRM / ERP', 'LLM'].map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
      </Section>

      <Section tone="subtle" style={{ padding: '96px 0 64px' }}>
        <SectionHead eyebrow="Precios" title="Alcances claros, sin retainers eternos" lead="Los precios son en pesos mexicanos e incluyen implementación. Sin costo por licencia oculta." />
        <div style={{ marginTop: 32 }}><Switch label="Ver con mantenimiento anual" checked={annual} onChange={setAnnual} /></div>
        <div className="ail-g" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 48 }}>
          {PLANS.map((p) => (
            <Card key={p.name} padding="32px" tone={p.featured ? 'inverse' : 'default'} style={p.featured ? { borderColor: 'var(--orange)' } : undefined}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: 'var(--text-24)', color: p.featured ? '#F5F5F5' : 'var(--text-strong)' }}>{p.name}</h3>
                {p.featured && <Badge tone="solid">Más pedido</Badge>}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 32 }}>
                <span style={{ font: 'var(--type-mono)', fontWeight: 700, fontSize: 'var(--text-32)', color: p.featured ? 'var(--orange)' : 'var(--text-strong)' }}>{p.price}</span>
                <span style={{ font: 'var(--type-small)', color: p.featured ? 'var(--gray-500)' : 'var(--text-muted)' }}>/ {p.period}</span>
              </div>
              {annual && <div style={{ marginTop: 12, font: 'var(--type-mono)', fontSize: 'var(--text-11)', color: p.featured ? 'var(--gray-400)' : 'var(--text-muted)' }}>+ $6,400 / mes de mantenimiento</div>}
              <ul style={{ listStyle: 'none', margin: '32px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.items.map((i) => (
                  <li key={i} style={{ display: 'flex', gap: 12, font: 'var(--type-body)', color: p.featured ? 'var(--gray-400)' : 'var(--text-body)' }}>
                    <Icon name="check" size={20} style={{ color: 'var(--orange)' }} />{i}
                  </li>
                ))}
              </ul>
              <Button variant={p.featured ? 'accent' : 'secondary'} fullWidth style={{ marginTop: 32, ...(p.featured ? {} : {}) }} onClick={onCta}>Empezar</Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Cómo trabajamos" title="Qué entregamos en cada proyecto" />
        <div className="ail-g" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 64 }}>
          {[['file-text', 'Mapa del proceso', 'Un documento con el flujo actual, el flujo propuesto y las horas que libera.'],
            ['plug', 'Integraciones probadas', 'Cada conexión queda documentada con su usuario, su alerta y su plan B.'],
            ['gauge', 'Tablero de resultados', 'Horas ahorradas, tareas ejecutadas y errores evitados, semana a semana.'],
            ['graduation-cap', 'Sesión de traspaso', 'Dos horas grabadas con tu equipo para operar y ajustar sin nosotros.']].map(([icon, t, b]) => (
            <Card key={t} padding="32px" style={{ display: 'flex', gap: 24 }}>
              <Icon name={icon} size={24} style={{ color: 'var(--text-strong)' }} />
              <div><h4 style={{ fontSize: 'var(--text-18)' }}>{t}</h4><p style={{ marginTop: 8, font: 'var(--type-body)', color: 'var(--text-body)' }}>{b}</p></div>
            </Card>
          ))}
        </div>
        <div className="ail-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: 96, marginTop: 96, paddingTop: 48, borderTop: '1px solid var(--border)' }}>
          <Stat hero value="&lt; 48h" label="Por flujo implementado" />
          <Stat value="30 días" label="Soporte incluido" />
          <Stat value="2 h" label="Sesión de traspaso" />
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { ServicesScreen });
