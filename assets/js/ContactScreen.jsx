const { Button, Card, Input, Select, Checkbox, Radio, Icon, Eyebrow, Stat, Badge } = window.AiLabDesignSystem_1d6ea7;

const SLOTS = ['Jue 10 · 10:00', 'Jue 10 · 16:00', 'Vie 11 · 09:30', 'Vie 11 · 13:00', 'Lun 14 · 11:00', 'Lun 14 · 17:00'];

function ContactScreen({ onSubmit }) {
  const [slot, setSlot] = React.useState(SLOTS[1]);
  const [ok, setOk] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const submit = (e) => {
    e.preventDefault();
    onSubmit((email || 'tu correo') + ' · ' + slot);
  };
  return (
    <Section style={{ padding: '96px 0 120px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'start' }}>
        <div>
          <SectionHead eyebrow="Agenda tu diagnóstico" title="90 minutos, sin costo, sin venta dura" lead="Revisamos tus procesos actuales y te devolvemos un plan priorizado en menos de 48 horas." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 48, paddingTop: 48, borderTop: '1px solid var(--border)' }}>
            {[['clock', 'Sesión de 90 minutos por videollamada'], ['file-text', 'Plan escrito priorizado a 90 días'], ['shield-check', 'Tus datos no se comparten con terceros']].map(([i, t]) => (
              <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'center', font: 'var(--type-body)', color: 'var(--text-body)' }}>
                <Icon name={i} size={20} style={{ color: 'var(--text-accent)' }} />{t}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 64, marginTop: 64 }}>
            <Stat hero value="&lt; 24h" label="Tiempo de respuesta" />
            <Stat value="120+" label="Diagnósticos hechos" />
          </div>
        </div>
        <Card padding="40px">
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Input label="Nombre" placeholder="Ana Ruiz" required />
              <Input label="Empresa" placeholder="Distribuidora del Norte" />
            </div>
            <Input label="Correo de trabajo" type="email" placeholder="nombre@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} hint="Respondemos en menos de 24 horas" required />
            <Select label="¿Qué te gustaría automatizar?" options={['Atención por WhatsApp', 'Cotizaciones y pedidos', 'Seguimiento a clientes', 'Administración y facturas', 'Aún no lo sé']} />
            <div>
              <div style={{ font: 'var(--type-label)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>Elige horario</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                {SLOTS.map((s) => (
                  <button key={s} type="button" onClick={() => setSlot(s)} style={{
                    padding: '12px 8px', cursor: 'pointer', borderRadius: 2,
                    font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
                    background: slot === s ? 'var(--gray-1000)' : 'var(--bg)', color: slot === s ? '#F5F5F5' : 'var(--text-body)',
                    border: `1px solid ${slot === s ? 'var(--gray-1000)' : 'var(--border)'}`, transition: 'var(--transition-base)',
                  }}>{s}</button>
                ))}
              </div>
            </div>
            <Checkbox checked={ok} onChange={setOk} label="Acepto el aviso de privacidad" description="Solo usamos tus datos para agendar el diagnóstico" />
            <Button variant="accent" size="lg" fullWidth type="submit" disabled={!ok}>Agenda tu diagnóstico</Button>
            <div style={{ display: 'flex', justifyContent: 'center' }}><Badge tone="accent">Respuesta en &lt; 24h</Badge></div>
          </form>
        </Card>
      </div>
    </Section>
  );
}

Object.assign(window, { ContactScreen });
