const { Button, Card, Badge, Tag, Icon, Eyebrow, Stat } = window.AiLabDesignSystem_1d6ea7;

function CasesScreen({ onCase }) {
  const C = window.AILAB_CONTENT;
  const [area, setArea] = React.useState('Todos');
  const areas = ['Todos', 'Operaciones', 'Ventas', 'Soporte'];
  const list = area === 'Todos' ? C.cases : C.cases.filter((c) => c.area === area);
  return (
    <div>
      <Section tone="dark" style={{ padding: '96px 0' }}>
        <Eyebrow tone="inverse">Casos</Eyebrow>
        <div style={{ marginTop: 24 }}>
          <StrokeHeading size="var(--text-60)" lines={[['Lo que ya está'], [{ stroke: 'operando' }]]} />
        </div>
        <p style={{ marginTop: 32, font: 'var(--type-lead)', color: 'var(--gray-400)', maxWidth: '58ch' }}>
          Proyectos reales con PyMEs mexicanas. Los pilotos están marcados como tales — preferimos decirlo que inflar la lista.
        </p>
      </Section>
      <Section>
        <div style={{ display: 'flex', gap: 8 }}>
          {areas.map((a) => <Tag key={a} selected={area === a} onSelect={() => setArea(a)}>{a}</Tag>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 40 }}>
          {list.map((c) => (
            <Card key={c.slug} interactive padding="0" onClick={() => onCase(c.slug)} style={{ overflow: 'hidden' }}>
              <div style={{ height: 200, background: 'var(--gray-1000)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'transparent', WebkitTextStroke: '1px var(--gray-600)', textAlign: 'center', padding: '0 24px' }}>{c.client}</span>
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
          ))}
        </div>
      </Section>
    </div>
  );
}

function CaseDetailScreen({ slug, onBack, onCta }) {
  const C = window.AILAB_CONTENT;
  const c = C.cases.find((x) => x.slug === slug) || C.cases[0];
  const block = (t, b) => (
    <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
      <Eyebrow>{t}</Eyebrow>
      <p style={{ marginTop: 16, font: 'var(--type-lead)', color: 'var(--text-body)' }}>{b}</p>
    </div>
  );
  return (
    <div>
      <Section tone="dark" style={{ padding: '64px 0 96px' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gray-500)' }}>
          <Icon name="arrow-left" size={14} /> Todos los casos
        </button>
        <div style={{ marginTop: 40, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Badge tone={c.kind === 'Piloto' ? 'accent' : 'inverse'}>{c.kind}</Badge>
          <span style={{ font: 'var(--type-mono)', fontSize: 'var(--text-11)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--gray-500)' }}>{c.industry}</span>
        </div>
        <h1 style={{ marginTop: 24, fontSize: 'var(--text-60)', color: '#FFFFFF', maxWidth: '18ch' }}>{c.client}</h1>
        <p style={{ marginTop: 24, font: 'var(--type-lead)', color: 'var(--gray-400)', maxWidth: '54ch' }}>{c.body}</p>
      </Section>
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {block('El problema', c.problem)}
            {block('La solución', c.solution)}
            <div style={{ paddingTop: 24, borderTop: '1px solid var(--border)' }}>
              <Eyebrow>El resultado</Eyebrow>
              <ul style={{ listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.result.map((r) => (
                  <li key={r} style={{ display: 'flex', gap: 12, font: 'var(--type-lead)', color: 'var(--text-body)' }}>
                    <Icon name="check" size={20} style={{ color: 'var(--orange)', flex: 'none', marginTop: 6 }} />{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Card padding="32px" tone="subtle">
            <Stat hero value={c.stat} label={c.unit} />
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
              <Eyebrow marker={false}>Stack</Eyebrow>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
                {c.stack.map((s) => <Tag key={s}>{s}</Tag>)}
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <Button variant="accent" fullWidth onClick={onCta}>Quiero algo así</Button>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { CasesScreen, CaseDetailScreen });
