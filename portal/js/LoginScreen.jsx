const { Button, Card, Input, Checkbox, Icon, Eyebrow, Badge } = window.AiLabDesignSystem_1d6ea7;

function LoginScreen({ onLogin, notice }) {
  const [mode, setMode] = React.useState('password');
  const [email, setEmail] = React.useState('ana@distnorte.mx');
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (mode === 'magic') { setSent(true); } else { onLogin(); } };
  return (
    <div className="ail-g ail-login" style={{ minHeight: '100vh', background: '#0D0D0D', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div className="ail-login-brand" style={{ padding: '48px 64px', display: 'flex', flexDirection: 'column', borderRight: '1px solid var(--gray-800)' }}>
        <PortalWordmark size={20} />
        <div style={{ margin: 'auto 0', maxWidth: 420 }}>
          <h1 style={{ fontSize: 'var(--text-44)', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Tu proyecto,<br /><span style={{ color: 'transparent', WebkitTextStroke: '2px var(--orange)' }}>al día</span>
          </h1>
          <p style={{ marginTop: 24, font: 'var(--type-lead)', color: 'var(--gray-400)' }}>
            Fase actual, entregables y lo que sigue. Sin pedir reportes por WhatsApp.
          </p>
          <ul style={{ listStyle: 'none', margin: '48px 0 0', padding: '32px 0 0', borderTop: '1px solid var(--gray-800)', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {['Avance por fase actualizado automáticamente', 'Todos tus entregables en un solo lugar', 'Bitácora de lo que hemos hecho esta semana'].map((t) => (
              <li key={t} style={{ display: 'flex', gap: 12, font: 'var(--type-body)', color: 'var(--gray-400)' }}>
                <Icon name="check" size={18} style={{ color: 'var(--orange)', flex: 'none', marginTop: 4 }} />{t}
              </li>
            ))}
          </ul>
        </div>
        <span style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gray-600)' }}>portal.ailabschool.com</span>
      </div>
      <div className="ail-login-form" style={{ background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 64 }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          {notice && (
            <div style={{ marginBottom: 24, padding: '12px 16px', border: '1px solid var(--orange)', background: 'var(--orange-muted)', font: 'var(--type-small)', color: 'var(--text-strong)' }}>
              Inicia sesión para ver tu proyecto.
            </div>
          )}
          <Eyebrow>Acceso de clientes</Eyebrow>
          <h2 style={{ marginTop: 12, fontSize: 'var(--text-32)' }}>Iniciar sesión</h2>
          {sent ? (
            <div style={{ marginTop: 32 }}>
              <Card padding="24px" tone="subtle">
                <div style={{ display: 'flex', gap: 12 }}>
                  <Icon name="mail-check" size={20} style={{ color: 'var(--orange)', flex: 'none', marginTop: 2 }} />
                  <div>
                    <div style={{ font: 'var(--type-body)', fontWeight: 600 }}>Enlace enviado</div>
                    <p style={{ marginTop: 6, font: 'var(--type-small)', color: 'var(--text-muted)' }}>Revisa {email}. El enlace expira en 15 minutos.</p>
                  </div>
                </div>
              </Card>
              <div style={{ marginTop: 24 }}><Button variant="primary" fullWidth onClick={onLogin}>Simular clic en el enlace</Button></div>
            </div>
          ) : (
            <form onSubmit={submit} style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Input label="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              {mode === 'password' && <Input label="Contraseña" type="password" defaultValue="••••••••" required />}
              <Button variant="accent" size="lg" fullWidth type="submit">{mode === 'password' ? 'Entrar' : 'Enviar enlace de acceso'}</Button>
              <button type="button" onClick={() => setMode(mode === 'password' ? 'magic' : 'password')} style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'var(--type-small)', color: 'var(--text-accent)', textDecoration: 'underline' }}>
                {mode === 'password' ? 'Prefiero un enlace por correo' : 'Prefiero usar contraseña'}
              </button>
            </form>
          )}
          <p style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)', font: 'var(--type-small)', color: 'var(--text-muted)' }}>
            ¿Aún no eres cliente? <a href="../index.html" style={{ color: 'var(--text-accent)' }}>Agenda un diagnóstico</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen });
