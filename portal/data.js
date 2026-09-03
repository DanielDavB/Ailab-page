/* Datos mock del portal de clientes. Sustituir por consultas a Supabase u otro backend real. */
window.PORTAL_DATA = {
  client: { name: 'Distribuidora del Norte', contact: 'Ana Ruiz', role: 'Dirección de operaciones', email: 'ana@distnorte.mx', initials: 'AR', rfc: 'DNO120344TA9', plan: 'Automatización + acompañamiento' },
  users: [
    { name: 'Ana Ruiz', email: 'ana@distnorte.mx', role: 'Administrador', active: true },
    { name: 'Luis Peña', email: 'luis@distnorte.mx', role: 'Lectura', active: true },
    { name: 'Invitación pendiente', email: 'compras@distnorte.mx', role: 'Lectura', active: false },
  ],
  phases: ['Diagnóstico', 'Diseño de la solución', 'Construcción', 'Puesta en marcha', 'Acompañamiento'],
  projects: [
    {
      id: 'whatsapp', name: 'Agente de WhatsApp para pedidos', phase: 3, progress: 62, status: 'A tiempo',
      summary: 'Un agente recibe pedidos por WhatsApp, arma la cotización con precios vigentes y da de alta en el ERP.',
      next: 'Entrega de flujo de cotización', nextDate: '12 sep 2026', started: '4 ago 2026',
      phaseDetail: [
        { state: 'done', date: '6 ago', note: 'Sesión de 90 min con operaciones y ventas.' },
        { state: 'done', date: '14 ago', note: 'Arquitectura aprobada por Ana Ruiz.' },
        { state: 'current', date: 'En curso', note: 'Flujo de cotización en pruebas con 3 vendedores.' },
        { state: 'todo', date: 'Est. 26 sep', note: 'Salida controlada con el 20% de los pedidos.' },
        { state: 'todo', date: 'Est. oct', note: 'Revisión mensual de resultados.' },
      ],
      deliverables: [
        { name: 'Mapa de oportunidades', type: 'Documento', phase: 1, date: '8 ago 2026', action: 'Descargar PDF' },
        { name: 'Arquitectura de la solución', type: 'Documento', phase: 2, date: '14 ago 2026', action: 'Descargar PDF' },
        { name: 'Flujo n8n · Cotizador', type: 'Automatización', phase: 3, date: '29 ago 2026', action: 'Abrir en n8n' },
        { name: 'Manual de uso v1', type: 'Manual', phase: 3, date: '1 sep 2026', action: 'Descargar PDF' },
      ],
      activity: [
        { date: '1 sep', text: 'Se entregó el manual de uso v1.', icon: 'file-text' },
        { date: '29 ago', text: 'Se activó el agente en el número de pruebas.', icon: 'bot' },
        { date: '25 ago', text: 'Se conectó el catálogo de precios al flujo.', icon: 'plug' },
        { date: '14 ago', text: 'Arquitectura aprobada. Inicia construcción.', icon: 'circle-check' },
        { date: '6 ago', text: 'Sesión de diagnóstico realizada.', icon: 'search-check' },
      ],
    },
    {
      id: 'facturas', name: 'Conciliación de facturas', phase: 2, progress: 28, status: 'En revisión',
      summary: 'Clasificación de CFDI y conciliación bancaria automática con revisión de excepciones.',
      next: 'Aprobación de arquitectura', nextDate: '9 sep 2026', started: '25 ago 2026',
      phaseDetail: [
        { state: 'done', date: '27 ago', note: 'Diagnóstico con el área contable.' },
        { state: 'current', date: 'En curso', note: 'Propuesta de arquitectura enviada, esperando aprobación.' },
        { state: 'todo', date: 'Est. 20 sep', note: 'Construcción del clasificador.' },
        { state: 'todo', date: 'Est. oct', note: 'Puesta en marcha y capacitación.' },
        { state: 'todo', date: '—', note: 'Acompañamiento.' },
      ],
      deliverables: [
        { name: 'Mapa de oportunidades · Contabilidad', type: 'Documento', phase: 1, date: '28 ago 2026', action: 'Descargar PDF' },
        { name: 'Propuesta de arquitectura', type: 'Documento', phase: 2, date: '3 sep 2026', action: 'Revisar y aprobar' },
      ],
      activity: [
        { date: '3 sep', text: 'Se envió la propuesta de arquitectura para aprobación.', icon: 'file-text' },
        { date: '28 ago', text: 'Se entregó el mapa de oportunidades.', icon: 'circle-check' },
        { date: '27 ago', text: 'Sesión de diagnóstico con contabilidad.', icon: 'search-check' },
      ],
    },
  ],
};
