// ─── MÓDULO 2: CLAUDE CODE — COMPLETO ────────────────────────────────────────
// Basado en: Scrimba, Anthropic Academy, Code with Claude 2026 (mayo 6),
// DataCamp, DEV Community, power users verificados — mayo 2026

// ─── 3.0 REFERENCIA COMPLETA — COMANDOS, PREFIJOS Y ATAJOS ───────────────────
export const CLAUDE_CODE_REFERENCE = {
  id: 'mod2_l0',
  num: '3.0',
  title: 'Referencia completa: comandos, prefijos y atajos de Claude Code',
  duration: '20 min',
  xpReward: 60,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'Esto separa a los usuarios básicos de los power users. Vuelve aquí cada vez que necesites recordar cómo hacer algo en Claude Code.',
    },
    {
      type: 'concept',
      title: 'Los 3 prefijos especiales — los más ignorados de Claude Code',
      body: 'Hay tres caracteres que cambian completamente cómo Claude trata tu input, y casi nadie los conoce porque no aparecen en el menú de ayuda.\n\n! al inicio ejecuta un comando shell directamente: !git log --oneline -5 o !find . -name \'*.test.ts\'. El output entra al contexto automáticamente — Claude lo ve y puede razonar sobre él. Elimina el ciclo de "corro comando → copio output → pego en Claude".\n\n# al inicio agrega un fact permanente a tu CLAUDE.md en el momento: # El rate limit de la API es 60 req/min o # La base de datos de producción es read-only. Sin tener que abrir y editar el archivo manualmente.\n\n@ seguido de una ruta referencia un archivo con Tab completion: Refactoriza @src/auth/login.ts usando el nuevo session API. Claude lo lee directamente. También acepta directorios y URLs. Más eficiente que copiar y pegar el contenido.',
      highlight: 'El ! es el más poderoso para debugging: !cat logs/error.log le da a Claude los logs reales sin que tengas que copiarlos. El # es el más rápido para capturar decisiones: # Usamos pnpm, nunca npm guarda esa regla permanentemente en el momento en que la decides.',
    },
    {
      type: 'cards',
      title: 'Los slash commands agrupados por propósito',
      items: [
        {
          name: 'Gestión de contexto',
          tag: 'Usar más',
          color: '#EF4444',
          desc: '/compact — Comprime el historial preservando lo esencial. Usar al 60% de capacidad, no al 95%. Agregar foco: /compact focus on the auth decisions.\n/clear — Borra todo el contexto. Para cuando cambias de tarea completamente.\n/context — Muestra qué está consumiendo espacio. Diagnóstico antes de optimizar.\n/branch — Bifurca la conversación para exploración paralela sin perder el hilo principal.\n/rewind — Vuelve al último checkpoint. También funciona con Esc+Esc.',
        },
        {
          name: 'Modelos y rendimiento',
          tag: 'Modelos',
          color: '#6366F1',
          desc: '/model opus — Cambia a Opus 4.7 para razonamiento complejo.\n/model sonnet — Vuelve a Sonnet 4.6 para trabajo estándar.\n/model haiku — Haiku 4.5 para tareas simples y económicas.\n/effort low|medium|high — Controla cuánto razona Claude. low persiste entre sesiones.\n/fast — Toggle de output rápido cuando no necesitas razonamiento profundo.',
        },
        {
          name: 'Sesiones y navegación',
          tag: 'Productividad',
          color: '#10B981',
          desc: '/resume 1 o /resume nombre — Retoma una sesión anterior donde la dejaste. Hasta 67% más rápido en sesiones de 40MB+.\n/rename feature-auth — Nombra la sesión actual para encontrarla después.\n/export — Exporta la transcripción completa de la sesión.\n/status — Ve el estado actual: modelo activo, configuración, uso.',
        },
        {
          name: 'Agentes y paralelismo',
          tag: 'Avanzado',
          color: '#8B5CF6',
          desc: '/agents — Gestiona subagentes activos.\n/tasks — Lista agentes corriendo en background.\n/bashes — Lista tareas bash en background.\n/goal condición — Define una condición de éxito para que Claude trabaje autónomamente hasta alcanzarla, sin que lo guíes paso a paso. Nuevo mayo 2026.',
        },
        {
          name: 'Skills, plugins y MCP',
          tag: 'Extensiones',
          color: '#F97316',
          desc: '/skills — Lista todas las Skills instaladas con búsqueda por tipo.\n/mcp enable|disable — Activa o desactiva servidores MCP.\n/plugins — Gestiona plugins instalados.\n/hooks — Ver configuración de hooks activos.',
        },
        {
          name: 'Calidad de código',
          tag: 'Bundled skills',
          color: '#EC4899',
          desc: '/simplify — Lanza 3 agentes de revisión en paralelo sobre el código reciente.\n/batch — Descompone un cambio grande en hasta 30 unidades en worktrees paralelos.\n/security-review — Revisa el código en busca de vulnerabilidades.\n/claude-api — Helper para construir con la API de Anthropic.',
        },
        {
          name: 'Setup y diagnóstico',
          tag: 'Configuración',
          color: '#0EA5E9',
          desc: '/init — Inicializa el proyecto con CLAUDE.md.\n/doctor — Diagnóstico completo de la instalación. Primer comando si algo no funciona.\n/config — Abre la interfaz completa de configuración.\n/permissions — Gestiona permisos de forma interactiva.',
        },
        {
          name: 'Utilidades y diversión',
          tag: 'Extras',
          color: '#F59E0B',
          desc: '/voice — Push-to-talk dentro de Claude Code.\n/vim — Activa vim keybindings en el prompt de input.\n/theme — Gestiona temas visuales.\n/powerup — Lecciones interactivas animadas de features.\n/release-notes — Changelog interactivo por versión.\n/buddy — Mascota terminal (18 especies, 5 tiers de rareza). No es broma.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Flags CLI — controla Claude Code desde el inicio',
      body: 'Los flags CLI se usan al lanzar claude desde el terminal, no dentro de la sesión.\n\nclaude -c — Continúa la sesión más reciente sin escribir nada.\nclaude -p \'prompt\' — Modo no interactivo: responde y sale. Útil en scripts: claude -p \'lista los TODOs\' > todos.txt.\nclaude -r nombre — Retoma una sesión con ese nombre.\nclaude -n nombre — Inicia la sesión con ese nombre para encontrarla después.\nclaude -w feature-auth — Crea un worktree aislado con ese nombre.\nclaude --model opus — Inicia con Opus 4.7.\nclaude --auto — Activa Auto Mode desde el inicio.\nclaude --from-pr 123 — Abre sesión vinculada a un PR de GitHub.\nclaude --max-turns 10 — Limita turnos autónomos (útil para scripts).\nclaude --output-format json — Output como JSON para procesar con otros comandos.\nclaude --bare — Modo scripted: sin hooks, sin plugins, sin LSP.',
      highlight: 'La combinación más útil para scripting: claude -p \'describe este error\' --output-format json | jq \'.content[0].text\'. Output limpio, procesable, automatizable.',
    },
    {
      type: 'concept',
      title: 'Atajos de teclado esenciales',
      body: 'Ctrl+C — Cancela la operación actual.\nCtrl+L — Limpia la pantalla sin perder el historial.\nCtrl+R — Busca en el historial de comandos.\nCtrl+V — Pega una imagen del clipboard directamente (no solo texto).\nCtrl+B — Manda la operación actual a background — sigues trabajando mientras Claude ejecuta.\nCtrl+X Ctrl+K — Detiene todos los agentes activos.\nCtrl+S — Guarda el borrador del prompt sin enviarlo.\nCtrl+G — Abre editor externo para el prompt actual.\nCmd+; (Mac) — Side chat sin contaminar el hilo principal. El shortcut más útil en Cursor.',
      highlight: 'Ctrl+B es el shortcut más infrautilizado: mandas una operación larga a background y sigues dando instrucciones. Cuando termina, vuelves con /tasks para ver el resultado.',
    },
    {
      type: 'concept',
      title: 'Variable de entorno y .claudeignore',
      body: 'CLAUDE_CODE_NO_FLICKER=1: elimina el parpadeo del terminal durante streaming. Sin ella, Claude redibuja todo el output con cada token. Con ella, el output aparece línea por línea sin saltos. Agregar al .zshrc: export CLAUDE_CODE_NO_FLICKER=1. También habilita soporte de mouse (click y scroll).\n\n.claudeignore: archivo en la raíz del proyecto que le dice a Claude qué ignorar. Funciona igual que .gitignore. Sin él, Claude puede leer node_modules, .next, dist, y otros directorios pesados innecesariamente, consumiendo miles de tokens antes de hacer cualquier trabajo real. Contenido recomendado:\nnode_modules/\n.next/\ndist/\n.git/\ncoverage/\n*.log',
      highlight: 'Crear el .claudeignore es lo primero que deberías hacer en cualquier proyecto nuevo antes de iniciar Claude Code. Un directorio node_modules típico tiene miles de archivos — Claude los escanea todos si no se lo impides.',
    },
    {
      type: 'concept',
      title: 'Comandos custom — crea los tuyos',
      body: 'Puedes crear slash commands propios para tareas repetitivas. Crea un archivo Markdown en .claude/commands/nombre-comando.md (solo para este proyecto) o ~/.claude/commands/nombre-comando.md (global para todos los proyectos). El contenido del archivo es el prompt que se ejecuta. Soporta YAML frontmatter para configuración avanzada:\n\n---\ndescription: Revisa este archivo en busca de issues de seguridad\nallowed-tools: Read, Bash(grep:*)\nmodel: opus\nargument-hint: [ruta-del-archivo]\n---\n\nRevisa @$ARGUMENTS buscando vulnerabilidades de seguridad según OWASP Top 10. Dame: el issue, el nivel de riesgo (crítico/alto/medio/bajo), y el fix recomendado.\n\nUso: /security-check src/auth/login.ts',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Nuevas capacidades 2026: Dynamic Workflows, Channels, Security y Remote Control',
      body: 'Las actualizaciones más importantes de Claude Code entre febrero y mayo de 2026:\n\n**Dynamic Workflows / Ultracode (28 may, research preview)**: Claude planea y orquesta cientos de subagentes en paralelo en una sola sesión. El caso de uso más dramático: migraciones completas de codebase de inicio a merge — Claude divide el trabajo en cientos de unidades independientes, las ejecuta en paralelo en worktrees aislados, y las integra. Actívalo seleccionando "ultracode" en el menú de esfuerzo (/effort ultracode).\n\n**Effort Control (28 may)**: selector expandido → Low / Medium / High / Max / Adaptive Thinking. "Max" usa Extended Thinking en cada paso. "Low" persiste entre sesiones para flujos de bajo costo. En la API se mapea al parámetro thinking_budget.\n\n**Claude Code Channels (20 mar)**: integración con Telegram y Discord. claude --channels telegram configura la notificación de prompts de aprobación a tu cuenta de Telegram. Puedes aprobar acciones destructivas, recibir el resultado terminado, y enviar nuevas tareas — todo desde el móvil mientras Claude trabaja en tu Mac.\n\n**Claude Code Security — research preview (20 feb)**: /security-review lanza un análisis completo de vulnerabilidades en tu codebase con Opus. Traza flujos de datos, detecta vectores de ataque que tools basadas en reglas no ven, y propone parches. Parte de Project Glasswing.\n\n**Remote Control API (20 feb)**: REST API + WebSocket para orquestar instancias de Claude Code remotamente desde scripts, CI/CD o aplicaciones externas. Permite iniciar sesiones, enviar tareas y recibir resultados programáticamente.',
      highlight: 'Prioridad para developers: Dynamic Workflows (ultracode) es el cambio más transformador para proyectos grandes. Empieza con un task pequeño — una migración de dependencias o un refactor acotado — y observa cómo divide el trabajo en subtareas paralelas.',
    },
    {
      type: 'concept',
      title: 'Agent Teams y Opus 4.7 (5 feb 2026)',
      body: 'Con Opus 4.7, Claude Code adquirió capacidades formales de Agent Teams: un agente líder puede delegar subtareas a "teammates" que trabajan en paralelo y se autocoordinan a través de un filesystem compartido. No necesitas orquestar manualmente — el líder divide el trabajo y los subagentes reportan.\n\nOpus 4.7 también introdujo: ventana de contexto de 128K tokens (del estándar anterior de 64K), Adaptive Thinking activado por defecto, y Compaction automático — cuando la sesión se acerca al límite de contexto, Claude resume el historial de forma inteligente para liberar espacio sin perder información crítica.',
      highlight: 'Compaction es especialmente valioso en sesiones largas de refactorización. En lugar de que Claude pierda contexto cuando el historial se llena, automáticamente comprime el pasado y continúa la sesión con el contexto reciente intacto.',
    },
  ],
  quiz: [
    {
      q: 'Estás en una sesión de Claude Code y necesitas saber cuántos archivos .ts hay en tu proyecto sin interrumpir el flujo de la conversación. ¿Cuál es la forma más eficiente?',
      opts: [
        'Abres una nueva terminal, corres el comando, copias el output, lo pegas en Claude',
        'Escribes !find . -name \'*.ts\' | wc -l — el resultado entra al contexto de Claude automáticamente',
        'Le pides a Claude que busque los archivos usando sus herramientas nativas',
        'Abres el explorador de archivos y cuentas manualmente',
      ],
      correct: 1,
      exp: 'El prefijo ! ejecuta comandos shell y el output entra directamente al contexto sin salir de Claude Code. Elimina el ciclo manual de copiar/pegar. Para tareas de exploración rápida del proyecto, ! es la herramienta más eficiente.',
    },
    {
      q: 'Quieres que Claude Code trabaje en una tarea larga (30+ minutos) mientras haces otra cosa, y recibir notificaciones de decisiones importantes desde el móvil. ¿Qué combinación usas?',
      opts: [
        'Dejas el terminal abierto y vuelves cada rato a revisar',
        'claude --channels con Telegram o Discord configurado + Ctrl+B para mandarlo a background',
        'Usas /goal para definir el objetivo y /export cuando termina',
        'No es posible — Claude Code requiere supervisión constante',
      ],
      correct: 1,
      exp: '--channels retransmite los prompts de aprobación a Telegram o Discord. Ctrl+B manda la operación a background. La combinación te permite supervisar y aprobar desde el móvil mientras Claude trabaja autónomamente. /goal complementa esto definiendo la condición de éxito.',
    },
    {
      q: 'Tu CLAUDE.md tiene 3,000 líneas con toda la documentación del proyecto. ¿Cuál es el problema y cuál es la solución?',
      opts: [
        'No hay problema — más contexto siempre es mejor para Claude',
        'Claude no puede leer archivos de más de 1,000 líneas — hay un límite técnico',
        'CLAUDE.md se lee completo al inicio de cada sesión — 3,000 líneas se cobran en tokens antes de cualquier trabajo. Solución: mantenerlo bajo 200 líneas con referencias @filename a archivos de detalle',
        'El problema es el formato — debe estar en JSON, no Markdown',
      ],
      correct: 2,
      exp: 'CLAUDE.md es overhead fijo por sesión. Cada palabra que contiene se cobra antes de tu primer mensaje. La práctica documentada: CLAUDE.md como índice liviano (<200 líneas) con referencias @filename a documentos de detalle que Claude carga solo cuando los necesita.',
    },
  ],
  challenge: {
    title: 'Reto 3.0 — Configura tu entorno de Claude Code correctamente',
    desc: 'Configura los elementos de entorno que marcan la diferencia entre usuario básico y power user.',
    steps: [
      'Agrega CLAUDE_CODE_NO_FLICKER=1 a tu .zshrc: echo \'export CLAUDE_CODE_NO_FLICKER=1\' >> ~/.zshrc && source ~/.zshrc. Abre Claude Code y verifica que el streaming es más suave.',
      'Crea el .claudeignore en la raíz de tu proyecto claude-academy con los directorios a ignorar: node_modules/, .git/, dist/.',
      'Dentro de Claude Code, prueba los 3 prefijos: !ls -la (shell), # Este es un proyecto educativo en React+Vite (nota permanente), @src/da y presiona Tab (referencia de archivo con autocompletado).',
      'Prueba /doctor para verificar que tu instalación está sana. Lee el output — ¿hay algo que mejorar?',
      'Crea tu primer custom command: crea el archivo .claude/commands/check-data.md con el contenido: "Verifica que todos los archivos en src/data/ compilan correctamente corriendo el comando de verificación del CLAUDE.md. Reporta cualquier error encontrado." Úsalo con /check-data.',
      'Prueba /goal: escribe "/goal El curso debe tener exactamente 44 lecciones todas con contenido completo" y observa cómo Claude trabaja autónomamente hacia ese objetivo.',
    ],
    checkpoint: 'Tienes el entorno correctamente configurado cuando: (1) El terminal no parpadea durante streaming. (2) Claude ignora node_modules y directorios de build. (3) Los 3 prefijos funcionan como se describe. (4) Tu custom command /check-data ejecuta la verificación automáticamente.',
  },
}

