// ─── NUEVAS LECCIONES — BRECHAS IDENTIFICADAS EN REVISIÓN MAYO 2026 ──────────
// Fuentes verificadas: Anthropic Skilljar, Udemy, Coursera Vanderbilt,
// power user guides, documentación oficial mayo 2026

// ─── LECCIÓN: Setup Inicial y Archivos de Identidad → nuevo Módulo 0 ─────────
export const IDENTITY_SETUP_LESSON = {
  id: 'mod0_l1',
  num: '0.1',
  title: 'Configura Claude para que te conozca desde el día uno',
  duration: '35 min',
  xpReward: 80,
  videoId: 'ssHbtzGIfXk',
  videoCaption: 'Setup completo de Claude: identidad, voz y contexto persistente 2026',
  content: [
    {
      type: 'intro',
      text: 'La mayoría de usuarios de Claude le explican quiénes son en cada conversación nueva. Los usuarios avanzados lo explican una vez — y Claude lo recuerda para siempre. Esta lección es el setup inicial que separa a ambos grupos. Tomará 35 minutos hacerlo bien. Te ahorrará horas cada semana para siempre.',
    },
    {
      type: 'concept',
      title: 'Por qué Claude suena genérico — y cómo solucionarlo',
      body: 'Sin contexto sobre ti, Claude escribe como si fuera para cualquiera: frases cliché, tono corporativo genérico, estructura predecible. El problema no es Claude — es que no sabe quién eres. La solución son 3 archivos de texto que Claude lee automáticamente antes de cada sesión. Una vez creados, Claude nunca más empieza desde cero.',
      highlight: 'Dato verificado: la mejora en calidad de output al tener estos archivos configurados es mayor que cambiar de Sonnet a Opus. Es la palanca más poderosa disponible para cualquier usuario — y es gratis.',
    },
    {
      type: 'cards',
      title: 'Los 3 archivos de identidad que todo usuario necesita',
      items: [
        {
          name: 'Archivo 1: About Me (Quién soy)',
          tag: 'El más importante',
          color: '#6366F1',
          desc: 'Quién eres: tu rol, empresa, industria, proyectos actuales, decisiones ya tomadas, audiencia. Claude necesita saber quién pregunta antes de poder responder bien. Sin esto, da respuestas para "cualquier profesional genérico".',
        },
        {
          name: 'Archivo 2: Voice Profile (Cómo escribo)',
          tag: 'Para escritura',
          color: '#10B981',
          desc: 'Cómo piensas y escribes: tu tono, ritmo de oraciones, vocabulario preferido, estructuras que usas, ejemplos de textos tuyos que te gustan. Claude aprende a escribir como tú, no como una IA genérica.',
        },
        {
          name: 'Archivo 3: Anti-AI Writing (Qué nunca hacer)',
          tag: 'Crítico',
          color: '#EF4444',
          desc: 'Lista explícita de palabras, estructuras y tonos que Claude NUNCA debe usar cuando escribe como tú. "Delve", "robust", "seamless", guiones em excesivos, bullets para todo, frases de inicio cliché. Esto es lo que detecta un lector como "escrito por IA".',
        },
      ],
    },
    {
      type: 'concept',
      title: 'El Anti-AI Writing: el archivo más subestimado',
      body: 'Investigadores del Max Planck Institute documentaron que palabras como "delve", "underscore", "pivotal" y "robust" aumentaron más del 50% en textos publicados desde que lanzó ChatGPT — incluso en textos humanos que copiaron el estilo de la IA. Claude tiene patrones predecibles: usa guiones em constantemente, hace párrafos de largo casi idéntico, empieza respuestas con "In today\'s rapidly evolving landscape…", convierte todo en listas con bullets. Tu archivo anti-AI le dice exactamente qué patrones evitar.',
      highlight: '"Si alguien detecta que un texto tiene guiones em, lo descalifica como IA sin leer el contenido." — Desarrollador senior documentando este problema. Tu archivo anti-AI es tu escudo.',
    },
    {
      type: 'concept',
      title: 'Cómo crearlos: el método de entrevista',
      body: 'No intentes escribir estos archivos desde cero — es difícil describir tu propio estilo. En cambio, pídele a Claude que te entreviste. Para el About Me: "Quiero crear un archivo about_me.md para usarlo como contexto en mis sesiones de Claude. Entrevístame con preguntas una por una. Cuando termines, genera el archivo completo en markdown." Para el Voice Profile: "Entrevístame sobre cómo escribo y pienso. Luego genera un perfil de voz en markdown." Para el Anti-AI Writing: "Basándote en mis respuestas, genera una lista de patrones que debes evitar cuando escribes como yo."',
      highlight: 'Una entrevista de About Me toma 10-20 preguntas (~15 minutos). La de Voice Profile 8-12 preguntas (~10 minutos). Claude usa tus propias palabras para construir el archivo — es significativamente mejor que lo que escribirías tú solo.',
    },
    {
      type: 'concept',
      title: 'Dónde cargar estos archivos según tu herramienta',
      body: 'En claude.ai (chat): Settings → Customize → "What preferences should Claude consider?" — pega una versión condensada de tu About Me aquí (150-400 palabras). Para versiones completas, súbelas como archivos de referencia en un Project. En Claude Code: guarda los archivos en ~/.claude/ (disponibles en todos los proyectos) o en .claude/ dentro de un proyecto específico. Referéncialos en CLAUDE.md. En CoWork: Settings → Global Instructions — carga los 3 archivos aquí y Claude los leerá antes de cada sesión.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Paso 0: migrar tus chats de ChatGPT y Gemini',
      body: 'Si ya usas otras IAs, tus conversaciones anteriores son oro puro. Contienen tus preferencias implícitas, tus preguntas típicas, tu estilo de trabajo. ChatGPT: ve a Settings → Data Controls → Export Data → descarga el ZIP con todos tus chats. Gemini: usa Google Takeout → selecciona Gemini Apps Activity. Sube estos archivos a un Project de Claude y pídele: "Analiza mis conversaciones anteriores con otras IAs e identifica mis patrones de uso, temas frecuentes y preferencias implícitas. Úsalos para mejorar mi About Me."',
      highlight: 'Este paso puede ahorrarte horas de introspección. Claude detecta patrones en tus conversaciones que tú mismo no habías notado conscientemente.',
    },
  ],
  quiz: [
    {
      q: '¿Cuál es el archivo de identidad más importante para que Claude NO suene a IA genérica cuando escribe como tú?',
      opts: [
        'About Me — porque describe tu rol profesional y empresa',
        'Voice Profile — porque captura cómo piensas y escribes',
        'Anti-AI Writing — porque lista explícitamente los patrones que Claude debe evitar al escribir como tú',
        'Los tres son igualmente importantes, no hay uno más crítico',
      ],
      correct: 2,
      exp: 'El Anti-AI Writing es el más crítico para evitar detección. Claude tiene patrones predecibles documentados (guiones em, bullets para todo, frases de apertura cliché). Sin este archivo, aunque conozca tu voz, seguirá cayendo en sus tics naturales. About Me y Voice Profile dicen qué hacer; Anti-AI Writing dice qué NO hacer nunca.',
    },
    {
      q: '¿Por qué es mejor dejar que Claude te entreviste para crear tus archivos de identidad en lugar de escribirlos tú solo?',
      opts: [
        'Para ahorrar tiempo — la entrevista tarda menos que escribir desde cero',
        'Porque las personas tienen dificultad para describir su propio estilo objetivamente — las preguntas de Claude sacan información específica que no emergerá espontáneamente',
        'No hay ventaja real — ambos métodos producen resultados equivalentes',
        'Solo funciona para usuarios con plan Pro o superior',
      ],
      correct: 1,
      exp: 'Describir tu propio estilo de escritura es sorprendentemente difícil. Sabes intuitivamente cómo escribes pero no sabes cómo articularlo. Las preguntas de Claude (¿qué te molesta en textos de IA? ¿puedes dar un ejemplo de texto tuyo que te guste mucho? ¿qué palabras nunca usarías?) extraen detalles específicos que producen archivos mucho más útiles.',
    },
    {
      q: 'Llevas 2 años usando ChatGPT con intensidad. ¿Cómo aprovechas esas conversaciones al migrar a Claude?',
      opts: [
        'No son útiles — el estilo de ChatGPT no tiene nada que ver con Claude',
        'Exportas tus chats de ChatGPT, los subes a un Project de Claude y le pides que identifique tus patrones de uso, temas frecuentes y preferencias implícitas para enriquecer tu About Me',
        'Solo son útiles si tenías conversaciones técnicas sobre programación',
        'Debes crear todos los archivos desde cero — las conversaciones anteriores contaminan el contexto',
      ],
      correct: 1,
      exp: 'Tus conversaciones anteriores con otras IAs son una fuente de datos sobre ti mismo. Revelan qué tipos de tareas delegas a la IA, cómo formulas tus pedidos, qué outputs rechazas y cuáles aceptas. Claude puede analizar esos patrones y usarlos para crear un About Me mucho más preciso que el que escribirías desde cero.',
    },
  ],
  challenge: {
    title: 'Reto 0.1 — Crea tus 3 archivos de identidad',
    desc: 'Tu setup inicial completo. Una vez hecho, Claude nunca más empieza desde cero contigo.',
    steps: [
      'PARTE 1 — About Me: Abre claude.ai, inicia un chat nuevo y escribe: "Quiero crear mi archivo about_me.md. Entrevístame con preguntas una por una sobre mi rol, empresa, proyectos actuales y contexto profesional. Cuando termines, genera el archivo completo en formato markdown."',
      'Responde las preguntas con honestidad y detalle. No pienses demasiado — usa tus propias palabras naturales.',
      'PARTE 2 — Voice Profile: Nuevo chat. "Ahora quiero crear mi voice_profile.md. Entrevístame sobre cómo pienso y escribo. Pídeme ejemplos de textos míos que me gusten."',
      'PARTE 3 — Anti-AI Writing: Nuevo chat. "Basándote en patrones conocidos de escritura de IA y en lo que sabes sobre mi voz, genera mi anti_ai_writing.md — una lista específica de palabras, estructuras y tonos que NUNCA debo usar."',
      'Guarda los 3 archivos en una carpeta en tu Mac: ~/Documents/claude-identity/',
      'Sube los 3 archivos a un nuevo Project en claude.ai llamado "Mi Contexto Global". Actívalo y prueba: pídele que escriba un párrafo sobre tu trabajo y compara con lo que habría escrito sin estos archivos.',
    ],
    checkpoint: 'Los archivos están funcionando bien cuando lees la respuesta de Claude y piensas "esto suena como yo" en lugar de "esto suena a IA". Si aún suena genérico, el Anti-AI Writing necesita más ejemplos específicos de lo que detestas.',
  },
}

