// ─── MÓDULO 9: PROYECTOS MAESTROS ────────────────────────────────────────────
// ─── MÓDULO 6: PROYECTOS MAESTROS ────────────────────────────────────────────
// 5 proyectos reales basados en tus intereses específicos
// Fuentes verificadas: mayo 2026

// ─── PROYECTO 1: Personal AI Operating System (Cyril Method) ─────────────────
export const PROJECT_AIOS = {
  id: 'mod9_l1',
  num: '9.1',
  title: 'Tu Personal AI OS con Obsidian + Claude',
  duration: '3-4 horas (proyecto de fin de semana)',
  xpReward: 150,
  videoId: 'roPfcQHdUtY',
  videoCaption: 'Obsidian + Claude Code como sistema operativo personal — guía completa 2026',
  content: [
    {
      type: 'intro',
      text: 'Un tool requiere que tú lo uses. Un operating system simplemente corre. Este proyecto transforma Obsidian de una app de notas en un sistema que genera tu briefing de la mañana, procesa todo lo que capturas, revisa tus proyectos cada semana, y trabaja mientras tú duermes. Basado en la arquitectura de CyrilXBT, verificada y adaptada a mayo 2026.',
    },
    {
      type: 'concept',
      title: 'Las 3 capas del sistema',
      body: 'Capa 1 — Storage (Obsidian): archivos Markdown en tu Mac. Portable, sin vendor lock-in, legible por humanos y máquinas. Capa 2 — Intelligence (Claude Code + Filesystem MCP): Claude lee tu vault completo, razona sobre él, genera outputs y lo actualiza. Capa 3 — Automation (Scheduled Tasks de CoWork o cron): los 5 workflows corren automáticamente según horario. Sin estas 3 capas juntas, tienes una herramienta, no un sistema.',
      highlight: 'Para este proyecto usamos Scheduled Tasks de CoWork en lugar de N8N — ya lo tienes configurado desde la Lección 3.4 y está incluido en tu plan Pro. N8N es la alternativa para usuarios avanzados que quieren más control.',
    },
    {
      type: 'cards',
      title: 'La estructura de 8 carpetas que nunca rompe',
      items: [
        { name: '00 - CAPTURE', tag: 'Entrada', color: '#6366F1', desc: 'Todo lo que llega sin procesar. No requiere decisión al capturar. El procesador lo archiva cada noche automáticamente.' },
        { name: '01 - ACTIVE', tag: 'Vivo', color: '#10B981', desc: 'Solo lo que existe ahora: proyectos activos, áreas de vida, notas diarias. Nada histórico, nada aspiracional.' },
        { name: '02 - RESOURCES', tag: 'Referencia', color: '#F97316', desc: 'Cosas que podrías necesitar algún día. Investigación, referencias, plantillas, bookmarks.' },
        { name: '03 - SYSTEM', tag: 'Infraestructura', color: '#8B5CF6', desc: 'El sistema operativo mismo. CLAUDE.md, skills, workflows, logs. Nunca edites outputs generados aquí.' },
        { name: '04 - GENERATED', tag: 'Outputs de Claude', color: '#EC4899', desc: 'Todo lo que Claude genera automáticamente. Briefings, resúmenes, análisis, borradores. Nunca edites manualmente.' },
        { name: '05 - QUEUE', tag: 'Tareas para Claude', color: '#0EA5E9', desc: 'Tu inbox para Claude. Drops un archivo con una tarea. Claude lo procesa en máx 2 horas. El output llega a GENERATED.' },
      ],
    },
    {
      type: 'concept',
      title: 'El CLAUDE.md maestro: tu fuente única de verdad',
      body: 'El CLAUDE.md es el documento que le dice a Claude todo sobre tu vida antes de que corra cualquier workflow. Sin él, cada sesión empieza desde cero. Con él, cada sesión empieza con contexto completo de quién eres, qué proyectos tienes activos, cuáles son tus prioridades de esta semana, y cómo quieres que se genere el contenido. Este archivo se actualiza cada lunes en 5 minutos. Ese es el único mantenimiento real que requiere el sistema.',
      highlight: 'Regla de oro: cuando cambias tus prioridades, actualizas CLAUDE.md y todos los workflows subsiguientes reflejan la nueva realidad automáticamente. No necesitas actualizar 5 documentos distintos.',
    },
    {
      type: 'cards',
      title: 'Los 5 workflows automáticos',
      items: [
        { name: 'Morning Briefing (6AM)', tag: 'Diario', color: '#6366F1', desc: 'Lee CLAUDE.md + calendario de hoy + loops abiertos de ayer. Genera en < 300 palabras: la acción más importante del día, reuniones con contexto, pulso de proyectos activos.' },
        { name: 'Capture Processor (8PM)', tag: 'Diario', color: '#10B981', desc: 'Procesa todo lo que llegó a 00-CAPTURE durante el día. Lo clasifica (tarea, idea, referencia, nota, evento) y lo archiva en la carpeta correcta automáticamente.' },
        { name: 'Weekly Review (Domingo 7PM)', tag: 'Semanal', color: '#F97316', desc: 'Lee todas las notas diarias de la semana. Genera: qué avanzó, qué se estancó, el patrón de la semana, las 3 prioridades de la próxima semana, la decisión más importante pendiente.' },
        { name: 'Queue Processor (cada 2h)', tag: 'On-demand', color: '#8B5CF6', desc: 'Revisa 05-QUEUE. Si encuentra archivos, los procesa según el nombre: RESEARCH-, SUMMARIZE-, DRAFT-, PLAN-, DECIDE-. Output en GENERATED.' },
        { name: 'Project Health (Lunes 7AM)', tag: 'Semanal', color: '#EC4899', desc: 'Revisa todos los proyectos activos. Genera: On track / At risk / Stalled / Blocked. Flaggea proyectos sin actividad > 7 días. Crea automáticamente una tarea en QUEUE para proyectos estancados.' },
      ],
    },
    {
      type: 'concept',
      title: 'Las 3 características anti-breakdown',
      body: '1) Capture Safety Net: todo va a 00-CAPTURE primero. Nunca pierdes algo porque no sabías dónde archivarlo. 2) Archive Never Delete: nada se borra jamás. Todo lo completado va a 07-ARCHIVE. El costo de guardar todo es cero. 3) CLAUDE.md como fuente única: un archivo que gobierna todo. Cuando cambia tu vida, actualizas uno, no diez.',
      highlight: 'El sistema sobrevive tus días malos porque el Morning Briefing sigue corriendo aunque no lo abras. Las capturas siguen procesándose aunque no las toques. El Weekly Review sigue generándose aunque no lo leas. Eso es la diferencia entre una herramienta y un sistema operativo.',
    },
    {
      type: 'concept',
      title: 'Integración con NotebookLM para investigación profunda',
      body: 'El sistema base usa Obsidian + Claude. Para investigación seria, agrega NotebookLM como capa de síntesis: (1) Capturas fuentes en NotebookLM (PDFs, URLs, YouTube). (2) NotebookLM sintetiza con citaciones. (3) Claude toma esa síntesis y la convierte en una nota estructurada en tu vault de Obsidian. El workflow: "NotebookLM hace la investigación, Claude escribe el contenido." Existe un MCP oficial (ray-manaloto/notebooklm-claude-integration) que automatiza este handoff completamente.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Por qué la mayoría de sistemas de productividad en Obsidian se abandonan después de unas semanas?',
      opts: [
        'Porque Obsidian tiene demasiadas funciones y es difícil de aprender',
        'Porque requieren mantenimiento manual constante — cuando la vida se complica, el mantenimiento cae y el sistema se vuelve fuente de culpa en lugar de leverage',
        'Porque los plugins de Obsidian son inestables y se rompen frecuentemente',
        'Porque Obsidian no tiene app móvil y solo funciona en desktop',
      ],
      correct: 1,
      exp: 'El insight central de CyrilXBT: los sistemas están diseñados para los días buenos. Cuando tienes tiempo y energía, los mantienes. Cuando no, se acumulan y generan culpa. La solución es una arquitectura que se mantiene sola cuando tú no puedes.',
    },
    {
      q: '¿Cuál es la función específica del archivo CLAUDE.md en este sistema?',
      opts: [
        'Es el archivo de configuración técnica de Claude Code para el proyecto',
        'Es la fuente única de verdad que le dice a Claude todo sobre tu vida antes de cada workflow — proyectos, prioridades, áreas, estándares de output',
        'Es donde Claude guarda los logs de todas las acciones que ejecutó',
        'Es una plantilla de Obsidian para crear notas con formato consistente',
      ],
      correct: 1,
      exp: 'CLAUDE.md es el contexto persistente del sistema. Sin él, cada workflow empieza desde cero. Con él, cada workflow sabe exactamente quién eres, qué importa esta semana, y cómo generar output que te sea útil. Actualizarlo cada lunes (5 minutos) es el único mantenimiento real del sistema.',
    },
    {
      q: 'Caes enfermo por 4 días y no tocas Obsidian. ¿Qué pasa con el sistema?',
      opts: [
        'El sistema se rompe — sin mantenimiento diario, los datos se desordenan',
        'Claude detiene todos los workflows automáticamente después de 24h sin actividad del usuario',
        'El sistema sigue corriendo: el Morning Briefing se genera cada día, las capturas se procesan cada noche, el Weekly Review aparece el domingo — todo sin que intervengas',
        'Las capturas se acumulan en 00-CAPTURE pero el resto del sistema funciona',
      ],
      correct: 2,
      exp: 'Esa es la diferencia fundamental entre herramienta y sistema operativo. Los workflows automáticos no dependen de que tú estés activo. Cuando vuelvas después de 4 días, habrá 4 Morning Briefings generados, las capturas estarán procesadas y archivadas, y el Weekly Review del domingo estará esperándote.',
    },
  ],
  challenge: {
    title: 'Proyecto 9.1 — Construye tu Personal AI OS este fin de semana',
    desc: 'El sistema completo en 2 días. Build order exacto para que funcione sin errores.',
    steps: [
      'SÁBADO MAÑANA (2h) — Storage Layer: Instala Obsidian si no lo tienes. Crea la estructura de 8 carpetas exactamente como se describe. Crea tu CLAUDE.md con información real: tus proyectos activos, tus áreas de vida, tus 3 prioridades de esta semana.',
      'SÁBADO TARDE (1h) — Intelligence Layer: Configura el Filesystem MCP de Claude Desktop apuntando a tu vault. Abre Claude Code en la carpeta del vault. Corre manualmente el prompt del Morning Briefing y verifica que produce output útil basado en tu CLAUDE.md.',
      'SÁBADO NOCHE (30min) — Primera tarea en Queue: Crea un archivo en 05-QUEUE llamado "RESEARCH-[tema que te interese].md". Describe qué quieres investigar. Deja que Claude lo procese. Revisa el output en GENERATED.',
      'DOMINGO MAÑANA (2h) — Automation Layer: En CoWork, crea las Scheduled Tasks para los 5 workflows con los prompts exactos de esta lección. Configura los horarios. Verifica que aparecen como "Scheduled".',
      'DOMINGO TARDE (1h) — Workflows restantes: Configura los 5 workflows. Ajusta el CLAUDE.md con lo que aprendiste del Morning Briefing manual.',
      'LUNES MAÑANA — Validación: El primer Morning Briefing automático debería haberse generado a las 6AM. Léelo. ¿Refleja tus prioridades reales? Si no, actualiza CLAUDE.md.',
    ],
    checkpoint: 'El sistema funciona cuando el lunes por la mañana hay un Morning Briefing generado automáticamente en 04-GENERATED/briefings/ que refleja tus prioridades reales y no requirió que tú hicieras nada desde el domingo. Ese momento es cuando entiendes la diferencia entre herramienta y sistema operativo.',
  },
}