// ─── 2.1 INSTALACIÓN Y PRIMERA SESIÓN ────────────────────────────────────────
export const CLAUDE_CODE_SETUP = {
  id: 'mod2_l1',
  num: '3.1',
  title: 'Claude Code: instalación y tu primera sesión real',
  duration: '20 min',
  xpReward: 60,
  videoId: '73eFWU-edO4',
  videoCaption: 'Claude Code desde cero: instalación y primera sesión en Mac — 2026',
  content: [
    {
      type: 'intro',
      text: 'Claude Code no es un chat con un editor de código al lado. Es un agente que vive en tu terminal, lee todos tus archivos, ejecuta comandos y construye software real mientras mantienes una conversación con él. La diferencia entre usarlo como un chatbot glorificado y usarlo como un agente de verdad empieza en cómo lo instalas y configuras desde el primer día.',
    },
    {
      type: 'concept',
      title: 'Instalación en Mac (3 métodos — en orden de preferencia)',
      body: 'Método 1 — Binary nativo (recomendado): curl -fsSL https://claude.ai/install.sh | bash. Método 2 — Homebrew: brew install --cask claude-code. Método 3 — NPM (deprecado, migrar): npm install -g @anthropic-ai/claude-code. Después de instalar: claude auth login para autenticarte con tu cuenta de Anthropic. Verifica con claude --version. Para iniciar en cualquier proyecto: navega a la carpeta con cd y ejecuta claude.',
      highlight: 'El método NPM está oficialmente deprecado desde v2.1.89. Si lo instalaste así, migra con: claude install — el binario nativo arranca 3x más rápido y tiene mejor integración con el sistema de archivos de Mac.',
    },
    {
      type: 'concept',
      title: 'CLAUDE.md: la constitución de tu proyecto',
      body: 'CLAUDE.md es el archivo que Claude lee al inicio de cada sesión. Define cómo trabajar en ese proyecto específico: qué framework usas, cómo se corre el servidor de dev, cómo se ejecutan los tests, qué archivos nunca tocar, cuáles son las convenciones del equipo. Sin él, Claude adivina. Con él, Claude sabe. Crea uno en la raíz de cada proyecto con: touch CLAUDE.md.',
      highlight: 'Regla documentada por la comunidad: mantén CLAUDE.md bajo 200 líneas. Para instrucciones largas, crea archivos separados (docs/conventions.md, docs/architecture.md) y refiérelos con @filename — Claude los carga bajo demanda sin inflar el contexto base.',
    },
    {
      type: 'cards',
      title: 'Estructura de CLAUDE.md que funciona en producción',
      items: [
        {
          name: 'Sección 1: El proyecto',
          tag: 'Contexto base',
          color: '#6366F1',
          desc: 'Qué es el proyecto en 2-3 líneas. Stack tecnológico. Arquitectura de carpetas principal. Cómo correr el servidor de desarrollo. Cómo correr los tests.',
        },
        {
          name: 'Sección 2: Convenciones de código',
          tag: 'Consistencia',
          color: '#10B981',
          desc: 'Estilo de naming (camelCase, snake_case). Cómo nombrar archivos y carpetas. Patrón de imports. Estándar de TypeScript si aplica. Cómo manejar errores.',
        },
        {
          name: 'Sección 3: Archivos protegidos',
          tag: 'Seguridad',
          color: '#EF4444',
          desc: 'Lista de archivos que Claude nunca debe modificar sin permiso explícito: .env, archivos de migración ya aplicados, configuraciones de producción, secrets. Esto es la primera línea de defensa.',
        },
        {
          name: 'Sección 4: Flujo de trabajo',
          tag: 'Proceso',
          color: '#F97316',
          desc: 'Cómo se estructuran los commits (feat/fix/chore). Si hay linter que correr antes de commit. Si hay tests que deben pasar. Proceso de review si hay equipo.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'AGENTS.md: el CLAUDE.md para equipos de agentes',
      body: 'Además de CLAUDE.md (para el proyecto principal), Claude Code tiene AGENTS.md — un archivo que define cómo se comportan los subagentes entre sí cuando trabajas con Agent Teams. Mientras CLAUDE.md le dice a Claude cómo trabajar en el código, AGENTS.md le dice al orquestador cómo dividir tareas, qué modelo usar para cada subagente, y cómo pasar información entre ellos. Vive en .claude/agents.md del proyecto.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Cursor Rules vs CLAUDE.md: ¿cuál usar y cuándo?',
      body: 'Si ya usas Cursor, conoces los .cursorrules — un archivo de instrucciones que Cursor lee al inicio de cada sesión. CLAUDE.md y .cursorrules son conceptualmente iguales: ambos son instrucciones persistentes para el agente. La diferencia clave está en el alcance y la portabilidad. .cursorrules solo funciona en Cursor. CLAUDE.md funciona en Claude Code, y también es leído por Cursor si tienes la extensión Claude Code instalada. Si trabajas con ambas herramientas, CLAUDE.md es el estándar que funciona en los dos entornos sin duplicar instrucciones.',
      highlight: 'Ventajas de CLAUDE.md sobre .cursorrules: (1) Portabilidad — funciona en Claude Code y en Cursor con extensión Claude. (2) Jerarquía — puedes tener un CLAUDE.md global en ~/.claude/ y uno específico por proyecto; las instrucciones se combinan. (3) Soporte de @filename — puedes referenciar otros archivos de documentación. Desventaja: .cursorrules tiene integración más profunda con el autocompletado de Cursor en algunos flujos. Si solo usas Cursor, .cursorrules también funciona bien.',
    },
    {
      type: 'concept',
      title: 'Los comandos esenciales para empezar',
      body: '/clear — borra el contexto, empieza desde cero. /compact — comprime el historial preservando el hilo. /context — muestra qué está consumiendo contexto. /model — cambia el modelo para la sesión. /cost — ver cuánto has gastado en esta sesión. /hooks — gestionar automatizaciones. /skills — ver las Skills instaladas. Shift+Tab — alterna entre modo auto (Claude decide permisos) y modo manual (apruebas cada acción). Ctrl+C — interrumpe una operación en curso. Ctrl+L — limpia la pantalla sin perder el contexto.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Claude Code Desktop rediseñado (abril 14, 2026)',
      body: 'El 14 de abril de 2026, Anthropic lanzó un rediseño completo de la app de escritorio de Claude Code. Los cambios más importantes: Sidebar multi-sesión — todas las sesiones activas y recientes en un panel izquierdo, filtrable por estado/proyecto/environment. Puedes correr múltiples sesiones en paralelo desde una sola ventana. Drag-and-drop de paneles — organiza tu espacio de trabajo con paneles de código, terminal, preview y diff como quieras. Terminal y editor integrados — ya no necesitas cambiar entre Claude Code, VS Code y tu terminal. Diff viewer reconstruido más rápido. Previews HTML, PDF y servidor local integrados. SSH en Mac. Cmd+; como shortcut para abrir side chat sin contaminar el hilo principal.',
      highlight: 'El shortcut Cmd+; (Mac) / Ctrl+; (Windows) abre un side chat — haces una pregunta rápida sin que esa pregunta y su respuesta entren al hilo principal de la sesión. Es la versión desktop del comando /btw. Para sesiones largas, es esencial.',
    },
    {
      type: 'concept',
      title: 'Comandos nuevos: /resume y ant CLI',
      body: '/resume — reanuda una sesión anterior exactamente donde quedó. Es hasta 67% más rápido en sesiones de 40MB+ desde la v2.1.x. Cuando tienes una sesión larga que necesitas pausar y continuar al día siguiente, /resume es más eficiente que empezar de cero y re-explicar el contexto. ant CLI — cliente de línea de comandos oficial de Anthropic para la API de Claude (distinto de Claude Code). Permite interaccionar con la API de Claude directamente desde el terminal, versionar configuraciones API en YAML, y tiene integración nativa con Claude Code para flujos que mezclan chat directo con operaciones API.',
      highlight: null,
    },
    {
      type: 'comparison',
      bad: 'Uso básico — Claude como autocomplete:\n"Escribe una función que filtre usuarios por edad"\n\nClaude escribe la función.\nTú la copias al archivo.\nTú corres los tests.\nTú haces el commit.\nRepites 20 veces al día.',
      good: 'Uso agéntico — Claude como colaborador:\n"Implementa el filtro de usuarios por edad. Sigue las convenciones de CLAUDE.md, escribe los tests, asegúrate de que pasan, y haz el commit."\n\nClaude lee el proyecto, implementa, escribe tests,\nlos ejecuta, corrige si fallan, hace el commit.',
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia fundamental entre usar Claude Code como "chatbot con código" vs como agente?',
      opts: [
        'No hay diferencia real — solo es semántica sobre cómo describes el mismo uso',
        'En modo agente, Claude lee tu proyecto completo, ejecuta acciones reales (tests, commits, comandos) y completa tareas end-to-end sin que copies y pegues cada respuesta',
        'El modo agente solo está disponible en el plan Max — el Pro usa modo chatbot',
        'El modo agente es más lento porque Claude piensa más antes de responder',
      ],
      correct: 1,
      exp: 'El salto de chatbot a agente es el salto de "Claude me dice cómo hacer X" a "Claude hace X". En modo agente Claude navega tu codebase, ejecuta comandos reales en tu terminal, corre tus tests, modifica archivos — todo en la misma sesión. Ese es el paradigma que cambia la productividad.',
    },
    {
      q: '¿Por qué CLAUDE.md debe mantenerse bajo 200 líneas, y qué haces con instrucciones más largas?',
      opts: [
        'Claude Code tiene un límite técnico de 200 líneas — archivos más largos generan un error',
        'Para mantener el contexto base liviano: las instrucciones largas se mueven a archivos separados referenciados con @filename que Claude carga bajo demanda',
        'Es una recomendación estética, no técnica — Claude funciona igual con 2,000 líneas',
        'Los límites son 500 líneas para Pro y 1,000 para Max',
      ],
      correct: 1,
      exp: 'CLAUDE.md se lee completo al inicio de cada sesión. Un archivo de 2,000 líneas infla el contexto base antes de escribir una sola instrucción. La práctica documentada: CLAUDE.md con lo esencial + referencias @filename a docs/ para instrucciones detalladas que Claude carga solo cuando las necesita.',
    },
    {
      q: '¿Qué hace el comando /compact y cuándo usarlo?',
      opts: [
        'Comprime los archivos de código del proyecto para ahorrar espacio en disco',
        'Comprime el historial de la conversación en un resumen preservando el contexto esencial — usar al 60% de capacidad para mantener calidad del resumen',
        'Solo funciona en sesiones de más de 1 hora — para sesiones cortas no tiene efecto',
        'Elimina el contexto completamente y empieza desde cero — equivalente a /clear',
      ],
      correct: 1,
      exp: '/compact resume el historial conservando lo importante. La diferencia con /clear: /compact preserva el hilo y las decisiones tomadas; /clear borra todo. Úsalo proactivamente al 60% de capacidad, no al 95% donde la calidad del resumen se degrada.',
    },
  ],
  challenge: {
    title: 'Reto 2.1 — Claude Code instalado y configurado',
    desc: 'Tu primera sesión real de Claude Code en un proyecto tuyo.',
    steps: [
      'Instala Claude Code: curl -fsSL https://claude.ai/install.sh | bash en tu terminal. Verifica con claude --version.',
      'Autentica: claude auth login — te pedirá tu API key de Anthropic (console.anthropic.com → API Keys).',
      'Elige un proyecto real tuyo (o descarga cualquier repo de GitHub como práctica). Navega a la carpeta: cd ~/Documents/tu-proyecto.',
      'Crea tu CLAUDE.md: touch CLAUDE.md. Ábrelo y escribe las 4 secciones: qué es el proyecto, stack, convenciones básicas, archivos protegidos.',
      'Ejecuta: claude. Cuando se abra la sesión, escribe: "Lee el CLAUDE.md y dime si tienes toda la información para trabajar en este proyecto. ¿Qué información falta?"',
      'Basándote en las preguntas de Claude, mejora el CLAUDE.md con la información que faltaba.',
      'Haz tu primera tarea real: pídele a Claude que haga algo pequeño pero completo — crear un componente, escribir un test, refactorizar una función — observa cómo trabaja end-to-end.',
    ],
    checkpoint: 'Claude Code está bien configurado cuando le das una tarea y él la ejecuta completamente sin que tengas que copiar y pegar nada — lee el proyecto, hace los cambios, corre los tests, y te reporta el resultado. Ese es el flujo agéntico.',
  },
}

// ─── 2.2 PLAN-EXECUTE-CLEAR ───────────────────────────────────────────────────
export const PLAN_EXECUTE_CLEAR = {
  id: 'mod2_l2',
  num: '3.2',
  title: 'Plan-Execute-Clear: el workflow que separa a los power users',
  duration: '25 min',
  xpReward: 70,
  videoId: 'roPfcQHdUtY',
  videoCaption: 'Plan-Execute-Clear workflow en Claude Code — el patrón más enseñado en 2026',
  content: [
    {
      type: 'intro',
      text: 'La mayoría de errores con Claude Code no vienen del modelo — vienen del workflow. Le pides a Claude que implemente algo grande, Claude empieza a ejecutar sin entender bien el alcance, hace cambios que no querías, y terminas deshaciendo trabajo. El patrón Plan-Execute-Clear es la solución documentada por los mejores usuarios de Claude Code en 2026. Tres fases. Sin sorpresas.',
    },
    {
      type: 'cards',
      title: 'Las 3 fases del workflow',
      items: [
        {
          name: 'PLAN — Claude analiza, no ejecuta',
          tag: 'Primero',
          color: '#6366F1',
          desc: 'Claude Code en Plan Mode lee el proyecto y genera un plan detallado de lo que va a hacer — sin tocar ningún archivo. Tú revisas el plan, corriges el enfoque, apruebas. Solo cuando el plan está alineado, pasas a ejecutar. Activa con: claude --permission-mode plan',
        },
        {
          name: 'EXECUTE — Claude ejecuta el plan aprobado',
          tag: 'Segundo',
          color: '#10B981',
          desc: 'Claude implementa exactamente lo planeado. Si aparece algo inesperado, para y consulta en lugar de improvisar. Esta fase tiene checkpoints — puedes interrumpir con Ctrl+C si algo va mal.',
        },
        {
          name: 'CLEAR — Contexto limpio para la siguiente tarea',
          tag: 'Tercero',
          color: '#F97316',
          desc: 'Cuando la tarea está completa, /clear para limpiar el contexto antes de la siguiente tarea. No arrastres el contexto de "implementar autenticación" a "refactorizar el módulo de pagos" — son tareas independientes que merecen contextos independientes.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Plan Mode en detalle: cómo funciona',
      body: 'Hay dos formas de activar Plan Mode: (1) CLI: claude --permission-mode plan. En este modo Claude puede leer cualquier archivo pero no puede escribir, ejecutar comandos ni modificar nada. Solo analiza. (2) Dentro de una sesión: escribe "No ejecutes nada aún. Primero dame un plan detallado de cómo implementarías [tarea]." Claude responde con el plan. Cuando lo apruebas, escribes "Ahora ejecuta el plan." La versión CLI es más estricta porque bloquea ejecución a nivel de permisos, no solo de instrucción.',
      highlight: 'El Plan Mode es especialmente crítico para: cambios que tocan múltiples archivos, refactorizaciones, migraciones de base de datos, cualquier cambio con riesgo de efecto secundario. Para tareas pequeñas (crear un componente nuevo, escribir un test), el overhead del plan no vale la pena.',
    },
    {
      type: 'concept',
      title: 'PRD-Driven Development: el plan a escala de feature',
      body: 'Para features completas que toman horas o días, el Plan Mode no es suficiente — necesitas un PRD (Product Requirements Document). Un PRD es un documento de texto que describe exactamente qué quieres construir: funcionalidades, criterios de aceptación, casos edge, restricciones técnicas. Claude Code lo lee como guía de trabajo y lo sigue sistemáticamente. El PRD vive en .claude/prd-nombre-feature.md. Instrucción: "Lee el PRD en .claude/prd-auth.md e implementa la Fase 1. Cuando termines, confirma qué criterios de aceptación están cumplidos."',
      highlight: 'Los mejores cursos de Claude Code en 2026 identifican el PRD como la herramienta que más reduce errores en features grandes. Sin PRD, Claude hace suposiciones sobre el alcance. Con PRD, Claude tiene el contrato exacto de qué construir.',
    },
    {
      type: 'concept',
      title: 'Feedback loops: el ciclo que garantiza calidad',
      body: 'El Plan-Execute-Clear no es lineal — tiene loops de retroalimentación. Después de cada fase de ejecución, hay una fase de validación: ¿los tests pasan? ¿el comportamiento es el esperado? ¿hay efectos secundarios no deseados? Si algo falla, Claude analiza, ajusta y vuelve a ejecutar. Este loop puede correr automáticamente o con checkpoints humanos según la criticidad de la tarea.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Sequential Thinking MCP: razonamiento estructurado antes de ejecutar',
      body: 'Sequential Thinking (github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) es un servidor MCP que fuerza a Claude a desglosar problemas complejos en pasos explícitos antes de responder, en lugar de saltar directamente a una solución. Claude construye un árbol de razonamiento: identifica el problema, genera hipótesis, evalúa alternativas, selecciona el mejor enfoque. Es la misma filosofía del Plan Mode pero como herramienta instalable que aplica en cualquier tipo de tarea.',
      highlight: 'Instalar: agrega el servidor en Claude Desktop → Settings → MCP Servers. Especialmente útil para: diseño de sistemas, debugging de arquitectura, planificación de agentes multi-step, decisiones técnicas con múltiples alternativas. Cuando sientes que Claude "adivina" en lugar de razonar — activa Sequential Thinking.',
    },
    {
      type: 'comparison',
      bad: 'Sin Plan Mode en una refactorización grande:\n"Refactoriza el módulo de autenticación para usar el nuevo sistema de tokens."\n\nClaude empieza a modificar 15 archivos.\nA mitad del camino rompe un flujo que no esperaba.\nDeshaces 20 minutos de cambios.\nRepites con más instrucciones. Y de nuevo.',
      good: 'Con Plan Mode primero:\nclaude --permission-mode plan\n"Dame un plan para refactorizar el módulo de auth al nuevo sistema de tokens. Lista los archivos que tocarías y en qué orden."\n\nClaude: "Tocaría 6 archivos en este orden: [lista]. Riesgo en auth/middleware.ts por dependencia circular."\n\nTú apruebas el plan con la advertencia en mente.\nEjecución: sin sorpresas, 0 rollbacks.',
    },
  ],
  quiz: [
    {
      q: '¿Para qué tipo de tarea NO vale la pena activar Plan Mode?',
      opts: [
        'Para cualquier tarea que toque más de 1 archivo',
        'Para tareas pequeñas y acotadas como crear un componente nuevo o escribir un test específico — el overhead del plan no agrega valor aquí',
        'Para tareas que involucren la base de datos',
        'Plan Mode siempre vale la pena independientemente del tamaño de la tarea',
      ],
      correct: 1,
      exp: 'Plan Mode es overhead válido para cambios con riesgo de efecto secundario: refactorizaciones, migraciones, cambios multi-archivo con dependencias complejas. Para una tarea pequeña y bien definida (crear un componente de UI, escribir un test unitario), pedir plan primero solo agrega fricción sin reducir riesgo.',
    },
    {
      q: '¿Qué es un PRD en el contexto de Claude Code y qué problema resuelve?',
      opts: [
        'Un archivo de configuración técnica del proyecto — similar a package.json',
        'Un documento de texto con funcionalidades, criterios de aceptación y restricciones que Claude usa como contrato exacto para implementar una feature — elimina suposiciones de alcance',
        'Un log automático que Claude genera después de cada sesión para documentar lo que hizo',
        'Un plugin de Claude Code para projects managers que genera reportes de progreso',
      ],
      correct: 1,
      exp: 'Sin PRD, Claude asume el alcance de una feature y frecuentemente hace más o menos de lo que querías. Con un PRD en .claude/prd-nombre.md, Claude tiene el contrato exacto: qué construir, cómo validar que está bien, qué casos edge manejar. Es la herramienta que más reduce errores en features grandes según la comunidad de power users.',
    },
    {
      q: '¿Por qué es importante el paso CLEAR al final de cada tarea?',
      opts: [
        'Para liberar memoria RAM del computador que Claude usa',
        'Para evitar que el contexto de una tarea completada contamine la siguiente — cada tarea nueva merece un contexto limpio que no arrastra decisiones y código de tareas previas',
        'Claude Code requiere CLEAR como paso obligatorio antes de hacer commits',
        'CLEAR actualiza Claude Code a la última versión disponible',
      ],
      correct: 1,
      exp: 'El contexto acumulado es el mayor enemigo de la calidad en sesiones largas. El código de autenticación que implementaste hace 2 horas no debería influir en cómo Claude implementa el módulo de pagos. /clear garantiza que cada tarea empieza con el estado mínimo necesario.',
    },
  ],
  challenge: {
    title: 'Reto 2.2 — Tu primera sesión con Plan-Execute-Clear',
    desc: 'Implementa una feature real usando el workflow de 3 fases.',
    steps: [
      'Elige una feature pequeña pero real para tu proyecto — algo que normalmente tomaría 30-60 minutos de implementación manual.',
      'Activa Plan Mode: claude --permission-mode plan.',
      'Pide el plan: "Dame un plan detallado para implementar [tu feature]. Lista los archivos que tocarás, en qué orden, y cualquier riesgo o dependencia que identifies."',
      'Lee el plan cuidadosamente. ¿Hay algún archivo que no debería tocar? ¿Falta considerar algún caso edge? Corrige el plan en la misma conversación antes de aprobar.',
      'Cuando el plan esté alineado, sal del Plan Mode (Ctrl+C o nueva sesión sin el flag) y ejecuta: "Ejecuta el plan que acordamos. Si encuentras algo inesperado, detente y consúltame antes de continuar."',
      'Cuando Claude termine, valida: ¿los tests pasan? ¿el comportamiento es el esperado?',
      '/clear para limpiar el contexto. Documenta en tu CLAUDE.md cualquier convención nueva que aprendiste de esta sesión.',
    ],
    checkpoint: 'El workflow funciona cuando implementas la feature sin rollbacks y sin sorpresas — exactamente lo que acordaste en el plan. Si necesitaste hacer rollback, el plan no estaba suficientemente detallado.',
  },
}

// ─── 2.3 HOOKS ────────────────────────────────────────────────────────────────
export const HOOKS_LESSON = {
  id: 'mod2_l3',
  num: '3.3',
  title: 'Hooks: automatización determinista en Claude Code',
  duration: '30 min',
  xpReward: 80,
  videoId: 'roPfcQHdUtY',
  videoCaption: 'Claude Code Hooks: automatización sin supervisión — guía completa 2026',
  content: [
    {
      type: 'intro',
      text: 'Claude Code es probabilístico — el mismo prompt puede dar resultados ligeramente diferentes. Tus reglas de calidad no pueden ser probabilísticas. Los tests deben correr siempre. Los archivos .env nunca deben modificarse. El linter debe ejecutarse en cada cambio. Los hooks son la capa determinista que garantiza estas reglas sin importar cómo Claude interprete tus instrucciones.',
    },
    {
      type: 'concept',
      title: '¿Qué son los hooks?',
      body: 'Comandos shell que se ejecutan automáticamente en puntos específicos del ciclo de Claude Code. No son prompts — son código que siempre corre. A diferencia de "por favor recuerda siempre correr el linter" en CLAUDE.md, un hook de PostToolUse que corre el linter se ejecuta sin excepción cada vez que Claude edita un archivo. Los hooks se configuran en .claude/settings.json (específico del proyecto) o ~/.claude/settings.json (global para todos los proyectos).',
      highlight: 'Distinción crítica: un hook con exit code 2 en PreToolUse BLOQUEA la acción. Claude no puede proceder. Es la forma de crear guardrails que ningún prompt puede bypassear. Esto es lo que hace que los hooks sean tan poderosos para seguridad.',
    },
    {
      type: 'cards',
      title: 'Los 5 eventos más importantes',
      items: [
        {
          name: 'PreToolUse',
          tag: 'Guardrail',
          color: '#EF4444',
          desc: 'Se ejecuta ANTES de que Claude use una herramienta (editar archivo, correr comando). Puede BLOQUEAR la acción con exit code 2. Úsalo para: bloquear rm -rf, proteger archivos .env, requerir aprobación para cambios en producción.',
        },
        {
          name: 'PostToolUse',
          tag: 'Calidad',
          color: '#10B981',
          desc: 'Se ejecuta DESPUÉS de que Claude use una herramienta exitosamente. No puede deshacer, pero puede limpiar y validar. Úsalo para: correr Prettier después de cada edición, ejecutar tests, crear commits automáticos.',
        },
        {
          name: 'Notification',
          tag: 'Alertas',
          color: '#6366F1',
          desc: 'Se ejecuta cuando Claude necesita tu input o está esperando. Úsalo para: notificaciones de escritorio cuando Claude termina una tarea larga, alertas por WhatsApp o email para sesiones nocturnas.',
        },
        {
          name: 'Stop',
          tag: 'Cierre',
          color: '#8B5CF6',
          desc: 'Se ejecuta cuando Claude termina de responder. Úsalo para: generar reportes de lo que se hizo en la sesión, hacer backup automático, enviar summary por email al terminar una sesión larga.',
        },
        {
          name: 'UserPromptSubmit',
          tag: 'Contexto',
          color: '#F97316',
          desc: 'Se ejecuta cuando tú envías un mensaje, antes de que Claude lo procese. Úsalo para: inyectar contexto automático (fecha, estado del repo, variables de entorno) al inicio de cada prompt.',
        },
      ],
    },
    {
      type: 'concept',
      title: '3 hooks esenciales para empezar hoy',
      body: 'Hook 1 — Auto-format (PostToolUse): después de cada edición de archivo, corre Prettier. Configuración: matcher "Edit|Write", command "npx prettier --write $FILE". Hook 2 — Protección de archivos sensibles (PreToolUse): bloquea cualquier intento de modificar .env, secrets.yaml, o archivos de credenciales. Exit code 2 cancela la acción. Hook 3 — Notificación de escritorio (Notification): cuando Claude necesita tu input o termina una tarea, recibe una notificación del sistema operativo. En Mac: osascript -e \'display notification "Claude necesita tu atención"\'. Sin estos 3, estás dejando calidad y seguridad en manos de "por favor recuerda".',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Cómo se configura un hook en settings.json',
      body: 'El settings.json acepta el objeto "hooks" con keys por evento. Cada evento tiene una lista de objetos con "matcher" (regex que filtra qué herramientas activan el hook) y "command" (el shell command a ejecutar). Para PreToolUse bloqueante: el script hace exit 2 si la condición de bloqueo se cumple. Ejemplo de hook que bloquea modificar .env: matcher "Edit|Write", command que lee el path del archivo y hace exit 2 si coincide con ".env". Para ver, modificar o recargar hooks desde Claude Code: el comando /hooks abre un wizard interactivo. Para hooks avanzados que necesitan lógica compleja, el command puede apuntar a un script .sh en .claude/hooks/.',
      highlight: 'Consejo de la comunidad: empieza con los 3 hooks esenciales usando el wizard /hooks. No intentes escribir el settings.json a mano al principio. Una vez que entiendes cómo funcionan, puedes editarlo directamente para casos más avanzados.',
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia fundamental entre poner "siempre corre el linter después de editar" en CLAUDE.md vs configurarlo como un PostToolUse hook?',
      opts: [
        'No hay diferencia real — CLAUDE.md es más fácil de mantener así que es mejor',
        'CLAUDE.md es una instrucción que Claude puede ignorar o interpretar diferente. Un hook es código que siempre corre sin excepción — es la diferencia entre pedir y garantizar',
        'Los hooks solo funcionan en proyectos con Node.js instalado',
        'CLAUDE.md aplica globalmente a todos los proyectos; los hooks solo al proyecto actual',
      ],
      correct: 1,
      exp: 'Esta es la distinción más importante de los hooks. Una instrucción en CLAUDE.md es probabilística — Claude la sigue normalmente pero puede interpretarla de formas inesperadas. Un hook es determinista — el código se ejecuta siempre, sin excepción, independientemente de cómo Claude interprete la sesión.',
    },
    {
      q: 'Un PreToolUse hook que detecta que Claude intenta modificar un archivo .env retorna exit code 2. ¿Qué pasa?',
      opts: [
        'Claude registra una advertencia pero continúa con la modificación',
        'Claude recibe el mensaje de error del script, la acción se bloquea completamente — Claude no puede modificar el .env — y recibe el mensaje de error para reportarte',
        'El hook se desactiva automáticamente para ese archivo en particular',
        'Claude pregunta si quieres continuar antes de proceder',
      ],
      correct: 1,
      exp: 'Exit code 2 en PreToolUse es el mecanismo de bloqueo duro. Claude no puede sobrepasar este bloqueo con ningún prompt ni instrucción — la acción simplemente no ocurre. El stdout del script llega a Claude como mensaje de error que él te reporta. Es la guardrail más robusta disponible en Claude Code.',
    },
    {
      q: '¿Cuándo usarías un Notification hook en lugar de simplemente esperar a que Claude termine?',
      opts: [
        'Notification hooks no son útiles — Claude siempre es instantáneo',
        'Para tareas largas (30+ minutos): cuando Claude está trabajando en modo autónomo en segundo plano, el hook te avisa en tu teléfono o escritorio cuando necesita input o terminó',
        'Solo para equipos con múltiples desarrolladores — no tiene sentido para uso individual',
        'Los Notification hooks son solo para el plan Enterprise',
      ],
      correct: 1,
      exp: 'Para sesiones largas donde Claude trabaja autónomamente mientras tú haces otra cosa, los Notification hooks son esenciales. Sin ellos, tienes que revisar el terminal cada tanto para saber si terminó o necesita tu aprobación. Con el hook, recibes una alerta de escritorio o WhatsApp y solo vuelves al terminal cuando hay algo que hacer.',
    },
  ],
  challenge: {
    title: 'Reto 2.3 — Configura tus 3 hooks esenciales',
    desc: 'Instala automatización determinista en tu proyecto.',
    steps: [
      'Dentro de tu proyecto con Claude Code activo, ejecuta /hooks para abrir el wizard interactivo.',
      'Configura Hook 1 — Auto-format: evento PostToolUse, matcher "Edit|Write", command "FILE=$(cat | jq -r \'.tool_input.file_path // empty\') && [ -n \\"$FILE\\" ] && npx prettier --write \\"$FILE\\" 2>/dev/null || true". Guarda.',
      'Configura Hook 2 — Protección .env: evento PreToolUse, matcher "Edit|Write". Crea el archivo .claude/hooks/protect-env.sh con el script de verificación de paths sensibles. Command: bash .claude/hooks/protect-env.sh. Exit code 2 si detecta .env.',
      'Configura Hook 3 — Notificación de escritorio: evento Notification, command "osascript -e \'display notification \\"Claude necesita tu atención\\" with title \\"Claude Code\\"\'". (En Mac — ajusta para Linux/Windows si aplica).',
      'Prueba cada hook: (1) Edita un archivo y verifica que Prettier corre. (2) Pídele a Claude que intente modificar el .env — debe bloquearse. (3) Inicia una tarea larga y verifica que llega la notificación.',
      'Revisa .claude/settings.json para ver cómo quedó la configuración. Comitea el archivo para que aplique a todo el equipo si tienes uno.',
    ],
    checkpoint: 'Los 3 hooks están funcionando cuando: (1) Prettier corre automáticamente después de cada edición sin que lo pidas. (2) Claude no puede modificar el .env por más que lo intentes pedirle. (3) Recibes una notificación de escritorio cuando Claude termina o necesita input.',
  },
}

// ─── 2.4 WORKTREES Y AGENT TEAMS ─────────────────────────────────────────────
export const WORKTREES_LESSON = {
  id: 'mod2_l4',
  num: '3.4',
  title: 'Worktrees y Agent Teams: múltiples agentes en paralelo',
  duration: '30 min',
  xpReward: 85,
  videoId: 'EGWATU5S470',
  videoCaption: 'Worktrees y Agent Teams en Claude Code — paralelismo real 2026',
  content: [
    {
      type: 'intro',
      text: 'Hasta ahora has trabajado con un agente a la vez, de forma secuencial. Worktrees y Agent Teams cambian eso: puedes tener 4 agentes trabajando en 4 features diferentes simultáneamente, en branches aisladas, sin conflictos entre sí. Equipos con esta configuración documentan 30-50% de aceleración en sus ciclos de desarrollo. El techo documentado a mayo 2026 es 4-8 worktrees concurrentes por desarrollador.',
    },
    {
      type: 'concept',
      title: '¿Qué es un worktree?',
      body: 'Un worktree es una copia de trabajo aislada del mismo repositorio en una branch diferente. Git ya tiene soporte nativo para esto. En Claude Code, el flag -w crea automáticamente un worktree y abre Claude Code en él: claude -w feature-auth abre una nueva sesión de Claude en una branch aislada llamada feature-auth. Los cambios en esa sesión no afectan main ni otras branches hasta que tú hagas el merge. Puedes tener 4 terminales, cada una corriendo claude -w con una branch diferente, con agentes independientes trabajando en paralelo.',
      highlight: 'Prerequisito: tu proyecto debe estar en Git. Los worktrees son una feature de Git — Claude Code solo los expone de forma ergonómica con el flag -w.',
    },
    {
      type: 'concept',
      title: 'Auto Mode: Claude decide los permisos automáticamente',
      body: 'En flujos normales, Claude te pide permiso antes de ejecutar ciertas acciones. En Auto Mode (activado con Shift+Tab o --auto-approval), un clasificador interno evalúa cada acción y decide si es segura sin preguntarte. El clasificador detecta: acciones potencialmente destructivas (rm, DROP TABLE), prompt injection en archivos externos, modificaciones a archivos marcados como protegidos. Las acciones seguras se ejecutan automáticamente. Las potencialmente peligrosas se escalan a ti. Ideal para worktrees en sesiones largas donde no quieres aprobar cada paso.',
      highlight: null,
    },
    {
      type: 'cards',
      title: 'Agent Teams: orquestación a escala',
      items: [
        {
          name: 'Agente líder (Lead)',
          tag: 'Orquestador',
          color: '#6366F1',
          desc: 'El agente principal que recibe la tarea grande, la divide en subtareas independientes, y las delega a agentes trabajadores. Monitorea el progreso y consolida los resultados. Puede interrumpir a un trabajador si va por mal camino.',
        },
        {
          name: 'Agentes trabajadores (Workers)',
          tag: 'Especialistas',
          color: '#10B981',
          desc: 'Cada uno trabaja en su propia worktree con su propio contexto de 200K tokens. Pueden tener diferentes modelos (Opus para el líder, Sonnet para trabajadores). Se comunican con el líder via SendMessage.',
        },
        {
          name: 'Filesystem compartido',
          tag: 'Comunicación',
          color: '#F97316',
          desc: 'Los agentes coordinan a través de archivos en el repo — el líder crea un archivo de tarea, el trabajador lo lee, implementa, y escribe el resultado. Sin overhead de API entre agentes — todo en el mismo filesystem.',
        },
        {
          name: 'Claude Console',
          tag: 'Visibilidad',
          color: '#8B5CF6',
          desc: 'Panel en console.anthropic.com donde puedes ver qué hizo cada subagente, en qué orden, y el razonamiento detrás de cada decisión. Auditable y trazable — no es una caja negra.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Cuándo usar worktrees vs Agent Teams',
      body: 'Worktrees (manual): cuando tienes múltiples tareas independientes y quieres supervisar cada agente tú mismo desde terminales separadas. Ideal para 2-4 features en paralelo donde quieres control total. Agent Teams (orquestado): cuando tienes una tarea grande que naturalmente se divide en subtareas independientes y quieres que el agente líder coordine todo automáticamente. Ideal para "construye este feature completo" donde hay frontend, backend, tests y documentación que pueden ir en paralelo. La nota de Anthropic: "multi-agent no tiene sentido para el 95% de tareas de desarrollo ad-hoc". Úsalos para backlogs groomed con cards independientes, no para preguntas conversacionales.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Worktrees de Claude Code vs Cursor 3 Agents Window: diferencias clave',
      body: 'Cursor lanzó "3 Agents Window" (también llamado Cursor Background Agents) — múltiples instancias de agente visibles en una ventana dividida. Superficialmente similar a los worktrees. La diferencia técnica importante: los worktrees de Claude Code son branches de Git reales. Cada agente trabaja en un espacio de código aislado a nivel de filesystem. En Cursor 3 Agents Window, los agentes comparten el mismo árbol de trabajo — hay mayor riesgo de conflictos si dos agentes editan el mismo archivo. La ventaja de Cursor: interfaz visual integrada que muestra los 3 agentes simultáneamente sin cambiar de terminal. La ventaja de Claude Code worktrees: aislamiento Git real + puedes tener más de 3 agentes (límite documentado: 4-8) + cada agente tiene 200K de contexto propio sin compartir con los otros. Para flujos donde el aislamiento es crítico (migraciones, refactors grandes), worktrees son más seguros. Para iteraciones rápidas con contexto compartido, Cursor Agents Window puede ser más cómodo.',
      highlight: 'Si usas Cursor + Claude Code al mismo tiempo: usa Cursor Agents Window para tareas rápidas en el mismo contexto, usa worktrees de Claude Code cuando necesitas aislamiento de branch real o más de 3 agentes paralelos.',
    },
    {
      type: 'concept',
      title: 'Casos de uso reales documentados por la comunidad',
      body: 'Caso 1 — 4 PRs antes del almuerzo: worktrees para 4 cards del backlog. Cada agente trabaja en su branch, tú revisas los PRs cuando terminan. Caso 2 — Migración de base de datos con cobertura de tests: agente 1 escribe las migraciones, agente 2 escribe los tests de integración en paralelo. Se unen en la branch final. Caso 3 — Refactorización multi-módulo: cada módulo en su worktree, sin riesgo de conflictos de merge. Caso 4 — Pipeline de investigación: AgentKit con AutoResearch donde cada rama de la investigación corre en su worktree y los resultados se consolidan.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Qué ventaja técnica clave tienen los worktrees sobre simplemente abrir múltiples terminales con claude en el mismo directorio?',
      opts: [
        'Los worktrees son más rápidos porque usan más CPU simultáneamente',
        'Cada worktree trabaja en su propia branch Git aislada — los cambios de un agente no interfieren con los de otro hasta el merge explícito',
        'Los worktrees permiten usar diferentes versiones de Claude simultáneamente',
        'No hay ventaja técnica real — es solo una cuestión de preferencia de flujo de trabajo',
      ],
      correct: 1,
      exp: 'El aislamiento de branch es la ventaja clave. Sin worktrees, múltiples agentes en el mismo directorio editan los mismos archivos y generan conflictos. Con worktrees, cada agente tiene su propio espacio de trabajo aislado — el merge solo ocurre cuando tú decides integrarlo.',
    },
    {
      q: 'Tienes un backlog con 6 cards independientes (UI, API endpoint, tests, docs, migration, deployment script). ¿Cuándo usarías Agent Teams en lugar de worktrees manuales?',
      opts: [
        'Nunca — los worktrees manuales siempre son más seguros y predecibles',
        'Cuando quieres que un agente líder divida el trabajo, delegue a trabajadores especializados y consolide resultados automáticamente — sin que tú gestiones cada terminal',
        'Agent Teams solo funcionan con más de 10 cards en el backlog',
        'Solo en plan Max20 — el plan Pro no soporta Agent Teams',
      ],
      correct: 1,
      exp: 'Agent Teams tiene sentido cuando la coordinación entre las partes es compleja y quieres automatizarla. Si las 6 cards son verdaderamente independientes y quieres supervisar cada una, worktrees manuales dan más control. Si hay dependencias entre cards (la API debe estar antes del test) y quieres que el líder lo gestione, Agent Teams es más eficiente.',
    },
    {
      q: '¿Qué hace Auto Mode en Claude Code y por qué es especialmente útil en sesiones con worktrees?',
      opts: [
        'Hace que Claude escriba código automáticamente sin que le des instrucciones',
        'Un clasificador evalúa cada acción de Claude y aprueba automáticamente las seguras, escalando solo las potencialmente peligrosas — ideal en worktrees largos para no aprobar cada paso manualmente',
        'Activa el modo offline para trabajar sin conexión a internet',
        'Auto Mode solo está disponible en el plan Enterprise',
      ],
      correct: 1,
      exp: 'En sesiones largas con worktrees donde Claude trabaja de forma autónoma, aprobar cada acción manualmente elimina el beneficio del paralelismo. Auto Mode deja que el clasificador maneje las decisiones rutinarias (leer archivos, editar código estándar) y solo te interrumpe para las potencialmente destructivas.',
    },
  ],
  challenge: {
    title: 'Reto 2.4 — Tu primer flujo con worktrees',
    desc: 'Corre dos agentes en paralelo en branches aisladas.',
    steps: [
      'Asegúrate de que tu proyecto está en Git con al menos un commit: git init && git add . && git commit -m "initial commit" si aún no lo hiciste.',
      'Abre dos ventanas de terminal en la carpeta del proyecto.',
      'Terminal 1: claude -w feature-a — esto crea una branch feature-a y abre Claude Code en ella.',
      'Terminal 2: claude -w feature-b — branch feature-b, agente independiente.',
      'En Terminal 1: dale una tarea al agente A. En Terminal 2: dale una tarea diferente e independiente al agente B. Observa cómo trabajan simultáneamente.',
      'Cuando ambos terminen, revisa los cambios: git log --all --oneline para ver las branches. Verifica que los cambios de A y B están en branches separadas sin conflictos.',
      'Opcionales: intenta hacer merge de una de las branches a main: git merge feature-a.',
    ],
    checkpoint: 'Tienes el flujo dominado cuando ambos agentes trabajaron simultáneamente, sus cambios están en branches separadas sin conflictos, y puedes hacer merge de forma independiente. Ese es el workflow que multiplica tu throughput de desarrollo.',
  },
}

// ─── 2.5 PROMPT CACHING + BATCH API (renumerada desde 2.4) ────────────────────
export const PROMPT_CACHING_LESSON = {
  id: 'mod2_l5',
  num: '3.5',
  title: 'Prompt Caching y Batch API: 90% de ahorro en producción',
  duration: '25 min',
  xpReward: 70,
  videoId: '73eFWU-edO4',
  videoCaption: 'Prompt Caching y Batch API con Claude — reducción de costos en producción 2026',
  content: [
    {
      type: 'intro',
      text: 'En producción, los mismos tokens de input se procesan miles de veces: el system prompt, los documentos de referencia, las instrucciones de herramientas. Sin caching, cada llamada paga el precio completo. Con Prompt Caching, esos tokens se procesan una vez y se reutilizan gratis durante horas. El ahorro documentado en producción es entre 70% y 95% en costos de input — no es teoría, es aritmética.',
    },
    {
      type: 'cards',
      title: 'Prompt Caching: cómo funciona',
      items: [
        {
          name: '¿Qué se puede cachear?',
          tag: 'Tipos',
          color: '#6366F1',
          desc: 'System prompts largos, documentos de referencia, instrucciones de herramientas, ejemplos few-shot. En resumen: cualquier texto que se repite igual en múltiples llamadas. El contenido que cambia entre llamadas (el mensaje del usuario) no se cachea.',
        },
        {
          name: 'Cuánto dura el cache',
          tag: 'TTL',
          color: '#10B981',
          desc: 'Claude Sonnet: 5 minutos. Claude Haiku: 1 hora. Claude Opus: 5 minutos. Para procesos que corren cada pocos minutos (chatbots), Sonnet sufre. Para procesos por lotes con gaps largos, Haiku es más eficiente.',
        },
        {
          name: 'Ahorro real documentado',
          tag: 'Números',
          color: '#F97316',
          desc: 'Tokenes de cache hit: 90% más baratos que tokens normales. Una empresa con un system prompt de 10,000 tokens y 1,000 llamadas diarias ahorra $27/día solo con caching — sin cambiar nada más. A escala: $810/mes de ahorro en un sistema moderado.',
        },
        {
          name: 'Cómo activarlo',
          tag: 'Técnico',
          color: '#8B5CF6',
          desc: 'En la API, marca el contenido cacheable con cache_control: {type: "ephemeral"} en los mensajes o en el system prompt. El primer request procesa y cachea. Los siguientes hits el cache. Visible en la respuesta: usage.cache_read_input_tokens > 0 confirma que el cache funcionó.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Batch API: 50% de descuento en procesamiento asíncrono',
      body: 'Para tareas donde no necesitas respuesta inmediata, la Batch API procesa requests en grupos con 50% de descuento sobre los precios normales. El catch: los resultados pueden tardar hasta 24 horas. Casos de uso perfectos: clasificar 10,000 emails antes de la mañana siguiente, analizar 5,000 contratos de forma masiva, generar 500 descripciones de productos para un ecommerce, procesar toda la retroalimentación de clientes del mes. Casos donde NO usar: cualquier cosa que el usuario esté esperando en tiempo real.',
      highlight: 'Combinados: una pipeline que usa Batch API + Prompt Caching puede reducir costos hasta 95%. El caso documentado de 5,000 reviews de producto: sin optimización $45.00 → con caching + batch: $4.28. Reducción del 91%.',
    },
    {
      type: 'concept',
      title: 'Novedades de API: Fast Mode, Cache Diagnostics y Context Awareness (2026)',
      body: 'Fast Mode (research preview, abril 2026): disponible para Opus 4.7 con el header fast-mode-2026-02-01. Genera output tokens significativamente más rápido — útil para pipelines donde la velocidad importa más que el costo. Activar: model: "claude-opus-4-7" + header fast-mode-2026-02-01. Cache Diagnostics (public beta, abril 2026): cuando tu cache falla sin razón obvia, pasa diagnostics.previous_message_id en el request y la API reporta un cache_miss_reason explicando exactamente dónde divergió el prefijo. Header requerido: cache-diagnosis-2026-04-07. Elimina horas de debugging de caching. Context Awareness: Sonnet 4.6, Sonnet 4.5 y Haiku 4.5 rastrean su token budget activo durante cada sesión y reciben actualizaciones después de cada tool call: "Token usage: 35000/1000000; 965000 remaining". Ayuda a los agentes a gestionar sesiones largas sin sorpresas de contexto lleno.',
      highlight: 'Advertencia crítica de seguridad — Haiku 4.5: tiene cero protección nativa contra prompt injection. Si lo usas en setups agénticos que procesan inputs no confiables (texto de usuarios externos, scraping de páginas, documentos de terceros), lee la documentación de seguridad de Anthropic antes de desplegar. Haiku es el modelo más barato — atractivo para subagentes — pero en contextos con inputs externos puede ser explotado.',
    },
  ],
  quiz: [
    {
      q: '¿Qué tipo de contenido tiene sentido cachear y por qué?',
      opts: [
        'El mensaje específico del usuario — es el que más varía y necesita procesamiento fresco',
        'El system prompt, documentos de referencia e instrucciones de herramientas — contenido que se repite igual en múltiples llamadas y no cambia entre requests',
        'Solo el system prompt — los documentos de referencia siempre deben procesarse fresh por seguridad',
        'No hay criterio — todo el contenido puede y debe cachearse para máximo ahorro',
      ],
      correct: 1,
      exp: 'El caching funciona porque ciertos tokens son idénticos en múltiples llamadas. El system prompt, los docs de referencia y las instrucciones de herramientas son los candidatos perfectos — son constantes. El mensaje del usuario cambia en cada llamada y no puede cachearse. La regla: cachea lo estático, procesa lo dinámico.',
    },
    {
      q: '¿Para qué tarea usarías SOLO la Batch API (sin Prompt Caching)?',
      opts: [
        'Un chatbot de atención al cliente que responde preguntas en tiempo real',
        'Clasificar 50,000 emails históricos como spam/no-spam durante la noche, donde el resultado del día siguiente está bien',
        'Un asistente que analiza documentos mientras el usuario espera la respuesta',
        'La Batch API no sirve para ningún caso de uso real — es solo para testing',
      ],
      correct: 1,
      exp: 'La Batch API es para cuando el usuario NO está esperando. Clasificar 50,000 emails históricos es el caso perfecto: hay urgencia cero, el volumen es alto, y el 50% de descuento aplica. En contraste, un chatbot en tiempo real no puede esperar hasta 24 horas por las respuestas.',
    },
    {
      q: 'Una empresa tiene un chatbot con un system prompt de 15,000 tokens y recibe 2,000 mensajes diarios. ¿Cuánto ahorran mensualmente con Prompt Caching activo?',
      opts: [
        'Nada — el Prompt Caching solo funciona para API keys de plan Enterprise',
        'El cálculo: 15,000 tokens × 1,800 cache hits diarios (90% del tiempo) × 90% descuento × precio por token × 30 días — puede ser cientos o miles de dólares según el modelo',
        'Exactamente 50% del costo total — el caching siempre ahorra la mitad',
        'El ahorro es aleatorio — depende de cuándo expira el cache en cada request',
      ],
      correct: 1,
      exp: 'El ahorro es acumulativo y escalable. Con 15,000 tokens de system prompt que se procesan 2,000 veces diarias, el 90% de cache hits significa que en 1,800 de esas llamadas los 15,000 tokens cuestan 90% menos. A escala de mes eso representa un ahorro significativo que crece proporcionalmente con el volumen.',
    },
  ],
  challenge: {
    title: 'Reto 2.5 — Implementa Prompt Caching en una llamada real',
    desc: 'Agrega cache_control a tu primer script de API y mide el impacto.',
    steps: [
      'Crea un archivo test-caching.js en cualquier carpeta. Necesitas tu API key de Anthropic (console.anthropic.com → API Keys).',
      'Escribe un script que haga la misma llamada 3 veces: con un system prompt de al menos 1,000 palabras (copia el contenido de cualquier documento tuyo) y un mensaje simple ("Resume este contexto en una línea").',
      'Primera versión: sin cache_control. Observa usage.input_tokens en cada respuesta.',
      'Segunda versión: agrega cache_control: {type: "ephemeral"} al final del array de mensajes del system prompt. Corre las 3 llamadas de nuevo.',
      'Compara: ¿el segundo y tercer request muestran usage.cache_read_input_tokens > 0? ¿Cuántos input_tokens normales se procesaron vs cuántos vinieron del cache?',
      'Calcula el ahorro: tokens_del_cache × 0.9 × precio_por_token. Ese es el ahorro por cada llamada que hit el cache.',
    ],
    checkpoint: 'Tienes Prompt Caching funcionando cuando el segundo y tercer request de tu script muestran cache_read_input_tokens > 0 y input_tokens normal significativamente reducido. Si los 3 requests muestran los mismos input_tokens, el caching no está activo — revisa el placement del cache_control.',
  },
}

// ─── 2.6 PRD-DRIVEN DEVELOPMENT ──────────────────────────────────────────────
export const PRD_LESSON = {
  id: 'mod2_l6',
  num: '3.6',
  title: 'PRD-Driven Development: de requisito a código sistemáticamente',
  duration: '30 min',
  xpReward: 80,
  videoId: 'roPfcQHdUtY',
  videoCaption: 'PRD-Driven Development con Claude Code — features sin sorpresas 2026',
  content: [
    {
      type: 'intro',
      text: 'El mayor problema de construir con Claude Code no es el código que genera — es el alcance que asume cuando le das una instrucción vaga. "Implementa el módulo de pagos" puede significar 10 cosas diferentes. Un PRD (Product Requirements Document) lo hace unívoco: aquí está exactamente qué construir, cómo validar que está bien, y qué no incluir. El resultado: features que salen en la primera iteración sin rollbacks.',
    },
    {
      type: 'concept',
      title: '¿Qué es un PRD y qué no es?',
      body: 'Un PRD es un documento de texto que describe completamente qué quieres construir antes de que Claude toque una línea de código. No es documentación técnica de cómo implementarlo — es especificación de qué debe hacer y cómo verificar que funciona. Para Claude Code, el PRD es el contrato entre tú y el agente: "esto es exactamente lo que estamos construyendo, ni más ni menos." Vive en .claude/prd-nombre-feature.md dentro del proyecto.',
      highlight: null,
    },
    {
      type: 'cards',
      title: 'Las 5 secciones de un PRD efectivo para Claude Code',
      items: [
        {
          name: '1. Contexto y objetivo',
          tag: 'El por qué',
          color: '#6366F1',
          desc: 'Qué problema resuelve este feature. Por qué ahora. Quién lo usa. Una oración sobre el objetivo principal. Sin esto, Claude puede implementar la solución técnicamente correcta pero que no resuelve el problema real.',
        },
        {
          name: '2. Funcionalidades (User Stories)',
          tag: 'El qué',
          color: '#10B981',
          desc: 'Lista de lo que el usuario puede hacer: "Como [usuario], quiero [acción] para [beneficio]". Cada User Story es una funcionalidad concreta. Claude las implementa una por una. Sin ambigüedad de alcance.',
        },
        {
          name: '3. Criterios de aceptación',
          tag: 'Cómo verificar',
          color: '#F97316',
          desc: 'Para cada funcionalidad: qué debe ser verdad para considerarla completa. "Dado [contexto], cuando [acción], entonces [resultado esperado]". Claude corre los tests contra estos criterios — si pasan, la feature está done.',
        },
        {
          name: '4. Restricciones técnicas',
          tag: 'Los límites',
          color: '#8B5CF6',
          desc: 'Qué no puede hacer la implementación: no cambiar el schema de DB existente, no agregar nuevas dependencias, no modificar la API pública. Las restricciones son tan importantes como las funcionalidades.',
        },
        {
          name: '5. Casos edge y out of scope',
          tag: 'Límites explícitos',
          color: '#EC4899',
          desc: 'Casos edge que SÍ hay que manejar (usuario sin permisos, input vacío, red caída). Y explícitamente: qué está fuera del scope de esta iteración. "No incluye soporte multi-idioma — eso es v2."',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Flujo de trabajo PRD con Claude Code',
      body: 'Paso 1: Escribe el PRD en .claude/prd-nombre.md antes de abrir Claude Code. Paso 2: Abre Claude Code: claude. Paso 3: Instrucción inicial: "Lee el PRD en .claude/prd-auth.md. Antes de implementar, dime si hay ambigüedades o información faltante." Paso 4: Claude te hace preguntas aclaratorias — respóndelas y actualiza el PRD. Paso 5: "Implementa la Fase 1 del PRD. Cuando termines cada criterio de aceptación, confirma explícitamente cuál cumpliste." Paso 6: Claude implementa, reporta progreso contra criterios. Paso 7: Claude Code + tu PRD como Evals — verifica criterio por criterio antes de cerrar.',
      highlight: 'El paso más omitido: pedirle a Claude que identifique ambigüedades antes de implementar. Un PRD bien escrito tiene 2-3 cosas que no especificaste y que Claude resolverá de formas que no esperabas. Mejor resolverlas antes que hacer rollback después.',
    },
    {
      type: 'concept',
      title: 'PRD multi-fase: features grandes en iteraciones controladas',
      body: 'Para features que toman días, el PRD se divide en fases. Cada fase es una iteración independiente que entrega valor por sí sola. Fase 1: el MVP mínimo que funciona. Fase 2: el caso feliz completo. Fase 3: manejo de errores y edge cases. Fase 4: performance y optimización. Claude implementa fase por fase. Después de cada fase, evalúas, ajustas el PRD si es necesario, y decides si avanzar a la siguiente. Esto evita el problema de "implementé todo y ahora hay que refactorizar la mitad".',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia entre los "Criterios de Aceptación" y los "Casos Edge" en un PRD para Claude Code?',
      opts: [
        'Son lo mismo expresado de forma diferente',
        'Criterios de Aceptación definen qué debe ser verdad para que la funcionalidad principal esté completa. Casos Edge definen situaciones especiales que también deben manejarse correctamente',
        'Los Criterios de Aceptación son para el product manager; los Casos Edge solo para el desarrollador',
        'Los Criterios de Aceptación son obligatorios; los Casos Edge son opcionales y se implementan si hay tiempo',
      ],
      correct: 1,
      exp: 'Los Criterios de Aceptación son el contrato de "done" para el flujo principal: "dado un usuario autenticado, cuando hace clic en Pagar, entonces se procesa el pago y recibe confirmación". Los Casos Edge cubren situaciones especiales: ¿qué pasa si el usuario no tiene saldo? ¿si la red falla? Ambos son obligatorios — la diferencia es que los Criterios cubren el happy path y los Edge Cases cubren los fallos.',
    },
    {
      q: '¿Por qué pedirle a Claude que identifique ambigüedades en el PRD ANTES de implementar es el paso más crítico del flujo?',
      opts: [
        'Solo para dar tiempo a Claude de leer el documento completo antes de empezar',
        'Porque un PRD siempre tiene cosas no especificadas que Claude resolverá de formas inesperadas — mejor resolverlas en texto antes que hacer rollback de código',
        'Es un paso opcional que solo aplica para features muy grandes (+500 líneas de código)',
        'Anthropic recomienda este paso solo para el plan Enterprise',
      ],
      correct: 1,
      exp: 'Este paso es el más valioso del flujo. Cada PRD tiene 2-5 decisiones no especificadas. Sin esta pregunta, Claude las resuelve con sus propios supuestos — que pueden no coincidir con los tuyos. Con esta pregunta, las aclaras antes del código. El costo de aclarar texto es cero; el costo de hacer rollback de código es tiempo real.',
    },
    {
      q: '¿Cuál es el beneficio principal del enfoque de PRD multi-fase frente a especificar todo el feature de una vez?',
      opts: [
        'El multi-fase es más rápido porque Claude puede paralelizar las fases',
        'Cada fase entrega valor independiente, permite ajustar el PRD basado en lo aprendido, y evita el problema de "implementé todo y hay que refactorizar la mitad"',
        'El multi-fase es obligatorio para features con más de 100 líneas de código',
        'No hay diferencia real — es solo preferencia personal del desarrollador',
      ],
      correct: 1,
      exp: 'En software, los requisitos cambian al ver el primer resultado. El multi-fase capitaliza esto: la Fase 1 entrega el MVP, tú ves el resultado real y ajustas el plan antes de la Fase 2. Con el approach de todo-de-una-vez, descubres que la arquitectura del módulo de Fase 1 no soporta bien la Fase 3 cuando ya está todo construido.',
    },
  ],
  challenge: {
    title: 'Reto 2.6 — Escribe y usa tu primer PRD',
    desc: 'De descripción vaga a feature sin rollbacks.',
    steps: [
      'Elige una feature para tu proyecto — algo que normalmente describirías en 1-2 líneas vagas.',
      'Escribe el PRD en .claude/prd-[nombre].md. Incluye las 5 secciones: contexto, user stories, criterios de aceptación (formato "Dado/Cuando/Entonces"), restricciones técnicas, y out of scope explícito.',
      'Abre Claude Code: claude. Primera instrucción: "Lee el PRD en .claude/prd-[nombre].md. Identifica todo lo que es ambiguo o falta especificar. Hazme las preguntas necesarias antes de implementar."',
      'Responde las preguntas de Claude. Actualiza el PRD con las aclaraciones. Cuando Claude diga que el PRD está claro, continúa.',
      '"Implementa la Fase 1 del PRD. Confirma explícitamente cada criterio de aceptación que cumplas a medida que avanzas."',
      'Cuando Claude termine, evalúa: ¿cuántos criterios de aceptación pasaron sin corrección? ¿cuántos requirieron ajuste?',
      'Documenta en el PRD las decisiones tomadas durante la implementación — servirán de contexto para las siguientes fases.',
    ],
    checkpoint: 'El PRD funciona bien cuando Claude implementa la Fase 1 y confirma cada criterio de aceptación sin que tú tengas que hacer rollback o correcciones mayores de dirección. Si necesitaste corregir mucho, el PRD tenía ambigüedades — la próxima iteración el proceso de preguntas las resolverá más completo.',
  },
}

// ─── 4.7 DREAMING, OUTCOMES Y ROUTINES ───────────────────────────────────────
export const DREAMING_LESSON = {
  id: 'mod4_l7',
  num: '6.3',
  title: 'Dreaming, Outcomes y Routines: agentes que se mejoran solos',
  duration: '25 min',
  xpReward: 80,
  videoId: 'EGWATU5S470',
  videoCaption: 'Code with Claude 2026: Dreaming, Outcomes y Routines — mayo 6, 2026',
  content: [
    {
      type: 'intro',
      text: 'El 6 de mayo de 2026, Anthropic celebró "Code with Claude" en San Francisco y lanzó tres capacidades que cambian fundamentalmente cómo funcionan los agentes en producción: Dreaming (memoria que mejora entre sesiones), Outcomes (outputs que se auto-evalúan hasta cumplir un estándar), y Routines (agentes cloud que corren solos sin tu computador). Esta lección cubre los tres con los datos reales del lanzamiento.',
    },
    {
      type: 'concept',
      title: 'Dreaming: memoria que se consolida entre sesiones',
      body: 'El problema que resuelve: los agentes en producción degradan con el tiempo. El memory store acumula reglas viejas, workarounds obsoletos, notas contradictorias. A las pocas semanas, el agente es más lento y menos preciso que al inicio. Dreaming es un proceso programado que corre entre sesiones: revisa lo que el agente hizo en sus últimas sesiones, extrae patrones (errores recurrentes, workflows que convergen, preferencias del equipo), y reescribe el memory store para que esté limpio y actualizado. El agente "duerme" y "sueña" sobre lo que aprendió — análogo a cómo el cerebro humano consolida memorias durante el sueño.',
      highlight: 'Resultado documentado en el lanzamiento: Harvey (startup legal, cliente de Anthropic) activó Dreaming en sus agentes de redacción legal. Task completion rates subieron 6x en testing interno. El problema que tenían: los agentes olvidaban quirks específicos de formatos de archivos y workarounds de herramientas entre sesiones — los mismos jobs fallaban de la misma forma una y otra vez.',
    },
    {
      type: 'concept',
      title: 'Outcomes: outputs que se auto-evalúan',
      body: 'El problema que resuelve: la mayoría de equipos confía en que el agente auto-reporte si su output es bueno. Eso no funciona — el agente que produjo el output tiene sesgo inherente para evaluarlo positivamente. Outcomes implementa el patrón Evaluator que vimos en la Lección 4.6: cuando el agente produce un output, un grader separado lo evalúa en su propio context window contra un rubric que tú defines. Si no cumple el estándar, el agente recibe el feedback y revisa. El loop continúa hasta que el output pasa el rubric.',
      highlight: 'Dato del lanzamiento: 10.1% de mejora en calidad de output añadiendo el grader loop — sin cambiar el modelo. Anthropic enfatizó: "la mayoría de equipos está dejando calidad sobre la mesa no porque sus modelos sean malos, sino porque no tienen forma sistemática de verificar outputs antes de entregar."',
    },
    {
      type: 'cards',
      title: 'Routines: agentes cloud sin tu computador',
      items: [
        {
          name: '¿Qué es un Routine?',
          tag: 'Nuevo en mayo 2026',
          color: '#6366F1',
          desc: 'Un Routine empaqueta una configuración de Claude Code (prompt, repositorios, herramientas, conectores) y la corre continuamente en la infraestructura cloud de Anthropic. Sin necesitar tu computador encendido. Sin necesitar Claude Desktop corriendo.',
        },
        {
          name: 'Diferencia con Scheduled Tasks',
          tag: 'Comparación',
          color: '#10B981',
          desc: 'Scheduled Tasks (CoWork) requieren tu Mac encendido con CoWork activo. Routines corren en cloud de Anthropic — funcionan aunque tu computador esté apagado. Son más robustos para procesos críticos de negocio.',
        },
        {
          name: 'Casos de uso',
          tag: 'Aplicaciones',
          color: '#F97316',
          desc: 'Monitoreo continuo de repos en producción, análisis diario de logs de error, generación automática de reportes, pipeline de investigación nocturno, agente de soporte que corre 24/7 sin supervisión.',
        },
        {
          name: 'Estado actual (mayo 2026)',
          tag: 'Disponibilidad',
          color: '#8B5CF6',
          desc: 'Dreaming: research preview, acceso por solicitud. Outcomes: public beta. Routines: anunciados en Code with Claude, lanzamiento en fases. Todos requieren plan Pro o superior. Para acceso: console.anthropic.com.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Multi-agent Orchestration en Managed Agents',
      body: 'También lanzado en Code with Claude 2026: orquestación multi-agente a nivel de plataforma administrada. Un agente líder divide un job en piezas y delega a subagentes especialistas que trabajan en paralelo en un filesystem compartido. Cada subagente tiene su propio modelo, prompts y herramientas. El líder puede verificar el progreso de los subagentes a mitad del workflow. Todo el flujo es auditable en Claude Console: qué hizo cada subagente, en qué orden, con qué razonamiento. El ejemplo de Anthropic: un agente de investigación de bugs que delega a subagentes que revisan en paralelo el historial de deploys, logs de error, métricas y código fuente.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Cómo prepararte para estas capacidades hoy',
      body: 'Dreaming requiere un memory store estructurado — empieza hoy creando un archivo memory.md en tu proyecto donde documentes las decisiones importantes, workarounds conocidos y preferencias del equipo. Cuando Dreaming esté disponible para tu plan, tendrás la base ya construida. Outcomes requiere escribir un rubric — practica definiendo criterios explícitos de calidad para los outputs de tus agentes actuales. Es el mismo ejercicio de Evals (Lección 4.6). Routines requieren configurar bien tu CLAUDE.md y Skills — los Routines usan la misma configuración de tu proyecto local.',
      highlight: 'La inversión más rentable ahora: definir bien tu memory.md y tu rubric. Cuando Dreaming y Outcomes estén en beta pública para tu plan, los activarás con 0 trabajo adicional porque ya tienes la base.',
    },
  ],
  quiz: [
    {
      q: '¿Qué problema específico resuelve Dreaming que los sistemas de memoria convencionales no resuelven?',
      opts: [
        'Dreaming permite que los agentes aprendan de datos externos de internet en tiempo real',
        'Los memory stores acumulan ruido con el tiempo — reglas viejas, contradicciones, workarounds obsoletos. Dreaming los consolida entre sesiones extrayendo patrones válidos y eliminando lo irrelevante, como el sueño humano consolida memoria',
        'Dreaming permite que múltiples agentes compartan la misma memoria simultáneamente',
        'Dreaming solo funciona para agentes de código — no para agentes de texto o análisis',
      ],
      correct: 1,
      exp: 'El problema de degradación de agentes es real y documentado: sin mantenimiento del memory store, los agentes acumulan ruido que los hace menos precisos y más lentos. Dreaming automatiza ese mantenimiento entre sesiones. La analogía con el sueño es precisa: el cerebro durante el sueño también consolida, compacta y limpia memorias — Dreaming hace lo mismo con el memory store del agente.',
    },
    {
      q: 'Un agente de redacción de contratos legales produce outputs de calidad inconsistente. ¿Cómo resuelve Outcomes este problema?',
      opts: [
        'Outcomes cambia automáticamente el modelo a Opus cuando detecta baja calidad',
        'Outcomes implementa un grader separado que evalúa cada output contra un rubric definido por ti — si no pasa, el agente recibe feedback y revisa hasta cumplir el estándar',
        'Outcomes hace que el agente pida aprobación humana para cada párrafo',
        'Outcomes solo funciona para código — para texto legal sigue siendo manual',
      ],
      correct: 1,
      exp: 'El grader separado es la clave. Un agente evaluando su propio output tiene sesgo. Un grader en su propio contexto, con un rubric explícito, es objetivo. El 10.1% de mejora documentado viene de este loop de revisión — no de un modelo mejor ni de más tokens, sino de un proceso de verificación sistemático.',
    },
    {
      q: '¿Cuál es la diferencia práctica más importante entre un Routine y una Scheduled Task de CoWork para decidir cuál usar?',
      opts: [
        'No hay diferencia real — son dos nombres para lo mismo',
        'Routines corren en infraestructura cloud de Anthropic y no requieren tu computador encendido. Scheduled Tasks requieren tu Mac con CoWork activo. Para procesos críticos que deben correr 24/7, Routines son más robustos',
        'Routines solo soportan tareas de código; Scheduled Tasks soportan cualquier tipo de tarea',
        'Routines son gratuitos; Scheduled Tasks tienen costo adicional',
      ],
      correct: 1,
      exp: 'Para un fotógrafo enviando el morning briefing a las 7AM o un agente de soporte que atiende clientes de noche, Scheduled Tasks son suficientes si tu computador está encendido. Para un proceso crítico de negocio que no puede fallar si apagas el Mac, o para agentes de producción que deben correr con uptime garantizado, Routines en cloud son la solución correcta.',
    },
  ],
  challenge: {
    title: 'Reto 4.7 — Prepara la base para Dreaming y Outcomes',
    desc: 'Construye hoy la infraestructura que activarás cuando llegue el acceso.',
    steps: [
      'Crea un archivo memory.md en la raíz de tu proyecto principal. Documenta: (1) las 3-5 decisiones arquitectónicas más importantes ya tomadas, (2) workarounds conocidos y por qué existen, (3) preferencias de estilo del equipo, (4) errores recurrentes que has visto y cómo los resuelves.',
      'Crea un archivo rubric.md en .claude/ con los criterios de calidad de los outputs más importantes que Claude produce para ti (emails, código, análisis). Formato "Dado/Cuando/Entonces" igual que los criterios de aceptación del PRD.',
      'Actualiza tu CLAUDE.md para incluir una referencia a ambos archivos: @memory.md para contexto histórico, @rubric.md para estándares de calidad.',
      'Registra tu interés en el research preview de Dreaming en console.anthropic.com si ya está disponible para tu región.',
      'Practica el patrón Evaluator ya disponible (Lección 4.6): en tu próxima sesión importante, pídele a Claude que evalúe su propio output contra el rubric.md antes de entregártelo.',
    ],
    checkpoint: 'La base está lista cuando: (1) memory.md documenta el conocimiento que un agente nuevo necesitaría para no repetir errores pasados. (2) rubric.md define estándares tan claros que Claude puede autoevaluar si los cumple. (3) Cuando llegue el acceso a Dreaming, activas la feature con un comando — no con semanas de setup.',
  },
}

// ─── EXPORT CONSOLIDADO ───────────────────────────────────────────────────────
export const CLAUDE_CODE_LESSONS = [
  CLAUDE_CODE_REFERENCE,
  CLAUDE_CODE_SETUP,
  PLAN_EXECUTE_CLEAR,
  HOOKS_LESSON,
  WORKTREES_LESSON,
  PROMPT_CACHING_LESSON,
  PRD_LESSON,
]