// ─── LECCIÓN: Context Engineering → Módulo 1 ─────────────────────────────────
export const CONTEXT_ENGINEERING_LESSON = {
  id: 'mod1_l8',
  num: '1.8',
  title: 'Context Engineering: la habilidad más importante de 2026',
  duration: '30 min',
  xpReward: 75,
  videoId: 'Y3MK6OpKDqE',
  videoCaption: 'Context Engineering vs Prompt Engineering — guía completa 2026',
  content: [
    {
      type: 'intro',
      text: 'En 2025, la habilidad clave era el prompt engineering. En 2026, los modelos mejoraron tanto que la habilidad clave cambió: ahora es el context engineering. La diferencia es fundamental — y los usuarios que lo entendieron obtienen resultados consistentemente mejores que los que siguen obsesionados con "el prompt perfecto".',
    },
    {
      type: 'concept',
      title: 'Prompt Engineering vs Context Engineering',
      body: 'Prompt Engineering: enfocarse en cómo redactar la instrucción exacta — las palabras precisas, el orden, los modificadores. Context Engineering: enfocarse en todo lo que Claude recibe ANTES y DURANTE una tarea — archivos de identidad, ejemplos, restricciones, role framing, memoria, estado del proyecto. En 2026, la técnica de prompting raramente es el cuello de botella. El contexto casi siempre lo es.',
      highlight: 'Analogía: no importa cuán perfecta sea la receta si le das los ingredientes equivocados al chef. El prompt es la receta; el contexto son los ingredientes.',
    },
    {
      type: 'cards',
      title: 'Los 6 componentes del contexto completo',
      items: [
        {
          name: 'Identidad (quién eres)',
          tag: 'Base',
          color: '#6366F1',
          desc: 'Tu About Me, Voice Profile. Claude necesita saber quién pregunta para responder apropiadamente. Sin esto, responde para un usuario genérico.',
        },
        {
          name: 'Objetivo (qué lograr)',
          tag: 'Crítico',
          color: '#10B981',
          desc: 'No solo la tarea inmediata, sino el objetivo final. "Escribe este email" vs "Escribe este email para que el cliente apruebe la propuesta en esta reunión del viernes."',
        },
        {
          name: 'Ejemplos (cómo se ve el éxito)',
          tag: 'Muy poderoso',
          color: '#F97316',
          desc: 'Ejemplos de outputs que te han gustado. "Aquí hay 2 correos míos que funcionaron bien: [ejemplos]. Sigue ese estilo." Los ejemplos valen más que cualquier descripción.',
        },
        {
          name: 'Restricciones (qué no hacer)',
          tag: 'Subestimado',
          color: '#EF4444',
          desc: 'Qué Claude NO debe hacer. Longitud máxima, palabras prohibidas, ángulos a evitar, audiencias que no aplican. Las restricciones negativas son tan importantes como las instrucciones positivas.',
        },
        {
          name: 'Estado actual (dónde estamos)',
          tag: 'Para proyectos',
          color: '#8B5CF6',
          desc: 'El estado del proyecto, decisiones ya tomadas, intentos anteriores y por qué no funcionaron. Evita que Claude sugiera cosas que ya descartaste.',
        },
        {
          name: 'Stakes (qué está en juego)',
          tag: 'Activa cuidado',
          color: '#EC4899',
          desc: 'Decirle a Claude qué consecuencias tiene el error. "Este documento lo verá el CEO mañana" activa un nivel de cuidado diferente a "es solo un borrador interno".',
        },
      ],
    },
    {
      type: 'concept',
      title: 'El método Interview-First: deja que Claude te haga preguntas primero',
      body: 'Para tareas complejas o ambiguas, usa este patrón: en lugar de escribir un prompt largo intentando anticipar todo, escribe una versión mínima de tu pedido y añade: "Antes de responder, hazme las preguntas que necesitas para producir el mejor resultado posible." Claude preguntará sobre cosas que no habrías considerado — edge cases, audiencia exacta, restricciones implícitas, decisiones de formato. Este proceso de entrevista consistentemente produce mejores outputs finales que saltar directo a la producción.',
      highlight: 'Funciona para cualquier cosa: un artículo, una estrategia, un sistema que quieres diseñar, un agente. Claude preguntando primero = Claude entendiendo mejor = resultado más útil.',
    },
    {
      type: 'concept',
      title: 'Best-of-N: generar múltiples versiones y elegir',
      body: 'En lugar de pedir una respuesta y editarla, pide N versiones simultáneas con ángulos diferentes. "Escríbeme 3 versiones de este email: una directa y concisa, una más empática y explicativa, una más audaz y orientada a resultados. Las evaluaré y elegiré." Este patrón es especialmente poderoso para: hooks de artículos, sujetos de email, frases de apertura, propuestas de valor, names de proyectos.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Parallel Drafts: múltiples enfoques en paralelo',
      body: 'Variante de Best-of-N para problemas de mayor escala. En lugar de un solo enfoque, pídele a Claude que explore 3 estrategias completamente distintas antes de profundizar en alguna. "Antes de desarrollar la solución, dame 3 enfoques posibles completamente diferentes para este problema. Para cada uno, dame: qué asume, cuál es su mayor fortaleza, cuál es su mayor riesgo." Luego eliges el enfoque ganador y lo desarrollas a fondo.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Stake-setting: activar el nivel máximo de cuidado',
      body: 'Hay una técnica simple documentada por power users avanzados: decirle a Claude cuánto importa la tarea. Compare estos dos prompts: "Revisa este contrato." vs "Revisa este contrato. Lo firmamos mañana por $500,000 y cualquier cláusula ambigua podría costarnos el doble. El abogado lo verá después, pero necesito que identifiques primero cualquier riesgo obvio." El segundo activa un nivel de análisis completamente diferente.',
      highlight: 'El stake-setting no es manipulación — es información relevante. Claude usa el contexto de importancia para calibrar cuánto esfuerzo dedicar y qué nivel de detalle incluir.',
    },
  ],
  quiz: [
    {
      q: '¿Por qué en 2026 el Context Engineering superó al Prompt Engineering como habilidad clave?',
      opts: [
        'Porque los prompts ya no funcionan en los modelos más nuevos',
        'Porque los modelos mejoraron tanto que la técnica de redacción raramente es el cuello de botella — la calidad del contexto estructural es lo que separa resultados buenos de excelentes',
        'Porque Anthropic cambió la forma en que Claude procesa las instrucciones',
        'Solo aplica en la API, no en el chat de claude.ai',
      ],
      correct: 1,
      exp: 'Claude 4 es suficientemente bueno para manejar prompts bien redactados pero no perfectos. Lo que más limita los resultados ya no es cómo pides algo — es qué información tienes disponible para Claude: tu identidad, el objetivo real, ejemplos de éxito, restricciones y el estado del proyecto.',
    },
    {
      q: '¿Qué es "stake-setting" y por qué mejora los outputs de Claude?',
      opts: [
        'Una técnica para reducir el costo en tokens configurando límites de gasto',
        'Informarle a Claude la importancia real de la tarea — qué está en juego si el resultado no es bueno',
        'Establecer un benchmark previo con el que comparar la respuesta de Claude',
        'Un tipo de prompt que establece las reglas del juego antes de comenzar',
      ],
      correct: 1,
      exp: 'Claude usa el contexto de importancia para calibrar su nivel de esfuerzo y detalle. "Revisa este contrato" activa un análisis estándar. "Revisa este contrato, lo firmamos mañana por $500,000" activa análisis mucho más profundo de riesgos y ambigüedades. No es manipulación — es información contextual relevante.',
    },
    {
      q: 'Para un artículo importante, ¿cuándo usarías el método Interview-First?',
      opts: [
        'Nunca — es más eficiente escribir el prompt completo directamente',
        'Solo cuando no sabes nada del tema y necesitas que Claude te explique conceptos básicos',
        'Cuando la tarea es compleja o ambigua y Claude podría asumir cosas incorrectas — dejas que Claude te haga preguntas antes de producir',
        'Solo funciona para código, no para contenido escrito',
      ],
      correct: 2,
      exp: 'Interview-First es ideal para tareas importantes con ambigüedad. Claude preguntará sobre cosas que no habrías anticipado: audiencia exacta, tono, longitud, ejemplos de referencia, qué NO incluir. Este proceso de alineación produce outputs significativamente mejores que cualquier prompt largo que intentes construir solo.',
    },
  ],
  challenge: {
    title: 'Reto 1.8 — Construye tu primer contexto completo',
    desc: 'Aplica los 6 componentes del contexto a una tarea real e importante.',
    steps: [
      'Elige una tarea importante que tengas esta semana — algo donde la calidad realmente importe (una propuesta, un informe, un análisis).',
      'Construye el contexto completo ANTES de pedir el output. Documenta los 6 componentes: Identidad (tu rol), Objetivo final (no solo la tarea), Ejemplos (2-3 textos tuyos similares), Restricciones (qué no hacer), Estado actual (qué ya tienes/decidiste), Stakes (qué pasa si sale mal).',
      'Ahora usa el método Interview-First: escribe tu pedido mínimo + "Antes de responder, hazme las preguntas que necesitas para producir el mejor resultado posible."',
      'Responde las preguntas de Claude completamente.',
      'Cuando Claude produzca el output, evalúa: ¿cuántas correcciones requirió vs tus prompts anteriores sin este nivel de contexto?',
      'Guarda el template de contexto que usaste — lo usarás como base para tareas similares en el futuro.',
    ],
    checkpoint: 'El contexto completo funciona cuando el primer output de Claude requiere mínimas correcciones y tú piensas "esto es casi exactamente lo que tenía en mente". Si aún necesitas muchas correcciones, revisa cuál de los 6 componentes estaba incompleto o vago.',
  },
}