// ─── PROYECTO 2: NotebookLM + Claude — Research Stack Definitivo ──────────────
export const PROJECT_RESEARCH_STACK = {
  id: 'mod9_l2',
  num: '9.2',
  title: 'Research Stack Definitivo: NotebookLM + Claude',
  duration: '2-3 horas (setup) + uso diario',
  xpReward: 120,
  videoId: 'ssHbtzGIfXk',
  videoCaption: 'NotebookLM + Claude Code: el research stack que nadie usa pero debería — 2026',
  content: [
    {
      type: 'intro',
      text: 'NotebookLM puede procesar 300 fuentes simultáneamente con citaciones verificadas. Claude puede razonar, sintetizar y generar entregables de cualquier tipo. El problema: la mayoría los usa por separado. Cuando los conectas vía MCP, obtienes algo diferente: NotebookLM hace la investigación, Claude escribe el contenido — sin copiar y pegar, sin cambiar de pestaña, sin perder citaciones.',
    },
    {
      type: 'concept',
      title: '¿Qué es NotebookLM y por qué es el mejor compañero de Claude?',
      body: 'NotebookLM es la herramienta de investigación de Google, powered por Gemini 2.5. Su superpoder: procesa hasta 300 fuentes (PDFs, URLs, YouTube, Google Docs, audio) y responde preguntas con citaciones exactas apuntando a qué fuente dijo qué. Su limitación: las respuestas quedan en el navegador. No genera código, no crea archivos, no automatiza. Ahí entra Claude. NotebookLM + Claude = investigación verificada + ejecución autónoma.',
      highlight: 'Regla de uso: un notebook por tema, no uno gigante con todo. NotebookLM te da 100 notebooks gratis. Úsalos: "Competidores Q2 2026", "Arquitectura de sistemas 2026", "Fotografía de bodas — tendencias". Notebooks específicos producen respuestas más precisas.',
    },
    {
      type: 'cards',
      title: '3 formas de conectar NotebookLM con Claude (de más simple a más potente)',
      items: [
        {
          name: 'Nivel 1: Copy-paste manual',
          tag: 'Sin setup',
          color: '#10B981',
          desc: 'Haces una pregunta en NotebookLM, copias la respuesta con citaciones, la pegas en Claude con instrucciones de qué hacer con ella. Lento pero funciona hoy mismo sin configurar nada.',
        },
        {
          name: 'Nivel 2: Plugin de Claude Code',
          tag: 'Recomendado',
          color: '#6366F1',
          desc: 'Instala el plugin notebooklm de Claude Code. Comandos: /nlm list (ver tus notebooks), /nlm ask "pregunta" (respuesta con citaciones directo en la terminal). Claude usa la respuesta para generar entregables automáticamente.',
        },
        {
          name: 'Nivel 3: MCP + automatización completa',
          tag: 'Avanzado',
          color: '#F97316',
          desc: 'Configura el MCP server de NotebookLM. Claude puede crear notebooks, agregar fuentes, hacer preguntas y usar las respuestas en workflows automáticos — todo sin que intervengas.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'El workflow de 15 minutos que reemplaza medio día de investigación',
      body: 'Flujo documentado y verificado: (1) Crea un notebook en NotebookLM sobre tu tema. Agrega 10-20 fuentes relevantes (PDFs, URLs, YouTube). (2) En Claude Code, usa /nlm ask para hacer 3-5 preguntas clave al notebook. (3) Claude recibe las respuestas con citaciones. (4) Claude genera el entregable final: reporte, newsletter, brief de estrategia, post de blog, deck de presentación. (5) Todo el output queda en tu vault de Obsidian. Sin copiar, sin pegar, sin perder el hilo.',
      highlight: 'Caso real documentado: un developer construyó un dashboard completo de Next.js en un día usando NotebookLM para investigar la arquitectura y Claude Code para construirla. Prompts de máximo 2 oraciones. "NotebookLM hizo el pensar, Claude Code hizo el construir."',
    },
    {
      type: 'concept',
      title: 'Knowledge Distillation: convertir investigación en Skills permanentes',
      body: 'La técnica más avanzada: usar NotebookLM + Claude para crear un SKILL.md permanente a partir de un corpus de investigación. Proceso: (1) Creas un notebook con las mejores fuentes sobre un tema (Playwright testing, fotografía de retrato, arquitectura de sistemas). (2) Claude hace una batería de preguntas estructuradas al notebook. (3) Las respuestas se sintetizan en un SKILL.md que Claude puede usar en cualquier proyecto futuro. Entrenas una vez, reutilizas para siempre.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Aplicación práctica: Research Stack para fotografía',
      body: 'Flujo específico para tu caso: (1) Notebook "Tendencias fotografía de bodas 2026" — agrega 20 artículos, PDFs de revistas, videos de YouTube de fotógrafos referentes. (2) Notebook "Precios y paquetes — competencia" — agrega sitios web de fotógrafos en tu ciudad. (3) Claude consulta ambos notebooks y genera: análisis de mercado, propuesta de precios, guía de estilo para tu portafolio. (4) Todo se archiva en tu vault de Obsidian bajo RESOURCES/photography/.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la ventaja crítica de NotebookLM sobre simplemente darle URLs a Claude para que las lea?',
      opts: [
        'NotebookLM es más rápido que Claude para leer páginas web',
        'NotebookLM procesa hasta 300 fuentes con citaciones exactas — cada respuesta indica qué fuente específica dijo qué, eliminando alucinaciones en los datos de investigación',
        'NotebookLM es gratis mientras que usar la API de Claude tiene costo',
        'NotebookLM puede procesar archivos de audio y video que Claude no puede',
      ],
      correct: 1,
      exp: 'La citación exacta es el superpoder. Cuando NotebookLM dice algo, te dice exactamente qué PDF, en qué página, qué video de YouTube, en qué minuto. Claude razona muy bien pero puede alucinar fuentes. NotebookLM no inventa — solo sintetiza lo que está en tus fuentes reales.',
    },
    {
      q: '¿Qué es la "Knowledge Distillation" en el contexto de NotebookLM + Claude?',
      opts: [
        'Reducir el tamaño de un notebook eliminando fuentes redundantes',
        'Usar NotebookLM para investigar un tema y Claude para convertir esa investigación en un SKILL.md permanente que Claude puede usar en cualquier proyecto futuro',
        'Exportar los audios de NotebookLM a un formato que Claude pueda procesar',
        'Un proceso de fine-tuning donde NotebookLM entrena a Claude en un tema específico',
      ],
      correct: 1,
      exp: 'Knowledge Distillation = convertir investigación efímera en conocimiento permanente. En lugar de consultar NotebookLM cada vez que necesitas saber algo sobre Playwright o fotografía de retrato, entrenas una Skill que Claude carga automáticamente cuando es relevante. Investigas una vez, aplicas siempre.',
    },
    {
      q: 'Para investigar tendencias de fotografía de bodas en tu mercado local, ¿cuántos notebooks de NotebookLM crearías y por qué?',
      opts: [
        'Uno grande con todas las fuentes — es más eficiente y NotebookLM maneja el volumen',
        'Al menos 2-3 notebooks separados por tema (tendencias globales, competencia local, precios de mercado) — notebooks específicos producen respuestas más precisas y citaciones más útiles',
        'Tantos como fuentes tengas — un notebook por fuente es la práctica recomendada',
        'Solo uno — NotebookLM pierde coherencia cuando tienes múltiples notebooks sobre el mismo tema',
      ],
      correct: 1,
      exp: 'La recomendación documentada es un notebook por tema específico. "Tendencias globales de fotografía de bodas" produce respuestas muy diferentes a "Precios de fotógrafos en Medellín". Mezclarlos en un notebook diluye la precisión. Tienes 100 notebooks gratis — úsalos.',
    },
  ],
  challenge: {
    title: 'Proyecto 9.2 — Tu primer Research Stack funcional',
    desc: 'Construye el sistema NotebookLM + Claude para un tema real que necesites investigar ahora.',
    steps: [
      'Elige un tema que necesites investigar en las próximas 2 semanas (tendencias de tu industria, un competidor, una tecnología, un destino para un proyecto fotográfico).',
      'Crea un notebook en notebooklm.google.com con el nombre del tema. Agrega mínimo 10 fuentes relevantes: artículos, PDFs, videos de YouTube sobre el tema.',
      'Deja que NotebookLM procese las fuentes (puede tomar unos minutos). Luego haz 5 preguntas clave que responderían tus dudas principales sobre el tema.',
      'Instala el plugin de NotebookLM para Claude Code: sigue las instrucciones de github.com/ray-manaloto/notebooklm-claude-integration',
      'En Claude Code, usa /nlm ask para hacer las mismas 5 preguntas. Observa cómo las respuestas llegan con citaciones directamente a tu terminal.',
      'Pídele a Claude que genere un entregable con esa información: un reporte, un brief de estrategia, o una nota de Obsidian. Guárdalo en 02-RESOURCES/ de tu vault.',
    ],
    checkpoint: 'El Research Stack funciona cuando puedes ir desde "tengo 10 fuentes sobre un tema" hasta "tengo un entregable listo con citaciones verificadas" en menos de 30 minutos — sin copiar, sin pegar, sin cambiar de ventana más de una vez.',
  },
}

// ─── PROYECTO 3: Sitio Web de Fotografía con Portal de Clientes ───────────────
export const PROJECT_PHOTOGRAPHY_WEB = {
  id: 'mod9_l3',
  num: '9.3',
  title: 'Sitio Web de Fotografía + Portal de Clientes con Claude Code',
  duration: '1-2 semanas (proyecto completo)',
  xpReward: 200,
  videoId: '73eFWU-edO4',
  videoCaption: 'Construir un sitio web profesional con Claude Code — de cero a deploy 2026',
  content: [
    {
      type: 'intro',
      text: 'Claude Code puede construir desde cero un sitio web profesional de fotografía con: galería visual impactante, sistema de autenticación para clientes, páginas privadas por proyecto donde cada cliente ve solo sus fotos, y un formulario de feedback integrado. Sin agencia, sin developer freelance, sin plantillas genéricas. En tu stack exacto, con tu diseño, desplegado en tu dominio.',
    },
    {
      type: 'concept',
      title: 'Stack tecnológico recomendado para este proyecto',
      body: 'Next.js 15 (App Router) — el framework más maduro para sitios con autenticación y páginas dinámicas. TypeScript — para que Claude genere código más robusto y con menos errores. Tailwind CSS — diseño moderno sin escribir CSS manualmente. NextAuth.js — autenticación completa (Google, email mágico, credentials). Supabase o Vercel Postgres — base de datos para usuarios, proyectos y comentarios. Vercel — deploy gratuito con dominio personalizado. Claude Design — para generar el sistema visual.',
      highlight: 'No necesitas saber programar para que Claude Code construya esto. Necesitas saber describir qué quieres con precisión y revisar lo que genera. Esa es exactamente la habilidad que has desarrollado en este curso.',
    },
    {
      type: 'cards',
      title: 'Las 5 funcionalidades clave del portal',
      items: [
        {
          name: '1. Galería pública',
          tag: 'Marketing',
          color: '#6366F1',
          desc: 'Portafolio público con categorías (bodas, retratos, comercial). Lightbox para ver fotos en grande. SEO optimizado. Lazy loading para que cargue rápido con fotos en alta resolución.',
        },
        {
          name: '2. Autenticación de clientes',
          tag: 'Privacidad',
          color: '#10B981',
          desc: 'Clientes se registran con su email o con Google. Tú apruebas manualmente cada cuenta. Solo usuarios aprobados pueden ver el portal privado.',
        },
        {
          name: '3. Páginas privadas por proyecto',
          tag: 'Core del sistema',
          color: '#F97316',
          desc: 'Cada cliente solo ve sus proyectos. "Boda Juan & María - Junio 2026" es invisible para cualquier otro cliente. Galerías privadas con fotos en alta resolución para selección.',
        },
        {
          name: '4. Sistema de feedback',
          tag: 'Colaboración',
          color: '#8B5CF6',
          desc: 'El cliente puede comentar fotos específicas, marcar favoritas, pedir ajustes. Tú ves todos los comentarios en un dashboard de admin. Elimina el caos de WhatsApp y email.',
        },
        {
          name: '5. Panel de administración',
          tag: 'Control',
          color: '#EC4899',
          desc: 'Dashboard para ti: gestionar clientes, crear proyectos, subir fotos, ver qué proyectos tienen feedback pendiente, gestionar el status de cada entrega.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Cómo pedirle a Claude Code que construya el sitio: el método de fases',
      body: 'No pidas todo de golpe. Claude Code funciona mejor con fases secuenciales: Fase 1 (Claude Design): "Crea el sistema de diseño visual para mi sitio de fotografía. Estilo minimalista, oscuro, con tipografía serif elegante. Paleta: negro #0A0A0A, blanco #F5F5F5, acento dorado #C9A84C." Fase 2: "Construye la estructura base del proyecto Next.js con las páginas: Home, Portafolio, Servicios, Contacto." Fase 3: "Implementa el sistema de autenticación con NextAuth.js. Los usuarios se registran con email y tú los apruebas manualmente." Fase 4: "Construye el módulo de galerías privadas por cliente." Fase 5: "Agrega el sistema de comentarios y favoritos." Cada fase, revisas antes de avanzar.',
      highlight: 'Antes de empezar, sube a un Project de Claude: tu portafolio actual (si tienes), 3 sitios de fotógrafos que admires como referencia, y tu guía de marca (si tienes). Claude usará todo eso como contexto.',
    },
    {
      type: 'concept',
      title: 'Gallery AI Photo Architect: la Skill existente que te ahorra días',
      body: 'Existe una Skill oficial en el ecosistema de Claude Code (mcpmarket.com/tools/skills/ai-photo-gallery-architect) que automatiza todo el flujo de curación fotográfica: extrae metadatos EXIF de tus fotos, hace batch review, crea secuenciación visual basada en ritmo y coherencia temática, y genera las páginas de galería en Astro o Next.js. Instala esta Skill antes de construir tu módulo de galerías y Claude la aplicará automáticamente.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Deploy y dominio: llevar el sitio a producción',
      body: 'Claude Code puede hacer el deploy completo. Instrucción: "Conecta este proyecto a Vercel, configura las variables de entorno necesarias, y despliega en producción." Vercel ofrece plan gratuito con dominio personalizado. Para el dominio: compra en Namecheap o Google Domains, Claude Code configura los DNS. El sitio puede estar en vivo en menos de 1 hora después de terminado el desarrollo.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Por qué es mejor construir el sitio web por fases en lugar de pedirle todo a Claude Code en un solo prompt?',
      opts: [
        'Claude Code tiene un límite técnico de cuántas instrucciones puede recibir simultáneamente',
        'Las fases permiten revisar y aprobar cada componente antes de construir sobre él — un error en la autenticación es más fácil de corregir antes de construir el portal de clientes encima',
        'Claude Code cobra más tokens cuando el prompt es muy largo',
        'No hay diferencia real — es solo una preferencia estilística del programador',
      ],
      correct: 1,
      exp: 'El enfoque por fases es la práctica de ingeniería de software correcta aplicada a AI: construye, verifica, construye sobre lo verificado. Si la autenticación tiene un bug y encimas el portal de clientes, el bug se propaga. Fase por fase = calidad acumulativa.',
    },
    {
      q: '¿Cuál es la ventaja principal del sistema de portal de clientes vs simplemente enviar fotos por WhatsApp o Google Drive?',
      opts: [
        'El portal es más rápido que WhatsApp para transferir archivos grandes',
        'El portal centraliza feedback estructurado, control de acceso por proyecto, historial de aprobaciones, y elimina el caos de mensajes dispersos en múltiples canales',
        'Google Drive y WhatsApp no permiten subir fotos en alta resolución',
        'El portal solo tiene ventajas estéticas — funcionalmente es equivalente',
      ],
      correct: 1,
      exp: 'El valor no es técnico sino operacional. WhatsApp mezcla un proyecto con otro, los comentarios se pierden en el hilo, el cliente de bodas de enero puede ver accidentalmente el proyecto de retratos de marzo. El portal resuelve acceso, organización, feedback estructurado y privacidad en un solo lugar.',
    },
    {
      q: 'Un cliente quiere ver y comentar sus fotos de bodas pero no quiere que nadie más las vea. ¿Cómo garantiza esto la arquitectura del sistema?',
      opts: [
        'Con una contraseña única por galería que tú compartes manualmente',
        'Con autenticación por usuario + control de acceso a nivel de proyecto — cada usuario aprobado solo puede ver los proyectos que tú le asignaste explícitamente',
        'Haciendo las URLs de las galerías suficientemente largas y complejas para que nadie las adivine',
        'Con encriptación end-to-end que solo el cliente puede descifrar',
      ],
      correct: 1,
      exp: 'La arquitectura correcta usa Row Level Security (RLS) en la base de datos: cuando el cliente X hace login, la base de datos solo le devuelve los proyectos donde el campo cliente_id = X. No es una contraseña ni una URL secreta — es acceso controlado a nivel de datos. Claude Code puede implementar esto con Supabase RLS en menos de 1 hora.',
    },
  ],
  challenge: {
    title: 'Proyecto 9.3 — Construye tu sitio de fotografía este mes',
    desc: 'De brief a sitio en producción. Plan de 2 semanas con Claude Code.',
    steps: [
      'SEMANA 1, DÍA 1 — Brief visual: Escoge 3 sitios de fotógrafos que admires. Prepara 10 fotos de tu portafolio que representen tu estilo. Define: paleta de colores, tipografía preferida, tono del copy (íntimo, profesional, artístico).',
      'SEMANA 1, DÍA 2-3 — Setup y diseño: Crea un Project en Claude con tus referencias visuales. Usa Claude Design para generar el sistema visual. Pide: "Crea el setup inicial del proyecto Next.js con la estructura de carpetas, Tailwind configurado con mi paleta, y los componentes base."',
      'SEMANA 1, DÍA 4-5 — Páginas públicas: "Construye las páginas Home, Portafolio (con las fotos de prueba que subo), Servicios con tus 3 paquetes principales, y Contacto con formulario funcional."',
      'SEMANA 2, DÍA 1-2 — Autenticación: "Implementa NextAuth.js. Clientes se registran con email. Yo apruebo manualmente cada cuenta desde el panel de admin. Crea el panel de admin básico."',
      'SEMANA 2, DÍA 3-4 — Portal privado: "Construye el módulo de proyectos privados. Cada cliente solo ve sus proyectos. Incluye: galería de fotos, sistema de favoritos, campo de comentarios por foto."',
      'SEMANA 2, DÍA 5 — Deploy: "Despliega en Vercel. Configura el dominio [tudominio].com. Verifica que la autenticación funciona en producción."',
    ],
    checkpoint: 'El proyecto está completo cuando: (1) El sitio está live en tu dominio. (2) Puedes crear una cuenta de cliente de prueba y verificar que solo ve los proyectos que le asignas. (3) Puedes subir fotos a un proyecto privado y el cliente puede comentarlas. (4) Tú puedes ver todos los comentarios en tu panel de admin.',
  },
}

// ─── PROYECTO 4: QA Automation Agent con Claude Code + Playwright ─────────────
export const PROJECT_QA_AGENT = {
  id: 'mod9_l4',
  num: '9.4',
  title: 'QA Agent Autónomo: Claude Code + Playwright para tu Sitio',
  duration: '1 semana',
  xpReward: 175,
  videoId: 'roPfcQHdUtY',
  videoCaption: 'QA Automation con Claude Code y Playwright MCP — pipeline completo 2026',
  content: [
    {
      type: 'intro',
      text: '⚠️ Prerequisito: este proyecto depende de haber completado el Proyecto 9.3 (Sitio Web de Fotografía + Portal de Clientes). El QA Agent testea ese sistema — sin él no hay nada que probar.\n\nConstruiste el sitio web de fotografía en el Proyecto 9.3. Ahora necesitas garantizar que funciona correctamente después de cada cambio. Hacerlo manualmente — abrir el sitio, hacer clic en todo, probar el login, verificar que las galerías privadas no son accesibles sin auth — toma 30 minutos por deploy. Un QA Agent con Claude Code y Playwright lo hace en 3 minutos, en cada Pull Request, automáticamente. Para siempre.',
    },
    {
      type: 'concept',
      title: 'Por qué Playwright + Claude Code es la combinación dominante en 2026',
      body: 'Playwright controla el navegador usando el árbol de accesibilidad — no capturas de pantalla pixeladas. Claude Code obtiene información estructurada y determinista sobre cada elemento: "hay un botón con texto Submit en esta posición del DOM", no "parece que hay un botón en algún lugar". El resultado es automatización de tests que es más rápida, más confiable y sin los errores de alucinación que tienen los sistemas basados en screenshots. Según el State of Software Quality 2025, 72% de equipos de QA ya usan IA para generación de tests.',
      highlight: 'Dato clave: el Playwright MCP server de Microsoft es el estándar de facto. Instálalo una vez, y Claude Code puede controlar cualquier navegador web como un humano — clic, scroll, fill, submit, screenshot, assertions — pero a la velocidad de la máquina.',
    },
    {
      type: 'cards',
      title: 'Los 4 agentes del QA Pipeline (patrón documentado de TestDino)',
      items: [
        {
          name: 'Agente 1: Explorer',
          tag: 'Análisis',
          color: '#6366F1',
          desc: 'Navega el sitio automáticamente, mapea todas las páginas, flows y formularios. Genera un mapa de cobertura: qué existe y qué necesita ser testeado. Input: URL. Output: app.context.md con toda la estructura.',
        },
        {
          name: 'Agente 2: Test Case Generator',
          tag: 'Planificación',
          color: '#10B981',
          desc: 'Lee el app.context.md y genera los casos de prueba. Checkpoint humano aquí: tú apruebas qué casos son prioritarios antes de que se genere el código. Input: contexto + tu aprobación. Output: lista de test cases.',
        },
        {
          name: 'Agente 3: Automation Writer',
          tag: 'Construcción',
          color: '#F97316',
          desc: 'Convierte los test cases aprobados en código Playwright real con Page Object Model. Sigue las mejores prácticas: selectores estables, aserciones explícitas, manejo de esperas. Output: archivos .spec.ts listos para correr.',
        },
        {
          name: 'Agente 4: Maintenance',
          tag: 'Evolución',
          color: '#8B5CF6',
          desc: 'Cuando el sitio cambia (nuevo componente, selector modificado), este agente detecta qué tests fallaron por cambios del sitio (no por bugs) y propone las actualizaciones necesarias con un diff para tu aprobación.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Los tests críticos para tu sitio de fotografía',
      body: 'Para el portal de fotografía del Proyecto 9.3, estos son los tests de mayor prioridad: (1) Auth flow: registro → aprobación → login → acceso al portal. (2) Privacy guard: usuario A no puede ver proyectos de usuario B. (3) Upload flow: subir fotos a un proyecto y verificar que aparecen en la galería. (4) Comment system: crear, ver y responder comentarios en fotos. (5) Admin flow: aprobar un usuario, crear un proyecto, asignar a un cliente. Estos 5 flujos cubren el 90% de los paths críticos.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Instalar Playwright Skill: el handbook de Claude para testing',
      body: 'Existe una Skill oficial de Playwright con 46 guías de buenas prácticas: selectores, aserciones, auth, mocking, debugging, CI/CD. Instálala antes de construir cualquier test: npx skills add testdino-hq/playwright-skill/core. Una vez instalada, Claude Code lee automáticamente las guías y aplica las mejores prácticas sin que tengas que explicarle cómo funciona Playwright. También existe la guía de migración desde Cypress si ya tienes tests en Cypress: npx skills add testdino-hq/playwright-skill/migration.',
      highlight: 'Si ya usas Cypress: Playwright tiene ventajas claras en 2026 — soporte nativo para múltiples navegadores, mejor manejo de aplicaciones modernas de React/Next.js, y el MCP server de Microsoft que se integra directamente con Claude Code. La migración vale la pena.',
    },
    {
      type: 'concept',
      title: 'CI/CD: tests automáticos en cada Pull Request',
      body: 'El paso final es correr los tests automáticamente en GitHub Actions cada vez que haces un deploy. Claude Code configura el workflow completo: instalar Playwright, correr los tests en múltiples navegadores (Chromium, Firefox, WebKit), generar el reporte de resultados, y bloquear el merge si algún test crítico falla. Instrucción: "Configura GitHub Actions para correr los tests de Playwright en cada Pull Request. Si falla algún test del auth flow o del privacy guard, bloquea el merge automáticamente."',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Por qué Playwright + Claude Code supera a los sistemas de QA basados en capturas de pantalla?',
      opts: [
        'Las capturas de pantalla son más lentas de procesar que el árbol de accesibilidad',
        'Playwright usa el árbol de accesibilidad del DOM — Claude obtiene información estructurada y determinista sobre cada elemento, eliminando alucinaciones sobre qué hay en la pantalla',
        'Las capturas de pantalla solo funcionan en Chrome, Playwright funciona en todos los navegadores',
        'Playwright es más barato en términos de tokens de API que procesar imágenes',
      ],
      correct: 1,
      exp: 'El árbol de accesibilidad le dice a Claude exactamente qué elementos existen, con qué texto, en qué estado. Una captura de pantalla le dice que "hay algo azul que parece un botón en la esquina inferior derecha". La diferencia en confiabilidad es masiva para automatización de QA.',
    },
    {
      q: '¿En qué paso del pipeline de 4 agentes está el único checkpoint de aprobación humana y por qué ahí?',
      opts: [
        'Después del Agente 1 Explorer — para verificar que el mapa del sitio es correcto antes de continuar',
        'Después del Agente 2 Test Case Generator — apruebas qué casos de prueba construir antes de generar el código, así controlas la cobertura sin revisar código técnico',
        'Antes del Agente 4 Maintenance — para aprobar cada cambio en tests existentes',
        'No hay checkpoint humano — el pipeline es completamente autónomo',
      ],
      correct: 1,
      exp: 'El checkpoint entre el Test Case Generator y el Automation Writer es estratégico: en lenguaje natural apruebas qué flujos son prioritarios (no necesitas leer código). Una vez aprobados, el Automation Writer genera código. Revisas la lista de casos, no el código Playwright — mucho más eficiente.',
    },
    {
      q: '¿Qué hace el Agente 4 (Maintenance) cuando tu sitio web cambia después de un redesign?',
      opts: [
        'Borra todos los tests existentes y los regenera desde cero',
        'Detecta qué tests fallaron por cambios del sitio vs bugs reales, y propone las actualizaciones necesarias con un diff para tu aprobación',
        'Envía una alerta de error y espera que tú corras los tests manualmente',
        'Deshabilita los tests que fallan hasta que el equipo los revise',
      ],
      correct: 1,
      exp: 'La distinción crítica: un test puede fallar porque (a) hay un bug real, o (b) el sitio cambió intencionalmente y el test quedó desactualizado. El Agente 4 detecta la diferencia y solo te pide aprobar las actualizaciones de los tests que fallaron por cambios esperados. Los bugs reales los escala para que los corrijas.',
    },
  ],
  challenge: {
    title: 'Proyecto 9.4 — QA Agent para tu sitio de fotografía',
    desc: 'Construye el pipeline completo de QA automatizada sobre el sitio del Proyecto 9.3.',
    steps: [
      'Configura el Playwright MCP Server: sigue las instrucciones de microsoft/playwright-mcp en GitHub. Verifica que Claude Code puede controlar el navegador.',
      'Instala la Playwright Skill: npx skills add testdino-hq/playwright-skill/core. Verifica que Claude Code la reconoce con /skills.',
      'Corre el Agente Explorer: "Navega mi sitio en http://localhost:3000 y genera un app.context.md con todos los flows, formularios y páginas que encontraste. Presta especial atención a los flows de autenticación y galería privada."',
      'Revisa el app.context.md. Añade cualquier context que Claude no pudo detectar automáticamente (reglas de negocio, estados edge case).',
      'Corre el Agente Test Case Generator: "Basándote en app.context.md, propón los 10 casos de prueba más críticos para este sistema. Prioriza: auth flow, privacy (usuario A no ve proyectos de usuario B), y upload de fotos."',
      'Aprueba o ajusta la lista. Luego: "Construye los tests de Playwright para los casos aprobados usando Page Object Model. Guárdalos en tests/e2e/."',
      'Corre los tests: npx playwright test. Verifica que todos pasan en local.',
      'Configura CI/CD: "Crea el GitHub Actions workflow para correr estos tests en cada PR. Bloquea el merge si falla el auth flow o el privacy test."',
    ],
    checkpoint: 'El QA Agent está funcionando cuando: abres un Pull Request, GitHub Actions corre automáticamente los tests, y si hay un bug en el sistema de autenticación, el merge queda bloqueado antes de que llegue a producción. Ese es el nivel de seguridad que los equipos profesionales de engineering tienen.',
  },
}

// ─── PROYECTO 5: Claude como Asistente de Investigación Fotográfica ───────────
export const PROJECT_PHOTOGRAPHY_AI = {
  id: 'mod9_l5',
  num: '9.5',
  title: 'Claude como Asistente Creativo de Fotografía',
  duration: '3-5 horas de setup + uso continuo',
  xpReward: 130,
  videoId: 'Y3MK6OpKDqE',
  videoCaption: 'Claude para fotógrafos: workflows creativos y de negocio — guía 2026',
  content: [
    {
      type: 'intro',
      text: 'La fotografía tiene dos mundos que raramente se tocan: el creativo y el de negocio. Claude puede potenciar ambos. En el mundo creativo: investigar fotógrafos referentes, analizar composición, generar conceptos para sesiones, escribir los textos que acompañan las fotos. En el mundo de negocio: propuestas a clientes, estrategia de precios, contratos, gestión de leads. Este proyecto integra todos los flujos de trabajo fotográficos con Claude.',
    },
    {
      type: 'concept',
      title: 'Skills fotográficas de la comunidad verificadas (mayo 2026)',
      body: 'El ecosistema de Skills de Claude tiene varias específicas para fotografía. La más notable: Gallery AI Photo Architect (mcpmarket.com/tools/skills/ai-photo-gallery-architect) — Claude actúa como curador digital aplicando los principios de Keith Smith y John Szarkowski para crear secuencias fotográficas con ritmo visual, coherencia temática y arco narrativo. No es una galería de grid simple: es curaduría de nivel editorial. Otras Skills útiles: exif-extractor (metadata de fotos), lightroom-preset-generator (crea presets personalizados describiendo el look que buscas).',
      highlight: null,
    },
    {
      type: 'cards',
      title: 'Los 6 flujos de trabajo fotográficos con Claude',
      items: [
        {
          name: 'Investigación de referentes',
          tag: 'Inspiración',
          color: '#6366F1',
          desc: 'NotebookLM + Claude para estudiar a fondo el trabajo de fotógrafos que admiras. Claude analiza: qué hace única su luz, su composición, su relación con sujetos. Genera guías de estilo personalizadas.',
        },
        {
          name: 'Brief de sesión fotográfica',
          tag: 'Pre-producción',
          color: '#10B981',
          desc: 'Dado el tipo de sesión (bodas, retratos, comercial), el cliente, la locación y el estilo deseado — Claude genera el brief completo: lista de shots, configuraciones de cámara sugeridas, lista de props, timeline del día.',
        },
        {
          name: 'Propuestas y contratos',
          tag: 'Negocio',
          color: '#F97316',
          desc: 'Claude redacta propuestas personalizadas para cada cliente basadas en tu plantilla, sus necesidades específicas y tus tarifas. También genera contratos básicos que luego revisas con un abogado.',
        },
        {
          name: 'Estrategia de precios',
          tag: 'Negocio',
          color: '#8B5CF6',
          desc: 'NotebookLM para investigar precios de la competencia en tu mercado. Claude para analizar tu estructura de costos y generar una estrategia de precios con 3 paquetes posicionados en diferentes segmentos.',
        },
        {
          name: 'Textos para portafolio y redes',
          tag: 'Contenido',
          color: '#EC4899',
          desc: 'Claude escribe las descripciones de tus proyectos para el sitio web, los captions para Instagram, los posts de LinkedIn sobre procesos creativos — todo en tu voz, usando tu Voice Profile y Anti-AI Writing file.',
        },
        {
          name: 'Análisis post-sesión',
          tag: 'Aprendizaje',
          color: '#0EA5E9',
          desc: 'Después de una sesión, describes qué funcionó y qué no. Claude ayuda a identificar patrones, sugiere qué mejorar técnicamente, y actualiza tu CLAUDE.md con lo aprendido.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'El sistema de Knowledge fotográfico en Obsidian',
      body: 'Dentro de tu vault del Proyecto 9.1, crea una sección específica: 02-RESOURCES/photography/ con subcarpetas: referentes/ (notas sobre fotógrafos que estudias), técnicas/ (apuntes sobre luz, composición, post-proceso), clientes/ (un archivo por tipo de cliente: bodas, retratos, corporativo), y tendencias/ (investigación de mercado de NotebookLM). Claude Code puede leer todo esto para dar recomendaciones contextualizadas a tu trabajo específico.',
      highlight: 'El sistema de knowledge fotográfico se hace más valioso con el tiempo. Cada sesión que haces, cada fotógrafo que estudias, cada precio que negocias — todo queda en el vault. En 6 meses, Claude tiene el contexto de 50 sesiones y puede hacer recomendaciones mucho más precisas que al inicio.',
    },
    {
      type: 'concept',
      title: 'Workflow: de idea a sesión fotográfica en 30 minutos',
      body: 'Un cliente te contacta para una sesión de retratos en el campo. Proceso con Claude: (1) Claude consulta tu knowledge base de retratos en Obsidian. (2) Genera el brief de sesión: lista de 20 shots, momento del día recomendado para la luz, 3 locaciones posibles en campo, props sugeridos. (3) Redacta la propuesta personalizada con tu plantilla de precios. (4) Genera el contrato base. (5) Crea la nota del proyecto en 01-ACTIVE/projects/ de tu vault. Todo en una sola conversación de 15 minutos.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Qué hace la Skill "Gallery AI Photo Architect" que es diferente a simplemente mostrar fotos en un grid?',
      opts: [
        'Aplica filtros automáticamente a las fotos usando inteligencia artificial de visión',
        'Aplica principios curatoriales de Keith Smith y Szarkowski para crear secuencias con ritmo visual, coherencia temática y arco narrativo — como una exhibición editorial, no un grid',
        'Organiza las fotos automáticamente por fecha y hora usando los metadatos EXIF',
        'Comprime las fotos para que el sitio web cargue más rápido',
      ],
      correct: 1,
      exp: 'La curaduría va más allá del orden. Keith Smith y John Szarkowski son teóricos de la fotografía que desarrollaron principios sobre cómo las fotos dialogan entre sí, crean tensión y resolución, y guían al espectador. Aplicar esos principios automáticamente es lo que hace la diferencia entre una galería amateur y una presentación de nivel editorial.',
    },
    {
      q: '¿Por qué el sistema de knowledge fotográfico en Obsidian se vuelve más valioso con el tiempo?',
      opts: [
        'Porque Obsidian optimiza automáticamente la organización con el tiempo',
        'Porque cada sesión documentada, fotógrafo estudiado y precio negociado agrega contexto — Claude hace recomendaciones más precisas con 50 sesiones de historia que con ninguna',
        'Porque el storage de Obsidian se vuelve más eficiente cuanto más datos contiene',
        'El valor no aumenta con el tiempo — es constante desde el primer día',
      ],
      correct: 1,
      exp: 'Este es el principio de compounding aplicado al conocimiento. El día 1, Claude no sabe nada sobre tu estilo fotográfico. Al mes 6, sabe que siempre fotografías bodas con luz de hora dorada, que prefieres locaciones industriales para retratos, que tu cliente tipo es clase media-alta. Esas capas de contexto hacen que cada recomendación sea más precisa.',
    },
    {
      q: '¿Cómo usarías NotebookLM específicamente para desarrollar tu estrategia de precios como fotógrafo?',
      opts: [
        'Cargando tu propio historial de facturas para que NotebookLM analice tu rentabilidad',
        'Creando un notebook con sitios web de fotógrafos de tu mercado, artículos sobre pricing de fotografía, y estudios de mercado — luego consultando patrones de precios, paquetes populares y posicionamiento',
        'NotebookLM no es útil para estrategia de precios — mejor usar Excel directamente',
        'Preguntando directamente a NotebookLM cuánto cobrar sin agregar ninguna fuente',
      ],
      correct: 1,
      exp: 'NotebookLM es un sintetizador de fuentes, no una bola de cristal. Su poder está en procesar tus fuentes reales: sitios de competidores, artículos de la industria, estudios de mercado. Con esas fuentes bien cargadas, puede identificar rangos de precios por tipo de servicio, tendencias de paquetización, y puntos de diferenciación — todo con citaciones verificables.',
    },
  ],
  challenge: {
    title: 'Proyecto 9.5 — Tu sistema de knowledge fotográfico',
    desc: 'Construye la base de conocimiento fotográfico que hace a Claude un verdadero asistente de tu negocio.',
    steps: [
      'En tu vault de Obsidian, crea la estructura: 02-RESOURCES/photography/ con las subcarpetas: referentes/, técnicas/, clientes/, tendencias/, propuestas-templates/.',
      'Selecciona 3 fotógrafos que admires profundamente. Crea un notebook de NotebookLM por cada uno con sus mejores entrevistas, libros disponibles online, análisis de su trabajo, videos de YouTube. Pide a Claude que genere una nota de análisis de cada fotógrafo en referentes/.',
      'Documenta tu proceso y estilo actuales: escribe (o deja que Claude te entreviste sobre) cómo trabajas, qué es lo que más te gusta fotografiar, cuáles son tus sesiones más exitosas y por qué.',
      'Crea las plantillas base: plantilla de propuesta para clientes, plantilla de contrato básico, plantilla de brief de sesión. Guárdalas en propuestas-templates/.',
      'Construye una Skill personalizada: claude-fotografia.md en ~/.claude/skills/ con instrucciones específicas de cómo Claude debe ayudarte con fotografía: tu estilo, tus referentes, tus tarifas típicas, tu mercado objetivo.',
      'Prueba el sistema: dile a Claude "Un cliente me contactó para fotografiar su boda de 80 personas en una finca en el campo en diciembre. Genera el brief de sesión y la propuesta." Evalúa qué tan contextualizado y útil es el resultado.',
    ],
    checkpoint: 'El sistema funciona cuando le describes una sesión a Claude y él genera un brief y propuesta que suenan como escritos por alguien que conoce tu trabajo específico — no como una respuesta genérica de fotografía. Ese nivel de contextualización es el objetivo.',
  },
}

// ─── ALIASES AND NEW EXPORTS ─────────────────────────────────────────────────
// Knowledge OS = fusion of AIOS + Research Stack + Living Academy
export { PROJECT_AIOS as PROJECT_KNOWLEDGE_OS }

// TECH_STACK_LESSON moved to this file from gapLessons
export const TECH_STACK_LESSON = {
  id: 'mod9_l0',
  num: '9.0',
  title: 'Stack técnico, Skills y deploy: todo lo que necesitas antes de construir',
  duration: '40 min',
  xpReward: 90,
  videoId: '73eFWU-edO4',
  videoCaption: 'Stack técnico moderno para fotógrafos 2026',
  content: [
    {
      type: 'intro',
      text: 'Antes de escribir una línea de código con Claude Code, necesitas dos cosas: entender qué hace cada herramienta del stack y tener las Skills correctas instaladas. Esta lección cubre ambas.',
    },
    {
      type: 'concept',
      title: 'Secuencia de instalación obligatoria',
      body: 'Instala en este orden antes de empezar cualquier proyecto:',
      highlight: '① /plugin install modern-web-guidance@googlechrome\n② npx skills add vercel-labs/next-best-practices\n③ npx skills add supabase/postgres-best-practices\n④ npx skills add sergiodxa/web-security-skill\n⑤ npx skills add nutlope/hallmark\n⑥ MCP: Context7, Browser Tools, Sequential Thinking, Supabase, GitHub',
    },
  ],
  quiz: [
    {
      q: '¿Cuál es el primer paso antes de empezar cualquier proyecto del Módulo 9?',
      opts: [
        'Crear las cuentas en GitHub, Vercel y Supabase',
        'Instalar Modern Web Guidance y las Skills de producción en Claude Code — sin ellas Claude puede generar código legacy',
        'Escribir el CLAUDE.md del proyecto',
        'Hacer el deploy en Vercel para tener una URL de preview',
      ],
      correct: 1,
      exp: 'Modern Web Guidance garantiza que Claude use CSS nativo moderno en lugar de GSAP para todo, @starting-style en lugar de IntersectionObserver, y View Transitions API en lugar de Framer Motion para navegación. Sin esta Skill, Claude puede generar código que funciona pero usa patrones de 2022.',
    },
    {
      q: '¿Por qué RLS en Supabase es más seguro que verificar permisos solo en el frontend?',
      opts: [
        'RLS es más rápido',
        'RLS aplica las reglas en la DB — aunque comprometan el frontend, los datos de otros clientes no existen para ese usuario',
        'Son equivalentes',
        'RLS solo para más de 1000 usuarios',
      ],
      correct: 1,
      exp: 'Con solo verificación frontend, un atacante puede hacer requests directos a Supabase. Con RLS, la DB filtra por client_id antes de devolver datos. No hay bypass posible.',
    },
    {
      q: '¿Para qué sirve el Supabase MCP durante el desarrollo?',
      opts: [
        'Para hacer backups automáticos',
        'Para que Claude consulte el schema real de tu DB directamente — eliminando bugs por suposiciones incorrectas sobre la estructura',
        'Para acelerar las queries',
        'No hay diferencia significativa con no tenerlo',
      ],
      correct: 1,
      exp: 'Sin el MCP, Claude adivina la estructura de tu DB. Con el MCP, consulta columnas reales, políticas RLS activas e índices. Esa diferencia elimina una categoría entera de bugs.',
    },
  ],
  challenge: {
    title: 'Reto 9.0 — Setup completo antes de construir',
    desc: 'Configura todo el entorno antes de la primera línea de código.',
    steps: [
      'Crea las cuentas: GitHub, Vercel, Supabase, Clerk.',
      'En Claude Code:\n/plugin install modern-web-guidance@googlechrome\nnpx skills add vercel-labs/next-best-practices\nnpx skills add supabase/postgres-best-practices\nnpx skills add sergiodxa/web-security-skill\nnpx skills add nutlope/hallmark',
      'Configura MCPs en Claude Desktop: Context7, Supabase oficial, GitHub.',
      'Verifica: /skills muestra 5 Skills instaladas.',
      'Crea el repositorio en GitHub, conéctalo a Vercel, crea el proyecto en Supabase.',
    ],
    checkpoint: 'Setup completo cuando /skills muestra 5 Skills, Vercel está conectado a GitHub, y Supabase tiene el schema vacío listo.',
  },
}
