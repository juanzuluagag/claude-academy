export const AGENT_INTRO_LESSON = {
  id: 'mod4_l1',
  num: '6.1',
  title: 'Qué es un agente de IA: autonomía, herramientas y el ciclo de acción',
  duration: '20 min',
  xpReward: 60,
  content: [
    {
      type: 'intro',
      text: 'Un chatbot responde. Un agente actúa. Esa distinción —una sola palabra— cambia todo: qué puede hacer el sistema, cómo falla, cómo supervisarlo, cómo desplegarlo. Esta lección explica qué hace que un sistema de IA sea un "agente", cómo piensa y actúa, y cuándo tiene sentido construir uno.',
    },
    {
      type: 'concept',
      title: '¿Qué es un agente de IA?',
      body: 'Un agente es un sistema de IA que percibe su entorno, toma decisiones, y ejecuta acciones para alcanzar un objetivo — en un loop continuo, sin necesitar que un humano apruebe cada paso. La diferencia con un chatbot es arquitectónica: el chatbot ejecuta un ciclo request-response y termina. El agente recibe un objetivo, planea cómo alcanzarlo, ejecuta pasos, observa los resultados, y ajusta — hasta completar la tarea o pedir ayuda.\n\nEjemplo concreto: "¿cuáles son las tendencias del mercado?" es una pregunta para un chatbot. "Monitorea el mercado cada mañana, identifica las 3 tendencias más relevantes para nuestra empresa, y envíame un resumen a las 8am" es un trabajo para un agente.',
      highlight: 'La autonomía no es todo-o-nada. Hay un espectro: desde agentes que piden aprobación en cada paso (human-in-the-loop estricto) hasta agentes que corren sin supervisión durante horas. La mayoría de sistemas en producción están en el medio.',
    },
    {
      type: 'concept',
      title: 'El ciclo percepción → decisión → acción',
      body: 'Todo agente opera en un loop de tres fases:\n\n**Percepción:** el agente observa el estado del mundo — texto, archivos, resultados de herramientas, mensajes de otros agentes, outputs de APIs. Todo lo que llega al contexto es su "percepción".\n\n**Decisión:** Claude procesa lo que percibió y elige qué hacer: ¿llama a una herramienta? ¿escribe código? ¿delega a un subagente? ¿pregunta al humano? ¿declara la tarea completada?\n\n**Acción:** ejecuta la decisión — llama la herramienta, escribe el archivo, envía el mensaje, lanza el subagente. El resultado de esa acción vuelve al ciclo como nueva percepción.\n\nEste loop puede correr decenas o cientos de veces en una sola tarea. En Dynamic Workflows (mayo 2026), Anthropic documentó agentes corriendo 400+ ciclos en trabajos de migración de código.',
      highlight: null,
    },
    {
      type: 'cards',
      title: 'Las 4 categorías de herramientas que usan los agentes',
      items: [
        {
          name: 'Herramientas de lectura',
          tag: 'Percepción',
          color: '#6366F1',
          desc: 'Leer archivos, consultar APIs, buscar en la web, ejecutar queries SQL, revisar código. Permiten al agente observar el mundo y recopilar información para sus decisiones.',
        },
        {
          name: 'Herramientas de escritura',
          tag: 'Acción',
          color: '#10B981',
          desc: 'Escribir archivos, hacer commits, enviar emails, crear tickets, llamar webhooks. Son las acciones con consecuencias externas — las que requieren mayor cuidado y supervisión.',
        },
        {
          name: 'Herramientas de cómputo',
          tag: 'Procesamiento',
          color: '#F97316',
          desc: 'Ejecutar código Python o bash, correr tests, compilar. Permiten al agente transformar datos y verificar sus propios outputs con evidencia concreta, no solo razonamiento.',
        },
        {
          name: 'Herramientas de coordinación',
          tag: 'Multi-agente',
          color: '#EC4899',
          desc: 'Llamar a subagentes especializados. En sistemas multi-agente, estas herramientas permiten al orquestador delegar trabajo y recibir resultados de agentes que trabajan en paralelo.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Cuándo usar un agente — y cuándo no',
      body: 'Los agentes son ideales cuando la tarea es: multi-paso con dependencias entre pasos, requiere decisiones dinámicas según resultados intermedios, es demasiado larga para una sola respuesta, necesita acceder o modificar sistemas externos, o se beneficia de correr sin supervisión continua.\n\nNO construyas un agente cuando: la tarea se resuelve con un prompt bien diseñado, el riesgo de acciones erróneas es alto y necesitas control granular en cada paso, o la latencia importa (los agentes son más lentos que un prompt directo — cada iteración es una llamada a la API).',
      highlight: 'Regla práctica: si puedes resolver la tarea con un prompt de 3 párrafos bien diseñado, no construyas un agente. Los agentes añaden complejidad, costo y superficie de error. Son la herramienta correcta para el problema correcto, no la solución universal.',
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia fundamental entre un chatbot y un agente de IA?',
      opts: [
        'El agente usa modelos más grandes y por eso es más inteligente',
        'El chatbot ejecuta un ciclo request-response y termina; el agente corre un loop percepción-decisión-acción de forma continua hasta alcanzar un objetivo',
        'Un agente siempre requiere internet para funcionar, un chatbot no',
        'No hay diferencia real — "agente" es solo marketing para chatbots avanzados',
      ],
      correct: 1,
      exp: 'La distinción es arquitectónica, no de capacidad del modelo. Un chatbot ejecuta un ciclo request-response. Un agente corre un loop que puede iterar decenas de veces sin intervención humana en cada paso. Esto cambia todo: cómo falla, cómo supervisarlo, qué tareas puede resolver, y qué riesgos introduce.',
    },
    {
      q: '¿Cuándo NO tiene sentido construir un agente?',
      opts: [
        'Cuando la tarea toma más de 10 minutos en completarse',
        'Cuando la tarea requiere acceso a más de 2 herramientas externas',
        'Cuando la tarea puede resolverse con un prompt bien diseñado y el overhead de complejidad, costo y latencia no se justifica',
        'Cuando el usuario final no es un desarrollador técnico',
      ],
      correct: 2,
      exp: 'Los agentes añaden complejidad real: más llamadas a la API (mayor costo), latencia adicional por cada iteración, superficie de error ampliada, y necesidad de infraestructura. Si un buen prompt resuelve el problema, úsalo. Los agentes son la herramienta correcta para tareas genuinamente multi-paso con decisiones dinámicas.',
    },
    {
      q: '¿Qué categoría de herramienta requiere mayor supervisión al diseñar un agente?',
      opts: [
        'Herramientas de lectura — porque el agente puede acceder a información confidencial',
        'Herramientas de escritura — porque ejecutan acciones con consecuencias externas difíciles de revertir',
        'Herramientas de cómputo — porque el código puede entrar en loop infinito',
        'Herramientas de coordinación — porque un subagente podría tomar el control',
      ],
      correct: 1,
      exp: 'Las herramientas de escritura (modificar archivos, enviar emails, hacer commits, llamar webhooks) tienen consecuencias externas y pueden ser irreversibles. En sistemas bien diseñados, las acciones de escritura son los puntos donde se implementa human-in-the-loop: el agente planea, el humano aprueba antes de ejecutar.',
    },
  ],
  challenge: {
    title: 'Reto 4.1 — Analiza un agente que ya usas',
    desc: 'Identifica un sistema de IA agéntico que ya existe y desmóntalo conceptualmente usando el vocabulario de esta lección.',
    steps: [
      'Elige un agente que ya conozcas: CoWork, Claude Code con /goal, un assistant de soporte automatizado, o cualquier pipeline de IA que actúe autónomamente.',
      'Identifica su ciclo de percepción: ¿qué observa el agente en cada paso? ¿qué información entra a su contexto?',
      'Identifica sus herramientas por categoría: ¿qué puede leer? ¿qué puede escribir? ¿puede ejecutar código? ¿puede llamar subagentes?',
      'Identifica los puntos de decisión: ¿dónde el agente elige entre múltiples caminos? ¿cuándo decide que terminó?',
      'Identifica los puntos de supervisión humana: ¿qué acciones requieren aprobación manual? ¿dónde podría el agente causar daño si falla?',
      'Escribe un párrafo describiendo el agente usando el vocabulario: percepción, decisión, acción, herramientas, loop agéntico.',
    ],
  },
}

export const AGENT_ARCHITECTURES_LESSON = {
  id: 'mod4_l2',
  num: '6.2',
  title: 'Arquitecturas de agentes: de agente simple a sistemas multi-agente',
  duration: '25 min',
  xpReward: 70,
  content: [
    {
      type: 'intro',
      text: 'Un agente solo puede hacer tanto como le permite su ventana de contexto, sus herramientas y el tiempo disponible. Cuando la tarea es demasiado grande, demasiado compleja, o requiere especialización simultánea en paralelo, la respuesta es múltiples agentes trabajando en equipo. Esta lección cubre las arquitecturas que usan los equipos de IA en producción — desde un agente simple hasta sistemas de decenas de agentes coordinados.',
    },
    {
      type: 'concept',
      title: 'Agente simple: el punto de partida correcto',
      body: 'La arquitectura más básica: un solo Claude con acceso a herramientas, corriendo el loop percepción-decisión-acción hasta completar la tarea. Es el punto de partida correcto para la mayoría de casos — no diseñes multi-agente cuando un agente bien configurado basta.\n\nLimitaciones reales del agente simple: (1) acotado por la ventana de contexto — 128K tokens en Opus 4.7 es mucho pero no es infinito, (2) no puede paralelizar trabajo genuinamente independiente, (3) un solo punto de falla, (4) sin especialización — el mismo agente hace todo, lo cual diluye el foco.',
      highlight: 'Regla de diseño: empieza siempre con el agente más simple posible. Solo añade complejidad cuando puedas articular específicamente qué limitación del agente simple estás resolviendo.',
    },
    {
      type: 'cards',
      title: 'Las 3 razones válidas para ir a multi-agente',
      items: [
        {
          name: 'Paralelismo real',
          tag: 'Velocidad',
          color: '#6366F1',
          desc: 'Cuando tienes N trabajos independientes, N agentes en paralelo son N veces más rápidos que un agente secuencial. Ejemplo: revisar 20 PRs simultáneamente en lugar de uno por uno. Solo aplica cuando los trabajos son genuinamente independientes — sin dependencias entre sí.',
        },
        {
          name: 'Escala de contexto',
          tag: 'Volumen',
          color: '#10B981',
          desc: 'Cuando la tarea entera no cabe en una ventana de contexto. Un repositorio de 500,000 líneas no entra en 128K tokens. Dividir el trabajo entre agentes especializados por módulo resuelve el límite sin perder calidad.',
        },
        {
          name: 'Especialización',
          tag: 'Calidad',
          color: '#F97316',
          desc: 'Cuando distintas partes requieren prompts, modelos o herramientas radicalmente diferentes. Un agente investigador necesita búsqueda web; un agente escritor necesita contexto editorial; un agente revisor necesita criterios de calidad explícitos. Cada especialista hace mejor su parte.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'El patrón Planner-Generator-Evaluator',
      body: 'El patrón de 3 roles más documentado en sistemas agénticos de producción:\n\n**Planner:** recibe el objetivo, lo descompone en subtareas concretas y asigna responsabilidades. Define qué hace cada agente, en qué orden, y cómo se pasan los resultados. No ejecuta trabajo — estructura el trabajo.\n\n**Generator:** ejecuta las subtareas asignadas. Produce outputs concretos: código, textos, análisis, datos. Su único trabajo es generar, no evaluar.\n\n**Evaluator:** recibe el output del Generator sin acceso a su razonamiento interno, y lo evalúa contra un rubric explícito. Si no cumple el estándar, devuelve feedback al Generator para que revise. La separación es crítica: el Generator que produjo el output tiene sesgo inherente para evaluarlo positivamente. Un Evaluator independiente no tiene ese sesgo.',
      highlight: 'Anthropic reportó que añadir el Evaluator independiente (sin cambiar el modelo del Generator) mejora la tasa de éxito en ~10 puntos porcentuales en benchmarks internos. La perspectiva externa detecta fallas que la auto-evaluación sistemáticamente ignora.',
    },
    {
      type: 'concept',
      title: 'Otros patrones frecuentes en producción',
      body: '**Pipeline secuencial:** el output de un agente es el input del siguiente. Útil cuando hay dependencias fuertes entre pasos. Ejemplo: Researcher → Summarizer → Writer → Editor. Cada agente recibe un input limpio sin necesitar conocer el proceso completo.\n\n**Fan-out / Fan-in:** un orquestador divide el trabajo en N piezas paralelas, los agentes trabajan simultáneamente, el orquestador consolida los resultados. Es el patrón de Dynamic Workflows de Anthropic — usado para migrar repositorios completos en horas.\n\n**Supervisor-Worker:** un agente supervisor asigna tareas dinámicamente a workers disponibles según carga y especialización. Similar a un gestor de proyectos con un equipo: el supervisor no ejecuta, coordina.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la razón correcta para pasar de un agente simple a un sistema multi-agente?',
      opts: [
        'Cuando quieres que el sistema "parezca más avanzado" para demostraciones',
        'Siempre que uses Claude Opus — es el modelo más potente y merece arquitectura más sofisticada',
        'Cuando puedes articular una limitación específica del agente simple que la arquitectura multi-agente resuelve: paralelismo, escala de contexto, o especialización',
        'Cuando la tarea tarda más de 5 minutos en ejecutarse',
      ],
      correct: 2,
      exp: 'Multi-agente añade complejidad real: más puntos de falla, más difícil de debuggear, mayor costo por tokens adicionales, más infraestructura. Solo se justifica cuando resuelves una limitación concreta y articulable del agente simple. Si no puedes nombrar esa limitación, el agente simple es la respuesta correcta.',
    },
    {
      q: '¿Por qué el Evaluator en el patrón Planner-Generator-Evaluator debe ser un agente separado?',
      opts: [
        'Para ahorrar tokens — el Evaluator usa un modelo más económico',
        'Porque Anthropic no permite que un mismo agente tenga múltiples roles simultáneamente',
        'Para eliminar el sesgo de auto-evaluación: el Generator tiende a calificar su propio output positivamente; un Evaluator en contexto separado no tiene ese sesgo',
        'Para que puedan correr en paralelo y ahorrar tiempo',
      ],
      correct: 2,
      exp: 'El Generator tiene sesgo cognitivo: acaba de producir el output, entiende las intenciones detrás, e interpreta ambigüedades a su favor. Un Evaluator en un contexto separado, sin acceso al razonamiento del Generator, solo ve el output y lo evalúa contra el rubric explícito. Esa perspectiva externa es lo que genera los 10 puntos de mejora documentados.',
    },
    {
      q: '¿Qué patrón usa Dynamic Workflows de Anthropic para migraciones de código?',
      opts: [
        'Pipeline secuencial — un agente pasa el trabajo al siguiente en cadena',
        'Fan-out / Fan-in — el orquestador divide el trabajo en N piezas, los agentes trabajan en paralelo, el orquestador consolida',
        'Supervisor-Worker — un supervisor asigna tareas según disponibilidad de los workers',
        'Solo Planner-Generator-Evaluator en loop iterativo',
      ],
      correct: 1,
      exp: 'Dynamic Workflows usa Fan-out / Fan-in: el orquestador analiza el repositorio, identifica módulos independientes, lanza un subagente por módulo en paralelo (cada uno en su worktree), y consolida los resultados en PRs. Es el patrón ideal cuando tienes N trabajos genuinamente independientes que no tienen dependencias entre sí.',
    },
  ],
  challenge: {
    title: 'Reto 4.2 — Diseña la arquitectura de un sistema real',
    desc: 'Toma un caso de uso real y decide qué arquitectura usarías — y articula por qué.',
    steps: [
      'Elige una tarea compleja: análisis de competidores, generación de reportes semanales, procesamiento de documentos, automatización de QA.',
      'Evalúa si un agente simple basta: ¿la tarea entera cabe en 128K tokens? ¿es secuencial sin paralelismo real? Si la respuesta es sí, detente aquí — no necesitas multi-agente.',
      'Si necesitas multi-agente, identifica la razón específica: ¿paralelismo? ¿límite de contexto? ¿especialización? Escríbela explícitamente.',
      'Elige el patrón: ¿Planner-Generator-Evaluator? ¿Pipeline secuencial? ¿Fan-out / Fan-in? ¿Supervisor-Worker? Justifica.',
      'Define los roles: ¿qué hace cada agente? ¿cuál es el scope exacto de cada uno? ¿qué modelo usaría cada uno y por qué?',
      'Identifica las dependencias: ¿qué agente necesita el output de cuál otro? ¿qué puede correr en paralelo?',
    ],
  },
}

export const AGENT_ORCHESTRATION_LESSON = {
  id: 'mod4_l3',
  num: '6.3',
  title: 'Orquestación y subagentes: Agent Teams, worktrees y AGENTS.md',
  duration: '25 min',
  xpReward: 70,
  content: [
    {
      type: 'intro',
      text: 'Diseñar la arquitectura es la parte fácil. El reto real es la orquestación: ¿cómo se divide el trabajo? ¿cómo se coordinan los agentes? ¿cómo fluye la información entre ellos? ¿qué pasa cuando un subagente falla? Esta lección cubre los mecanismos concretos de coordinación — el filesystem compartido de Agent Teams, los worktrees de Claude Code, y AGENTS.md como contrato de equipo.',
    },
    {
      type: 'concept',
      title: 'Orquestador vs. subagente: los dos roles fundamentales',
      body: 'En cualquier sistema multi-agente hay dos roles:\n\n**Orquestador:** recibe el objetivo de alto nivel, lo descompone en subtareas, asigna cada subtarea a un subagente apropiado, monitorea el progreso, y consolida los resultados. El orquestador no ejecuta trabajo de objeto — su trabajo es dividir, asignar y consolidar.\n\n**Subagente:** recibe una subtarea específica con scope bien definido, la ejecuta usando sus herramientas y modelo asignados, y reporta el resultado. El subagente no necesita conocer el objetivo global — solo el scope de su subtarea.\n\nEsta separación es lo que habilita el paralelismo: el orquestador puede lanzar 10 subagentes simultáneamente si las subtareas son independientes.',
      highlight: 'Principio de diseño clave: cada subagente debe tener un scope de responsabilidad claramente delimitado. Si un subagente necesita conocer el trabajo de otro para hacer el suyo, los scopes están mal definidos o la tarea requiere un agente secuencial en lugar de paralelo.',
    },
    {
      type: 'concept',
      title: 'Agent Teams en Claude Code: coordinación por filesystem compartido',
      body: 'Introducido con Opus 4.7, Agent Teams es la implementación de orquestación multi-agente dentro de Claude Code. El mecanismo de coordinación es un filesystem compartido:\n\n(1) El agente líder divide el trabajo y escribe el plan en archivos del proyecto.\n(2) Cada subagente lee su asignación, trabaja en su scope, y escribe sus resultados de vuelta al filesystem.\n(3) El líder lee los resultados y consolida.\n\nCada subagente corre en su propia ventana de contexto independiente — 128K tokens en Opus 4.7. El filesystem es el único canal de comunicación entre agentes, lo que hace el sistema robusto: si un subagente falla, su trabajo parcial persiste en el filesystem y puede reanudarse sin perder el progreso de los demás.',
      highlight: null,
    },
    {
      type: 'cards',
      title: 'Worktrees: cómo Claude Code aísla subagentes en paralelo',
      items: [
        {
          name: '¿Qué es un worktree?',
          tag: 'Concepto base',
          color: '#6366F1',
          desc: 'Una copia de trabajo aislada del repositorio en una branch diferente. Permite que múltiples agentes trabajen en el mismo repositorio simultáneamente sin conflictos de archivos entre sí.',
        },
        {
          name: 'Cómo activarlo',
          tag: 'Comando',
          color: '#10B981',
          desc: 'claude -w feature-nombre crea un worktree automáticamente. El agente trabaja en esa branch aislada. El techo documentado en hardware consumer es 4-8 worktrees concurrentes por desarrollador.',
        },
        {
          name: 'Patrón de uso',
          tag: 'Ejemplo real',
          color: '#F97316',
          desc: '4 terminales, cada una con claude -w feature-X. 4 subagentes trabajando en 4 features simultáneamente. 4 PRs en un día en lugar de 1. El orquestador en la terminal principal coordina; los subagentes ejecutan.',
        },
        {
          name: 'Consolidación',
          tag: 'Final del proceso',
          color: '#EC4899',
          desc: 'Cuando todos los subagentes terminan, el orquestador revisa los PRs, resuelve conflictos, y fusiona o deja los PRs para revisión humana. El nivel de autonomía de la consolidación es configurable.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'AGENTS.md: el contrato de equipo para sistemas multi-agente',
      body: 'Así como CLAUDE.md le dice a un agente cómo trabajar en el código, AGENTS.md le dice al orquestador cómo coordinar el equipo. Vive en .claude/agents.md del proyecto.\n\nQué define AGENTS.md:\n• Qué modelo usar para cada rol (Opus para el orquestador, Sonnet para subagentes de código, Haiku para extracción simple)\n• Cómo dividir las tareas (por módulo, por tipo de archivo, por responsabilidad funcional)\n• Cómo pasar información entre agentes (formato de outputs, estructura del filesystem compartido)\n• Qué acciones requieren que el orquestador espere confirmación humana antes de continuar\n• Criterios de éxito para que el orquestador sepa cuándo una subtarea está completada\n\nSin AGENTS.md, el orquestador tiene que inferir toda la estructura en cada sesión. Con AGENTS.md, la coordinación es predecible y reproducible.',
      highlight: 'Analogía: CLAUDE.md es el README para el agente individual. AGENTS.md es el runbook de operaciones para el equipo. Uno define cómo trabaja un agente solo; el otro define cómo trabaja el equipo junto.',
    },
    {
      type: 'concept',
      title: 'Dynamic Workflows y Ultracode: orquestación a escala (mayo 2026)',
      body: 'Lanzado el 28 de mayo de 2026 como research preview, Dynamic Workflows lleva la orquestación al límite documentado: Claude planea y lanza cientos de subagentes en paralelo en una sola sesión. El caso documentado: migración completa de un repositorio de JavaScript a TypeScript. El orquestador analiza el repositorio, identifica módulos independientes, lanza un subagente por módulo en paralelo (cada uno en su worktree), y abre un PR por módulo al terminar. Lo que antes tomaba semanas se completa en horas.\n\nUltracode es el nivel máximo del selector /effort: activa Dynamic Workflows completo, Extended Thinking en cada paso del orquestador, y el mayor nivel de paralelismo soportado.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es el mecanismo de coordinación entre agentes en Agent Teams de Claude Code?',
      opts: [
        'Mensajes directos entre procesos — los agentes se comunican en tiempo real por sockets',
        'Un filesystem compartido — los agentes leen y escriben archivos en el repositorio para pasarse información',
        'Una API central de Anthropic que enruta mensajes entre agentes activos',
        'Variables de entorno compartidas que todos los agentes pueden leer y modificar',
      ],
      correct: 1,
      exp: 'Agent Teams usa el filesystem como canal de comunicación. El orquestador escribe el plan en archivos, los subagentes leen sus asignaciones y escriben sus resultados, el orquestador lee y consolida. Este diseño es robusto ante fallos: si un subagente falla, su trabajo parcial persiste en el filesystem y puede reanudarse sin perder el progreso de los demás.',
    },
    {
      q: '¿Para qué sirve AGENTS.md y dónde vive?',
      opts: [
        'Es documentación para desarrolladores sobre cómo usar el sistema de agentes — vive en la raíz del repositorio',
        'Es el archivo de configuración para equipos de agentes en Claude Code — vive en .claude/agents.md y define roles, modelos, y protocolos de coordinación',
        'Es el historial de acciones del orquestador — lo genera automáticamente Claude Code tras cada sesión',
        'Es sinónimo de CLAUDE.md — Claude Code acepta ambos nombres',
      ],
      correct: 1,
      exp: 'AGENTS.md es análogo a CLAUDE.md pero para el equipo: define qué modelo usa cada rol, cómo dividir tareas, cómo pasar información entre agentes, y qué acciones requieren aprobación humana. Sin él, el orquestador infiere la estructura en cada sesión — con él, la coordinación es predecible y reproducible.',
    },
    {
      q: '¿Qué habilita el flag -w en Claude Code?',
      opts: [
        'Activa el modo de escritura extendida para generar documentación más detallada',
        'Conecta Claude Code a una red alternativa para mayor velocidad de respuesta',
        'Crea un worktree separado — una copia aislada del repositorio en su propia branch — que permite a múltiples agentes trabajar sin conflictos de archivos',
        'Activa el modo "watch" para monitorear cambios en archivos en tiempo real',
      ],
      correct: 2,
      exp: 'El flag -w (worktree) crea una copia de trabajo aislada en una branch diferente. Esto permite que múltiples agentes trabajen simultáneamente en el mismo repositorio sin pisarse los archivos. El techo documentado es 4-8 worktrees concurrentes en hardware consumer — en la práctica, 4-8 agentes trabajando en paralelo.',
    },
  ],
  challenge: {
    title: 'Reto 4.3 — Escribe tu primer AGENTS.md',
    desc: 'Crea un AGENTS.md real para el sistema multi-agente que diseñaste en el reto 4.2.',
    steps: [
      'Toma el sistema multi-agente del reto anterior (o elige un nuevo caso de uso con al menos 3 agentes).',
      'Define los roles explícitamente: ¿quién es el orquestador? ¿cuántos subagentes hay? ¿cuál es el scope exacto de cada uno?',
      'Asigna modelos con justificación: ¿por qué Opus para el orquestador? ¿por qué Sonnet (o Haiku) para los subagentes? Incluye el razonamiento de costo/calidad.',
      'Define el protocolo de comunicación: ¿cómo pasan información los agentes? ¿por archivos? ¿qué formato tienen esos archivos? ¿en qué carpeta del proyecto?',
      'Define los puntos de aprobación humana: lista exactamente qué acciones requieren que el orquestador pause y espere confirmación antes de continuar.',
      'Escribe el AGENTS.md completo en markdown — sé lo suficientemente específico como para que cualquier desarrollador de tu equipo pueda entender el sistema sin explicación adicional.',
    ],
  },
}

export const AGENT_SDK_LESSON = {
  id: 'mod4_l4',
  num: '6.4',
  title: 'Agent SDK: construye tu propio agente y elige cuándo usar Managed Agents',
  duration: '30 min',
  xpReward: 80,
  content: [
    {
      type: 'intro',
      text: 'Managed Agents te da infraestructura lista en días. El Agent SDK te da control total en semanas. La elección entre los dos no es técnica — es estratégica: ¿qué tradeoff acepta tu equipo entre velocidad de desarrollo y control sobre el sistema? Esta lección cubre cómo funciona el loop agéntico internamente, cómo construirlo con el SDK, y cuándo tiene sentido hacerlo versus usar la infraestructura hosteada de Anthropic.',
    },
    {
      type: 'concept',
      title: 'El loop agéntico: cómo funciona internamente',
      body: 'El corazón de cualquier agente — sea con el SDK o con Managed Agents — es el mismo loop. En pseudocódigo:\n\n1. Inicializa el contexto: system prompt, herramientas disponibles, objetivo del usuario.\n2. Llama a la API de Claude con el contexto actual.\n3. Claude devuelve: texto final (tarea completada) o tool_call (quiere ejecutar una herramienta).\n4. Si es texto final: el loop termina, se devuelve el resultado.\n5. Si es tool_call: ejecuta la herramienta, añade el resultado al contexto como tool_result.\n6. Vuelve al paso 2.\n\nEste loop puede correr indefinidamente hasta que Claude declare que terminó, hasta un límite de iteraciones configurado, o hasta agotar la ventana de contexto. En Dynamic Workflows, este loop corre 400+ veces en trabajos complejos de migración de código.',
      highlight: 'El punto más delicado del loop: la gestión del contexto. Cada iteración añade tokens. Sin compactación activa, el contexto crece hasta el límite y el agente falla. Claude Code incluye compactación automática. Si construyes el loop tú mismo con el SDK, la compactación es tu responsabilidad.',
    },
    {
      type: 'cards',
      title: 'Agent SDK vs. Managed Agents: cuándo usar cada uno',
      items: [
        {
          name: 'Usa Agent SDK cuando...',
          tag: 'Control total',
          color: '#6366F1',
          desc: 'Tienes requerimientos de compliance que no permiten que el código corra fuera de tu infraestructura. Tienes infraestructura cloud propia y equipo para mantenerla. Necesitas integración profunda con sistemas internos que no pueden exponerse a APIs externas.',
        },
        {
          name: 'Usa Managed Agents cuando...',
          tag: 'Velocidad de desarrollo',
          color: '#10B981',
          desc: 'Quieres desplegar en días, no semanas. No quieres construir infraestructura de agentes. Necesitas persistencia de estado entre sesiones out-of-the-box. Quieres escalar sin gestionar servidores.',
        },
        {
          name: 'Costo comparativo',
          tag: 'Economía real',
          color: '#F97316',
          desc: 'SDK: solo pagas tokens, sin overhead de $0.08/hora. Pero pagas semanas de ingeniería para construir y mantener la infraestructura. Managed Agents: $0.08/hora de sesión activa + tokens — con toda la infraestructura incluida.',
        },
        {
          name: 'Regla práctica',
          tag: 'Decisión por defecto',
          color: '#EC4899',
          desc: 'Empieza siempre con Managed Agents para prototipar y validar la lógica de negocio. Migra al SDK solo si tienes razones específicas de compliance, privacidad, o integración que Managed Agents no puede resolver.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'El loop mínimo viable con el SDK',
      body: 'La implementación mínima en Python:\n\n```python\nimport anthropic\n\nclient = anthropic.Anthropic()\n\ndef run_agent(objective: str, tools: list, max_iterations: int = 20):\n    messages = [{"role": "user", "content": objective}]\n    \n    for _ in range(max_iterations):\n        response = client.messages.create(\n            model="claude-opus-4-7-20251101",\n            max_tokens=4096,\n            tools=tools,\n            messages=messages\n        )\n        \n        if response.stop_reason == "end_turn":\n            return response.content[0].text\n        \n        tool_results = []\n        for block in response.content:\n            if block.type == "tool_use":\n                result = execute_tool(block.name, block.input)\n                tool_results.append({\n                    "type": "tool_result",\n                    "tool_use_id": block.id,\n                    "content": result\n                })\n        \n        messages.append({"role": "assistant", "content": response.content})\n        messages.append({"role": "user", "content": tool_results})\n    \n    return "Límite de iteraciones alcanzado"\n```\n\nEn producción se añade: compactación de contexto cuando se acerca al límite, reintentos con backoff exponencial ante errores de API, logging de cada iteración para observabilidad, y manejo explícito de errores de herramientas.',
      highlight: 'El SDK te expone exactamente qué herramienta llamó Claude, con qué argumentos, y qué resultado obtuvo — en cada iteración. Esa observabilidad granular es la razón principal por la que equipos con requerimientos de auditoría prefieren el SDK sobre Managed Agents.',
    },
    {
      type: 'concept',
      title: 'Human-in-the-loop: cuándo el agente debe pausar',
      body: 'Un agente completamente autónomo es rápido pero arriesgado. Un agente que pide aprobación en cada paso es seguro pero lento y derrota el propósito de la autonomía. El diseño correcto es human-in-the-loop estratégico: autonomía total en acciones reversibles, aprobación requerida en acciones irreversibles.\n\n**Acciones que nunca deben ejecutarse sin aprobación:** enviar emails o mensajes externos, hacer commits a la branch principal, eliminar datos, llamar APIs de pago, modificar permisos.\n\n**Acciones que pueden correr en modo autónomo:** leer archivos, buscar en la web, ejecutar código en sandbox aislado, escribir borradores locales, generar reportes sin enviar.\n\nEn el SDK, implementas esto con un hook de confirmación que el loop invoca antes de ejecutar herramientas marcadas como de alto impacto.',
      highlight: 'Principio de Anthropic para agentes en producción: minimizar el blast radius. Cada acción debe tener el menor impacto posible si sale mal. Un agente que solo puede leer tiene blast radius cero. Un agente que puede enviar emails a clientes tiene blast radius máximo — y debe requerir aprobación antes de cada envío, sin excepción.',
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia central entre el Claude Agent SDK y Managed Agents?',
      opts: [
        'El SDK usa modelos más nuevos que Managed Agents',
        'El SDK corre en tu infraestructura y tú construyes todo; Managed Agents es infraestructura hosteada por Anthropic con persistencia, reintentos y escalado incluidos',
        'El SDK es gratuito; Managed Agents tiene costo adicional por token',
        'El SDK es solo para Python; Managed Agents soporta cualquier lenguaje',
      ],
      correct: 1,
      exp: 'La diferencia es infraestructura, no capacidad del modelo. Con el SDK, tú construyes y mantienes el loop agéntico, la persistencia entre sesiones, los reintentos, la autenticación y el escalado. Con Managed Agents, Anthropic mantiene todo eso y tú defines solo la lógica de negocio. Pagas $0.08/hora con Managed Agents pero te ahorras semanas de desarrollo de infraestructura.',
    },
    {
      q: '¿Qué sucede cuando Claude devuelve stop_reason == "end_turn" en el loop del SDK?',
      opts: [
        'El loop reinicia desde el principio con el mismo objetivo',
        'El SDK lanza un subagente para verificar el resultado antes de entregarlo',
        'El loop termina — Claude declaró que completó la tarea y el SDK devuelve la respuesta final al caller',
        'El SDK guarda automáticamente el estado del agente para la próxima sesión',
      ],
      correct: 2,
      exp: '"end_turn" es la señal de Claude de que terminó: no necesita más herramientas ni iteraciones. El loop sale y el SDK devuelve el texto de la respuesta. Si el stop_reason fuera "tool_use", el loop continuaría ejecutando la herramienta solicitada y añadiendo el resultado al contexto.',
    },
    {
      q: '¿Qué tipo de acción debe tener aprobación humana obligatoria en un agente bien diseñado?',
      opts: [
        'Leer archivos del repositorio — siempre puede acceder a información sensible',
        'Ejecutar código en un sandbox aislado — el código podría tener bugs',
        'Enviar emails a clientes o hacer commits a la branch principal — son acciones irreversibles con blast radius alto',
        'Buscar en la web — puede acceder a sitios con contenido inapropiado',
      ],
      correct: 2,
      exp: 'La regla es blast radius: ¿qué pasa si esta acción sale mal y no se puede revertir? Leer archivos y ejecutar en sandbox son de bajo impacto o reversibles — el agente puede correr autónomo. Enviar emails a clientes o hacer commits a main son irreversibles y de impacto externo — requieren aprobación humana antes de ejecutar, sin excepción.',
    },
  ],
  challenge: {
    title: 'Reto 4.4 — Construye el loop agéntico mínimo',
    desc: 'Implementa un agente básico con el Claude Agent SDK que complete una tarea multi-paso real.',
    steps: [
      'Instala el SDK: pip install anthropic. Configura tu ANTHROPIC_API_KEY en el entorno.',
      'Define una herramienta simple: una función Python que lea un archivo local o consulte una lista. Defínela en el formato tools de la API (name, description, input_schema).',
      'Implementa el loop mínimo del ejemplo de esta lección. Añade logging explícito en cada iteración: qué tool_call hizo Claude, con qué argumentos, qué resultado obtuvo.',
      'Dale un objetivo que requiera 2-3 llamadas a herramientas en secuencia para completarse. Observa el loop en acción.',
      'Añade un límite de iteraciones y un mensaje de error claro si se alcanza. Sin este límite, un agente con un objetivo irrealizable consume tokens indefinidamente.',
      'Opcional: añade un hook de confirmación — antes de ejecutar la herramienta, imprime "¿confirmas esta acción? (s/n)" y espera input. Prueba rechazar una acción y observa cómo el agente ajusta su plan.',
    ],
  },
}
