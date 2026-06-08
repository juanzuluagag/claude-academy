// ─── MÓDULO 5: CLAUDE COWORK — LECCIONES NUEVAS ─────────────────────────────

// ─── COWORK INTRO (5.0) ───────────────────────────────────────────────────────
export const COWORK_INTRO_LESSON = {
  id: 'mod3_l0',
  num: '5.0',
  title: 'Claude CoWork: automatiza tu escritorio sin programar',
  duration: '20 min',
  xpReward: 55,
  videoId: '1oseAPOrB3g',
  videoCaption: 'Claude CoWork 2026 — instalación, Connectors y primeros flujos automáticos',
  content: [
    {
      type: 'intro',
      text: 'Claude Chat responde preguntas. Claude Code escribe código. Claude CoWork controla tu escritorio y tus aplicaciones — sin que tú estés presente. La diferencia no es de capacidad sino de autonomía y acceso: CoWork puede abrir Gmail, leer tus correos no respondidos, redactar respuestas, actualizar tu Notion, y enviarte un resumen al teléfono. Todo mientras atiendes a un cliente. Esta lección cubre qué es CoWork, cómo instalarlo en 5 minutos, y cómo configurar los Connectors que son la base de todo lo que viene después.',
    },
    {
      type: 'cards',
      title: 'Los 3 modos de Claude: cuándo usar cada uno',
      items: [
        {
          name: 'Claude Chat (claude.ai)',
          tag: 'Navegar y explorar',
          color: '#6366F1',
          desc: 'Conversaciones y preguntas en el navegador. Artefactos, Projects, Chat Memory. Uso principal: pensar, explorar, escribir, analizar. No accede a tus archivos locales ni apps externas.',
        },
        {
          name: 'Claude CoWork (desktop)',
          tag: 'Automatizar oficina',
          color: '#F59E0B',
          desc: 'Controla aplicaciones en tu escritorio. Lee y escribe en Gmail, Calendar, Notion, Slack, HubSpot. Scheduled Tasks para automatización por horario. Uso principal: flujos de trabajo repetitivos de oficina.',
        },
        {
          name: 'Claude Code (terminal)',
          tag: 'Desarrollar',
          color: '#10B981',
          desc: 'Edita y crea archivos reales de tu proyecto. Ejecuta comandos, corre tests, abre PRs. Uso principal: desarrollo de software autónomo con acceso total al filesystem.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Instalación de Claude Desktop (donde vive CoWork)',
      body: 'CoWork vive en la aplicación de escritorio de Claude — diferente al navegador. Descarga desde claude.ai/download → elige Mac (Apple Silicon o Intel) o Windows. La pestaña "CoWork" aparece en la barra lateral una vez instalado. En claude.ai en el navegador, no existe la pestaña CoWork — es exclusiva de la app de escritorio.\n\nRequisitos de plan: Pro, Max, Team o Enterprise. El plan gratuito no incluye CoWork ni Connectors.\n\nLuego de instalar, el primer paso es configurar al menos un Connector. Sin Connectors, CoWork puede controlar el escritorio local pero no accede a tus herramientas externas.',
      highlight: 'Diferencia clave con claude.ai: Claude Chat en el navegador y Claude Desktop comparten tu cuenta y cuota de mensajes, pero solo Claude Desktop tiene la pestaña CoWork con acceso a tu escritorio y a los Connectors. Si buscas CoWork en el navegador, no lo encontrarás.',
    },
    {
      type: 'cards',
      title: 'Los Connectors: 40+ herramientas disponibles en un clic',
      items: [
        {
          name: 'Google Workspace',
          tag: 'Los más usados',
          color: '#4285F4',
          desc: 'Gmail (leer, clasificar, redactar, enviar), Google Calendar (crear eventos, buscar disponibilidad), Google Drive (buscar archivos, leer documentos), Google Docs y Sheets. Autenticación vía OAuth — Claude nunca ve tu contraseña.',
        },
        {
          name: 'Notion',
          tag: 'Productividad',
          color: '#000000',
          desc: 'Leer páginas y bases de datos, crear nuevas páginas, actualizar propiedades de bases de datos, buscar en tu workspace. Ideal para actualizar CRM, registros de clientes, diarios de trabajo.',
        },
        {
          name: 'Slack / Microsoft Teams',
          tag: 'Comunicación',
          color: '#4A154B',
          desc: 'Leer mensajes y canales, enviar mensajes directos, crear resúmenes de conversaciones. Útil para generar el reporte de tu equipo o responder mensajes rutinarios.',
        },
        {
          name: 'Jira / Linear / GitHub',
          tag: 'Para equipos tech',
          color: '#0052CC',
          desc: 'Crear y actualizar issues, revisar el estado de sprints, mover tickets entre columnas. Para el agente de QA del Proyecto 9.4, GitHub es el Connector central.',
        },
        {
          name: 'HubSpot / Salesforce',
          tag: 'CRM',
          color: '#FF7A59',
          desc: 'Leer y actualizar contactos, registrar actividades, crear tareas y seguimientos. Para negocios de fotografía: registrar leads que escriben por WhatsApp antes de hacer la propuesta.',
        },
        {
          name: 'Microsoft 365',
          tag: 'Ecosistema Office',
          color: '#D83B01',
          desc: 'Outlook (email), Teams (mensajería), OneDrive (archivos). La integración profunda con Word, Excel y PowerPoint dentro de las apps se cubre en la Lección 5.4.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Cómo agregar un Connector en 3 pasos',
      body: 'Paso 1: En Claude Desktop → pestaña CoWork → sección Connectors → botón "Add connector".\nPaso 2: Elige la herramienta (Gmail, Notion, Slack, etc.). Se abre una ventana de autorización OAuth — el mismo sistema de "Continuar con Google" que ya conoces. Introduce tus credenciales en el proveedor (Google, Notion, Slack), no en Anthropic.\nPaso 3: Autoriza el acceso y el Connector aparece activo en tu lista. Claude puede usarlo en cualquier conversación o tarea automatizada.\n\nPuedes agregar tantos Connectors como necesites. Son independientes entre sí. Para revocar el acceso: Settings → Connectors → Disconnect, o directamente desde el panel de seguridad del proveedor (Google, Notion, etc.).',
      highlight: 'Seguridad: los Connectors usan OAuth 2.0. Claude accede a tus datos a través de tokens que tú puedes revocar en cualquier momento. Anthropic nunca almacena tus contraseñas. La misma tecnología que usa "Iniciar sesión con Google" en miles de apps.',
    },
    {
      type: 'concept',
      title: 'Tu primera tarea con CoWork',
      body: 'La mejor forma de entender CoWork es usarlo con una tarea real. Con Gmail conectado, escribe en Claude Desktop:\n\n"Revisa mis emails no leídos de las últimas 6 horas. Identifica cuáles requieren respuesta, cuáles son informativos, y cuáles son spam o newsletters. Genera una lista priorizada con un resumen de una línea por email."\n\nClaude accede a Gmail, lee los emails, los clasifica, y te entrega el resumen en 30-60 segundos. Sin copiar y pegar. Sin abrir Gmail. Ese momento — cuando Claude responde con el contenido real de tu bandeja de entrada — es cuando CoWork deja de ser teórico.\n\nPara fotografía: el primer Connector más útil es Gmail. Te permite delegar la clasificación diaria de emails de clientes potenciales, seguimientos, y confirmaciones de booking — el tipo de email que consume 30 minutos cada mañana.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia fundamental entre usar Claude en claude.ai (navegador) y Claude Desktop con CoWork?',
      opts: [
        'Claude Desktop usa un modelo más avanzado que el navegador',
        'Claude Desktop con CoWork tiene acceso a tus apps y herramientas vía Connectors — puede leer tu Gmail, actualizar Notion, controlar el escritorio. Claude.ai en el navegador solo trabaja con lo que tú le das manualmente',
        'Claude Desktop es más rápido porque no usa internet',
        'No hay diferencia significativa — son el mismo producto con interfaz diferente',
      ],
      correct: 1,
      exp: 'La diferencia es de acceso y autonomía. Claude.ai responde preguntas con lo que tú le das manualmente. Claude Desktop con CoWork tiene acceso directo a tus herramientas vía Connectors — puede leer tus emails reales, actualizar tu CRM, crear eventos en tu calendario sin que copies y pegues nada. Eso es lo que hace posible la automatización de flujos de trabajo.',
    },
    {
      q: '¿Qué protocolo de autorización usan los Connectors y qué garantía de seguridad ofrece?',
      opts: [
        'API Keys — Claude almacena tus contraseñas de cada servicio para reconectarse',
        'OAuth 2.0 — Claude accede vía tokens de autorización que tú puedes revocar en cualquier momento, sin compartir tu contraseña con Anthropic',
        'Contraseñas directas — necesitas dar tu usuario y contraseña de Gmail a Anthropic',
        'Claves SSH — solo funciona con servicios que soporten autenticación de clave pública',
      ],
      correct: 1,
      exp: 'OAuth 2.0 es el estándar de autorización segura. Es el mismo mecanismo de "Continuar con Google" — tú autorizas el acceso, Google emite un token, Claude usa ese token sin ver tu contraseña. Puedes revocar el acceso desde Settings → Connectors o desde el panel de seguridad de Google en cualquier momento. Anthropic nunca tiene acceso a tus credenciales.',
    },
    {
      q: '¿En qué planes de Claude está disponible CoWork con Connectors?',
      opts: [
        'En todos los planes incluyendo el gratuito — CoWork es una función básica',
        'Solo en el plan Enterprise — requiere contrato corporativo con Anthropic',
        'En planes Pro, Max, Team y Enterprise — no está disponible en el plan gratuito',
        'En Pro y Max solo — Team y Enterprise tienen su propia versión separada',
      ],
      correct: 2,
      exp: 'CoWork con Connectors requiere un plan de pago (Pro, Max, Team o Enterprise). El plan gratuito de Claude no incluye acceso a CoWork ni Connectors. La razón: los Connectors requieren infraestructura adicional para mantener los tokens OAuth y ejecutar las integraciones de forma segura y persistente.',
    },
  ],
  challenge: {
    title: 'Reto 5.0 — CoWork instalado y primer Connector activo',
    desc: 'Instala Claude Desktop, configura tu primer Connector y completa tu primera tarea automática.',
    steps: [
      'Descarga Claude Desktop desde claude.ai/download. Instala la versión para tu sistema (Mac Apple Silicon, Mac Intel, o Windows). Inicia sesión con tu cuenta de claude.ai.',
      'Abre la pestaña CoWork en la barra lateral izquierda. Si no la ves, verifica que tienes un plan Pro, Max, Team o Enterprise activo.',
      'Agrega Gmail: clic en "Add connector" → Gmail → Autoriza con OAuth → confirma que Gmail aparece como "Conectado" en la lista.',
      'Prueba real: escribe en Claude Desktop "¿Cuántos emails no leídos tengo en Gmail ahora mismo? Dame un resumen de los 3 más recientes con el asunto y de quién son."',
      'Verifica que Claude responde con información real de tu bandeja de entrada — no una respuesta genérica inventada.',
      'Opcional: agrega un segundo Connector (Google Calendar) y prueba: "¿Qué reuniones tengo esta semana y hay algún email relacionado con alguna de ellas?"',
    ],
    checkpoint: 'CoWork está funcionando correctamente cuando Claude responde con el contenido real de tus emails o calendario — información que tú no le diste en el chat sino que él recuperó directamente de tu herramienta. Ese es el momento en que CoWork deja de ser teórico y se convierte en productividad real.',
  },
}

// ─── SMALL BUSINESS (5.5) ──────────────────────────────────────────────────────
export const SMALL_BUSINESS_LESSON = {
  id: 'mod3_l6_smallbusiness',
  num: '5.5',
  title: 'Claude for Small Business: 15 workflows de negocio preconfigurados',
  duration: '20 min',
  xpReward: 60,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'El 13 de mayo de 2026, Anthropic añadió un toggle dentro de CoWork para planes Team y Enterprise: Claude for Small Business. No es un producto separado — es una capa de workflows preconfigurados, Skills especializadas y conectores a herramientas de negocio listos para usar. El objetivo: que una PYME sin departamento de IT automatice procesos reales en menos de 30 minutos, sin escribir una línea de código.',
    },
    {
      type: 'concept',
      title: '¿Qué incluye Claude for Small Business?',
      body: 'Tres componentes que se activan juntos:\n\n**15 workflows prebuilt** — flujos de trabajo completos listos para usar. No los configuras desde cero: activas el toggle, conectas las herramientas que ya tienes, y el workflow corre. Cada workflow tiene una tarjeta con la descripción, las herramientas que necesita, y el tiempo estimado que ahorra por semana.\n\n**15 Skills adicionales** — Skills especializadas para PYMES: facturación, soporte al cliente, contratos básicos, comunicación con clientes. Se añaden automáticamente al activar Small Business en CoWork.\n\n**Conectores especiales** — acceso a 7 herramientas de negocio que el ecosistema CoWork estándar no incluye: QuickBooks, PayPal, HubSpot, Canva, DocuSign, Google Workspace y Microsoft 365.',
      highlight: 'Precio: sin costo adicional. Claude for Small Business está incluido en el precio del plan Team o Enterprise. No hay licencia separada, ni costo por workflow, ni límite de automatizaciones.',
    },
    {
      type: 'cards',
      title: 'Los 5 workflows más útiles para negocios de servicios',
      items: [
        {
          name: 'Invoice Chasing',
          tag: 'El más rentable',
          color: '#10B981',
          desc: 'Claude revisa facturas vencidas en QuickBooks o tu sistema de facturación. Para cada factura vencida > 7 días, genera un email de seguimiento personalizado con el monto, la fecha y las instrucciones de pago. Con un clic los envía o los pone en borrador para tu revisión.',
        },
        {
          name: 'Client Onboarding',
          tag: 'Primera impresión',
          color: '#6366F1',
          desc: 'Cuando cierras un nuevo cliente, Claude ejecuta: email de bienvenida, contrato en DocuSign, carpeta del proyecto en Drive, y primera sesión de briefing en Calendar. 20 minutos de trabajo administrativo en segundos.',
        },
        {
          name: 'Campaign Management',
          tag: 'Marketing',
          color: '#F97316',
          desc: 'Gestión de campañas desde un solo punto. Claude genera el contenido, lo diseña en Canva (vía Connector), programa los envíos, y reporta los resultados a una hoja de cálculo. Sin cambiar entre 5 herramientas diferentes.',
        },
        {
          name: 'Weekly Sales Report',
          tag: 'Visibilidad',
          color: '#8B5CF6',
          desc: 'Cada lunes a las 8AM: Claude consolida el pipeline de HubSpot, las transacciones de PayPal, y los leads pendientes de Gmail. Entrega un reporte de 300 palabras con métricas clave, deals en riesgo, y los leads más calientes de la semana.',
        },
        {
          name: 'Contract Automation',
          tag: 'Cierre de ventas',
          color: '#EF4444',
          desc: 'Al confirmar un proyecto, Claude genera el contrato con DocuSign usando los datos del cliente en HubSpot. Lo envía para firma electrónica. Cuando el cliente firma, crea automáticamente el primer invoice en QuickBooks.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Activación en 4 pasos',
      body: 'Paso 1: Claude Desktop → pestaña CoWork → busca el toggle "Claude for Small Business" (requiere plan Team o Enterprise). Actívalo.\nPaso 2: El asistente de setup te guía para conectar las herramientas que tienes: QuickBooks, HubSpot, PayPal, etc. Solo conectas las que usas — los workflows se adaptan a lo disponible.\nPaso 3: Elige qué workflows activar. Lee la tarjeta de cada uno: herramientas requeridas y tiempo ahorrado estimado por semana.\nPaso 4: Prueba de humo antes de activar el modo automático: "Muéstrame cuáles facturas procesarías esta semana y cuál sería el email para cada una, pero no envíes nada todavía."',
      highlight: 'Los workflows son editables en lenguaje natural. Si el template de email de Invoice Chasing no tiene tu tono: "Cambia el tono a más amigable y agrega una línea sobre opciones de pago en cuotas." Claude actualiza el template globalmente.',
    },
    {
      type: 'concept',
      title: 'Los 3 workflows de mayor impacto para fotografía profesional',
      body: '**Invoice Chasing para fotografía:** conecta tu registro de pagos (Google Sheets o QuickBooks) → cada semana Claude identifica proyectos con pago pendiente y envía un recordatorio personalizado en tu tono. Elimina la incomodidad de perseguir pagos manualmente.\n\n**Client Onboarding para sesiones:** cuando confirmas una sesión → Claude envía el contrato de fotografía vía DocuSign, el briefing de preparación al cliente, y crea la carpeta del proyecto en Drive. Lo que tomaba 20 minutos ahora toma cero.\n\n**Weekly Sales Report para negocios creativos:** los lunes, Claude revisa tus sesiones del mes, los leads activos en HubSpot, y los proyectos próximos confirmados. En 300 palabras tienes una imagen clara del estado del negocio.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿En qué planes de Claude está disponible Claude for Small Business?',
      opts: [
        'En todos los planes incluyendo Pro y el plan gratuito',
        'Solo en Enterprise — requiere negociación directa con Anthropic',
        'En planes Team y Enterprise — toggle dentro de CoWork sin costo adicional a la licencia',
        'Es un producto separado con suscripción independiente',
      ],
      correct: 2,
      exp: 'Claude for Small Business está disponible como toggle dentro de CoWork para planes Team y Enterprise, incluido en el precio de la licencia. Los planes Pro y Max no lo tienen porque están orientados a uso individual, no de equipo. No hay costo adicional por activarlo ni por usar los workflows.',
    },
    {
      q: 'Acabas de confirmar un nuevo cliente de fotografía. ¿Qué workflow de Small Business tiene mayor impacto inmediato?',
      opts: [
        'Campaign Management — para promover el servicio en redes sociales',
        'Weekly Sales Report — para registrar el nuevo cliente en el pipeline',
        'Client Onboarding — envía el contrato, el briefing, crea la carpeta del proyecto, y agenda la reunión de kickoff automáticamente',
        'Invoice Chasing — para asegurarte de cobrar a tiempo',
      ],
      correct: 2,
      exp: 'Client Onboarding es el workflow de mayor impacto en ese momento. Cubre el proceso completo de bienvenida: contrato en DocuSign, briefing al cliente, carpeta en Drive, evento en Calendar. Son 20 minutos de trabajo administrativo que Claude hace en segundos. Invoice Chasing viene después, cuando se acerque la fecha de pago.',
    },
    {
      q: '¿Cómo personalizas el template del email de Invoice Chasing si el tono por defecto es demasiado formal?',
      opts: [
        'Editas el JSON del workflow directamente en los archivos de configuración',
        'Desactivas el workflow y creas uno desde cero con el tono correcto',
        'Le dices en lenguaje natural cómo quieres que cambie el tono y Claude actualiza el template globalmente',
        'El tono no es editable — los templates son fijos para garantizar profesionalismo',
      ],
      correct: 2,
      exp: 'Los workflows son editables en lenguaje natural. "Cambia el tono a más cercano y amigable, como si lo escribiera yo directamente, y agrega opciones de pago en cuotas" — Claude actualiza el template y lo aplica a todos los emails futuros de ese workflow. No necesitas tocar configuración técnica.',
    },
  ],
  challenge: {
    title: 'Reto 5.5 — Activa tu primer workflow de Small Business',
    desc: 'Configura y prueba en modo seguro el workflow más relevante para tu negocio.',
    steps: [
      'Verifica que tienes plan Team o Enterprise activo. Si tienes Pro o Max, documenta qué workflows activarías cuando hagas el upgrade — el ejercicio de planificación tiene valor por sí solo.',
      'Activa el toggle Claude for Small Business en CoWork. Completa el wizard de conectores: conecta al menos HubSpot o tu sistema de facturación.',
      'Navega a la lista de workflows. Lee las tarjetas de Invoice Chasing, Client Onboarding, y Weekly Sales Report. Para cada uno: ¿tienes las herramientas que requiere? ¿Cuánto tiempo te ahorraría por semana?',
      'Activa Invoice Chasing. Antes de configurarlo para enviar emails reales, haz una prueba en modo revisión: "Muéstrame cuáles facturas procesarías esta semana y el email que enviarías a cada una — pero no envíes nada todavía."',
      'Evalúa la lista y los emails: ¿son los montos correctos? ¿El tono suena como tú? Si no, ajusta en lenguaje natural hasta que el output sea lo que enviarías tú.',
      'Cuando el output sea correcto: activa el modo automático con la frecuencia que prefieras (recomendado: martes 10AM).',
    ],
    checkpoint: 'El workflow está funcionando cuando el primer email de seguimiento que Claude envía llega con el tono correcto, el monto correcto, y la sensación de que lo escribiste tú. Si un cliente responde sin darse cuenta de que fue automático, el workflow está perfecto.',
  },
}
