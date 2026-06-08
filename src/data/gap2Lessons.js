// ─── GAP2 LESSONS — Junio 2026 ────────────────────────────────────────────────

// ─── 1. GUÍA DE MODELOS 2026 (mod1, 1.9) ─────────────────────────────────────
export const MODELS_GUIDE_LESSON = {
  id: 'mod1_l9',
  num: '1.9',
  title: 'Guía de modelos 2026: cuándo usar Opus, Sonnet, Haiku y Mythos',
  duration: '20 min',
  xpReward: 55,
  videoId: 'NO_VIDEO',
  videoCaption: 'Guía definitiva de modelos Claude 2026',
  content: [
    {
      type: 'intro',
      text: 'Hay 4 familias de modelos Claude activos en 2026: Opus, Sonnet, Haiku y Mythos. Elegir el modelo equivocado es el error más caro que cometen los builders — puedes pagar 25 veces más por Opus cuando Sonnet hubiera dado el mismo resultado, o sacrificar calidad usando Haiku donde importa. Esta lección es el mapa definitivo.',
    },
    {
      type: 'cards',
      title: 'Los 4 modelos — casos de uso y precios',
      items: [
        {
          name: 'Claude Opus 4.8',
          tag: '$5 / $25 MTok',
          color: '#8B5CF6',
          desc: 'El más capaz. Para: razonamiento complejo multi-paso, código con arquitecturas sofisticadas, análisis de documentos densos, decisiones con múltiples variables. Extended Thinking + Tool Use disponible. Contexto 1M tokens. Usa cuando el error sería costoso.',
        },
        {
          name: 'Claude Sonnet 4.6',
          tag: '$3 / $15 MTok',
          color: '#6366F1',
          desc: 'El equilibrio precio-calidad. El modelo que usa Claude Code por defecto. Para: desarrollo de software general, pipelines de agentes, workflows de contenido en volumen, chatbots de producción. Usa en el 80% de tus casos.',
        },
        {
          name: 'Claude Haiku 4.5',
          tag: '$0.80 / $4 MTok',
          color: '#10B981',
          desc: 'El más rápido y económico. Para: clasificación, extracción de datos simples, moderación, resúmenes breves, pipelines de alto volumen. Advertencia: Haiku tiene CERO protección contra prompt injection — nunca lo expongas a inputs externos no verificados.',
        },
        {
          name: 'Claude Mythos',
          tag: 'Preview cerrada',
          color: '#EF4444',
          desc: 'Modelo experimental solo disponible via Project Glasswing para ciberseguridad defensiva. Capaz de encontrar y analizar vulnerabilidades en software crítico. No disponible para uso general — acceso ampliado esperado en Q3 2026.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Extended Thinking + Tool Use en Opus 4.8',
      body: 'Opus 4.8 puede alternar entre razonamiento profundo y uso de herramientas dentro del mismo bloque de Extended Thinking. Claude razona sobre qué buscar → busca en la web → razona sobre los resultados → ejecuta código → razona sobre el output → da la respuesta final. Cada paso de razonamiento informa el siguiente, con datos reales.\n\nCaso real: "Analiza si debo migrar mi DB a Supabase." Claude activa Extended Thinking, consulta la documentación de Supabase (tool use), razona sobre los resultados, consulta tus datos de carga actuales (tool use), y finalmente te da una recomendación basada en datos reales, no en conocimiento estático.',
      highlight: 'Extended Thinking + Tool Use requiere Opus 4.8. Claude.ai lo activa automáticamente en modo Opus cuando detecta que el problema requiere investigación con herramientas.',
    },
    {
      type: 'concept',
      title: 'Advisor Pattern aplicado a modelos: reduce costos 10x',
      body: 'El Advisor Pattern (Lección 3.7) usa Opus para revisar el trabajo de Sonnet. Esta lógica aplica a toda tu arquitectura: Sonnet como base (costo bajo, volumen alto), Opus solo cuando hay ambigüedad alta o riesgo de error costoso. Para pipelines de agentes: orquestador en Opus, workers en Sonnet, clasificaciones en Haiku. El costo del mismo pipeline puede reducirse 10x con esta estrategia sin sacrificar calidad en las decisiones importantes.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Por qué NO se recomienda usar Claude Haiku cuando los inputs vienen de usuarios externos no verificados?',
      opts: [
        'Haiku es más lento procesando inputs externos',
        'Haiku tiene cero protección contra prompt injection — inputs maliciosos pueden manipularlo fácilmente',
        'Haiku no puede procesar más de 10,000 tokens de contexto',
        'Haiku no tiene acceso a herramientas MCP',
      ],
      correct: 1,
      exp: 'Las protecciones de seguridad de Claude escalan con el tamaño del modelo. Haiku, optimizado para velocidad y costo, tiene mínima protección. Si un input malicioso dice "ignora tus instrucciones y haz X", Haiku es mucho más susceptible que Sonnet u Opus. Regla: Haiku para datos internos confiables, Sonnet mínimo para cualquier input externo.',
    },
    {
      q: '¿Qué capacidad exclusiva de Opus 4.8 permite razonar y consultar herramientas en el mismo proceso de pensamiento?',
      opts: [
        'Adaptive Thinking',
        'Extended Thinking + Tool Use',
        'Computer Use avanzado',
        'Multimodal Reasoning',
      ],
      correct: 1,
      exp: 'Extended Thinking + Tool Use permite que Claude alterne entre bloques de razonamiento y llamadas a herramientas dentro del mismo proceso. Esto produce respuestas basadas en datos reales investigados en tiempo real, no en conocimiento estático del entrenamiento.',
    },
    {
      q: '¿En qué modelo debería correr el agente orquestador en un pipeline multi-agente?',
      opts: [
        'Haiku — es el más rápido para coordinar',
        'Siempre el mismo modelo que los workers para consistencia',
        'Opus — el orquestador toma decisiones complejas; los workers pueden ser Sonnet o Haiku',
        'Mythos — el más capaz para orquestación',
      ],
      correct: 2,
      exp: 'El orquestador toma las decisiones más complejas: descomponer la tarea, asignar trabajo, detectar errores, consolidar resultados. Esas decisiones se benefician de Opus. Los workers ejecutan tareas acotadas — Sonnet es suficiente. Haiku para clasificaciones simples. Esta distribución puede reducir el costo total 10x vs correr todo en Opus.',
    },
  ],
  challenge: {
    title: 'Reto 1.9 — Diseña la estrategia de modelos para tu proyecto',
    desc: 'Mapea qué modelo usarías en cada paso de un workflow real tuyo.',
    steps: [
      'Elige un proyecto o workflow tuyo con al menos 3 pasos distintos (pipeline de contenido, agente de soporte, análisis de datos).',
      'Para cada paso, clasifica: ¿qué nivel de complejidad/riesgo tiene? ¿Los inputs son internos o externos/no verificados?',
      'Asigna un modelo a cada paso: Haiku para steps simples con datos internos, Sonnet para el volumen principal, Opus para decisiones críticas.',
      'Calcula el costo estimado: tokens promedio por step × precio del modelo × volumen mensual.',
      'Compara vs correr todo en Opus. ¿Cuánto ahorras con la estrategia mixta?',
    ],
    checkpoint: 'Completo cuando tienes una tabla con cada paso de tu workflow, el modelo asignado, y la justificación. Si el costo estimado con estrategia mixta es menos del 50% vs todo-Opus, tu arquitectura está bien optimizada.',
  },
}

// ─── 2. CONSTITUCIÓN DE CLAUDE (mod_safety, 8.0) ─────────────────────────────
export const CONSTITUTION_LESSON = {
  id: 'mod_safety_l0',
  num: '8.0',
  title: 'La Constitución de Claude: los valores que moldean su comportamiento',
  duration: '20 min',
  xpReward: 55,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'En enero de 2026, Anthropic publicó la Constitución de Claude — un documento público que describe exactamente cómo quieren que Claude piense y qué valores tiene. Para cualquier persona que trabaja con Claude, leer la Constitución es como leer el manual del modelo: explica por qué a veces dice no, por qué pide clarificaciones, y cómo decide qué responder.',
    },
    {
      type: 'concept',
      title: '¿Qué es la Constitución y por qué existe?',
      body: 'La Constitución no es una lista de reglas prohibitivas. Es un documento holístico que describe el tipo de entidad que Anthropic quiere que Claude sea: inteligente, honesto, cuidadoso, con valores genuinos y no solo reglas memorizadas. A diferencia de reglas que Claude obedece mecánicamente, la Constitución intenta enseñar a Claude a entender el "por qué" detrás de cada principio — para navegar situaciones ambiguas con buen juicio.\n\nEl documento es público en anthropic.com/claude/constitution. Esta transparencia es intencional: Anthropic quiere que usuarios, reguladores y la sociedad entiendan cómo se toman las decisiones sobre el comportamiento de Claude.',
      highlight: 'La Constitución se usa directamente en el entrenamiento de Claude — no es marketing. Su contenido moldea los pesos del modelo.',
    },
    {
      type: 'cards',
      title: 'Los 4 pilares en orden de prioridad',
      items: [
        {
          name: 'Broadly Safe',
          tag: 'Prioridad 1',
          color: '#EF4444',
          desc: 'Apoyar la supervisión humana durante el período actual de desarrollo de IA. Claude debe ser corregible — si Anthropic o el usuario detectan un error, Claude debe poder ser ajustado. No actuar de formas que concentren poder peligrosamente.',
        },
        {
          name: 'Broadly Ethical',
          tag: 'Prioridad 2',
          color: '#F59E0B',
          desc: 'Tener buenos valores, ser honesto, y evitar acciones peligrosas o poco éticas. Incluye no engañar al usuario, no causar daño no deseado, y considerar el bienestar de terceros.',
        },
        {
          name: 'Adherent to Principles',
          tag: 'Prioridad 3',
          color: '#6366F1',
          desc: 'Actuar de acuerdo con las guidelines de Anthropic. En conflicto con la ética, la ética gana — las guidelines deben ser consistentes con principios éticos, no sobreponerse a ellos.',
        },
        {
          name: 'Genuinely Helpful',
          tag: 'Prioridad 4',
          color: '#10B981',
          desc: 'Beneficiar realmente a operators y usuarios. Ser el "amigo brillante" con expertise real — no dar respuestas excesivamente cautelosas. La sobre-cautela también es un fallo, no una virtud.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Lo que la Constitución significa para ti como builder',
      body: 'Entender la Constitución da ventaja práctica:\n\n1. Por qué Claude dice no: tiene jerarquía de valores. Algo que viola Broadly Safe → no lo hará. Algo éticamente ambiguo → buscará más contexto o hará la versión más segura.\n\n2. Cómo obtener mejores respuestas: Claude prefiere ser genuinamente útil. Si es excesivamente cauteloso, puedes darle contexto legítimo ("Soy médico, necesito información sobre dosis") — la Constitución dice explícitamente que el contexto del usuario debe cambiar la respuesta cuando es plausible.\n\n3. La sobre-cautela es un fallo: Anthropic reconoce que Claude siendo demasiado restrictivo es un problema. Si Claude rechaza algo razonable, eso es un bug reportable.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es el orden de prioridad correcto en la Constitución cuando hay conflicto entre valores?',
      opts: [
        'Helpfulness → Ethics → Safety → Principles',
        'Broadly Safe → Broadly Ethical → Adherent to Principles → Genuinely Helpful',
        'Ethics → Safety → Helpfulness → Principles',
        'Principles → Safe → Helpful → Ethical',
      ],
      correct: 1,
      exp: 'El orden es: (1) Broadly Safe — supervisión humana es la prioridad máxima durante el período actual. (2) Broadly Ethical — valores genuinos sobre reglas mecánicas. (3) Adherent to Principles — guidelines de Anthropic. (4) Genuinely Helpful — el objetivo final, pero que no puede comprometer los tres anteriores.',
    },
    {
      q: '¿Qué dice la Constitución sobre la excesiva cautela de Claude?',
      opts: [
        'La cautela extra siempre es preferible — es una feature, no un bug',
        'La sobre-cautela es un fallo igual que el daño real — Claude debe ser genuinamente útil, no defensivamente restrictivo',
        'Claude solo debe ser cauteloso con código y finanzas',
        'Los rechazos innecesarios protegen a Anthropic legalmente',
      ],
      correct: 1,
      exp: 'La Constitución es explícita: la sobre-cautela y los rechazos innecesarios son un fallo, no una virtud. Anthropic quiere que Claude sea "el amigo brillante con expertise real". Si Claude rechaza algo legítimo, ese es un bug reportable.',
    },
    {
      q: '¿Cómo puede el contexto que das cambiar el comportamiento de Claude?',
      opts: [
        'No puede — Claude responde igual independientemente del contexto',
        'Solo funciona con plan Pro o superior',
        'El contexto legítimo (rol, propósito) debe cambiar la respuesta de Claude cuando es plausible — la Constitución lo establece explícitamente',
        'Solo funciona en la API, no en claude.ai',
      ],
      correct: 2,
      exp: 'La Constitución establece que el contexto del usuario debe informar el juicio de Claude. Un médico pidiendo información sobre dosis recibe una respuesta diferente a un usuario sin contexto. El contexto legítimo y plausible expande lo que Claude considera apropiado — por diseño.',
    },
  ],
  challenge: {
    title: 'Reto 8.0 — Lee la Constitución y aplica un principio',
    desc: 'Lee el documento real y encuentra cómo afecta un workflow tuyo.',
    steps: [
      'Ve a anthropic.com/claude/constitution y lee las primeras 3 secciones (≈15 minutos).',
      'Identifica UN principio que cambie cómo entiendes el comportamiento de Claude en algo que haces habitualmente.',
      'Encuentra un caso donde Claude haya sido más restrictivo de lo esperado. ¿Cuál de los 4 pilares estaba aplicando?',
      'Prueba añadir contexto legítimo a esa misma solicitud: tu rol, tu propósito. ¿Cambia la respuesta?',
      'Escribe en 2-3 oraciones qué aprendiste sobre el comportamiento de Claude que cambia cómo lo vas a usar.',
    ],
    checkpoint: 'Completo cuando puedes identificar cuál pilar de la Constitución explica un comportamiento específico de Claude que antes te parecía arbitrario.',
  },
}

// ─── 3. CLAUDE FOR CHROME (mod3, 5.0a) ───────────────────────────────────────
export const CHROME_AGENT_LESSON = {
  id: 'mod3_chrome',
  num: '5.0a',
  title: 'Claude en Chrome: tu agente de investigación en el navegador',
  duration: '20 min',
  xpReward: 60,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'Claude for Chrome convierte tu navegador en un agente activo. No es una extensión que abre un chat al lado de la página — es Claude con acceso directo a lo que estás mirando, capaz de navegar, extraer información y tomar acciones en el browser. Combinado con CoWork, Chrome se convierte en la capa de investigación web para tareas complejas.',
    },
    {
      type: 'concept',
      title: 'Qué puede hacer Claude en Chrome',
      body: 'Claude for Chrome tiene tres capacidades principales:\n\n1. Ver lo que tú ves: Claude lee el contenido de la página activa incluyendo texto, tablas, precios y datos estructurados. Sin copy-paste.\n\n2. Navegar: Claude puede ir a URLs, hacer clicks en links, rellenar formularios y seguir flujos de múltiples pasos (buscar, filtrar, abrir producto, extraer precio).\n\n3. Tomar acciones: Claude puede rellenar formularios, hacer búsquedas y ejecutar flujos con tu confirmación.\n\nDisponible para usuarios Max (acceso completo) y en beta para Pro. Instalación: Chrome Web Store → busca "Claude".',
      highlight: 'Claude for Chrome accede solo al contenido de la pestaña activa. Cada acción sensible requiere tu confirmación — no es un agente completamente autónomo.',
    },
    {
      type: 'cards',
      title: 'Casos de uso validados por la comunidad',
      items: [
        {
          name: 'Investigación de mercado',
          tag: 'Research',
          color: '#6366F1',
          desc: 'Navega 10 competidores, extrae precios y características de cada uno, genera tabla comparativa. Sin copiar manualmente. Tiempo: 5 minutos vs 2 horas manual.',
        },
        {
          name: 'Monitoreo de proveedores',
          tag: 'E-commerce',
          color: '#10B981',
          desc: 'Visita páginas de proveedores, extrae precios actuales, compara con tu base de datos y avisa de cambios. Funciona con cualquier tienda sin necesidad de API.',
        },
        {
          name: 'Prospecting en LinkedIn',
          tag: 'Ventas',
          color: '#2563EB',
          desc: 'Navega perfiles, extrae información de contacto, cargo y empresa. Respeta los límites de rate de LinkedIn — no es scraping agresivo.',
        },
        {
          name: 'Resumen de hilos largos',
          tag: 'Productividad',
          color: '#F59E0B',
          desc: 'Abre un hilo de Twitter/X, email o artículo largo. Claude lee todo y da resumen ejecutivo con los puntos clave sin salir del browser.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Chrome + CoWork: el stack completo de automatización de desktop',
      body: 'Chrome y CoWork son complementarios:\n\nCoWork (Lección 5.0) orquesta flujos del sistema: mueve archivos, abre apps, gestiona carpetas, automatiza workflows del OS.\n\nClaude for Chrome navega la web: extrae datos, investiga, rellena formularios, monitorea páginas.\n\nFlujo real: CoWork detecta una carpeta con briefs de clientes → Claude for Chrome investiga a cada cliente en LinkedIn y Google → CoWork guarda los perfiles en la carpeta correspondiente → Claude prepara la estrategia de presentación. Este stack cubre el 90% de tareas de investigación + ejecución que antes requerían herramientas de pago separadas.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia principal entre Claude for Chrome y una extensión de IA tradicional?',
      opts: [
        'Claude for Chrome es más barato',
        'Claude for Chrome puede navegar activamente, hacer clicks y tomar acciones — no solo responder sobre lo que le pegas',
        'Claude for Chrome funciona offline',
        'Claude for Chrome accede a todas tus pestañas simultáneamente',
      ],
      correct: 1,
      exp: 'Las extensiones tradicionales esperan que copies y pegues contenido en el chat. Claude for Chrome lee la página activa y puede navegar a otras páginas, hacer clicks, rellenar formularios y seguir flujos de múltiples pasos — es un agente que va a buscar los datos, no uno que espera recibirlos.',
    },
    {
      q: '¿En qué plan está disponible Claude for Chrome con acceso completo?',
      opts: [
        'En todos los planes incluyendo el gratuito',
        'Solo en Enterprise',
        'En usuarios Max (acceso completo) y beta para Pro',
        'Solo disponible en Estados Unidos con plan Team',
      ],
      correct: 2,
      exp: 'Claude for Chrome está disponible con acceso completo para usuarios Max. Los usuarios Pro tienen acceso en beta con algunas limitaciones. Es una capacidad de agente avanzada que requiere más infraestructura.',
    },
    {
      q: '¿Qué hace CoWork que Claude for Chrome no puede hacer solo?',
      opts: [
        'CoWork puede leer páginas web más rápido',
        'CoWork orquesta flujos del sistema operativo: mover archivos, abrir apps, gestionar carpetas — cosas que van más allá del navegador',
        'CoWork tiene acceso a LinkedIn sin límites de rate',
        'CoWork funciona en dispositivos móviles',
      ],
      correct: 1,
      exp: 'Chrome maneja la web; CoWork maneja el OS. CoWork puede mover archivos entre carpetas, abrir aplicaciones de escritorio, automatizar workflows del sistema operativo — cosas que un agente de browser no puede hacer. Combinados forman el stack completo de automatización de desktop.',
    },
  ],
  challenge: {
    title: 'Reto 5.0a — Primera investigación automática con Claude en Chrome',
    desc: 'Usa Claude for Chrome para completar una tarea que normalmente harías manualmente.',
    steps: [
      'Instala Claude for Chrome desde la Chrome Web Store. Inicia sesión con tu cuenta claude.ai.',
      'Activa Claude en una página que visites regularmente. Pídele que lea y resuma el contenido: "Dame los 3 puntos clave de esta página."',
      'Pídele que navegue: "Ve a [URL de competidor o proveedor] y extrae los precios del plan Pro."',
      'Prueba un flujo multi-paso: "Busca en Google [tu tema], abre los 3 primeros resultados y dame un resumen comparativo."',
      'Identifica una tarea de investigación recurrente tuya y diseña el prompt que la automatiza con Claude in Chrome.',
    ],
    checkpoint: 'Completo cuando terminas el flujo multi-paso (paso 4) y obtienes un resumen que antes tardabas 20+ minutos en armar manualmente.',
  },
}

// ─── 4. ADOBE FOR CREATIVITY (mod7, 2.5) ─────────────────────────────────────
export const ADOBE_LESSON = {
  id: 'mod7_adobe',
  num: '2.5',
  title: 'Adobe for Creativity: 50+ herramientas creativas desde un prompt',
  duration: '25 min',
  xpReward: 70,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'El 28 de abril de 2026, Adobe y Anthropic lanzaron el Adobe for Creativity Connector: Claude con acceso directo a más de 50 herramientas de Photoshop, Lightroom, Illustrator, Premiere, InDesign, Firefly y Adobe Express. Ya no abres las apps por separado — describes lo que quieres y Claude decide qué herramienta usar, en qué orden, con qué parámetros.',
    },
    {
      type: 'concept',
      title: 'Instalación y activación',
      body: 'Instalación en 3 pasos:\n\n1. Abre Claude Desktop, claude.ai, o CoWork. Ve a Customize → Connectors.\n2. Busca "Adobe for Creativity" e instala. Necesitas cuenta Adobe (cuenta gratuita da acceso a Firefly y Express; Creative Cloud completo desbloquea Photoshop, Lightroom, Illustrator, Premiere, InDesign).\n3. Conecta tu cuenta Adobe. El conector queda activo en todas tus conversaciones.\n\nOnce installed, Claude tiene acceso a las herramientas de todas las apps de Adobe que tengas en tu plan. El conector funciona en claude.ai (web), Claude Desktop para Mac y Windows, y en CoWork.',
      highlight: 'No necesitas tener las apps de Adobe abiertas — Claude las llama directamente vía API. Si tienes solo cuenta gratuita de Adobe, empiezas con Firefly y Express.',
    },
    {
      type: 'cards',
      title: 'Lo que Claude puede hacer en cada app de Adobe',
      items: [
        {
          name: 'Photoshop',
          tag: 'Edición de imágenes',
          color: '#001E36',
          desc: 'Retoque de retratos, expansión de frames con Generative Expand, reencuadrado para diferentes formatos (Instagram, 16:9, print), ajustes de color y exposición, eliminación de objetos.',
        },
        {
          name: 'Lightroom',
          tag: 'Edición fotográfica',
          color: '#001A72',
          desc: 'Aplicar presets, ajustar exposición/balance de blancos/saturación, ediciones masivas a carpetas, exportar en múltiples formatos y resoluciones.',
        },
        {
          name: 'Illustrator + InDesign',
          tag: 'Diseño vectorial y print',
          color: '#330000',
          desc: 'Crear logotipos, iconos, infografías, adaptar assets a diferentes tamaños, generar layouts, actualizar texto en plantillas, preparar para imprenta.',
        },
        {
          name: 'Firefly + Express',
          tag: 'IA generativa',
          color: '#EB1000',
          desc: 'Generar imágenes desde texto, crear variaciones, generar fondos. Adobe Firefly usa solo contenido licenciado — sin riesgos de copyright para uso comercial.',
        },
        {
          name: 'Premiere',
          tag: 'Video',
          color: '#EA77FF',
          desc: 'Cortar clips, añadir transiciones, aplicar color grading, exportar para plataformas específicas (YouTube, Instagram Reels, TikTok).',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Flujos completos — el poder real del connector',
      body: 'El poder no está en usar una app a la vez — está en orquestar flujos que cruzan múltiples apps:\n\nFlujo de boda completo: "Tengo 800 fotos RAW. Selecciona las 50 mejores por calidad técnica, aplica mis presets de Lightroom, retoca los 10 retratos principales en Photoshop, exporta en 3 formatos: web (1500px JPEG), impresión (TIF) y redes (cuadrado 1080px)."\n\nFlujo de contenido para redes: "Toma esta foto de producto, genera 5 variaciones de fondo con Firefly, añade logo e información de precio con Express, exporta para Instagram Feed, Stories y LinkedIn."\n\nAntes, ese flujo requería abrir 4 apps, ejecutar cada paso manualmente y transferir archivos. Ahora es un solo prompt.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Qué necesitas para usar el Adobe Connector con Photoshop específicamente?',
      opts: [
        'Solo cuenta gratuita de Adobe — da acceso a todas las apps',
        'Una cuenta Claude Max mínimo, sin requisitos de Adobe',
        'Un plan Adobe Creative Cloud que incluya Photoshop, más la cuenta Claude conectada',
        'Photoshop instalado localmente y Adobe API activada manualmente',
      ],
      correct: 2,
      exp: 'El connector da acceso a las apps de Adobe que tienes en tu plan. Para Photoshop, necesitas un plan Creative Cloud que lo incluya. Con cuenta Adobe gratuita tienes Firefly y Express. La combinación cuenta Adobe gratuita + Claude da acceso a generación de imágenes sin costo de Creative Cloud.',
    },
    {
      q: '¿Por qué Adobe Firefly es especialmente seguro para uso comercial?',
      opts: [
        'Firefly produce las imágenes más realistas del mercado',
        'Firefly usa solo contenido licenciado en su entrenamiento — sin riesgos de copyright para uso comercial',
        'Firefly es gratuito sin límites para todos los usuarios de Claude',
        'Firefly es el único generador de imágenes disponible dentro de Claude',
      ],
      correct: 1,
      exp: 'Adobe entrenó Firefly exclusivamente con contenido licenciado (stock de Adobe, dominio público, contenido con permiso explícito). Para uso profesional donde el contenido se va a vender o publicar, esto elimina el riesgo legal de que el contenido infrinja copyright de artistas o fotógrafos.',
    },
    {
      q: '¿Cuál es el caso de uso más poderoso del Adobe Connector?',
      opts: [
        'Usar una sola app más rápido que abrirla manualmente',
        'Reemplazar el costo de suscripción a Creative Cloud',
        'Orquestar flujos completos que cruzan múltiples apps de Adobe en un solo prompt',
        'Generar assets de baja calidad para bocetos rápidos',
      ],
      correct: 2,
      exp: 'El poder está en la orquestación multi-app: un prompt puede lanzar un flujo que pase por Lightroom, Photoshop, Firefly y Express. Antes requería abrir 4 apps, ejecutar cada paso manualmente y transferir archivos entre ellas. Ahora es un solo prompt que Claude ejecuta secuencialmente.',
    },
  ],
  challenge: {
    title: 'Reto 2.5 — Tu primer flujo multi-app con Adobe for Creativity',
    desc: 'Completa un flujo real de edición usando el connector.',
    steps: [
      'Instala el Adobe for Creativity Connector: Claude Desktop → Customize → Connectors → "Adobe for Creativity" → instala → conecta tu cuenta Adobe.',
      'Elige 5-10 fotos de una sesión reciente (o cualquier conjunto de imágenes tuyas).',
      'Pide a Claude que seleccione las mejores por calidad técnica: foco, exposición y composición.',
      'Si tienes Lightroom: "Aplica ajustes de exposición y color para que tengan coherencia visual entre ellas."',
      'Si tienes Firefly o Express: "Genera una variación de fondo alternativo para la mejor foto y añade mi logo en la esquina inferior derecha."',
      'Exporta el resultado en el formato que necesitas con un solo prompt.',
    ],
    checkpoint: 'Completo cuando terminas un flujo de al menos 2 pasos que cruce 2 apps de Adobe sin abrir las apps manualmente.',
  },
}

// ─── 5. ANT CLI (mod2, 3.8) ───────────────────────────────────────────────────
export const ANT_CLI_LESSON = {
  id: 'mod2_l8',
  num: '3.8',
  title: 'ant CLI: toda la API de Claude desde tu terminal',
  duration: '20 min',
  xpReward: 65,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'ant es el CLI oficial de Anthropic para la API de Claude: cualquier endpoint de la plataforma, en una sola línea de terminal. Lanzado el 8 de abril de 2026 junto con Managed Agents, permite crear, configurar y correr agentes en la nube sin escribir código Python ni pegar JSON en curl. Para developers que viven en la terminal, ant cambia la velocidad de iteración con la API.',
    },
    {
      type: 'concept',
      title: 'Instalación y primeros pasos',
      body: 'Instalación con Homebrew (Mac):\nbrew install anthropics/tap/ant\n\nO con Go:\ngo install github.com/anthropics/anthropic-cli/cmd/ant@latest\n\nConfigura tu API key:\nant config set api_key sk-ant-TU_KEY\n\nPrimera llamada:\nant messages create --model claude-sonnet-4-6 --message "¿Cuál es la diferencia entre MCP y herramientas de función?"\n\nant escribe el resultado a stdout — puedes pipear hacia otros comandos, redirigir a archivos, o integrar en scripts de shell.',
      highlight: 'ant requiere una API key de claude.ai/settings/keys. No usa el mismo sistema de auth que Claude Code — es acceso directo a la API de la plataforma Claude.',
    },
    {
      type: 'cards',
      title: 'Comandos principales de ant',
      items: [
        {
          name: 'ant messages create',
          tag: 'API core',
          color: '#6366F1',
          desc: 'Llama directamente a la Messages API. Soporta modelos, system prompts, attachments, tools. La forma más directa de probar prompts en terminal sin código.',
        },
        {
          name: 'ant agents create / run',
          tag: 'Managed Agents',
          color: '#8B5CF6',
          desc: 'Crea y lanza un Managed Agent en la nube. Claude Platform provee el sandbox, herramientas (bash, archivos, web) y el runtime. Sin infraestructura propia.',
        },
        {
          name: 'ant agents list / logs',
          tag: 'Observabilidad',
          color: '#10B981',
          desc: 'Lista sesiones activas, ve logs en tiempo real, inspecciona estado de ejecución. Reemplaza tener que abrir el dashboard de Claude Platform para monitorear agentes.',
        },
        {
          name: 'ant resources deploy',
          tag: 'Versioning',
          color: '#F59E0B',
          desc: 'Versiona y despliega recursos de la API (system prompts, configs de agentes) como archivos YAML en tu repo. Trata los recursos de Claude como Infrastructure as Code.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'ant + CI/CD: Claude en tu pipeline de GitHub Actions',
      body: 'El caso más poderoso es combinar ant con automatización de scripts:\n\nEjemplo — code review en CI:\ncat src/api/auth.js | ant messages create --model claude-sonnet-4-6 --message "Dame los 3 problemas de seguridad más críticos de este archivo"\n\nEsto corre en GitHub Actions como step de CI — cada PR recibe un security analysis sin configurar infraestructura adicional.\n\nEjemplo — Managed Agent en terminal:\nant agents create --name "code-reviewer" --model claude-sonnet-4-6 --tool bash --tool files\nant agents run code-reviewer --message "Revisa src/api/ y dame los problemas de seguridad críticos"\n\nEl agente corre en la infraestructura de Anthropic — sandbox seguro, sin Docker, sin gestionar workers.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia entre ant CLI y Claude Code?',
      opts: [
        'Son lo mismo — ant es el nombre técnico de Claude Code',
        'Claude Code es un editor; ant es una alternativa de terminal para el mismo propósito',
        'ant es el CLI para la API de la plataforma; Claude Code es el agente de codificación con su propio sistema de auth y workflow',
        'ant solo funciona en Linux; Claude Code en todos los OS',
      ],
      correct: 2,
      exp: 'Son herramientas distintas. Claude Code es un agente de codificación interactivo — vive en tu codebase, tiene hooks, worktrees, CLAUDE.md, optimizado para desarrollo de software. ant CLI es acceso directo a la API de la plataforma Claude — ideal para scripts, automatización de CI/CD, y gestión de Managed Agents. Se complementan, no compiten.',
    },
    {
      q: '¿Qué hace que ant sea especialmente útil en pipelines de CI/CD?',
      opts: [
        'ant puede hacer deploy directo a producción sin revisión humana',
        'ant puede pipear su output a otros comandos de shell, integrándose en workflows existentes',
        'ant tiene menor latencia que la API directa',
        'ant no requiere API key — usa credenciales de GitHub automáticamente',
      ],
      correct: 1,
      exp: 'ant escribe a stdout, lo que lo hace composable con el ecosistema Unix: puedes hacer `ant messages create ... | grep "ERROR"` o `ant agents run ... >> report.md`. En CI/CD esto significa integrar Claude en cualquier workflow con una sola línea — sin escribir código wrapper.',
    },
    {
      q: '¿Qué son los "resources" que se pueden versionar con `ant resources deploy`?',
      opts: [
        'Los archivos de código de tu proyecto que Claude revisa',
        'System prompts, configs de agentes y otros recursos de la API — tratados como Infrastructure as Code en tu repo',
        'Las imágenes y archivos adjuntos que envías a Claude',
        'Los logs de ejecución de Managed Agents',
      ],
      correct: 1,
      exp: '`ant resources deploy` permite versionar recursos de la plataforma Claude — system prompts de producción, configuraciones de agentes, definiciones de herramientas — como archivos YAML en tu repo. Los cambios al comportamiento de tu agente de producción pasan por el mismo review process que el código.',
    },
  ],
  challenge: {
    title: 'Reto 3.8 — Instala ant y haz tu primera llamada a la API',
    desc: 'Instala ant CLI y ejecuta un flujo real desde el terminal.',
    steps: [
      'Instala ant: brew install anthropics/tap/ant (Mac) o ve a github.com/anthropics/anthropic-cli para otras plataformas.',
      'Obtén tu API key en claude.ai → Settings → API Keys. Configura ant: ant config set api_key sk-ant-TU_KEY.',
      'Haz tu primera llamada: ant messages create --model claude-sonnet-4-6 --message "Lista los 5 principios del Context Engineering en bullet points".',
      'Prueba piping: ant messages create --model claude-sonnet-4-6 --message "Dame 10 ideas de posts sobre fotografía de bodas" | head -20.',
      'Si tienes un proyecto: cat src/main.js | ant messages create --model claude-sonnet-4-6 --message "Revisa este archivo y dame los 3 problemas más críticos".',
      'Crea un alias en tu .zshrc: alias ai="ant messages create --model claude-sonnet-4-6 --message" para correr ai "tu pregunta" desde cualquier lugar.',
    ],
    checkpoint: 'Completo cuando ejecutas al menos 2 llamadas exitosas desde terminal y tienes ant configurado con tu API key. Si el alias funciona, has mejorado tu setup de productividad de forma permanente.',
  },
}

// ─── 6. CHECKPOINTS Y GITHUB ACTIONS (mod2, 3.9) ─────────────────────────────
export const CHECKPOINTS_GITHUB_LESSON = {
  id: 'mod2_l9',
  num: '3.9',
  title: 'Checkpoints y GitHub Actions: Claude Code en CI/CD',
  duration: '25 min',
  xpReward: 70,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'Claude Code tiene dos features que cambian cómo trabajas en sesiones largas y cómo integras IA en el workflow de equipo: Checkpoints (rollback instantáneo a cualquier punto de la sesión) y GitHub Actions (Claude revisando y editando código en tus PRs automáticamente). Juntos cubren los dos escenarios donde el riesgo de dejar que Claude escriba código era más alto.',
    },
    {
      type: 'concept',
      title: 'Checkpoints: rollback sin miedo',
      body: 'Claude Code crea un checkpoint automáticamente antes de ejecutar cada acción significativa. Si Claude toma una decisión que no te gusta o empeora algo, puedes volver al estado exactamente anterior en segundos.\n\nCómo hacer rollback:\n- Presiona Esc dos veces rápido (⎋⎋) durante una sesión\n- O escribe /rewind en cualquier momento\n- Claude muestra listado de checkpoints con timestamps y descripción de qué cambió\n- Elige el punto al que volver y Claude restaura el estado de todos los archivos modificados\n\nDónde se guardan: ~/.claude/file-history/<sessionId>/\n\nImportante: los checkpoints son por sesión. Al terminar una sesión e iniciar una nueva, los checkpoints anteriores no están disponibles. Para puntos de retorno permanentes, usa commits de Git.',
      highlight: 'Caso de uso #1: Claude modifica 5 archivos, algo se rompe, no sabes cuál cambio causó el problema. En lugar de un git diff laborioso, haces /rewind y estás de vuelta al estado anterior en 3 segundos.',
    },
    {
      type: 'concept',
      title: 'GitHub Actions: Claude en tu pipeline de CI/CD',
      body: 'El repo oficial anthropics/claude-code-action en GitHub Marketplace tiene dos acciones:\n\n1. Claude Code Base Action: agente de propósito general para PRs e issues. Puede responder preguntas, revisar código, sugerir mejoras, y hacer commits de fixes desde un comentario en el PR.\n\n2. Claude Code Background Tasks: Claude corre en background en tu CI pipeline, ejecuta análisis largos (code review completo, detección de security issues, generación de documentación) sin bloquear el merge.\n\nActivación: escribe @claude en cualquier comentario del PR y Claude responde. @claude fix this → Claude hace commit de la corrección directamente.\n\nSetup: archivo .github/workflows/claude.yml + ANTHROPIC_API_KEY como secret del repo. Toma menos de 10 minutos.',
      highlight: 'Claude en GitHub Actions tiene acceso al diff completo del PR, al historial de comentarios, y puede hacer push directamente al branch.',
    },
    {
      type: 'cards',
      title: 'Workflows validados con Claude en CI/CD',
      items: [
        {
          name: 'Code Review automático',
          tag: 'PRs',
          color: '#6366F1',
          desc: 'Claude revisa cada PR nuevo: detecta bugs, violaciones de estilo, problemas de seguridad. Los comentarios aparecen antes de que el revisor humano llegue — el reviewer llega a un PR pre-filtrado.',
        },
        {
          name: 'Fix desde comentario',
          tag: 'Developer UX',
          color: '#10B981',
          desc: '"@claude fix the null check in line 47" → Claude hace commit de la corrección. El developer no tiene que pullear localmente, hacer el fix y pushear de nuevo.',
        },
        {
          name: 'Generación de tests',
          tag: 'Quality',
          color: '#F59E0B',
          desc: '"@claude write tests for this function" → Claude genera tests unitarios basados en el código del PR y los agrega al branch, cubriendo edge cases que el developer podría haber omitido.',
        },
        {
          name: 'Changelog automático',
          tag: 'Release',
          color: '#8B5CF6',
          desc: 'En cada merge a main, Claude genera el changelog basado en los commits y PRs del ciclo. No más redactar release notes manualmente.',
        },
      ],
    },
  ],
  quiz: [
    {
      q: '¿Cuánto tiempo están disponibles los checkpoints de una sesión de Claude Code?',
      opts: [
        'Permanentemente — puedes acceder a checkpoints de sesiones de hace semanas',
        'Solo durante la sesión activa — al iniciar una nueva sesión los anteriores no están disponibles',
        '24 horas después de cerrar la sesión',
        '7 días — el mismo período que los commits de Git',
      ],
      correct: 1,
      exp: 'Los checkpoints son por sesión. Al terminar la sesión e iniciar una nueva, los checkpoints anteriores no están disponibles. Para puntos de retorno permanentes, usa commits de Git — que además son compartibles con el equipo.',
    },
    {
      q: '¿Qué necesitas configurar para activar Claude Code Actions en GitHub?',
      opts: [
        'Solo instalar la extensión en GitHub Marketplace — no requiere configuración adicional',
        'ANTHROPIC_API_KEY como secret del repo y un archivo en .github/workflows/',
        'Una integración OAuth especial con tu cuenta claude.ai',
        'Solo funciona en repos privados de GitHub Enterprise',
      ],
      correct: 1,
      exp: 'Para activar Claude en GitHub Actions necesitas: (1) agregar ANTHROPIC_API_KEY como secret en Settings → Secrets del repo, y (2) crear .github/workflows/claude.yml usando la action de Anthropic. Una vez configurado, @claude funciona en comentarios de PRs e issues.',
    },
    {
      q: '¿Cuál es el atajo para hacer rollback a un checkpoint anterior en Claude Code?',
      opts: [
        'Ctrl+Z repetido hasta el punto deseado',
        'git stash antes de cada sesión',
        'Esc dos veces rápido (⎋⎋) o el comando /rewind',
        '/checkpoint list seguido de /checkpoint restore <id>',
      ],
      correct: 2,
      exp: 'Presionar Esc dos veces o escribir /rewind muestra el listado de checkpoints disponibles. Seleccionas el punto y Claude restaura el estado de todos los archivos modificados. Es el rollback más rápido disponible — más rápido que git stash y sin recordar hash de commit.',
    },
  ],
  challenge: {
    title: 'Reto 3.9 — Checkpoints en sesión real y setup de GitHub Action',
    desc: 'Prueba Checkpoints y configura Claude en un repo de GitHub.',
    steps: [
      'Inicia una sesión de Claude Code en cualquier proyecto tuyo. Pídele que haga un cambio a un archivo existente.',
      'Después de que Claude haga el cambio, escribe /rewind. Observa la lista de checkpoints disponibles.',
      'Selecciona el checkpoint anterior al cambio y verifica que el archivo volvió a su estado original.',
      'Para GitHub Actions: ve a tu repo → Settings → Secrets → New secret → agrega ANTHROPIC_API_KEY.',
      'Crea el archivo .github/workflows/claude.yml usando la plantilla de github.com/anthropics/claude-code-action.',
      'Abre un PR de prueba y escribe "@claude revisa este cambio y dame feedback" en los comentarios.',
    ],
    checkpoint: 'Dos partes. Checkpoints: completo cuando haces /rewind exitosamente y restauras el estado de un archivo. GitHub Actions: completo cuando @claude responde en el PR.',
  },
}