// ─── LECCIÓN: Scheduled Tasks + Dispatch → Módulo 3 CoWork ───────────────────
export const SCHEDULED_TASKS_LESSON = {
  id: 'mod3_l2',
  num: '5.2',
  title: 'Scheduled Tasks y Dispatch: Claude trabajando mientras tú duermes',
  duration: '30 min',
  xpReward: 75,
  videoId: '1oseAPOrB3g',
  videoCaption: 'Claude CoWork Scheduled Tasks y Dispatch — tutorial completo 2026',
  content: [
    {
      type: 'intro',
      text: 'Hasta ahora, Claude trabajaba cuando tú se lo pedías. Con Scheduled Tasks y Dispatch, Claude trabaja en tu horario — no en el tuyo. Cuando llegas a tu oficina mañana, Claude ya resumió tus emails, organizó tu agenda y preparó el briefing del día. Sin que hayas abierto el chat.',
    },
    {
      type: 'concept',
      title: '¿Qué son las Scheduled Tasks?',
      body: 'Tareas que Claude ejecuta automáticamente según un horario que tú defines — diariamente, semanalmente, o a una hora específica. A diferencia de un simple recordatorio, son flujos de trabajo completos: Claude abre tus conectores, recopila información, la procesa y entrega el resultado. Las Scheduled Tasks llegaron a CoWork en marzo 2026 junto con Dispatch.',
      highlight: 'Disponible en: Claude Desktop (CoWork tab) con plan Pro o superior. Requiere que CoWork esté configurado con al menos un Connector activo.',
    },
    {
      type: 'cards',
      title: 'Las mejores Scheduled Tasks para empezar',
      items: [
        {
          name: 'Morning Briefing diario',
          tag: 'Más popular',
          color: '#6366F1',
          desc: 'Cada día 30 minutos antes de tu hora de inicio: Claude revisa emails no leídos, tu calendario del día, y cualquier mensaje urgente de Slack/Notion. Te entrega un resumen priorizado cuando llegas.',
        },
        {
          name: 'Weekly Report',
          tag: 'Para equipos',
          color: '#10B981',
          desc: 'Cada viernes a las 17:00: Claude compila el progreso de la semana desde Jira/Notion, identifica qué está retrasado, y genera el reporte de estado que normalmente tardas 45 minutos en preparar.',
        },
        {
          name: 'Monitoreo de competidores',
          tag: 'Para negocios',
          color: '#F97316',
          desc: 'Cada lunes: Claude busca noticias recientes sobre tus competidores, cambios en sus sitios web, nuevos lanzamientos y cobertura de prensa. Entrega el resumen en tu inbox.',
        },
        {
          name: 'Organización de archivos',
          tag: 'Limpieza',
          color: '#8B5CF6',
          desc: 'Cada domingo: Claude revisa tu carpeta de Descargas y documentos, clasifica archivos por tipo y fecha, y mueve a las carpetas correctas los que tienen más de 30 días sin tocar.',
        },
      ],
    },
    {
      type: 'concept',
      title: '¿Qué es Dispatch?',
      body: 'Dispatch (lanzado el 17 de marzo 2026) es la capa móvil de CoWork. Permite controlar tu agente de escritorio desde tu teléfono. Tu computador queda encendido con Claude Desktop abierto. Desde tu iPhone o Android envías instrucciones al agente — que tiene acceso a todos tus archivos locales, conectores, plugins y aplicaciones. El agente ejecuta la tarea y te notifica cuando termina. Es como tener un asistente en tu oficina al que puedes dar órdenes desde cualquier lugar.',
      highlight: 'Caso de uso documentado: estás en una reunión aburrida, envías desde el teléfono "prepara un análisis de los contratos que están en la carpeta Clientes/Pendientes". Cuando termina la reunión, el análisis está listo en tu escritorio.',
    },
    {
      type: 'concept',
      title: 'Cómo configurar Dispatch paso a paso',
      body: 'Paso 1: En Claude Desktop, ve a la pestaña CoWork → sección Dispatch. Aparecerá un código QR. Paso 2: Abre la app de Claude en tu iPhone o Android y escanea el QR. Esto vincula ambos dispositivos. Paso 3: Activa "Keep computer awake" y "Allow file access" en la configuración de Dispatch. Paso 4: Desde tu teléfono, ve a la sección Dispatch en la app → empieza a enviar tareas en lenguaje natural. Tu escritorio las ejecuta en tiempo real y sincroniza resultados automáticamente.',
      highlight: 'Importante: tu computador debe estar encendido y Claude Desktop abierto para que Dispatch funcione. Muchos usuarios dejan el computador en modo no-suspensión durante el día de trabajo.',
    },
    {
      type: 'concept',
      title: 'Scheduled Tasks vs Dispatch vs Agentes Managed',
      body: 'Scheduled Tasks: automático, por horario, sin que intervengas. Ideal para reportes y briefings recurrentes. Dispatch: manual desde el teléfono, inmediato, tú inicias la tarea desde cualquier lugar. Ideal para tareas ad-hoc que no puedes hacer desde el teléfono. Managed Agents: cloud, de larga duración, sin necesitar tu computador encendido. Ideal para procesos empresariales que corren en la infraestructura de Anthropic.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia fundamental entre Dispatch y simplemente abrir el chat de Claude en tu teléfono?',
      opts: [
        'Dispatch usa modelos más potentes que el chat móvil normal',
        'Dispatch conecta tu teléfono con el agente CoWork en tu escritorio, dándole acceso a archivos locales, conectores y apps — el chat móvil solo tiene acceso a texto',
        'Dispatch es más rápido porque usa conexión directa sin pasar por servidores de Anthropic',
        'No hay diferencia significativa — son esencialmente lo mismo',
      ],
      correct: 1,
      exp: 'El chat móvil de Claude es una conversación estándar sin acceso a tu computador. Dispatch es un orquestador que controla el agente CoWork en tu escritorio — con acceso completo a tus archivos locales, todos tus conectores configurados (Gmail, Notion, Slack), y capacidad de ejecutar aplicaciones de escritorio.',
    },
    {
      q: '¿Para qué tipo de tarea son ideales las Scheduled Tasks vs Dispatch?',
      opts: [
        'Son intercambiables — puedes usar cualquiera para cualquier tarea',
        'Scheduled Tasks para tareas recurrentes automáticas (briefings, reportes); Dispatch para tareas ad-hoc que tú inicias manualmente desde el teléfono',
        'Scheduled Tasks solo funcionan con Connectors; Dispatch solo funciona con archivos locales',
        'Scheduled Tasks son para usuarios Pro; Dispatch solo para usuarios Max',
      ],
      correct: 1,
      exp: 'Scheduled Tasks = automático por horario, sin intervención tuya. Dispatch = tú inicias manualmente desde el teléfono cuando lo necesitas. Morning briefing = Scheduled Task. "Analiza estos contratos mientras estoy en el metro" = Dispatch.',
    },
    {
      q: '¿Qué necesita estar activo en tu Mac para que Dispatch funcione correctamente desde tu teléfono?',
      opts: [
        'Solo la app de Claude instalada en el teléfono — el computador puede estar apagado',
        'Claude Desktop abierto en la pestaña CoWork con el modo no-suspensión activado',
        'Una conexión VPN activa entre el teléfono y el computador',
        'El plan Enterprise de Claude — Dispatch no está disponible en Pro o Max',
      ],
      correct: 1,
      exp: 'Dispatch funciona delegando tareas al agente CoWork en tu escritorio. Si el computador está apagado o Claude Desktop cerrado, no hay agente que ejecute las tareas. Deja el Mac en modo no-suspensión con Claude Desktop abierto para que Dispatch funcione durante tu jornada.',
    },
  ],
  challenge: {
    title: 'Reto 3.4 — Tu primera Scheduled Task real',
    desc: 'Configura un Morning Briefing automático que te espere cada mañana.',
    steps: [
      'Abre Claude Desktop → pestaña CoWork → busca la sección "Scheduled Tasks".',
      'Conecta al menos Gmail o Google Calendar si aún no lo has hecho (icono de Connectors).',
      'Crea una nueva Scheduled Task con estas instrucciones: "Cada día de semana a las 7:30 AM: Revisa mis emails no leídos de las últimas 12 horas. Identifica los que requieren respuesta urgente. Revisa mi calendario de hoy. Genera un briefing de máximo 300 palabras con: emails urgentes (máx 3), reuniones del día con contexto, y una tarea sugerida como primera prioridad."',
      'Configura el horario: Daily, días lunes a viernes, a las 7:30 AM.',
      'Activa la tarea y verifica que aparece como "Scheduled" en el panel.',
      'Si tienes teléfono: escanea el QR de Dispatch y envía tu primer mensaje remoto: "¿Cuáles son mis tareas pendientes más urgentes de hoy?"',
    ],
    checkpoint: 'La Scheduled Task está funcionando si mañana por la mañana, cuando abres Claude Desktop, hay un briefing generado automáticamente esperándote en CoWork — sin que lo hayas pedido. Ese momento es cuando entiendes realmente el valor de la automatización.',
  },
}

