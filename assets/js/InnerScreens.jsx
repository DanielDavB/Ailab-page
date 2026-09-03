const { Button, Card, Badge, Tag, Icon, Eyebrow, Stat } = window.AiLabDesignSystem_1d6ea7;

function MethodScreen({ onCta }) {
  return (
    <div>
      <Section tone="dark" style={{ padding: '96px 0' }}>
        <Eyebrow tone="inverse">Metodología</Eyebrow>
        <div style={{ marginTop: 24 }}>
          <StrokeHeading size="var(--text-60)" lines={[['Cinco fases,'], ['cinco ', { stroke: 'entregables' }]]} />
        </div>
        <p style={{ marginTop: 32, font: 'var(--type-lead)', color: 'var(--gray-400)', maxWidth: '58ch' }}>
          Cada fase termina con algo en tus manos: un documento, un flujo funcionando o tu equipo capacitado. Nunca con "seguimos trabajando en ello".
        </p>
      </Section>
      <Section>
        <Roadmap />
        <div style={{ marginTop: 96, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <Eyebrow>Cómo se siente</Eyebrow>
            <h2 style={{ marginTop: 16, fontSize: 'var(--text-32)' }}>Entregas cada semana, no cada trimestre</h2>
            <p style={{ marginTop: 20, font: 'var(--type-body)', color: 'var(--text-body)' }}>
              Trabajamos en incrementos que puedes probar. Si algo no sirve, lo sabes en la semana 2 y no en el mes 4. Todo el avance queda visible en tu portal de cliente.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 1, background: 'var(--border)' }}>
            {[['Diagnóstico entregado', '48 horas'], ['Primer flujo en producción', '2 semanas'], ['Equipo capacitado', 'Semana 6'], ['Revisión de resultados', 'Mensual']].map(([k, v]) => (
              <div key={k} style={{ background: 'var(--bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '20px 4px' }}>
                <span style={{ font: 'var(--type-body)', color: 'var(--text-body)' }}>{k}</span>
                <span style={{ font: 'var(--type-mono)', fontWeight: 700, fontSize: 'var(--text-18)', color: 'var(--text-strong)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="subtle" style={{ padding: '80px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <h2 style={{ fontSize: 'var(--text-32)', maxWidth: '24ch' }}>Empecemos por el diagnóstico. Sin costo la primera sesión.</h2>
          <Button variant="accent" size="lg" onClick={onCta} iconRight={<Icon name="arrow-right" size={20} />}>Agendar diagnóstico</Button>
        </div>
      </Section>
    </div>
  );
}

function AcademyScreen({ onCta }) {
  const C = window.AILAB_CONTENT;
  return (
    <div>
      <Section tone="dark" style={{ padding: '96px 0' }}>
        <Eyebrow tone="inverse">AiLabSchool</Eyebrow>
        <div style={{ marginTop: 24 }}>
          <StrokeHeading size="var(--text-60)" lines={[['Te lo construimos'], ['y te ', { stroke: 'enseñamos' }]]} />
        </div>
        <p style={{ marginTop: 32, font: 'var(--type-lead)', color: 'var(--gray-400)', maxWidth: '58ch' }}>
          Formación práctica para equipos de PyME: nada de teoría de IA, solo lo que van a usar el lunes en la mañana.
        </p>
      </Section>
      <Section>
        <SectionHead eyebrow="Programa" title="Cursos y talleres" lead="Se imparten en tu empresa o en línea. También abiertos a público general." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 64 }}>
          {C.courses.map((c) => (
            <Card key={c.title} padding="32px" style={{ display: 'flex', flexDirection: 'column' }}>
              <Tag>{c.format}</Tag>
              <h3 style={{ marginTop: 20, fontSize: 'var(--text-24)' }}>{c.title}</h3>
              <p style={{ marginTop: 12, font: 'var(--type-small)', color: 'var(--text-body)', marginBottom: 32 }}>{c.body}</p>
              <div style={{ marginTop: 'auto' }}><Button variant="secondary" fullWidth onClick={onCta}>Solicitar temario</Button></div>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="subtle">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <Eyebrow>Formato</Eyebrow>
            <h2 style={{ marginTop: 16, fontSize: 'var(--text-32)' }}>Capacitación incluida en cada proyecto</h2>
            <p style={{ marginTop: 20, font: 'var(--type-body)', color: 'var(--text-body)' }}>
              Toda implementación cierra con una sesión de traspaso: tu equipo aprende a operar el flujo, ajustarlo y detectar cuándo algo falla. Los manuales y videos quedan en tu portal.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[['Sesiones grabadas', 'Quedan disponibles para quien entre nuevo al equipo'], ['Manual por proceso', 'Paso a paso con capturas de tu propia herramienta'], ['Soporte 30 días', 'Dudas de operación resueltas por WhatsApp']].map(([t, b]) => (
              <div key={t} style={{ display: 'flex', gap: 16 }}>
                <Icon name="check" size={20} style={{ color: 'var(--orange)', flex: 'none', marginTop: 2 }} />
                <div>
                  <div style={{ font: 'var(--type-body)', fontWeight: 600, color: 'var(--text-strong)' }}>{t}</div>
                  <div style={{ marginTop: 4, font: 'var(--type-small)', color: 'var(--text-muted)' }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

function AboutScreen({ onCta }) {
  const C = window.AILAB_CONTENT;
  return (
    <div>
      <Section tone="dark" style={{ padding: '96px 0' }}>
        <Eyebrow tone="inverse">Nosotros</Eyebrow>
        <div style={{ marginTop: 24 }}>
          <StrokeHeading size="var(--text-60)" lines={[['Un equipo chico'], ['que ', { stroke: 'entrega' }]]} />
        </div>
        <p style={{ marginTop: 32, font: 'var(--type-lead)', color: 'var(--gray-400)', maxWidth: '58ch' }}>
          Desde Durango trabajamos con empresas de todo México y LATAM. Nos especializamos en negocios de 5 a 60 personas, donde el dueño todavía hace de todo.
        </p>
      </Section>
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, maxWidth: 860 }}>
          {C.team.map((m) => (
            <Card key={m.name} padding="32px">
              <div style={{ width: 88, height: 88, background: 'var(--gray-1000)', color: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28 }}>{m.initials}</div>
              <h3 style={{ marginTop: 24, fontSize: 'var(--text-24)' }}>{m.name}</h3>
              <div style={{ marginTop: 4, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{m.role}</div>
              <p style={{ marginTop: 16, font: 'var(--type-small)', color: 'var(--text-body)' }}>{m.line}</p>
              <div style={{ marginTop: 24 }}><Button variant="ghost" size="sm" iconRight={<Icon name="arrow-up-right" size={14} />}>LinkedIn</Button></div>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="subtle" style={{ padding: '80px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 48 }}>
          {[['Cómo cobramos', 'Por proyecto con alcance cerrado, no por hora. Sabes el total antes de empezar.'],
            ['Con quién trabajamos', 'PyMEs de 5 a 60 personas en retail, servicios, salud y distribución.'],
            ['Dónde estamos', 'Durango, México. Trabajamos en remoto con toda LATAM y presencial en la región.']].map(([t, b]) => (
            <div key={t}>
              <Eyebrow>{t}</Eyebrow>
              <p style={{ marginTop: 16, font: 'var(--type-body)', color: 'var(--text-body)' }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section style={{ padding: '80px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
          <h2 style={{ fontSize: 'var(--text-32)', maxWidth: '26ch' }}>¿Platicamos 90 minutos sobre tu operación?</h2>
          <Button variant="accent" size="lg" onClick={onCta} iconRight={<Icon name="arrow-right" size={20} />}>Agendar diagnóstico</Button>
        </div>
      </Section>
    </div>
  );
}

function PrivacyScreen() {
  const blocks = [
    ['Responsable', 'AiLab / AiLabSchool, con domicilio en Durango, México, es responsable del tratamiento de tus datos personales.'],
    ['Datos que recabamos', 'Nombre, empresa, cargo, correo electrónico y teléfono, proporcionados por ti al llenar el formulario de diagnóstico o al usar el portal de clientes.'],
    ['Finalidades', 'Contactarte para agendar el diagnóstico, dar seguimiento a tu proyecto, enviarte entregables y, si lo autorizas, compartirte contenido de AiLabSchool.'],
    ['Transferencias', 'No vendemos ni compartimos tus datos con terceros para fines comerciales. Utilizamos proveedores de infraestructura y comunicación que los procesan por nuestra cuenta.'],
    ['Derechos ARCO', 'Puedes acceder, rectificar, cancelar u oponerte al tratamiento de tus datos escribiendo a hola@ailabschool.com. Respondemos en un máximo de 20 días hábiles.'],
    ['Cambios a este aviso', 'Cualquier modificación se publicará en esta misma página, indicando la fecha de última actualización.'],
  ];
  return (
    <Section style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: '68ch' }}>
        <Eyebrow>Legal</Eyebrow>
        <h1 style={{ marginTop: 16, fontSize: 'var(--text-44)' }}>Aviso de privacidad</h1>
        <p style={{ marginTop: 16, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Última actualización · Septiembre 2026 · Texto placeholder, revisar con asesoría legal</p>
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 40 }}>
          {blocks.map(([t, b]) => (
            <div key={t} style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: 'var(--text-20)' }}>{t}</h2>
              <p style={{ marginTop: 12, font: 'var(--type-body)', color: 'var(--text-body)' }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { MethodScreen, AcademyScreen, AboutScreen, PrivacyScreen });