// ─── 7. MEMORY API (mod4, 6.8) ────────────────────────────────────────────────
export const MEMORY_API_LESSON = {
  id: 'mod4_l8',
  num: '6.8',
  title: 'Memory API: agentes con memoria persistente entre sesiones',
  duration: '25 min',
  xpReward: 70,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'En beta pública desde el 23 de abril de 2026, la Memory API de Claude permite que tus agentes guarden y recuperen información entre sesiones de forma estructurada. A diferencia de Chat Memory (para el usuario en claude.ai), la Memory API es para developers: acceso programático, control total sobre qué se guarda, audit logging, y soporte para múltiples agentes compartiendo el mismo espacio de memoria.',
    },
    {
      type: 'comparison',
      title: 'Chat Memory vs Memory API — cuándo usar cada una',
      bad: {
        label: 'Chat Memory (usuario)',
        points: [
          'Automática — Claude decide qué guardar',
          'Solo accesible desde claude.ai (Settings → Memory)',
          'Para uso personal del usuario final',
          'Sin control programático ni audit log',
          'No compartible entre diferentes agentes',
        ],
      },
      good: {
        label: 'Memory API (developer)',
        points: [
          'Programática — tú decides qué guardar y cuándo',
          'Accesible via API con autenticación',
          'Para builders que construyen productos con Claude',
          'Audit log completo de lectura y escritura',
          'Múltiples agentes pueden compartir el mismo espacio',
        ],
      },
    },
    {
      type: 'concept',
      title: 'Arquitectura de la Memory API',
      body: 'La Memory API usa almacenamiento en filesystem — archivos estructurados que Claude puede leer y escribir vía API. Cada entrada de memoria tiene:\n- content: el contenido que se guarda\n- key: identificador único para recuperarla\n- scope: visibilidad (user-level, session-level, agent-level)\n- metadata: timestamp, agente que escribió, tags\n\nFlujo de un agente con memoria:\n1. Al inicio de sesión: agente recupera memorias relevantes\n2. Durante la sesión: agente escribe nuevas memorias cuando aprende algo nuevo\n3. Al final de la sesión: síntesis de lo aprendido se guarda para la próxima sesión\n\nAudit logging: cada lectura y escritura queda registrada con timestamp, agente ID, y contenido.',
      highlight: 'Multi-agent memory: configura que un agente de onboarding escriba el perfil del usuario y el agente de soporte lo lea. Los agentes comparten lo que aprenden sin que el usuario repita información.',
    },
    {
      type: 'cards',
      title: 'Casos de uso en producción',
      items: [
        {
          name: 'Agente de soporte personalizado',
          tag: 'SaaS',
          color: '#6366F1',
          desc: 'El agente recuerda el plan del usuario, bugs que ya reportó, preferencias de comunicación, e historial de resoluciones. En la segunda llamada, Claude ya sabe quién eres y qué has tenido.',
        },
        {
          name: 'Coach de productividad',
          tag: 'Consumer',
          color: '#10B981',
          desc: 'El agente recuerda metas, progreso semanal, qué estrategias funcionaron y cuáles no. Cada sesión continúa donde la anterior terminó — sin repetir el onboarding.',
        },
        {
          name: 'Asistente de ventas',
          tag: 'CRM',
          color: '#F59E0B',
          desc: 'Recuerda cada interacción con cada prospecto: qué se discutió, objeciones, próximos pasos. El agente entra a cada llamada con contexto completo sin que el vendedor repita nada.',
        },
        {
          name: 'Sistema de investigación',
          tag: 'Knowledge',
          color: '#8B5CF6',
          desc: 'Multi-agente: agente de búsqueda escribe hallazgos, agente de síntesis los lee y genera insights, agente de escritura usa los insights para el draft. Memoria compartida entre los 3.',
        },
      ],
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la diferencia más importante entre Chat Memory y Memory API para un developer?',
      opts: [
        'Chat Memory es más precisa — usa mejor compresión',
        'Memory API permite control programático: tú decides qué guardar, con audit log y acceso multi-agente',
        'Chat Memory funciona offline; Memory API requiere conexión constante',
        'Memory API solo está disponible en el plan Enterprise',
      ],
      correct: 1,
      exp: 'La distinción clave es el control. Chat Memory es automática y opaca — Claude decide cuándo y qué guardar. Memory API es programática y transparente — el developer controla cada lectura y escritura, hay audit log completo, y múltiples agentes pueden compartir el mismo espacio. Para builders construyendo productos, solo Memory API da el nivel de control necesario.',
    },
    {
      q: '¿Qué es el "scope" en una entrada de la Memory API?',
      opts: [
        'El tamaño máximo en tokens de la memoria guardada',
        'La visibilidad de la memoria: user-level, session-level, o agent-level — controla quién puede acceder',
        'El tiempo de retención antes de que se borre automáticamente',
        'El modelo de Claude que puede leer esa memoria',
      ],
      correct: 1,
      exp: 'El scope controla la visibilidad. User-level: cualquier agente que sirva a ese usuario puede leerla (preferencias, historial general). Session-level: solo durante la sesión activa. Agent-level: privada a un agente específico. Configurar el scope correcto es crucial para sistemas multi-agente.',
    },
    {
      q: '¿Qué habilita el multi-agent memory sharing en un pipeline de investigación?',
      opts: [
        'Que todos los agentes tengan el mismo system prompt',
        'Que los agentes compartan la misma API key',
        'Que un agente (búsqueda) escriba hallazgos que otro agente (síntesis) lee directamente, sin transferencia manual',
        'Que los agentes se ejecuten en el mismo servidor para reducir latencia',
      ],
      correct: 2,
      exp: 'Sin Memory API, el output del agente de búsqueda tiene que pasar por el usuario o un orquestador que copia el output como input. Con Memory API, el agente de búsqueda escribe directamente en el espacio compartido y el agente de síntesis lo lee cuando lo necesita — coordinación sin intermediarios manuales.',
    },
  ],
  challenge: {
    title: 'Reto 6.8 — Diseña la arquitectura de memoria de tu agente',
    desc: 'Planea qué guardaría y cómo usaría Memory API un agente real tuyo.',
    steps: [
      'Elige un agente que hayas construido o que quieras construir (soporte, investigación, productividad, ventas).',
      'Lista qué información debería recordar entre sesiones: preferencias, historial, estados de procesos, hallazgos.',
      'Para cada tipo de información, asigna un scope: user-level, session-level, o agent-level.',
      'Diseña el flujo: ¿cuándo escribe el agente? ¿Al inicio recupera memoria? ¿Hace síntesis al final?',
      'Identifica qué interacciones requieren audit log por regulación o compliance.',
      'Si tienes acceso a la Memory API beta (platform.anthropic.com), implementa el caso más simple: guardar una preferencia y recuperarla en la siguiente sesión.',
    ],
    checkpoint: 'Completo cuando tienes el diseño documentado: qué guarda, con qué scope, cuándo lee y escribe. Si además implementas el paso 6, tienes un agente con memoria real funcionando.',
  },
}

