/* Contenido placeholder realista para el sitio de Ai Enterprise. Reemplazar por datos reales antes de publicar. */
window.AILAB_CONTENT = {
  stats: [
    { value: '+120', label: 'Horas ahorradas al mes', note: 'Suma de los procesos que operan hoy' },
    { value: '8', label: 'Empresas acompañadas' },
    { value: '48h', label: 'Primer diagnóstico entregado' },
  ],
  industries: ['Retail', 'Servicios profesionales', 'Salud', 'Distribución', 'Educación', 'Automotriz'],
  services: [
    { n: '01', icon: 'bot', title: 'Agentes de IA', line: 'Atención y ventas que responden solas, con la información de tu negocio.', bullets: ['Agente de WhatsApp con tu catálogo', 'Calificación y ruteo de prospectos', 'Respuestas con tus documentos internos'] },
    { n: '02', icon: 'workflow', title: 'Automatización de procesos', line: 'El trabajo repetitivo entre herramientas deja de hacerlo una persona.', bullets: ['Flujos en n8n y Make', 'Altas, cotizaciones y seguimientos', 'Alertas y reportes automáticos'] },
    { n: '03', icon: 'plug', title: 'Integraciones', line: 'Que tus sistemas se hablen entre sí sin capturar dos veces.', bullets: ['Sheets, CRM y ERP', 'WhatsApp Business API', 'Facturación y pagos'] },
    { n: '04', icon: 'graduation-cap', title: 'Capacitación de equipos', line: 'Tu gente opera lo que construimos, sin depender de nosotros.', bullets: ['Talleres a medida por área', 'Manuales y video de uso', 'Cursos abiertos de AiLabSchool'] },
    { n: '05', icon: 'search-check', title: 'Consultoría y diagnóstico', line: 'Antes de automatizar, saber qué conviene automatizar.', bullets: ['Mapa de procesos y cuellos de botella', 'Priorización por retorno', 'Plan de 90 días'] },
  ],
  cases: [
    { slug: 'distribuidora', client: 'Distribuidora del Norte', kind: 'Cliente', industry: 'Distribución · 34 empleados', area: 'Operaciones', stat: '40', unit: 'horas / mes', body: 'Cotizaciones y alta de pedidos automatizadas entre WhatsApp y el ERP.',
      problem: 'Tres personas capturaban a mano cada pedido que entraba por WhatsApp, y los errores de captura llegaban hasta la factura.',
      solution: 'Un agente lee el mensaje, arma la cotización con precios vigentes y, al aprobarse, da de alta el pedido en el ERP.',
      result: ['40 horas de captura eliminadas al mes', 'Errores de pedido de 6% a menos de 1%', 'Cotización en 4 minutos en vez de 2 horas'], stack: ['n8n', 'WhatsApp API', 'ERP propio', 'Google Sheets'] },
    { slug: 'contable', client: 'Despacho Ríos y Asociados', kind: 'Cliente', industry: 'Despacho contable · 18 empleados', area: 'Operaciones', stat: '3.2x', unit: 'ROI a 6 meses', body: 'Clasificación de facturas y conciliación con un agente de IA.',
      problem: 'Cada cierre de mes se iba en clasificar CFDI y cuadrar movimientos bancarios de 60 clientes.',
      solution: 'Un flujo descarga, clasifica y concilia; el contador solo revisa las excepciones que el agente marca.',
      result: ['Cierre mensual de 9 a 3 días', '3.2x retorno a los 6 meses', '60 clientes atendidos con el mismo equipo'], stack: ['n8n', 'OCR', 'LLM', 'Excel'] },
    { slug: 'dental', client: 'Clínica Dental Vértice', kind: 'Cliente', industry: 'Salud · 12 empleados', area: 'Soporte', stat: '61%', unit: 'menos ausencias', body: 'Recordatorios y reagendado automático de citas por WhatsApp.',
      problem: 'Una de cada tres citas se caía sin aviso y la recepcionista pasaba la mañana llamando.',
      solution: 'Recordatorio automático a 48h y 3h, con opción de reagendar en el mismo chat y liberación del espacio.',
      result: ['61% menos ausencias', 'Agenda ocupada al 88%', 'Recepción liberada 12 horas por semana'], stack: ['Make', 'WhatsApp API', 'Google Calendar'] },
    { slug: 'carwash', client: 'Car Wash Express', kind: 'Piloto', industry: 'Servicios · 9 empleados', area: 'Ventas', stat: '2.4x', unit: 'reseñas nuevas', body: 'Seguimiento post-servicio y programa de recompra automatizado.',
      problem: 'No había forma de saber quién volvía ni de pedir reseñas sin incomodar al cliente.',
      solution: 'Mensaje de seguimiento a las 24 horas, encuesta de una pregunta y recordatorio de recompra a los 15 días.',
      result: ['2.4x más reseñas en Google', '31% de clientes recurrentes identificados', 'Cero trabajo manual de seguimiento'], stack: ['Make', 'WhatsApp API', 'Google Sheets'] },
  ],
  courses: [
    { title: 'IA aplicada para dueños de negocio', format: 'Taller · 4 horas', body: 'Qué se puede automatizar hoy en tu empresa y cómo priorizarlo sin ser técnico.' },
    { title: 'n8n desde cero para tu equipo', format: 'Curso · 6 sesiones', body: 'Tu equipo construye y mantiene sus propios flujos sin depender de un proveedor.' },
    { title: 'Prompting para operación diaria', format: 'Taller · 3 horas', body: 'Cómo usar modelos de lenguaje en tareas reales de ventas, soporte y administración.' },
  ],
  team: [
    { name: 'Dan Dávila', role: 'Fundador y consultor', line: 'Diseña e implementa las automatizaciones y dirige AiLabSchool.', initials: 'DD' },
    { name: 'Por definir', role: 'Implementación', line: 'Espacio reservado para el siguiente perfil del equipo.', initials: '—' },
  ],
};
