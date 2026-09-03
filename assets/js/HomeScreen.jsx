const { Button, Card, Badge, Tag, Icon, Eyebrow, Stat } = window.AiLabDesignSystem_1d6ea7;

function HomeScreen({ onNavigate, onCta, onCase, onLogin }) {
  const C = window.AILAB_CONTENT;
  const [area, setArea] = React.useState('Todos');
  const areas = ['Todos', 'Operaciones', 'Ventas', 'Soporte'];
  const cases = area === 'Todos' ? C.cases : C.cases.filter((c) => c.area === area);
  return (
    <div>
      {/* HERO */}
      <Section tone="dark" bg={<NetworkBg />} style={{ padding: '140px 0 0', borderBottom: '1px solid var(--gray-800)' }}>
        <Reveal from="left"><Eyebrow tone="inverse">Consultoría IA · Durango, México · LATAM</Eyebrow></Reveal>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 80, alignItems: 'end' }}>
          <Reveal delay={80}><StrokeHeading lines={[['Automatizamos tu ', { stroke: 'negocio' }], ['con IA que sí opera']]} /></Reveal>
          <Reveal delay={220} style={{ paddingBottom: 12 }}>
            <p style={{ font: 'var(--type-lead)', color: 'var(--gray-400)' }}>
              Consultoría y automatización con IA para pequeñas y medianas empresas. Te quitamos el trabajo repetitivo esta misma semana — y le enseñamos a tu equipo a operarlo.
            </p>
            <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
              <Button variant="accent" size="lg" onClick={onCta} iconRight={<Icon name="arrow-right" size={20} />}>Agendar diagnóstico</Button>
              <Button variant="secondary" size="lg" onClick={() => onNavigate('casos')} style={{ color: '#F5F5F5', borderColor: 'var(--gray-600)' }}>Ver proyectos</Button>
            </div>
          </Reveal>
        </div>
        <div style={{ marginTop: 96, borderTop: '1px solid var(--gray-800)', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {C.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} style={{ padding: '40px 40px 40px 0', borderLeft: i ? '1px solid var(--gray-800)' : 'none', paddingLeft: i ? 40 : 0 }}>
              <Stat tone="inverse" value={<CountUp value={s.value} />} label={s.label} note={s.note} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INDUSTRIAS */}
      <div style={{ background: '#0D0D0D', borderBottom: '1px solid var(--gray-800)', padding: '28px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--gutter)', display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', gap: 40 }}>
          <span style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--gray-600)', whiteSpace: 'nowrap' }}>Industrias con las que trabajamos</span>
          <Marquee items={C.industries} />
        </div>
      </div>

      {/* SERVICIOS */}
      <Section>
        <Reveal><SectionHead eyebrow="Qué hacemos" title="Cinco servicios, un solo objetivo" lead="Que dejes de pagar horas de tu equipo por trabajo que una máquina hace mejor."
          action={<Button variant="secondary" onClick={() => onNavigate('servicios')} iconRight={<Icon name="arrow-right" size={16} />}>Ver detalle</Button>} /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 64 }}>
          {C.services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 110} from="scale"><Lift>
            <Card interactive padding="32px" onClick={() => onNavigate('servicios')} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Icon name={s.icon} size={40} style={{ color: 'var(--text-strong)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 44, lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px var(--border-strong)' }}>{s.n}</span>
              </div>
              <h3 style={{ marginTop: 40, fontSize: 'var(--text-24)' }}>{s.title}</h3>
              <p style={{ marginTop: 12, font: 'var(--type-small)', color: 'var(--text-body)' }}>{s.line}</p>
              <ul style={{ listStyle: 'none', margin: '24px 0 0', padding: '24px 0 0', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ display: 'flex', gap: 10, font: 'var(--type-small)', color: 'var(--text-muted)' }}>
                    <Icon name="check" size={14} style={{ color: 'var(--orange)', flex: 'none', marginTop: 4 }} />{b}
                  </li>
                ))}
              </ul>
            </Card>
            </Lift></Reveal>
          ))}
        </div>
      </Section>

      {/* CASOS */}
      <Section tone="subtle">
        <Reveal><SectionHead eyebrow="Casos" title="Resultados medidos en horas"
          action={<Button variant="secondary" onClick={() => onNavigate('casos')} iconRight={<Icon name="arrow-right" size={16} />}>Todos los casos</Button>} /></Reveal>
        <div style={{ display: 'flex', gap: 8, marginTop: 40 }}>
          {areas.map((a) => <Tag key={a} selected={area === a} onSelect={() => setArea(a)}>{a}</Tag>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 40 }}>
          {cases.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 110}><Lift>
            <Card interactive padding="0" onClick={() => onCase(c.slug)} style={{ overflow: 'hidden', height: '100%' }}>
              <div style={{ height: 180, background: 'var(--gray-1000)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'transparent', WebkitTextStroke: '1px var(--gray-600)', textAlign: 'center', padding: '0 24px' }}>{c.client}</span>
                <span style={{ position: 'absolute', top: 16, left: 16 }}><Badge tone={c.kind === 'Piloto' ? 'accent' : 'inverse'}>{c.kind}</Badge></span>
              </div>
              <div style={{ padding: 32 }}>
                <div style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{c.industry}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 20 }}>
                  <span style={{ font: 'var(--type-mono)', fontWeight: 700, fontSize: 'var(--text-44)', color: 'var(--text-strong)' }}>{c.stat}</span>
                  <span style={{ font: 'var(--type-small)', color: 'var(--text-muted)' }}>{c.unit}</span>
                </div>
                <p style={{ marginTop: 16, font: 'var(--type-body)', color: 'var(--text-body)' }}>{c.body}</p>
                <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8, font: 'var(--type-small)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>
                  Leer el caso <Icon name="arrow-up-right" size={16} />
                </div>
              </div>
            </Card>
            </Lift></Reveal>
          ))}
        </div>
      </Section>

      {/* METODOLOGÍA */}
      <Section tone="dark">
        <Reveal><SectionHead tone="dark" eyebrow="Metodología" title="Hay un método, no improvisación" lead="Cinco fases con entregable definido. Sabes en qué vas y qué sigue, siempre."
          action={<Button variant="secondary" onClick={() => onNavigate('metodologia')} style={{ color: '#F5F5F5', borderColor: 'var(--gray-600)' }} iconRight={<Icon name="arrow-right" size={16} />}>Ver metodología</Button>} /></Reveal>
        <Reveal delay={120} style={{ marginTop: 64 }}><Roadmap tone="dark" /></Reveal>
      </Section>

      {/* ACADEMIA */}
      <Section>
        <Reveal><SectionHead eyebrow="AiLabSchool" title="No solo automatizamos: formamos a tu equipo" lead="Es la diferencia entre rentar una solución y quedártela. Tu gente aprende a operar y ajustar lo que construimos."
          action={<Button variant="secondary" onClick={() => onNavigate('academia')} iconRight={<Icon name="arrow-right" size={16} />}>Ver academia</Button>} /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 64 }}>
          {C.courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 110} from="scale"><Lift>
            <Card interactive padding="32px" onClick={() => onNavigate('academia')} style={{ height: '100%' }}>
              <Tag>{c.format}</Tag>
              <h3 style={{ marginTop: 20, fontSize: 'var(--text-20)' }}>{c.title}</h3>
              <p style={{ marginTop: 12, font: 'var(--type-small)', color: 'var(--text-body)' }}>{c.body}</p>
            </Card>
            </Lift></Reveal>
          ))}
        </div>
      </Section>

      {/* PORTAL */}
      <Section tone="subtle" style={{ padding: '96px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <Reveal from="left">
            <Eyebrow>Transparencia</Eyebrow>
            <h2 style={{ marginTop: 16, fontSize: 'var(--text-44)' }}>Sigue el avance de tu proyecto en tiempo real</h2>
            <p style={{ marginTop: 24, font: 'var(--type-lead)', color: 'var(--text-body)' }}>
              Cada cliente entra a su portal y ve en qué fase va, qué se entregó y qué sigue. Sin pedir reportes por WhatsApp.
            </p>
            <div style={{ marginTop: 32 }}>
              <Button variant="primary" onClick={onLogin} iconLeft={<Icon name="lock" size={16} />}>Entrar al portal</Button>
            </div>
          </Reveal>
          <Reveal from="right" delay={140}>
          <Card padding="0" tone="inverse" style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--gray-800)', display: 'flex', alignItems: 'center', gap: 10, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', color: 'var(--gray-500)' }}>
              <Icon name="lock" size={12} /> portal.ailabschool.com
            </div>
            <div style={{ padding: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: '#F5F5F5' }}>Agente de WhatsApp</span>
                <Badge tone="accent">Fase 03 · Construcción</Badge>
              </div>
              <div style={{ marginTop: 20, height: 4, background: 'var(--gray-800)' }}><div style={{ width: '62%', height: '100%', background: 'var(--orange)' }}></div></div>
              <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', color: 'var(--gray-500)' }}>
                <span>62% DE AVANCE</span><span>PRÓXIMA ENTREGA · 12 SEP</span>
              </div>
              <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: '20px 0 0', borderTop: '1px solid var(--gray-800)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Se activó el agente en número de pruebas', 'Se entregó manual de uso v1', 'Reunión de seguimiento agendada'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 10, font: 'var(--type-small)', color: 'var(--gray-400)' }}>
                    <Icon name="circle-check" size={14} style={{ color: 'var(--orange)', flex: 'none', marginTop: 3 }} />{t}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
          </Reveal>
        </div>
      </Section>

      {/* EQUIPO */}
      <Section>
        <Reveal><SectionHead eyebrow="Equipo" title="Trabajas con personas, no con un proveedor" /></Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 64, maxWidth: 860 }}>
          {C.team.map((m, i) => (
            <Reveal key={m.name} delay={i * 140}>
            <Card padding="32px" style={{ display: 'flex', gap: 24, alignItems: 'flex-start', height: '100%' }}>
              <div style={{ width: 72, height: 72, flex: 'none', background: 'var(--gray-1000)', color: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24 }}>{m.initials}</div>
              <div>
                <h3 style={{ fontSize: 'var(--text-20)' }}>{m.name}</h3>
                <div style={{ marginTop: 4, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-accent)' }}>{m.role}</div>
                <p style={{ marginTop: 12, font: 'var(--type-small)', color: 'var(--text-body)' }}>{m.line}</p>
              </div>
            </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="dark" style={{ padding: '96px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 48 }}>
          <Reveal from="left">
            <Eyebrow tone="inverse">Siguiente paso</Eyebrow>
            <StrokeHeading size="var(--text-60)" lines={[['90 minutos'], ['y un ', { stroke: 'plan' }]]} />
          </Reveal>
          <Reveal from="right" delay={120}>
            <Button variant="accent" size="lg" onClick={() => onNavigate('contacto')} iconRight={<Icon name="arrow-right" size={20} />}>Agendar diagnóstico</Button>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { HomeScreen });