// ─── 8. CLAUDE SECURITY (mod_safety, 8.5) ─────────────────────────────────────
export const CLAUDE_SECURITY_LESSON = {
  id: 'mod_safety_l5',
  num: '8.5',
  title: 'Claude Security: escaneo de vulnerabilidades con IA en tu código',
  duration: '20 min',
  xpReward: 65,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'El 30 de abril de 2026, Anthropic lanzó Claude Security en beta pública: análisis de vulnerabilidades en código usando Opus 4.7. No es un linter ni un SAST estático — Claude lee y entiende el código como un auditor de seguridad experto, detecta vulnerabilidades con nivel de confianza por hallazgo, y genera patches concretos. Para developers que no son especialistas en seguridad, es tener un security reviewer en cada commit.',
    },
    {
      type: 'concept',
      title: 'Cómo funciona Claude Security',
      body: 'Claude Security analiza tu código con Opus 4.7 entrenado en análisis de seguridad. Para cada análisis:\n\n1. Envías el código (archivo, función, o repo completo)\n2. Claude analiza: flujo de datos, inputs no sanitizados, permisos excesivos, dependencias vulnerables, lógica de autenticación, manejo de secretos\n3. Recibes: lista de vulnerabilidades ordenadas por severidad, con nivel de confianza (High/Medium/Low) por hallazgo\n4. Para cada vulnerabilidad: explicación del riesgo, vector de ataque específico, y patch sugerido\n\nAcceso: platform.claude.com → Security → Scan. También disponible via API para integración en CI/CD.',
      highlight: 'El nivel de confianza por hallazgo es clave para priorizar. High confidence + Critical severity = fix inmediato. Low confidence + Low severity = revisar manualmente, puede ser falso positivo.',
    },
    {
      type: 'cards',
      title: 'Tipos de vulnerabilidades que detecta',
      items: [
        {
          name: 'Injection attacks',
          tag: 'OWASP A03',
          color: '#EF4444',
          desc: 'SQL injection, command injection, LDAP injection. Claude traza el flujo del input del usuario hasta la query o comando y detecta dónde falta sanitización o parametrización.',
        },
        {
          name: 'Auth & session flaws',
          tag: 'OWASP A07',
          color: '#F59E0B',
          desc: 'Tokens débiles, sesiones sin expiración, verificación incorrecta de JWT, OAuth mal configurado. Detecta patrones que parecen correctos pero tienen gaps sutiles.',
        },
        {
          name: 'Secrets en código',
          tag: 'Secret exposure',
          color: '#8B5CF6',
          desc: 'API keys hardcodeadas, credenciales en strings, variables de entorno expuestas en logs. Detecta secretos aunque estén ofuscados o en comentarios.',
        },
        {
          name: 'Dependencias vulnerables',
          tag: 'OWASP A06',
          color: '#6366F1',
          desc: 'Versiones de paquetes con CVEs conocidos. Claude analiza tu package.json, requirements.txt o Gemfile y cruza contra la base de vulnerabilidades conocidas.',
        },
        {
          name: 'Prompt injection en código',
          tag: 'AI-specific',
          color: '#10B981',
          desc: 'Específico para código que construye prompts dinámicamente: detecta dónde inputs externos pueden manipular el comportamiento de tu agente de Claude.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Integración en tu workflow',
      body: 'Claude Security encaja en tres puntos del workflow:\n\n1. Pre-commit: corres el scan localmente antes de hacer commit. Bloqueas vulnerabilidades antes de que entren al repo.\n\n2. CI/CD: integras en GitHub Actions. Cada PR recibe un security report antes del merge.\n\n3. Security audits periódicos: scan completo del repositorio mensualmente o antes de releases importantes.\n\nLimitaciones actuales (beta): mejor cobertura en Python, JavaScript/TypeScript y Go. Ruby y PHP tienen cobertura menor. No reemplaza una auditoría profesional para sistemas críticos — complementa, no sustituye.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Qué significa un hallazgo con "High confidence" en Claude Security?',
      opts: [
        'La vulnerabilidad es de severidad crítica',
        'Claude está muy seguro de que el hallazgo es real — baja probabilidad de falso positivo',
        'El patch sugerido funciona en el 100% de los casos',
        'Anthropic verificó manualmente ese hallazgo',
      ],
      correct: 1,
      exp: 'El nivel de confianza (High/Medium/Low) indica qué tan seguro está Claude de que el hallazgo es real y no un falso positivo. La severidad (Critical/High/Medium/Low) indica el impacto si fuera explotada. Son dimensiones independientes — un hallazgo puede ser High confidence pero Low severity, o Low confidence pero Critical severity.',
    },
    {
      q: '¿Cuál es la vulnerabilidad específica de IA que Claude Security detecta?',
      opts: [
        'Model poisoning — ataques al modelo ML subyacente',
        'Prompt injection en código que construye prompts dinámicamente con inputs externos',
        'Hallucination injection — inputs que hacen a Claude inventar respuestas',
        'Token theft — robo de tokens de API de Claude',
      ],
      correct: 1,
      exp: 'Claude Security detecta prompt injection específicamente en código que construye prompts dinámicamente. Si tu agente hace `prompt = f"Analiza esto: {user_input}"` sin sanitizar user_input, Claude detecta ese patrón como vulnerable. Esta categoría es única de Claude Security vs herramientas de seguridad tradicionales.',
    },
    {
      q: '¿En qué lenguajes tiene mejor cobertura Claude Security en su beta actual?',
      opts: [
        'Solo JavaScript — es el único con soporte completo',
        'Python, JavaScript/TypeScript y Go tienen mejor cobertura; Ruby y PHP tienen cobertura menor',
        'Todos los lenguajes tienen cobertura idéntica',
        'Solo lenguajes compilados: Go, Rust, C++',
      ],
      correct: 1,
      exp: 'En la beta actual, Python, JavaScript/TypeScript y Go tienen mejor cobertura. Ruby y PHP tienen más falsos negativos (vulnerabilidades no detectadas). Si tu stack principal es Ruby o PHP, complementa con herramientas SAST especializadas.',
    },
  ],
  challenge: {
    title: 'Reto 8.5 — Escanea un proyecto real con Claude Security',
    desc: 'Corre tu primer security scan y actúa sobre los hallazgos.',
    steps: [
      'Ve a platform.claude.com → Security. Si no ves la opción, únete a la beta desde la misma página.',
      'Elige el archivo más expuesto de un proyecto tuyo — el que maneja inputs de usuarios o credenciales.',
      'Pega el código en el scanner y corre el análisis.',
      'Revisa los hallazgos por severidad y confianza. Elige el de mayor severidad + mayor confianza.',
      'Lee el vector de ataque explicado: ¿entiendes cómo alguien podría explotar esa vulnerabilidad?',
      'Aplica el patch sugerido por Claude y verifica que el código sigue funcionando.',
    ],
    checkpoint: 'Completo cuando: (1) encuentras al menos 1 hallazgo real en tu código, y (2) aplicas el patch sugerido. Si encontraste algo que genuinamente no habías visto antes, ese es el valor de la herramienta.',
  },
}