// ─── LECCIÓN: Claude Design → nuevo módulo o dentro de CoWork ─────────────────
export const CLAUDE_DESIGN_LESSON = {
  id: 'mod3_l3_design',
  num: '5.3',
  title: 'Claude Design: prototipos y diseño visual con IA',
  duration: '20 min',
  xpReward: 60,
  videoId: 'imAjmQy8p8c',
  videoCaption: 'Claude Design — crear prototipos visuales sin ser diseñador 2026',
  content: [
    {
      type: 'intro',
      text: 'Siempre has necesitado un diseñador para crear maquetas, prototipos o assets visuales. Claude Design cambia eso. No es Canva ni Figma — es Claude generando interfaces, layouts y prototipos interactivos directamente en la conversación, que puedes exportar a tu herramienta de diseño favorita.',
    },
    {
      type: 'concept',
      title: '¿Qué es Claude Design?',
      body: 'Claude Design es una capacidad de CoWork (lanzada en Q1 2026) que permite generar componentes de UI, layouts de página, prototipos interactivos y assets de diseño directamente desde instrucciones en lenguaje natural. Claude genera código HTML/CSS/React real que se renderiza en vivo dentro del entorno CoWork, no solo capturas estáticas.',
      highlight: 'Importante: Claude Design consume aproximadamente un tercio de tu cuota semanal de tokens solo en el setup inicial del sistema de diseño. Planifica usarlo en sesiones dedicadas, no de forma casual.',
    },
    {
      type: 'cards',
      title: '¿Qué puede crear Claude Design?',
      items: [
        {
          name: 'Prototipos de UI',
          tag: 'Más usado',
          color: '#6366F1',
          desc: 'Pantallas completas de aplicaciones web o móviles con navegación funcional. Ideal para validar ideas con stakeholders antes de invertir en desarrollo real.',
        },
        {
          name: 'Componentes de marca',
          tag: 'Para equipos',
          color: '#10B981',
          desc: 'Tarjetas, banners, headers, footers siguiendo tu guía de estilo. Si subiste tu brand guide al contexto, Claude aplica tus colores, tipografías y estilos automáticamente.',
        },
        {
          name: 'Dashboards de datos',
          tag: 'Para análisis',
          color: '#F97316',
          desc: 'Visualizaciones de datos, gráficos interactivos, tablas formateadas. Conectado con tu data via MCP, genera dashboards que se actualizan con datos reales.',
        },
        {
          name: 'Presentaciones estructuradas',
          tag: 'Reportes',
          color: '#8B5CF6',
          desc: 'Layouts para reportes ejecutivos, one-pagers de propuesta, briefs visuales. Exportables a PDF o como archivos de Canva/PowerPoint.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Flujo de trabajo: de idea a prototipo en 15 minutos',
      body: 'Paso 1: Describe lo que necesitas con detalle: "Crea un prototipo de dashboard para un gerente de ventas. Debe mostrar: pipeline por etapa, top 5 clientes por revenue, y forecast del mes. Usa colores corporativos: azul #1B4FBB y gris #F5F5F5." Paso 2: Claude genera el HTML/CSS/React y lo renderiza en vivo. Paso 3: Itera en lenguaje natural: "Mueve el pipeline a la parte superior", "Cambia los colores de las barras", "Agrega un filtro por región". Paso 4: Exporta como HTML, imagen PNG, o código listo para desarrollo.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Claude Design + Brand Identity Files',
      body: 'La combinación más poderosa: sube tu guía de marca (colores, tipografías, logos, tono visual) al contexto de Claude Design antes de empezar. Claude aplicará tus estándares automáticamente en cada componente generado. Especialmente útil para: agencias que trabajan con múltiples clientes (un Project por cliente con su brand guide), equipos de producto que necesitan consistencia sin depender del equipo de diseño para cada iteración.',
      highlight: 'Caso documentado: una agencia de marketing configuró Projects separados para cada cliente con su brand guide. Claude Design genera branded content para cada cliente sin que el equipo tenga que recordar o buscar los lineamientos en cada sesión.',
    },
  ],
  quiz: [
    {
      q: '¿Qué diferencia a Claude Design de Canva o Figma?',
      opts: [
        'Claude Design tiene más plantillas prediseñadas que cualquier otra herramienta',
        'Claude Design genera diseño desde instrucciones en lenguaje natural y produce código real (HTML/CSS/React), no solo imágenes estáticas',
        'Claude Design es más económico que las suscripciones de Canva o Figma',
        'Claude Design solo funciona para diseño de aplicaciones móviles, no web',
      ],
      correct: 1,
      exp: 'Claude Design no es una herramienta de plantillas — genera diseño desde descripción en lenguaje natural y produce código funcional real. El output no es una imagen estática sino HTML/CSS/React que puedes iterar conversacionalmente y exportar para desarrollo.',
    },
    {
      q: '¿Por qué debes planificar el uso de Claude Design en sesiones dedicadas y no de forma casual?',
      opts: [
        'Porque Claude Design requiere instalación adicional cada vez que lo usas',
        'Porque el setup inicial del sistema de diseño consume aproximadamente un tercio de tu cuota semanal de tokens',
        'Porque Claude Design solo funciona durante ventanas de tiempo específicas del día',
        'No hay razón especial — puedes usarlo igual que cualquier otra función de Claude',
      ],
      correct: 1,
      exp: 'Claude Design carga un sistema de diseño completo al inicio de cada sesión, lo que consume una parte significativa de la cuota. Si lo abres casualmente para hacer una pequeña cosa, gastarás tokens desproporcionados. Planifica sesiones de diseño dedicadas donde amortices ese costo inicial con trabajo real.',
    },
    {
      q: '¿Cómo logras que Claude Design siempre respete los estándares visuales de tu marca?',
      opts: [
        'Claude Design detecta automáticamente la marca por el nombre de la empresa sin configuración',
        'Subes tu guía de marca (colores, tipografías, tono visual) al contexto del Project antes de empezar — Claude la aplica automáticamente',
        'Debes especificar los colores y fuentes en cada prompt individual',
        'Claude Design no soporta guías de marca personalizadas — solo tiene paletas predefinidas',
      ],
      correct: 1,
      exp: 'Al subir tu brand guide al contexto del Project, Claude Design lo lee antes de cada sesión y aplica tus estándares automáticamente. Es la misma lógica de los archivos de identidad: configuras una vez, funciona siempre.',
    },
  ],
  challenge: {
    title: 'Reto 3.5 — Tu primer prototipo con Claude Design',
    desc: 'Crea un prototipo funcional de algo que necesites en tu trabajo.',
    steps: [
      'En Claude Desktop → CoWork, activa Claude Design si no está activo.',
      'Prepara tu brief visual: piensa en algo que necesitas (dashboard, landing page de propuesta, one-pager de cliente, template de reporte).',
      'Si tienes brand guidelines, súbelas al contexto antes de empezar: colores HEX, tipografías, logo en texto descriptivo.',
      'Escribe un prompt descriptivo: "Crea [qué es]. Debe incluir [elementos específicos]. Colores: [tus colores]. Estilo: [referencia o descripción del estilo que quieres]."',
      'Observa el prototipo generado. Usa lenguaje natural para iterar: "Mueve X aquí", "Cambia el color de Y", "Agrega una sección para Z".',
      'Cuando estés satisfecho, expórtalo como HTML o imagen.',
    ],
    checkpoint: 'El reto es exitoso si creaste algo que genuinamente podrías usar o mostrar a alguien en tu trabajo — no un ejercicio genérico sino algo con tu marca, tu contenido, tus datos. Ese es el estándar universitario: output real, no ejercicio artificial.',
  },
}

// ─── LECCIÓN: AI Safety & Uso Ético → nuevo módulo ───────────────────────────
export const AI_SAFETY_LESSON = {
  id: 'mod_safety_l1',
  num: '8.1',
  title: 'IA Responsable: seguridad, ética y uso crítico',
  duration: '25 min',
  xpReward: 65,
  videoId: 'G7iPM9oWhZE',
  videoCaption: 'Uso ético y responsable de IA — Anthropic AI Safety 2026',
  content: [
    {
      type: 'intro',
      text: 'Dominar Claude sin entender sus límites éticos y sus riesgos reales es como aprender a conducir sin entender las señales de tráfico. Esta lección no es opcional ni ceremonial — es el conocimiento que determina si eres un usuario que multiplica valor o uno que genera daño sin darse cuenta.',
    },
    {
      type: 'concept',
      title: 'La filosofía de seguridad de Anthropic',
      body: 'Anthropic fue fundada con un mandato explícito: construir IA que sea útil, inofensiva y honesta. Esto se llama el marco HHH (Helpful, Harmless, Honest). Claude está entrenado para priorizar la honestidad sobre la complacencia — prefiere decirte que no puede hacer algo antes que hacer algo dañino aunque tú insistas. Esto no es una limitación técnica, es una elección de diseño deliberada.',
      highlight: 'Claude está diseñado para decir no cuando debe. Si Claude se niega a hacer algo, generalmente hay una razón válida. En lugar de intentar "bypassear" la negativa, pregúntale directamente: "¿Por qué no puedes hacer esto?" — la explicación suele ser informativa.',
    },
    {
      type: 'cards',
      title: 'Los 4 riesgos más comunes del uso diario',
      items: [
        {
          name: 'Alucinaciones con consecuencias',
          tag: 'El más frecuente',
          color: '#EF4444',
          desc: 'Claude puede inventar estadísticas, citas, nombres de personas reales, URLs, fechas o hechos históricos con total convicción. Nunca uses datos de Claude sin verificarlos cuando las consecuencias importan — en documentos legales, médicos, financieros o públicos.',
        },
        {
          name: 'Sobreconfianza en el output',
          tag: 'Sutil pero grave',
          color: '#F97316',
          desc: 'Claude suena seguro incluso cuando está equivocado. El tono confiado no es garantía de exactitud. Para temas especializados (derecho, medicina, finanzas), Claude es un punto de partida para investigar, nunca la fuente final.',
        },
        {
          name: 'Privacidad y datos sensibles',
          tag: 'Crítico',
          color: '#8B5CF6',
          desc: 'Lo que compartes con Claude (plan Free/Pro) puede usarse para mejorar los modelos. Nunca pegues: contraseñas, datos bancarios, información de salud de terceros, contratos confidenciales, datos personales de clientes. Usa el plan Enterprise con ZDR para trabajo con datos sensibles.',
        },
        {
          name: 'Sesgo y perspectiva única',
          tag: 'Importante',
          color: '#6366F1',
          desc: 'Claude tiene sesgos culturales, ideológicos y de entrenamiento. Para decisiones importantes con impacto en personas, pide explícitamente múltiples perspectivas: "¿Qué argumentos en contra no he considerado?" y "¿Qué grupos podrían verse afectados negativamente?"',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Verificación crítica: el protocolo de los 3 niveles',
      body: 'Nivel 1 (bajo riesgo — uso interno, borrador): output de Claude listo para usar con revisión rápida. Nivel 2 (riesgo medio — comunicación externa, decisiones operativas): verifica datos específicos, estadísticas y citas con fuentes primarias. Nivel 3 (alto riesgo — documentos legales, médicos, financieros, públicos): Claude como primer borrador + revisión experta humana obligatoria. El error más costoso es aplicar el nivel 1 a situaciones que requieren el nivel 3.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Uso ético en el trabajo: 4 principios prácticos',
      body: '1) Transparencia: cuando el output de Claude va a personas externas, considera si deben saber que fue asistido por IA. Hay contextos donde es obligatorio. 2) Crédito intelectual: en entornos académicos y profesionales, Claude como asistente es diferente a Claude como autor. Conoce las políticas de tu institución o empresa. 3) Impacto en terceros: antes de usar Claude para crear contenido sobre personas reales, evalúa si podría dañar su reputación injustamente. 4) Dependencia excesiva: Claude puede atrofiar habilidades si lo usas como sustituto en lugar de amplificador. Úsalo para hacer mejor lo que ya sabes, no para evitar aprender lo que deberías saber.',
      highlight: 'Señal de dependencia excesiva: si ya no puedes redactar un email sin consultar a Claude, algo está mal. La IA debe amplificar tu capacidad, no reemplazarla.',
    },
    {
      type: 'concept',
      title: 'El futuro del trabajo con IA: preparación, no reemplazo',
      body: 'El debate "la IA reemplazará empleos" tiene una respuesta más matizada: las personas que usan IA bien están reemplazando a personas que no la usan. Los empleos que desaparecen son los que consisten principalmente en tareas que la IA hace mejor (transcripción, clasificación, drafts estándar). Los que crecen son los que requieren juicio contextual, relaciones humanas, creatividad no algorítmica y responsabilidad ética. Dominar Claude es inversión en la segunda categoría.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Qué significa que Claude esté diseñado siguiendo el marco HHH?',
      opts: [
        'Que Claude puede realizar tareas de HTML, HTTP y HTTPS de forma nativa',
        'Que Claude está entrenado para ser Helpful (útil), Harmless (inofensivo) y Honest (honesto) — priorizando honestidad sobre complacencia',
        'Que Claude tiene 3 niveles de velocidad: High, High-performance y Hyper',
        'Que Claude maneja 3 idiomas de forma nativa: Humano, HTML y Hindi',
      ],
      correct: 1,
      exp: 'HHH es el marco ético central de Anthropic: Helpful (que sea genuinamente útil), Harmless (que no cause daño), Honest (que sea verídico incluso cuando no es lo que el usuario quiere escuchar). Claude prefiere negarse a hacer algo dañino antes que obedecer ciegamente.',
    },
    {
      q: 'Estás redactando un informe médico para un paciente basándote en información que Claude te proporcionó. ¿Qué protocolo de verificación aplicas?',
      opts: [
        'Nivel 1 — revisión rápida, Claude es muy confiable en temas médicos',
        'Nivel 2 — verificas las estadísticas más importantes con una segunda búsqueda',
        'Nivel 3 — Claude como primer borrador obligatorio + revisión completa por un profesional médico antes de entregarlo',
        'No hay protocolo especial — un informe médico es como cualquier otro documento',
      ],
      correct: 2,
      exp: 'Los documentos médicos son Nivel 3 sin excepción. Claude puede alucinar datos clínicos con total convicción. Un error en un informe médico puede tener consecuencias graves para el paciente. Claude es el primer borrador; la revisión experta humana es obligatoria, no opcional.',
    },
    {
      q: '¿Cuál es la señal más clara de que estás usando Claude de forma contraproducente (dependencia excesiva)?',
      opts: [
        'Usar Claude para más de 3 tareas diferentes al día',
        'Pagar por el plan Pro o Max — sugiere que dependes demasiado de la herramienta',
        'Ya no puedes realizar tareas que antes hacías bien sin consultar a Claude primero — la IA está reemplazando tu capacidad en lugar de ampliarla',
        'Usar Claude para tareas que duran menos de 5 minutos',
      ],
      correct: 2,
      exp: 'La dependencia excesiva se manifiesta cuando Claude se convierte en muleta en lugar de amplificador. Si delegas sistemáticamente el pensamiento crítico, la escritura básica o las decisiones estándar sin ejercitar tu propio criterio, estás atrofiando capacidades que necesitarás cuando Claude no esté disponible o se equivoque.',
    },
  ],
  challenge: {
    title: 'Reto E.1 — Auditoría ética de tu uso actual',
    desc: 'Una revisión honesta de cómo estás usando Claude y dónde están tus riesgos.',
    steps: [
      'Lista las 5 tareas que más frecuentemente delegas a Claude actualmente.',
      'Para cada una, clasifícala por nivel de riesgo: Nivel 1 (bajo), Nivel 2 (medio), Nivel 3 (alto).',
      'Para las de Nivel 3: ¿estás aplicando verificación experta humana? Si no, ¿por qué no? Documenta honestamente.',
      'Evalúa: ¿hay alguna tarea donde sientes que Claude te está haciendo "más tonto" en lugar de más capaz? (señal de dependencia excesiva).',
      'Revisa tu configuración de privacidad: ve a claude.ai → Settings → Data & Privacy. ¿Está activa la opción de no usar tus conversaciones para entrenar modelos? Si no, actívala.',
      'Define tu política personal: escribe 3 reglas sobre cómo usarás Claude de forma responsable en tu contexto específico.',
    ],
    checkpoint: 'La auditoría es completa cuando puedes decir honestamente: "Para cada tarea donde uso Claude con consecuencias reales, tengo un protocolo de verificación apropiado al nivel de riesgo." Si hay áreas donde eso no es cierto, ese es exactamente el problema que esta lección existe para resolver.',
  },
}

// ─── LECCIÓN: Evaluar Outputs — Evals ────────────────────────────────────────
export const EVALS_LESSON = {
  id: 'mod4_l6',
  num: '6.2',
  title: 'Evals: cómo saber si Claude está haciendo bien su trabajo',
  duration: '25 min',
  xpReward: 70,
  videoId: 'EGWATU5S470',
  videoCaption: 'Evaluación de outputs de Claude — métricas y testing para producción',
  content: [
    {
      type: 'intro',
      text: 'Construiste un agente que parece funcionar bien. ¿Pero cómo sabes si realmente funciona bien? ¿Qué tan seguido se equivoca? ¿Mejora o empeora cuando cambias el prompt? Sin un sistema de evaluación (Evals), estás confiando en intuición. Con Evals, tienes datos. La diferencia entre un experimento y un sistema en producción es la capacidad de medir.',
    },
    {
      type: 'concept',
      title: '¿Qué son los Evals?',
      body: 'Evals (evaluaciones) son conjuntos de casos de prueba que miden la calidad del output de Claude de forma sistemática. En lugar de probar manualmente si Claude responde bien, creates un conjunto de inputs con los outputs esperados y los corres automáticamente. Cuando cambias el prompt o el modelo, los Evals te dicen si mejoró o empeoró — con datos, no con suposiciones.',
      highlight: 'Anthropic tiene un curso oficial de Evals en su plataforma Skilljar (anthropic.skilljar.com). Lo recomendamos como complemento a esta lección para quienes trabajan con la API en producción.',
    },
    {
      type: 'cards',
      title: 'Los 3 tipos de evaluación que necesitas conocer',
      items: [
        {
          name: 'Evaluación manual (rubric)',
          tag: 'Empieza aquí',
          color: '#6366F1',
          desc: 'Creas un criterio explícito de lo que es un "buen output" (un rubric) y evalúas manualmente una muestra de respuestas contra ese criterio. Lento pero fundamental para establecer el estándar de calidad.',
        },
        {
          name: 'LLM-as-judge',
          tag: 'El más popular',
          color: '#10B981',
          desc: 'Usas otro Claude (o el mismo en un contexto separado) como juez que evalúa los outputs. Le das el rubric y le pides que califique cada respuesta del 1 al 5 con justificación. Escala bien, aunque tiene su propio sesgo.',
        },
        {
          name: 'Evaluación automática con código',
          tag: 'Para producción',
          color: '#F97316',
          desc: 'Para casos donde el output tiene estructura predecible (JSON, código, clasificación binaria), puedes escribir tests que verifican automáticamente si el output cumple los criterios. Es la evaluación más confiable y escalable.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'El ciclo de mejora: Eval → Cambio → Eval',
      body: 'El flujo correcto para mejorar un sistema con Claude: (1) Establece un baseline — corre tu conjunto de 20-50 casos de prueba con el prompt actual y mide la tasa de éxito. (2) Hace un cambio — modifica el prompt, cambia el modelo, ajusta el contexto. (3) Corre los Evals de nuevo — ¿mejoró la tasa de éxito? ¿en cuánto? ¿para qué tipos de casos? (4) Decide si el cambio es mejora neta. Sin este ciclo, estás haciendo cambios a ciegas.',
      highlight: 'Regla de oro: nunca cambies un sistema en producción sin correr los Evals antes y después del cambio. Lo que "parece mejor" intuitivamente a veces empeora casos edge que no habías notado.',
    },
    {
      type: 'concept',
      title: 'Cómo crear tu primer conjunto de Evals',
      body: 'Para un sistema simple: (1) Recopila 20-30 ejemplos de inputs reales del sistema. (2) Para cada input, define cuál sería el output ideal (ground truth). (3) Define 3-5 criterios de evaluación: precisión factual, tono apropiado, formato correcto, completitud, ausencia de alucinaciones. (4) Evalúa el output actual del sistema contra esos criterios. (5) Calcula una tasa de éxito global. Este baseline es tu punto de referencia para todas las mejoras futuras.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'El patrón Planner-Generator-Evaluator en la práctica',
      body: 'Como viste en el módulo de Agentes (lección 4.5), el Evaluator es un agente separado que critica el output del Generator sin acceso a su razonamiento. Esto elimina el sesgo de auto-evaluación. En la práctica: el Generator produce un borrador, el Evaluator lo revisa contra el rubric y proporciona feedback estructurado, el Generator incorpora el feedback y produce la versión final. Este patrón mejora la tasa de éxito en ~10 puntos porcentuales en benchmarks de Anthropic.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia entre tener un sistema de Claude "que parece funcionar" y uno "que funciona" con Evals?',
      opts: [
        'No hay diferencia significativa — si parece funcionar, funciona',
        'Con Evals tienes una tasa de éxito medida con datos reales; sin ellos confías en intuición que puede estar sesgada por los casos que ves y no por los que fallan silenciosamente',
        'Los Evals solo importan para sistemas con más de 1,000 usuarios diarios',
        'Los Evals son solo para ingenieros de ML — usuarios de negocio no necesitan evaluar sistemas',
      ],
      correct: 1,
      exp: 'La intuición está sesgada hacia los casos que ves — y raramente notas los fallos silenciosos. Un sistema puede tener un 70% de tasa de éxito y "parecer bien" si los fallos son en casos poco frecuentes o poco visibles. Los Evals te dan el número real y te muestran exactamente en qué tipos de casos falla.',
    },
    {
      q: '¿Qué es "LLM-as-judge" y cuándo es la evaluación más práctica?',
      opts: [
        'Es un concurso entre diferentes modelos de lenguaje para ver cuál produce el mejor output',
        'Es usar otro Claude en un contexto separado para calificar outputs contra un rubric — práctico cuando los outputs tienen forma de texto libre que no puedes verificar automáticamente',
        'Es un sistema legal donde un LLM actúa como árbitro en disputas contractuales',
        'Solo funciona para evaluar outputs en inglés',
      ],
      correct: 1,
      exp: 'LLM-as-judge es la evaluación más práctica para outputs de texto libre (correos, análisis, reportes) donde no puedes verificar automáticamente con código. Le das a Claude el rubric y los outputs, y te da calificaciones con justificaciones. Escala bien aunque no es perfectamente objetivo — tiene su propio sesgo hacia ciertos estilos.',
    },
    {
      q: 'Mejoraste el prompt de tu agente y "parece mejor" cuando lo pruebas manualmente. ¿Qué haces antes de desplegarlo en producción?',
      opts: [
        'Lo despliegas inmediatamente — si parece mejor, es mejor',
        'Preguntas a 3 colegas si el nuevo output les parece mejor',
        'Corres tu conjunto completo de Evals con el nuevo prompt y lo comparas con el baseline del prompt anterior antes de decidir',
        'Esperas 1 semana de uso para ver si los usuarios se quejan menos',
      ],
      correct: 2,
      exp: 'La sensación de "parece mejor" está sesgada por los casos que probaste manualmente — que probablemente son los más obvios. Los Evals te muestran el impacto en todos los casos, incluyendo los edge cases que no probaste. Un cambio que mejora 5 casos comunes pero rompe 10 casos edge es una regresión, no una mejora.',
    },
  ],
  challenge: {
    title: 'Reto 4.6 — Tu primer conjunto de Evals manual',
    desc: 'Crea un sistema de evaluación básico para un proceso que uses con Claude.',
    steps: [
      'Elige un proceso que uses con Claude regularmente (ej: resumir documentos, responder emails tipo, clasificar información, generar reportes).',
      'Recopila 10 ejemplos reales de inputs que has usado (o que podrías usar).',
      'Para 5 de esos inputs, define qué sería el output ideal — sé específico: "el resumen debe tener máximo 3 puntos, mencionar la fecha, e identificar la acción requerida".',
      'Corre tu prompt actual en los 5 casos y califica cada output del 1 al 5 contra tu criterio.',
      'Calcula tu tasa de éxito base (cuántos de los 5 alcanzaron un 4 o 5).',
      'Modifica algo del prompt y vuélvelo a correr. ¿Mejoró la tasa? ¿Empeoró en algún caso?',
    ],
    checkpoint: 'Tienes un Eval funcional cuando puedes hacer un cambio al prompt, correr los 10 casos, y decir con datos: "esto mejoró X% y solo empeoró en el caso Y." Ese nivel de claridad es lo que separa la optimización sistemática del ensayo y error a ciegas.',
  },
}
