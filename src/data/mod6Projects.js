// ─── MÓDULO 9: PROYECTOS MAESTROS ────────────────────────────────────────────
// ─── MÓDULO 6: PROYECTOS MAESTROS ────────────────────────────────────────────
// 5 proyectos reales basados en tus intereses específicos
// Fuentes verificadas: mayo 2026

// ─── PROYECTO 1: Knowledge OS — sistema de aprendizaje permanente (agnóstico al dominio) ──
export const PROJECT_KNOWLEDGE_OS = {
  id: 'mod9_l1',
  num: '9.1',
  title: 'Knowledge OS: tu sistema de aprendizaje permanente con Obsidian + Claude',
  duration: '3-4 horas (proyecto de fin de semana)',
  xpReward: 150,
  videoId: 'roPfcQHdUtY',
  videoCaption: 'Knowledge OS con Obsidian + Claude Code — sistema de aprendizaje para cualquier dominio 2026',
  content: [
    {
      type: 'intro',
      text: 'Un tool requiere que tú lo uses. Un operating system simplemente corre. Knowledge OS transforma Obsidian de una app de notas en un sistema autónomo que genera tu briefing diario, procesa todo lo que capturas, revisa tus proyectos semanalmente, y trabaja mientras duermes — sin importar el dominio. Hoy lo vas a instanciar para fotografía. Mañana lo puedes instanciar para Claude IA (eso es el Proyecto 9.2), para fútbol, para literatura, para QA testing. La infraestructura es siempre la misma: Obsidian + Claude + GitHub. Solo cambia el contenido que alimentas. Basado en la arquitectura de CyrilXBT, verificada y adaptada a mayo 2026.',
    },
    {
      type: 'concept',
      title: 'Knowledge OS es agnóstico al dominio — eso es lo que lo hace poderoso',
      body: 'La mayoría de sistemas de gestión de conocimiento te atan a un tema o flujo específico. Knowledge OS no. Su arquitectura separa la infraestructura (cómo se almacena, procesa y automatiza) del contenido (qué se almacena). Esa separación es intencional: una vez que lo tienes funcionando para fotografía, agregar un dominio nuevo es tan simple como crear una carpeta nueva en RESOURCES/ y definir nuevas fuentes para los workflows. El proyecto 9.2 (Living Academy) es exactamente ese principio aplicado: es Knowledge OS corriendo para el dominio "ecosistema Claude IA", con fuentes automáticas en lugar de manuales.',
      highlight: 'Señal de que lo entendiste: cuando alguien te pregunta "¿para qué sirve?" y puedes responder con ejemplos de 3 dominios distintos sin cambiar la arquitectura. El sistema es el mismo; el conocimiento es diferente.',
    },
    {
      type: 'concept',
      title: 'Las 3 capas del sistema',
      body: 'Capa 1 — Storage (Obsidian): archivos Markdown en tu Mac. Portable, sin vendor lock-in, legible por humanos y máquinas. Capa 2 — Intelligence (Claude Code + Filesystem MCP): Claude lee tu vault completo, razona sobre él, genera outputs y lo actualiza. Capa 3 — Automation (Scheduled Tasks de CoWork o cron): los 5 workflows corren automáticamente según horario. Sin estas 3 capas juntas, tienes una herramienta, no un sistema.',
      highlight: 'Para este proyecto usamos Scheduled Tasks de CoWork en lugar de N8N — ya lo tienes configurado desde la Lección 5.2 y está incluido en tu plan Pro. N8N es la alternativa para usuarios avanzados que quieren más control.',
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
    title: 'Proyecto 9.1 — Construye tu Knowledge OS este fin de semana',
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

// ─── PROYECTO 2: Living Academy — primera instancia de Knowledge OS ──────────
export const PROJECT_LIVING_ACADEMY = {
  id: 'mod9_l2',
  num: '9.2',
  title: 'Living Academy: Knowledge OS aplicado al ecosistema Claude IA',
  duration: '2-3 horas (setup) + automatización permanente',
  xpReward: 120,
  videoId: 'ssHbtzGIfXk',
  videoCaption: 'Living Academy: cómo este curso se actualiza solo con GitHub Actions y Claude — 2026',
  content: [
    {
      type: 'intro',
      text: 'El Proyecto 9.1 te enseñó la infraestructura de Knowledge OS: Obsidian + Claude + GitHub + automatización. Este proyecto es esa infraestructura corriendo en producción, aplicada a un dominio específico: el ecosistema Claude IA. Living Academy monitorea semanalmente las fuentes oficiales de Anthropic — blog, GitHub releases, documentación, canales de YouTube, comunidades — y genera Pull Requests automáticas con actualizaciones de contenido. No es un curso que se actualiza cuando alguien lo recuerda. Es un sistema que se actualiza porque tiene un cron job. Ese es el principio del Proyecto 9.1 llevado a producción real.',
    },
    {
      type: 'concept',
      title: 'La diferencia entre un curso estático y un Living Course',
      body: 'Un curso estático es una fotografía del conocimiento en el momento en que alguien lo escribió. Envejece. Un Living Course es un sistema que mantiene sincronización permanente con su dominio de conocimiento. Cuando Anthropic lanza Claude 4 Opus, cuando sale una nueva versión de Claude Code, cuando aparece un MCP server que cambia cómo se trabaja — Living Academy lo detecta, genera un draft de actualización, y abre un PR para revisión humana. El profesor no tiene que estar pendiente: el sistema lo está.',
      highlight: 'Precisión importante: Living Academy no publica automáticamente. Genera drafts y abre Pull Requests. Siempre hay una revisión humana antes de que el cambio llegue al curso. La autonomía está en detectar y proponer, no en publicar.',
    },
    {
      type: 'concept',
      title: 'La arquitectura de monitoring semanal',
      body: 'GitHub Actions corre un cron job cada lunes a las 6AM UTC. El workflow hace 4 cosas en secuencia: (1) Source monitoring: verifica cada fuente configurada buscando contenido nuevo desde el lunes anterior. (2) Relevance filtering: Claude determina si el contenido nuevo es relevante para el curso (no todo lo que publica Anthropic merece una lección). (3) Draft generation: para contenido relevante, Claude genera el draft de actualización siguiendo los estándares del curso. (4) PR creation: abre un Pull Request con el draft, el contexto de por qué es relevante, y las instrucciones de revisión. El PR llega a tu inbox de GitHub.',
      highlight: 'Por qué lunes: el equipo de Anthropic típicamente anuncia cosas a finales de semana. El monitoring el lunes a las 6AM captura los anuncios del fin de semana y permite revisión durante el día de trabajo.',
    },
    {
      type: 'cards',
      title: 'Las fuentes que Living Academy monitorea',
      items: [
        { name: 'Blog de Anthropic', tag: 'Oficial', color: '#6366F1', desc: 'anthropic.com/news — lanzamientos de modelos, actualizaciones de política, research papers públicos. Fuente primaria para cambios de Claude.' },
        { name: 'GitHub Releases', tag: 'Técnico', color: '#10B981', desc: 'Repos: anthropics/anthropic-sdk-python, anthropics/anthropic-sdk-typescript, anthropics/claude-code. Nuevas versiones con changelogs detallados.' },
        { name: 'Documentación oficial', tag: 'Referencia', color: '#F97316', desc: 'docs.anthropic.com — cambios en API, nuevas guías, modelos deprecados, pricing actualizado. Claude diff-ea versión a versión.' },
        { name: 'YouTube y comunidad', tag: 'Ecosistema', color: '#8B5CF6', desc: 'Canal oficial de Anthropic, canales verificados de la comunidad Claude. Tutoriales nuevos, casos de uso documentados, actualizaciones de herramientas.' },
      ],
    },
    {
      type: 'concept',
      title: 'El patrón es replicable: Living Photography, Living Football, Living Finance',
      body: 'Knowledge OS es la infraestructura. Living Academy es la primera instancia de ese patrón aplicado a un dominio. Pero el patrón no es exclusivo de Claude IA. Living Photography monitorea publicaciones de Magnum Photos, lanzamientos de Lightroom, entrevistas con fotógrafos de referencia — y actualiza automáticamente tu sistema de conocimiento fotográfico en Obsidian. Living Football monitorea transfers, estadísticas de temporada, análisis tácticos. Living Finance monitorea earnings calls, cambios regulatorios, papers económicos. La infraestructura es idéntica. Solo cambia la configuración de fuentes y los criterios de relevancia.',
      highlight: 'Este es el momento donde el Proyecto 9.1 y el 9.2 se conectan. Knowledge OS te da la arquitectura. Living Academy te da el primer caso real de cómo funciona en producción. Tu siguiente paso natural es: ¿para qué dominio importante para ti lo instanciarías?',
    },
    {
      type: 'concept',
      title: 'Cómo construir tu propio Living [Dominio]',
      body: 'Requisito: tener el Knowledge OS del Proyecto 9.1 funcionando. Proceso: (1) Define el dominio y las 4-6 fuentes primarias que lo cubren. (2) En tu vault de Obsidian, crea 02-RESOURCES/[dominio]/sources.md con las URLs y criterios de relevancia. (3) En GitHub Actions, crea el workflow de monitoring: cron lunes 6AM, script que lee sources.md, llama a Claude API con las fuentes nuevas, evalúa relevancia, genera draft si corresponde. (4) Configura las GitHub Actions secrets: ANTHROPIC_API_KEY, GITHUB_TOKEN. (5) El primer lunes después del setup, el workflow corre y ves si detecta algo relevante.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la relación entre Knowledge OS (9.1) y Living Academy (9.2)?',
      opts: [
        'Son proyectos independientes con infraestructuras distintas — Living Academy es más avanzado',
        'Living Academy es la primera instancia de Knowledge OS aplicada a un dominio específico — la infraestructura es la misma, solo cambian las fuentes y los criterios de relevancia',
        'Knowledge OS es la versión personal de Living Academy para uso individual',
        'Living Academy reemplaza a Knowledge OS cuando el estudiante avanza lo suficiente',
      ],
      correct: 1,
      exp: 'La relación es instancia-patrón. Knowledge OS es el patrón: la arquitectura de Obsidian + Claude + GitHub + automatización. Living Academy es una instancia de ese patrón aplicada al dominio "ecosistema Claude IA". La misma relación existe entre Living Academy y Living Photography: mismo patrón, dominio diferente.',
    },
    {
      q: '¿Por qué Living Academy genera Pull Requests en lugar de publicar actualizaciones directamente?',
      opts: [
        'Porque GitHub Actions no tiene permisos para publicar directamente en el sitio',
        'Porque siempre hay revisión humana antes de que un cambio llegue al curso — la autonomía está en detectar y proponer, no en publicar',
        'Porque los Pull Requests son más rápidos de procesar que los commits directos',
        'Por razones de seguridad: el GITHUB_TOKEN solo tiene permisos de PR, no de push a main',
      ],
      correct: 1,
      exp: 'La decisión arquitectural es intencional. Un sistema que publica automáticamente puede meter errores en el curso sin control. Un sistema que propone PRs mantiene al humano en el loop para la decisión final. Claude detecta, filtra y redacta. El profesor decide si el draft va al curso.',
    },
    {
      q: 'Quieres crear un "Living Fotografía" que monitoree el ecosistema fotográfico. ¿Qué necesitas cambiar de Living Academy para implementarlo?',
      opts: [
        'Todo — necesitas construir una infraestructura completamente nueva desde cero',
        'Solo la configuración de fuentes (URLs) y los criterios de relevancia — la infraestructura de GitHub Actions + Claude API + PR generation es idéntica',
        'El repositorio de GitHub y las APIs, pero puedes reusar el workflow de monitoring sin cambios',
        'Living Photography requiere skills especiales de visión que Living Academy no tiene',
      ],
      correct: 1,
      exp: 'Este es el punto central del Proyecto 9.2: la infraestructura es el invariante, las fuentes son el variable. Para Living Fotografía cambias sources.md (Magnum Photos, lanzamientos de Lightroom, canales de fotógrafos de referencia) y los criterios de relevancia. El workflow de GitHub Actions se reusa sin modificaciones.',
    },
  ],
  challenge: {
    title: 'Proyecto 9.2 — Instancia tu primer Living [Dominio]',
    desc: 'Construye un sistema de monitoring automático para el dominio más relevante para ti ahora mismo.',
    steps: [
      'Elige tu dominio: puede ser el ecosistema Claude IA (Living Academy), fotografía, tu industria profesional, o cualquier campo que requieras monitorear activamente.',
      'Define las 4-6 fuentes primarias de ese dominio. Para cada fuente: URL, frecuencia de actualización estimada, tipo de contenido (blog, releases, video, comunidad), criterio de relevancia.',
      'En tu vault de Obsidian, crea 02-RESOURCES/[dominio]/sources.md con la configuración de fuentes. Incluye el criterio de relevancia en lenguaje natural — Claude lo leerá para decidir qué es relevante.',
      'En GitHub, crea el repositorio del Living [Dominio]. Configura las secrets: ANTHROPIC_API_KEY, GITHUB_TOKEN.',
      'Crea el archivo .github/workflows/weekly-monitor.yml usando como referencia la arquitectura de Living Academy. Ajusta las fuentes y el criterio de relevancia para tu dominio.',
      'Activa el workflow manualmente la primera vez (workflow_dispatch) para verificar que funciona. Revisa el PR generado. ¿El contenido detectado es relevante? ¿El draft es útil?',
    ],
    checkpoint: 'El Living [Dominio] funciona cuando el lunes siguiente — sin que tú hagas nada — aparece un Pull Request en tu repositorio con contenido nuevo relevante de ese dominio, con un draft de cómo integrarlo. Ese PR es la señal de que el sistema está vivo.',
  },
}

// ─── PROYECTO 3: Portal de Fotografía + Asistente Creativo ───────────────────
export const PROJECT_PHOTOGRAPHY_WEB = {
  id: 'mod9_l3',
  num: '9.3',
  title: 'Portal de Fotografía + Asistente Creativo con Claude Code',
  duration: '2-3 semanas (proyecto completo)',
  xpReward: 200,
  videoId: '73eFWU-edO4',
  videoCaption: 'Portal de fotografía + asistente creativo con Claude Code — de cero a deploy 2026',
  content: [
    {
      type: 'intro',
      text: 'La fotografía tiene dos mundos que raramente se integran: el técnico y el creativo-comercial. Este proyecto cubre los dos. Primero construyes el portal: sitio web profesional con galería visual impactante, autenticación de clientes, páginas privadas por proyecto y sistema de feedback — sin agencia, sin developer freelance. Luego conviertes a Claude en tu asistente creativo permanente: investigar fotógrafos referentes, generar briefs de sesión, redactar propuestas a clientes, y mantener tu sistema de knowledge fotográfico actualizado. El portal técnico que necesitan tus clientes, y el asistente creativo que necesita tu negocio, en un solo proyecto.',
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
    {
      type: 'cards',
      title: 'Los 6 flujos de trabajo del Asistente Creativo',
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
      title: 'El sistema de knowledge fotográfico en Obsidian',
      body: 'Dentro de tu vault del Proyecto 9.1, crea una sección específica: 02-RESOURCES/photography/ con subcarpetas: referentes/ (notas sobre fotógrafos que estudias), técnicas/ (apuntes sobre luz, composición, post-proceso), clientes/ (un archivo por tipo de cliente: bodas, retratos, corporativo), y tendencias/ (investigación de mercado de NotebookLM). Claude Code puede leer todo esto para dar recomendaciones contextualizadas a tu trabajo específico.',
      highlight: 'El sistema de knowledge fotográfico se hace más valioso con el tiempo. Cada sesión que haces, cada fotógrafo que estudias, cada precio que negocias — todo queda en el vault. En 6 meses, Claude tiene el contexto de 50 sesiones y puede hacer recomendaciones mucho más precisas que al inicio.',
    },
    {
      type: 'concept',
      title: 'Skill personalizada: claude-fotografia.md',
      body: 'El paso final del asistente creativo es construir una Skill específica para tu negocio fotográfico. En ~/.claude/skills/claude-fotografia.md defines: tu estilo fotográfico, tus fotógrafos referentes, tus tarifas típicas por tipo de proyecto, tu mercado objetivo, tus valores como fotógrafo. Cuando esta Skill está activa, Claude responde sobre fotografía como alguien que conoce tu trabajo específico — no como un asistente genérico. Portable entre Claude Code, Cursor con extensión Claude, y cualquier IDE compatible.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Computer Use: automatización de workflows de post-producción',
      body: 'Computer Use (disponible en la API de Claude) permite que Claude controle directamente aplicaciones de escritorio — no solo el navegador. Para un negocio de fotografía, abre la posibilidad de automatizar los workflows de post-producción que hoy son repetitivos:\n\n• Lightroom / Capture One: Claude puede abrir el software, navegar por carpetas de sesiones, aplicar presets por lotes, exportar en múltiples resoluciones y renombrar archivos según convención.\n• Revisión de metadatos: recorrer una carpeta de RAWs, verificar que todos tienen los metadatos correctos (copyright, locación, modelo de cámara) y generar un reporte de los que faltan.\n• Backup y organización: mover archivos entregados a carpetas de archivo, verificar checksums, actualizar el log de proyectos.\n\nCómo integrarlo en el Proyecto 9.3: en lugar de salir del portal para hacer la entrega, el flujo puede ser: cliente aprueba selección en el portal → Claude Code activa un agente de Computer Use → agente exporta las fotos aprobadas desde Lightroom en la resolución correcta → las sube a Supabase Storage → notifica al cliente.',
      highlight: 'Estado actual (2026): Computer Use está disponible vía la API de Claude. Para integrarlo al portal del Proyecto 9.3 necesitas el plan Enterprise o API access. El caso de uso inmediato sin integración al portal: como workflow local en tu Mac con Claude Desktop y CoWork, donde Claude controla Lightroom directamente durante tu sesión de edición.',
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
    title: 'Proyecto 9.3 — Portal + Asistente Creativo en 3 semanas',
    desc: 'De brief a sitio en producción, más tu asistente creativo funcionando. Plan de 3 semanas con Claude Code.',
    steps: [
      'SEMANA 1, DÍA 1 — Brief visual: Escoge 3 sitios de fotógrafos que admires. Prepara 10 fotos de tu portafolio que representen tu estilo. Define: paleta de colores, tipografía preferida, tono del copy (íntimo, profesional, artístico).',
      'SEMANA 1, DÍA 2-3 — Setup y diseño: Crea un Project en Claude con tus referencias visuales. Usa Claude Design para generar el sistema visual. Pide: "Crea el setup inicial del proyecto Next.js con la estructura de carpetas, Tailwind configurado con mi paleta, y los componentes base."',
      'SEMANA 1, DÍA 4-5 — Páginas públicas: "Construye las páginas Home, Portafolio (con las fotos de prueba que subo), Servicios con tus 3 paquetes principales, y Contacto con formulario funcional."',
      'SEMANA 2, DÍA 1-2 — Autenticación: "Implementa NextAuth.js. Clientes se registran con email. Yo apruebo manualmente cada cuenta desde el panel de admin. Crea el panel de admin básico."',
      'SEMANA 2, DÍA 3-4 — Portal privado: "Construye el módulo de proyectos privados. Cada cliente solo ve sus proyectos. Incluye: galería de fotos, sistema de favoritos, campo de comentarios por foto."',
      'SEMANA 2, DÍA 5 — Deploy: "Despliega en Vercel. Configura el dominio [tudominio].com. Verifica que la autenticación funciona en producción."',
      'SEMANA 3, DÍA 1-2 — Knowledge fotográfico: En tu vault de Obsidian, crea 02-RESOURCES/photography/ con las subcarpetas: referentes/, técnicas/, clientes/, tendencias/. Selecciona 3 fotógrafos referentes y crea un notebook de NotebookLM por cada uno.',
      'SEMANA 3, DÍA 3-4 — Skill personalizada: Crea ~/.claude/skills/claude-fotografia.md con tu estilo, referentes, tarifas y mercado objetivo. Prueba con: "Un cliente me contactó para fotografiar su boda de 80 personas en una finca en el campo. Genera el brief de sesión y la propuesta."',
      'SEMANA 3, DÍA 5 — Integración: Conecta los flujos de trabajo del asistente creativo al portal. Los briefs de sesión y propuestas generados por Claude deben poder subirse directamente al panel de admin del portal.',
    ],
    checkpoint: 'El proyecto está completo cuando: (1) El sitio está live en tu dominio y un cliente de prueba puede ver solo sus proyectos. (2) Claude genera un brief de sesión que suena como escrito por alguien que conoce tu estilo específico — no como una respuesta genérica. Esos dos checkpoints juntos son el 9.3.',
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
    {
      type: 'concept',
      title: 'Managed Agents: infraestructura de agentes sin construirla desde cero',
      body: 'El pipeline de 4 agentes descrito en esta lección (Explorer → Test Case Generator → Automation Writer → Maintenance) requiere orquestación. Tienes dos opciones:\n\n**Build-your-own (enfoque anterior):** construir manualmente el orquestador con la API de Claude, gestionar el estado entre agentes, manejar reintentos y errores, y mantener el código de orquestación. Funciona pero requiere tiempo de desarrollo y mantenimiento.\n\n**Managed Agents (recomendado 2026):** Anthropic ofrece infraestructura de agentes gestionada donde la orquestación, el estado, los reintentos y los logs están listos. Claude actúa como orquestador principal y los subagentes como unidades especializadas, con toda la infraestructura manejada por Anthropic. Reduce el código de plomería a prácticamente cero y permite enfocarse en la lógica del negocio.\n\nPara el Proyecto 9.4, Managed Agents significa que puedes definir los 4 agentes y sus responsabilidades, y dejar que la plataforma gestione la coordinación entre ellos.',
      highlight: 'Cuándo usar Managed Agents vs build-your-own: si el pipeline tiene más de 2 agentes, estado compartido entre pasos, o necesita reintentos automáticos — Managed Agents reduce semanas de infraestructura a horas de configuración. Para un agente único o pipeline lineal simple, build-your-own sigue siendo más directo.',
    },
    {
      type: 'concept',
      title: 'Outcomes y Dreaming: el patrón correcto para el agente de QA',
      body: 'Cuando diseñas la instrucción del QA Agent, el framing importa para la calidad del resultado:\n\n**Dreaming (incorrecto para producción):** "Encuentra todos los posibles bugs en el sitio." Esta instrucción abierta activa el modo exploración libre de Claude — útil para brainstorming, pero en QA produce cobertura inconsistente y agentes que se desvían en caminos no críticos.\n\n**Outcomes (correcto para QA):** "Verifica que estos 5 flujos críticos funcionan correctamente: [lista exacta]. Para cada uno, reporta: PASS o FAIL, el paso donde falló si aplica, y el screenshot del estado final." Esta instrucción orienta al agente hacia resultados verificables y deterministas — exactamente lo que necesitas en un pipeline de QA automatizado.\n\nEl patrón Outcomes define el resultado esperado con precisión. El agente no tiene libertad de interpretación — tiene una lista de condiciones que deben ser verdad al final. Dreaming es para descubrimiento; Outcomes es para verificación. En un QA Agent de producción, siempre usas Outcomes.',
      highlight: 'Prompt de Outcomes para el auth flow: "Verifica el flujo de autenticación. PASS si: (1) un email no registrado recibe página de registro, (2) tras registro el usuario NO puede acceder al portal privado hasta ser aprobado, (3) tras aprobación el login funciona y muestra solo los proyectos del usuario. FAIL si cualquier condición es falsa. Reporta screenshot del estado final de cada paso."',
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