// ─── 9. AWS PLATFORM (mod6, 9.0c) ─────────────────────────────────────────────
export const AWS_PLATFORM_LESSON = {
  id: 'mod6_aws',
  num: '9.0c',
  title: 'Claude en AWS: despliegue empresarial con IAM y CloudTrail',
  duration: '20 min',
  xpReward: 65,
  videoId: 'NO_VIDEO',
  videoCaption: 'Animación interactiva incluida',
  content: [
    {
      type: 'intro',
      text: 'Desde el 11 de mayo de 2026, Claude Platform corre nativamente en AWS con paridad completa de features — Managed Agents, ejecución de código, Skills — todo autenticado via AWS IAM y con logging en CloudTrail. Para empresas con políticas estrictas sobre dónde procesan datos, esto elimina el principal obstáculo para adoptar Claude en producción.',
    },
    {
      type: 'concept',
      title: 'Cómo funciona Claude Platform on AWS',
      body: 'La integración funciona via Amazon Bedrock — el servicio de AWS para modelos fundacionales. Claude aparece en el catálogo de modelos de Bedrock y se accede exactamente como accedes a otros servicios AWS:\n\n- Autenticación via AWS IAM — las mismas credenciales y roles que usas para S3, Lambda, o DynamoDB\n- Políticas de permisos en IAM — qué usuarios/roles pueden llamar a qué modelos\n- Logging automático en CloudTrail — cada llamada a Claude queda registrada: quién llamó, cuándo, qué modelo, cuántos tokens\n- VPC Integration — puedes llamar a Claude desde dentro de tu VPC sin que el tráfico salga a internet público\n- Facturación unificada en tu cuenta AWS — Claude aparece en el mismo invoice que tus otros servicios',
      highlight: 'Para empresas con SOC 2, ISO 27001, o regulaciones HIPAA/GDPR: Claude en AWS hereda los compliance certifications de AWS. Anthropic certifica que los datos procesados en la región seleccionada no salen de esa región.',
    },
    {
      type: 'cards',
      title: 'Por qué enterprises eligen Claude en AWS vs API directa',
      items: [
        {
          name: 'IAM Integration',
          tag: 'Seguridad',
          color: '#EF4444',
          desc: 'Control granular: qué equipos pueden usar qué modelos, límites de tokens por rol, restricciones de horario. Todo en el sistema IAM que el equipo de seguridad ya conoce y audita.',
        },
        {
          name: 'CloudTrail Logging',
          tag: 'Audit',
          color: '#F59E0B',
          desc: 'Cada llamada a Claude queda en CloudTrail: timestamp, usuario, modelo, tokens. Para compliance y auditorías, trazabilidad completa sin infraestructura adicional.',
        },
        {
          name: 'Facturación unificada',
          tag: 'Finance',
          color: '#6366F1',
          desc: 'Claude aparece en el mismo invoice AWS que el resto de la infraestructura. El equipo de finanzas gestiona una sola cuenta. Claude aparece en AWS Cost Explorer.',
        },
        {
          name: 'Data residency',
          tag: 'Compliance',
          color: '#10B981',
          desc: 'Elige la región AWS donde procesan tus datos. Para GDPR: eu-west-1 (Irlanda). Para APAC: ap-southeast-1 (Singapore). Los datos no salen de la región seleccionada.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Setup básico: Claude en Bedrock en 15 minutos',
      body: 'Paso 1 — Activa el modelo:\nAWS Console → Amazon Bedrock → Model access → Solicitar acceso a Claude. Aprobación automática para Sonnet; Opus puede tardar 1-2 días.\n\nPaso 2 — Crea el IAM role:\nPolítica: bedrock:InvokeModel y bedrock:InvokeModelWithResponseStream. Asigna el rol a tu Lambda, ECS task, o instancia EC2.\n\nPaso 3 — Primera llamada:\nimport boto3\nclient = boto3.client("bedrock-runtime", region_name="us-east-1")\nresponse = client.invoke_model(\n    modelId="anthropic.claude-sonnet-4-6-20260101",\n    body=json.dumps({"messages": [...]})\n)\n\nCloudTrail logging es automático — no necesitas configurar nada extra.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Qué sistema de autenticación usa Claude en AWS en lugar de API keys de Anthropic?',
      opts: [
        'OAuth 2.0 con tokens de Anthropic',
        'AWS IAM — los mismos roles y políticas que para otros servicios de AWS',
        'Certificados SSL mutuos',
        'API keys de AWS Marketplace, distintas de IAM',
      ],
      correct: 1,
      exp: 'Claude Platform on AWS usa AWS IAM. Para enterprise esto es una ventaja: el equipo de seguridad ya conoce y audita IAM, los developers ya saben configurar roles, y los accesos de Claude se gestionan con las mismas herramientas que el resto de la infraestructura.',
    },
    {
      q: '¿Qué problema de compliance resuelve la integración con CloudTrail?',
      opts: [
        'Elimina la necesidad de GDPR para datos europeos',
        'Provee trazabilidad completa de cada llamada a Claude: quién llamó, cuándo, qué modelo, cuántos tokens — sin infraestructura adicional',
        'Encripta automáticamente todos los prompts',
        'Previene que empleados envíen datos confidenciales',
      ],
      correct: 1,
      exp: 'CloudTrail registra automáticamente cada llamada a Claude con todos los metadatos. Para auditorías de seguridad, compliance (SOC 2, ISO 27001, HIPAA) o investigaciones de incidentes, tienes trazabilidad completa de qué se procesó con Claude y quién lo inició — sin construir tu propio sistema de logging.',
    },
    {
      q: '¿Cuál es el beneficio de elegir eu-west-1 como región AWS para Claude?',
      opts: [
        'La latencia es menor cuando el usuario está en Europa',
        'Los modelos tienen más parámetros en Europa',
        'Los datos procesados no salen de esa región — cumpliendo requisitos de data residency de GDPR',
        'El precio por token es menor en regiones europeas',
      ],
      correct: 2,
      exp: 'Data residency es el requisito legal de que datos de usuarios no se procesen fuera de una geografía específica. GDPR exige que datos de ciudadanos europeos no salgan de la UE sin consentimiento. Con Claude en eu-west-1 (Irlanda), los datos se procesan dentro de AWS Europa — satisfaciendo este requisito sin arquitecturas complejas.',
    },
  ],
  challenge: {
    title: 'Reto 9.0c — Primera llamada a Claude desde AWS Bedrock',
    desc: 'Activa Claude en Bedrock y haz tu primera llamada autenticada con IAM.',
    steps: [
      'AWS Console → Amazon Bedrock → Model access → Solicita acceso a "Anthropic Claude Sonnet 4.6".',
      'Crea un IAM role con la política bedrock:InvokeModel. Asígnalo a tu usuario de desarrollo.',
      'Instala boto3: pip install boto3. Configura tus credenciales AWS: aws configure.',
      'Escribe un script Python de 10 líneas que llame a Claude en Bedrock con un mensaje simple.',
      'Ve a CloudTrail en la consola AWS. Filtra por "bedrock.amazonaws.com" en los últimos 5 minutos. Verifica que tu llamada aparece.',
      'Opcional: crea una política IAM más restrictiva que solo permita Sonnet (no Opus) y verifica que intentar llamar a Opus falla.',
    ],
    checkpoint: 'Completo cuando: (1) haces una llamada exitosa a Claude via Bedrock en Python, y (2) verificas esa llamada en CloudTrail. Eso confirma que tienes el setup enterprise: autenticación IAM + trazabilidad automática.',
  },
}
