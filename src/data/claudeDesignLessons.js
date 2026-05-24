// ─── MÓDULO 7: CLAUDE DESIGN ─────────────────────────────────────────────────
// Basado en: TechCrunch 17 abril 2026, guías verificadas de la comunidad,
// documentación oficial de Anthropic, mayo 2026

// ─── D.1: QUÉ ES CLAUDE DESIGN ───────────────────────────────────────────────
export const CLAUDE_DESIGN_INTRO = {
  id: 'mod7_d1',
  num: '2.1',
  title: 'Claude Design: prototipado visual con IA desde cero',
  duration: '20 min',
  xpReward: 65,
  videoId: 'imAjmQy8p8c',
  videoCaption: 'Claude Design — guía completa del nuevo producto de Anthropic 2026',
  content: [
    {
      type: 'intro',
      text: 'El 17 de abril de 2026, Anthropic lanzó Claude Design y las acciones de Figma cayeron un 7% ese día. No porque sea un Figma killer — sino porque llena un gap que Figma, Canva, Lovable y v0 dejaban abierto: un prototipo conversacional que lee tu codebase, extrae tu design system, y entrega HTML, CSS y React reales que puedes pasar directamente a Claude Code. No imágenes estáticas. Código funcionando.',
    },
    {
      type: 'concept',
      title: '¿Qué es Claude Design exactamente?',
      body: 'Claude Design es una herramienta de prototipado conversacional con integración de design systems, construida por Anthropic Labs y powered by Claude Opus 4.7. Vive en claude.ai/design — no en CoWork, no en Claude Code. Es una pestaña separada del chat. La interfaz tiene dos paneles: chat a la izquierda, canvas a la derecha. Describes lo que quieres en lenguaje natural. Claude genera HTML, CSS y React reales — clickeables, testeables — en el canvas. Iteras conversacionalmente hasta que el resultado es lo que necesitas.',
      highlight: 'Acceso: claude.ai/design. Disponible para planes Pro, Max, Team y Enterprise sin costo adicional — pero consume los límites de uso de la suscripción. Como Research Preview, no está disponible en la app de escritorio — requiere el navegador web.',
    },
    {
      type: 'cards',
      title: 'Lo que Claude Design NO es (igual de importante)',
      items: [
        {
          name: 'No es Figma',
          tag: 'Diferencia clave',
          color: '#6366F1',
          desc: 'Figma es una herramienta de diseño profesional para crear assets finales. Claude Design es una herramienta de prototipado conversacional para materializar ideas rápidamente. No reemplaza el flujo de diseño — lo complementa en la fase de ideación.',
        },
        {
          name: 'No es Lovable ni v0',
          tag: 'Diferencia clave',
          color: '#10B981',
          desc: 'Lovable y v0 generan aplicaciones completas. Claude Design genera prototipos y design systems. La diferencia: Claude Design puede leer tu codebase existente y extraer tus tokens de diseño — Lovable y v0 empiezan desde cero.',
        },
        {
          name: 'No es un full-app builder',
          tag: 'Límite importante',
          color: '#F97316',
          desc: 'Claude Design produce prototipos y componentes — no aplicaciones completas con backend, autenticación y base de datos. Para eso usas Claude Code (lecciones 2.1-2.6) con el output de Claude Design como punto de partida.',
        },
        {
          name: 'No es image generation',
          tag: 'Aclaración',
          color: '#8B5CF6',
          desc: 'Claude Design genera código HTML/CSS/React, no imágenes. El output es código que se renderiza en el navegador — puedes inspeccionarlo, modificarlo y usarlo en producción. No es DALL-E ni Midjourney.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Los 4 tipos de output que genera Claude Design',
      body: 'Prototipos de UI: pantallas completas de apps web o móviles con navegación funcional, para validar ideas antes de invertir en desarrollo. Slides y presentaciones: decks ejecutivos, pitch decks, reportes visuales exportables. One-pagers: landing pages, propuestas de una página, briefs visuales de marca. Componentes: tarjetas, modales, formularios, navbars — piezas individuales para integrar en proyectos existentes. El diferenciador que importa para todos: Claude Design puede generar hasta 3 direcciones de diseño en paralelo para comparar, en lugar de solo una.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'La superioridad técnica: extracción de design system desde codebase',
      body: 'Ningún competidor hace esto: Claude Design puede leer tu repositorio GitHub o archivos de código y extraer automáticamente tus tokens de diseño — colores, tipografías, espaciados, componentes. En aproximadamente 5 minutos genera un design system que refleja tu codebase real. Luego aplica ese sistema a cualquier nuevo prototipo automáticamente. Para el Proyecto 6.3 (portal de fotografía), esto significa que Claude Design puede leer el código Next.js que ya tienes y generar el onboarding conversacional del cliente siguiendo exactamente los mismos tokens visuales.',
      highlight: 'El flujo más poderoso: Claude Design para prototipar → Claude Code para implementar. El prototipo generado por Design se pasa a Claude Code con el prompt: "Implementa este prototipo en Next.js. Aquí está el HTML/CSS de referencia: [output de Design]." Claude Code lo convierte en componentes React funcionales.',
    },
  ],
  quiz: [
    {
      q: '¿En qué URL vive Claude Design y por qué importa saber esto?',
      opts: [
        'En claude.ai/cowork — es una función del módulo de automatización de escritorio',
        'En claude.ai/design — es un producto separado que solo funciona en el navegador web, no en la app de escritorio',
        'En code.claude.com — está integrado con Claude Code',
        'No tiene URL propia — se accede desde la barra lateral del chat normal',
      ],
      correct: 1,
      exp: 'Claude Design está en claude.ai/design y como Research Preview solo funciona en el navegador web. Si intentas acceder desde la app de escritorio de Claude, no lo encontrarás. Este detalle evita la frustración de buscarlo en el lugar equivocado.',
    },
    {
      q: '¿Cuál es la ventaja técnica más importante de Claude Design sobre Lovable y v0?',
      opts: [
        'Claude Design es más rápido generando código que las otras herramientas',
        'Claude Design puede leer tu codebase existente y extraer tus tokens de diseño reales para aplicarlos automáticamente',
        'Claude Design soporta más frameworks — React, Vue, Svelte y Angular',
        'Claude Design no tiene límites de tokens mientras Lovable y v0 sí tienen',
      ],
      correct: 1,
      exp: 'La extracción de design system desde codebase es el diferenciador real. Lovable y v0 siempre empiezan con sus propios defaults. Claude Design puede leer tus colores, tipografías y componentes del repositorio y aplicarlos al nuevo prototipo — garantizando consistencia visual desde el primer intento.',
    },
    {
      q: 'Terminas un prototipo en Claude Design. ¿Cuál es el flujo correcto para convertirlo en una feature real en producción?',
      opts: [
        'Exportar el prototipo como imagen PNG y dársela a un desarrollador para que lo reconstruya',
        'Pasar el HTML/CSS generado por Claude Design a Claude Code con instrucciones de implementación en el stack real del proyecto',
        'Claude Design hace el deploy directamente a Vercel sin pasar por Claude Code',
        'Importar el prototipo a Figma y desde ahí hacer el handoff al equipo de desarrollo',
      ],
      correct: 1,
      exp: 'Claude Design produce código real, no imágenes. Ese código se puede pasar directamente a Claude Code: "Implementa este prototipo en Next.js con TypeScript. Aquí está el HTML/CSS de referencia: [output]." Claude Code lo convierte en componentes funcionales siguiendo los patrones de tu proyecto. Este flujo Design→Code es el más documentado por la comunidad.',
    },
  ],
  challenge: {
    title: 'Reto D.1 — Tu primer prototipo en Claude Design',
    desc: 'Familiarízate con la interfaz generando algo concreto.',
    steps: [
      'Abre claude.ai/design en tu navegador (no en la app de escritorio). Verifica que estás en la interfaz de dos paneles: chat izquierda, canvas derecha.',
      'Genera tu primer prototipo básico: "Crea el hero section de un sitio web de fotografía profesional. Estilo minimalista oscuro. Una foto grande de fondo, un headline con el nombre del fotógrafo, y un botón de contacto."',
      'Observa el output en el canvas: es HTML/CSS real, no una imagen. Interactúa con él.',
      'Pide una iteración en lenguaje natural: "Cambia el fondo a negro puro. El headline en tipografía serif. El botón más pequeño y con borde blanco en lugar de fondo sólido."',
      'Pide 3 direcciones en paralelo: "Genera 3 variaciones diferentes de este hero section: una minimalista, una editorial con más texto, y una con la foto ocupando todo el ancho. Muéstralas lado a lado para comparar."',
      'Exporta el código HTML del resultado que más te guste haciendo clic derecho → Ver código fuente, o usando el botón de exportar si está disponible.',
    ],
    checkpoint: 'El reto está completo cuando tienes un hero section funcionando en el canvas, pudiste iterarlo en lenguaje natural, y exportaste el HTML. Eso es el flujo base de Claude Design — la parte de design system e integración con codebase la cubres en D.3.',
  },
}

// ─── D.2: EL BRIEF PERFECTO ───────────────────────────────────────────────────
export const CLAUDE_DESIGN_BRIEF = {
  id: 'mod7_d2',
  num: '2.2',
  title: 'El brief de diseño: la diferencia entre output genérico y producción',
  duration: '25 min',
  xpReward: 70,
  videoId: 'Y3MK6OpKDqE',
  videoCaption: 'Prompts avanzados para Claude Design — de genérico a producción-ready',
  content: [
    {
      type: 'intro',
      text: 'El mismo Claude Design que devuelve una pantalla genérica azul-sobre-blanco a un usuario casual entrega un design system listo para producción a quien sabe construir el brief correcto. La calidad del output depende casi completamente del input. Esta lección cubre los 5 componentes de un brief de diseño efectivo y los patrones documentados por la comunidad que más impactan el resultado.',
    },
    {
      type: 'concept',
      title: 'Los 5 componentes de un brief de diseño efectivo',
      body: 'Componente 1 — Qué es y para quién: "Un dashboard para un gerente de ventas B2B que revisa su pipeline cada mañana." No solo el tipo de pantalla sino el usuario y su contexto. Componente 2 — Features específicas: "Debe mostrar: total de oportunidades, valor del pipeline por etapa, top 5 clientes por revenue, forecast del mes con vs objetivo." Componente 3 — Secciones o pantallas: "Vista principal del dashboard, modal de detalle de oportunidad, sidebar de filtros." Componente 4 — Estilo visual: referencia estética, paleta de colores en HEX, tipografías si las tienes. Componente 5 — Restricciones: máximo 3 colores, sin tablas complejas, mobile-first.',
      highlight: 'La regla más importante: trata el brief de Claude Design como una especificación técnica, no como una conversación casual. Un brief de 5 líneas bien estructurado produce significativamente mejores resultados que 3 párrafos vagos.',
    },
    {
      type: 'comparison',
      bad: 'Brief vago:\n"Crea una landing page bonita para mi negocio de fotografía. Que se vea profesional y moderna."\n\nResultado: paleta genérica, layout de plantilla, tipografía Arial, ningún diferenciador visual.',
      good: 'Brief específico:\n"Crea una landing page para fotógrafo de bodas premium. Paleta: negro #0A0A0A, blanco #F7F5F0, dorado #C9A84C. Tipografía display: serif elegante. Secciones: hero con foto grande + headline, galería de 6 fotos en grid asimétrico, propuesta de valor en 3 columnas, testimonial de cliente, CTA de contacto. Estilo: editorial de moda, minimalista, alta densidad de blanco. NO usar diseños de tarjetas con borde redondeado."\n\nResultado: dirección visual clara, identidad de marca, diferenciador estético.',
    },
    {
      type: 'concept',
      title: 'El patrón Best-of-N: 3 direcciones en paralelo',
      body: 'En lugar de pedir una versión y editarla, pide 3 direcciones simultáneas con enfoques radicalmente distintos. "Genera 3 propuestas para el hero section de mi sitio de fotografía: Dirección A — Minimalista extremo: solo tipografía, sin foto de fondo, todo en blanco/negro. Dirección B — Editorial: foto a pantalla completa, headline grande superpuesto, color. Dirección C — Vanguardista: layout asimétrico, tipografía experimental, alto contraste." Ves las 3, eliges la que más resuena, y la desarrollas a fondo.',
      highlight: 'El Best-of-N es especialmente poderoso para: heroes, portadas, páginas de servicios, propuestas de valor. Para componentes funcionales (formularios, dashboards, galerías), ir directo a una sola dirección bien especificada es más eficiente.',
    },
    {
      type: 'concept',
      title: 'Anti-AI-Slop con Hallmark integrado',
      body: 'Si tienes la Skill de Hallmark instalada (lección S.2), Claude Design la activará automáticamente cuando detecte que estás trabajando en UI. Hallmark aplica las 65 reglas anti-diseño-genérico: pares tipográficos distintivos, sistemas de variables CSS coherentes, composición espacial que rompe con los defaults de IA. Para activarlo explícitamente: agrega al final de tu brief: "Antes de generar, consulta las reglas de Hallmark para asegurar que el resultado no tenga signos de diseño genérico de IA."',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Iteración conversacional: el flujo real',
      body: 'Claude Design está diseñado para iteración, no para el prompt perfecto. El flujo documentado por usuarios que logran resultados de nivel producción: (1) Brief inicial con los 5 componentes. (2) Pedir 3 direcciones para elegir. (3) Desarrollar la dirección ganadora a fondo. (4) Iterar en detalles específicos con instrucciones atómicas: "Mueve el CTA más arriba", "Cambia el grid de 3 a 2 columnas en mobile", "El color del botón debe ser el dorado de mi paleta." (5) Pedir revisión contra el brief original: "¿Cumple este diseño con todos los requisitos del brief inicial? ¿Qué mejorarías?"',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es el componente del brief que más impacta la calidad del output según la comunidad de power users?',
      opts: [
        'El tamaño del brief — briefs más largos siempre producen mejores resultados',
        'La especificidad del estilo visual — paleta en HEX, tipografías concretas, referencias estéticas y restricciones explícitas de qué no hacer',
        'El número de features que pides — más features = Claude trabaja más = mejor resultado',
        'El tono del mensaje — ser más formal hace que Claude tome el diseño más en serio',
      ],
      correct: 1,
      exp: 'El estilo visual específico es lo que separa output genérico de output diferenciado. "Minimalista y profesional" genera lo mismo para todos. "Negro #0A0A0A, tipografía serif para headlines, NO cards con borde redondeado" da instrucciones que Claude puede ejecutar de forma precisa y única.',
    },
    {
      q: '¿Para qué tipo de componente tiene MÁS sentido usar el patrón Best-of-N (3 direcciones en paralelo)?',
      opts: [
        'Para formularios de login — hay muchas formas de diseñar un formulario de login',
        'Para heroes, portadas y páginas de valor propositivo donde la dirección estética es lo más importante y no está definida',
        'Para dashboards de datos complejos — necesitas ver múltiples organizaciones del dato',
        'El Best-of-N siempre es mejor que una sola dirección, para cualquier tipo de componente',
      ],
      correct: 1,
      exp: 'Best-of-N vale la pena cuando la decisión estética es el cuello de botella y tienes varias opciones igualmente válidas. Para un hero de landing page, la dirección visual puede tomar mil formas y ver 3 simultáneamente es muy útil. Para un formulario de contacto, la variación estética es menor y ir directo a una especificación bien definida es más eficiente.',
    },
    {
      q: 'Tienes Hallmark instalado y quieres garantizar que Claude Design lo use. ¿Qué haces?',
      opts: [
        'Hallmark se activa automáticamente siempre — no necesitas hacer nada adicional',
        'Debes desinstalar Hallmark antes de usar Claude Design — son incompatibles',
        'Añades al final del brief: "Consulta las reglas de Hallmark antes de generar para evitar diseño genérico de IA" — confirma la activación explícitamente',
        'Hallmark solo funciona en Claude Code, no en Claude Design',
      ],
      correct: 2,
      exp: 'Aunque Hallmark puede activarse automáticamente cuando detecta trabajo de UI, añadir la instrucción explícita garantiza que Claude la consulte. Claude Design y las Skills de Claude Code son sistemas separados — la activación automática no está garantizada en todas las sesiones. La instrucción explícita es el seguro.',
    },
  ],
  challenge: {
    title: 'Reto D.2 — Brief de producción para tu portal de fotografía',
    desc: 'Construye el brief completo del Proyecto 6.3 y genera 3 direcciones reales.',
    steps: [
      'Escribe el brief completo siguiendo los 5 componentes para la página principal de tu sitio de fotografía: qué es y para quién, secciones específicas (hero, portafolio, servicios, contacto), paleta de colores exacta en HEX, tipografías deseadas, y mínimo 3 restricciones de lo que NO quieres.',
      'Abre claude.ai/design y pega el brief con la instrucción de 3 direcciones: "Genera 3 propuestas para esta página principal. Dirección A: ultra minimalista. Dirección B: editorial con énfasis en las fotos. Dirección C: diseño asimétrico con alto contraste. Muéstralas lado a lado."',
      'Evalúa las 3 direcciones. ¿Cuál comunica mejor el nivel de trabajo que haces? ¿Cuál diferenciaría tu sitio en el mercado de tu ciudad?',
      'Elige la dirección ganadora y escribe 5 instrucciones atómicas de iteración: un detalle específico de tipografía, uno de color, uno de spacing, uno de layout, uno que elimine algo que no quieres.',
      'Aplica las iteraciones una por una. Observa cómo cada instrucción pequeña acerca el resultado a lo que tienes en mente.',
      'Al final, pide: "Revisa este diseño contra el brief original. ¿Cumple todos los requisitos? ¿Hay algo que mejorar antes de pasarlo a Claude Code?"',
    ],
    checkpoint: 'El brief es efectivo cuando el resultado de la Dirección ganadora después de las 5 iteraciones se acerca a lo que tenías en mente y tú piensas "esto se ve como yo lo hubiera diseñado" en lugar de "esto se ve como una plantilla de IA". Ese estándar es el objetivo.',
  },
}

// ─── D.3: DESIGN SYSTEMS ─────────────────────────────────────────────────────
export const CLAUDE_DESIGN_SYSTEMS = {
  id: 'mod7_d3',
  num: '2.3',
  title: 'Design Systems: conecta tu marca, codebase y Figma',
  duration: '25 min',
  xpReward: 70,
  videoId: 'imAjmQy8p8c',
  videoCaption: 'Design Systems en Claude Design — Figma, GitHub y codebase 2026',
  content: [
    {
      type: 'intro',
      text: 'La función más poderosa de Claude Design no es generar prototipos desde cero — es leer lo que ya existe y construir sobre ello. Claude Design puede extraer tu paleta, tipografías y componentes desde un archivo de Figma, un repositorio de GitHub o archivos de código y generar un design system en 5 minutos que aplica automáticamente a cualquier proyecto nuevo. Para un negocio con identidad visual establecida, esto elimina la inconsistencia que caracteriza el diseño generado por IA.',
    },
    {
      type: 'concept',
      title: 'Cómo configurar tu Design System en Claude Design',
      body: 'Accede desde el botón "Design System" en la esquina superior derecha de claude.ai/design → "Set up design system" en el panel izquierdo. Tienes 3 formas de alimentarlo: (1) Texto descriptivo del concepto de marca: "Marca minimalista y confiable para fotógrafo de bodas premium. Paleta oscura, tipografía serif para títulos, sans-serif para cuerpo." (2) Link de repositorio GitHub: Claude lee tu código fuente y extrae tokens reales. (3) Archivo .fig de Figma: sube el archivo y Claude extrae el sistema de diseño completo. Después del setup, Claude presiona "Continue to generation" y en ~5 minutos tienes un sistema de diseño integrado con tus colores, tipografías y componentes.',
      highlight: 'Puedes mantener múltiples design systems activos — por ejemplo: "Marca principal" y "Sub-marca experimental" o un sistema por cliente si eres agencia. El sistema activo se aplica automáticamente a todos los prototipos de esa sesión.',
    },
    {
      type: 'cards',
      title: 'Los 3 métodos de integración comparados',
      items: [
        {
          name: 'Texto descriptivo',
          tag: 'Más rápido',
          color: '#6366F1',
          desc: 'Describe tu marca en texto libre. Claude interpreta y genera los tokens. Listo en 2 minutos. Menor precisión — Claude interpreta, no lee. Ideal para: proyectos nuevos donde todavía defines la identidad visual.',
        },
        {
          name: 'GitHub / codebase',
          tag: 'Más preciso',
          color: '#10B981',
          desc: 'Claude lee tus archivos de configuración de Tailwind, variables CSS, componentes existentes. Extrae tokens reales del código. Garantiza consistencia con lo que ya está construido. Ideal para: proyectos en desarrollo con código existente.',
        },
        {
          name: 'Figma (.fig)',
          tag: 'Para equipos con diseño',
          color: '#F97316',
          desc: 'Sube tu archivo de Figma y Claude extrae todo: paleta, tipografías, estilos de componentes, grids. La fuente de verdad del diseñador llega directamente al prototipo. Ideal para: equipos que ya tienen un design system en Figma.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Design System para tu portal de fotografía — paso a paso',
      body: 'Para el Proyecto 6.3, el flujo recomendado: (1) Si ya tienes el proyecto de Next.js parcialmente construido, sube el repositorio GitHub. Claude extrae: los valores de tailwind.config.js (paleta, tipografías), los componentes ya existentes, el estilo del CSS base. (2) Si partes desde cero, prepara un documento de texto con: colores HEX principales, tipografías (nombre y peso), estilo de componentes (bordes redondeados vs sharp, sombras vs flat). (3) Una vez configurado, cualquier prototipo nuevo en esa sesión aplicará automáticamente tu sistema visual. No tienes que especificar colores ni tipografías en cada brief.',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Limitaciones actuales (Research Preview)',
      body: 'Claude Design está en Research Preview — hay limitaciones documentadas por la comunidad: (1) Las sesiones no persisten automáticamente — el design system configurado en una sesión puede no estar disponible en la siguiente. Documenta tu setup en un archivo de texto para reconfigurarlo rápidamente. (2) Proyectos muy grandes de Figma (200+ componentes) pueden no extraerse completamente — Claude prioriza los tokens más usados. (3) El canvas puede volverse lento con prototipos de más de 10 pantallas. Para proyectos grandes, trabaja en secciones. (4) La exportación de código a veces requiere ajustes menores para compilar sin warnings en proyectos TypeScript estrictos.',
      highlight: 'Workaround documentado para persistencia: guarda el prompt de configuración de tu design system en un archivo .txt. Al inicio de cada sesión, pégalo en el chat de Design antes de pedir cualquier prototipo. 30 segundos de setup que garantizan consistencia.',
    },
  ],
  quiz: [
    {
      q: 'Tienes un proyecto de Next.js con Tailwind funcionando. ¿Qué método de integración de Design System usas en Claude Design?',
      opts: [
        'Texto descriptivo — es el más rápido y Claude puede inferir los colores de Tailwind',
        'GitHub link o codebase upload — Claude lee tus tokens reales de tailwind.config.js y garantiza consistencia con lo ya construido',
        'Archivo de Figma — siempre es más preciso que el código',
        'No configuras design system — Claude diseña mejor sin restricciones',
      ],
      correct: 1,
      exp: 'Con código existente, siempre usa el método de codebase. Claude lee tus valores reales de tailwind.config.js — colores como `primary-900: #0A0A0A`, tipografías, border-radius. Garantiza que el prototipo usa exactamente los mismos tokens que tu código. El texto descriptivo requiere que Claude interprete, lo cual introduce inconsistencias.',
    },
    {
      q: '¿Cuál es el workaround correcto para la limitación de persistencia del design system entre sesiones?',
      opts: [
        'No hay workaround — debes reconfigurar completamente el sistema en cada sesión nueva',
        'Guardar el prompt de configuración en un archivo .txt y pegarlo al inicio de cada sesión de Design',
        'El design system persiste automáticamente si usas el mismo navegador y no cierras la pestaña',
        'Configurar el design system en CLAUDE.md del proyecto — Design lo lee automáticamente',
      ],
      correct: 1,
      exp: 'La persistencia entre sesiones es una limitación documentada de la Research Preview. El workaround estándar de la comunidad: documenta tu setup en un .txt y pégalo al inicio de cada sesión. 30 segundos de setup que garantizan consistencia y evitan configurar todo desde cero cada vez.',
    },
    {
      q: '¿Qué componente del sistema de Anthropic se activa automáticamente cuando Claude Design lee tu codebase y tiene Hallmark instalado?',
      opts: [
        'El Advisor Strategy — Opus revisa el output antes de presentarlo',
        'El Progressive Disclosure de Skills — Hallmark carga sus reglas anti-AI-slop al detectar trabajo de UI',
        'El Plan Mode — Claude planifica el diseño antes de generarlo',
        'El Context7 MCP — actualiza la documentación de las librerías CSS usadas',
      ],
      correct: 1,
      exp: 'El sistema de Skills funciona por Progressive Disclosure: Claude lee las descripciones de todas las Skills activas. Cuando detecta que la tarea es diseño de UI, carga el contenido completo de Hallmark y aplica sus 65 reglas anti-AI-slop automáticamente. Sin Hallmark instalado, Claude usa sus defaults — que pueden ser genéricos.',
    },
  ],
  challenge: {
    title: 'Reto D.3 — Configura tu Design System personal',
    desc: 'Crea y valida tu design system en Claude Design para el portal de fotografía.',
    steps: [
      'Si tienes código de Next.js del Proyecto 6.3: ve a claude.ai/design → "Design System" → "Set up design system" → selecciona la opción de GitHub o sube los archivos relevantes (tailwind.config.js, globals.css, cualquier tokens.css).',
      'Si no tienes código aún: prepara un documento de texto con tu identidad visual. Incluye: 3-5 colores HEX, 2 tipografías (una para headlines, una para cuerpo), estilo visual en 2-3 frases, 3 restricciones de diseño.',
      'Completa el setup y observa el design system generado. ¿Refleja correctamente tu identidad visual? ¿Hay tokens que Claude extrajo mal o que faltan?',
      'Haz una prueba de validación: pide un componente simple (una tarjeta de proyecto del portal de clientes) SIN especificar colores ni tipografías en el prompt. ¿Claude aplica automáticamente tu sistema?',
      'Guarda el prompt de configuración en un archivo .txt llamado "claude-design-system.txt" en tu escritorio. Lo usarás al inicio de cada sesión futura de Claude Design.',
      'Compara el componente generado con el sistema activo vs uno generado sin sistema. ¿La diferencia de consistencia es visible?',
    ],
    checkpoint: 'El design system está funcionando correctamente cuando puedes pedir un componente nuevo sin especificar ningún color ni tipografía y Claude genera output que es visualmente consistente con tu identidad de marca. Ese es el nivel de "Claude que te conoce visualmente".',
  },
}

// ─── D.4: FLUJO DESIGN → CODE → PRODUCCIÓN ───────────────────────────────────
export const CLAUDE_DESIGN_TO_CODE = {
  id: 'mod7_d4',
  num: '2.4',
  title: 'Flujo completo: Claude Design → Claude Code → Producción',
  duration: '20 min',
  xpReward: 65,
  videoId: '73eFWU-edO4',
  videoCaption: 'Flujo Design a producción con Claude Code — tutorial completo 2026',
  content: [
    {
      type: 'intro',
      text: 'Claude Design sin Claude Code es un prototipo. Claude Code sin Claude Design es código sin dirección visual validada. Juntos son el pipeline más rápido documentado para ir de una idea a una feature en producción. Esta lección cubre el flujo completo con los prompts exactos en cada paso, aplicado directamente al Proyecto 6.3.',
    },
    {
      type: 'concept',
      title: 'El flujo en 5 pasos',
      body: 'Paso 1 — Brief: escribes el brief con los 5 componentes (D.2) en Claude Design. Paso 2 — 3 direcciones: generas 3 propuestas, eliges la ganadora. Paso 3 — Iteración: 5-10 instrucciones atómicas hasta que el prototipo es exactamente lo que quieres. Paso 4 — Handoff: exportas el HTML/CSS del prototipo y lo abres con Claude Code. Paso 5 — Implementación: Claude Code convierte el prototipo en componentes React funcionales con TypeScript, Tailwind y los patrones de tu proyecto.',
      highlight: 'La ganancia principal de este flujo: validas visualmente antes de invertir tiempo de implementación. Un cambio de dirección estética en Claude Design toma 30 segundos. El mismo cambio después de que Claude Code implementó 500 líneas toma 2 horas.',
    },
    {
      type: 'concept',
      title: 'El prompt exacto del handoff de Design a Code',
      body: 'Este prompt está documentado por la comunidad como el más efectivo para el handoff: "Aquí está el prototipo HTML/CSS generado por Claude Design para [nombre del componente]: [pega el código]. Implementa este diseño como un componente React con TypeScript y Tailwind CSS. Requisitos: (1) Sigue exactamente los colores, tipografías y espaciados del prototipo. (2) Hazlo responsive — mobile-first con los breakpoints de nuestro proyecto (sm:640 md:768 lg:1024). (3) Extrae los valores de color y tipografía como variables de Tailwind, no como valores inline. (4) Asegúrate de que las animaciones siguen CSS Scroll-Driven Animations nativas (no GSAP para esto). (5) El componente debe pasar el audit de modern-web-guidance."',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Aplicación directa al Proyecto 6.3: el onboarding de clientes',
      body: 'El caso de uso más relevante para tu portal: el flujo de onboarding conversacional del cliente (Lección 6.3). Flujo completo: (1) Claude Design: "Diseña el flujo de onboarding de un cliente en un portal de fotografía. 3 pasos: [bloque Identidad], [bloque Documentos], [bloque Expectativas]. Cada pantalla en estilo de chat conversacional — una pregunta a la vez, fondo oscuro, tipografía elegante." (2) Iteras hasta que el flujo conversacional se ve correcto visualmente. (3) Claude Code implementa: "Convierte este prototipo en el componente OnboardingChat de nuestro Next.js. Usa la API de Claude para generar las preguntas dinámicamente según las respuestas del usuario."',
      highlight: null,
    },
    {
      type: 'concept',
      title: 'Claude Design como herramienta de presentación para clientes',
      body: 'Caso de uso inmediato para tu negocio de fotografía — antes de construir cualquier código: (1) Un cliente potencial te contacta con un brief de su proyecto. (2) En 20 minutos, generas en Claude Design 3 propuestas de cómo se vería su galería privada en el portal. (3) Le envías capturas o el HTML para que lo vea en el navegador. (4) Eliges la dirección juntos antes de empezar a construir. El cliente participa en el diseño sin que tú hayas escrito una línea de código. Eso construye confianza y alineación antes de la inversión de tiempo.',
      highlight: 'Para generar capturas de pantalla del prototipo: en el canvas de Claude Design, usa Cmd+Shift+S (Mac) para capturar o simplemente Screenshot normal. El HTML funcionando en el canvas es una URL temporal que puedes compartir con el cliente directamente.',
    },
  ],
  quiz: [
    {
      q: '¿Cuál es la ganancia más importante de validar el diseño en Claude Design ANTES de que Claude Code implemente?',
      opts: [
        'Claude Code genera código más limpio cuando tiene el HTML de referencia de Claude Design',
        'Un cambio de dirección estética en Claude Design toma 30 segundos — el mismo cambio después de 500 líneas de implementación toma 2 horas',
        'Claude Design y Claude Code comparten contexto de forma nativa — el traspaso es instantáneo',
        'Validar en Design hace que el código generado por Code pase el Lighthouse test automáticamente',
      ],
      correct: 1,
      exp: 'El valor del prototipado visual es la velocidad de iteración. Cambiar la dirección estética de un hero section antes de implementar: 30 segundos de instrucción en Claude Design. Cambiar esa misma decisión después de que Claude Code construyó el hero con animaciones, responsive design y TypeScript: potencialmente horas de refactorización. El prototipo es exactamente eso — un lugar barato para equivocarse.',
    },
    {
      q: '¿Para qué parte del Proyecto 6.3 es más útil usar Claude Design primero?',
      opts: [
        'Para la capa de base de datos y el schema de Supabase — Design puede visualizar la arquitectura de datos',
        'Para el flujo de onboarding conversacional del cliente — permite validar visualmente la experiencia de chat antes de implementar la integración con la API de Claude',
        'Para la configuración de autenticación con Clerk — Design puede prototipar el flujo de OTP',
        'Para la configuración de Row Level Security de Supabase — Design puede simular las políticas',
      ],
      correct: 1,
      exp: 'El onboarding conversacional es perfecto para Design primero: es completamente visual e interactivo, el cliente necesita aprobar cómo se ve y se siente antes de que valga la pena construirlo, y iterar el diseño del chat conversacional en Claude Design toma minutos mientras que implementar y cambiar el componente React es mucho más costoso.',
    },
    {
      q: 'Un cliente potencial quiere ver cómo se vería su galería privada antes de contratar. ¿Cómo usas Claude Design en este proceso de venta?',
      opts: [
        'No puedes mostrarle nada hasta que construyas el portal completo — Claude Design no sirve para presentaciones a clientes',
        'Generas en Claude Design una maqueta de su galería privada en 20 minutos, la iteras con él, y compartes el HTML o capturas — sin escribir código de producción',
        'Le generas un PDF estático con capturas del diseño genérico predeterminado de Claude Design',
        'Claude Design solo funciona con datos reales del cliente — no puede generar prototipos con datos ficticios',
      ],
      correct: 1,
      exp: 'Esta es una de las aplicaciones más inmediatas de valor de Claude Design para tu negocio. 20 minutos de prototipado conversacional produce algo que el cliente puede ver y tocar en el navegador. La diferencia entre "te voy a hacer un portal" y "aquí está cómo va a verse tu portal" es significativa para cerrar clientes de alto valor.',
    },
  ],
  challenge: {
    title: 'Reto D.4 — Flujo completo: prototipo a componente React',
    desc: 'Ejecuta el pipeline completo Design→Code en un componente real del Proyecto 6.3.',
    steps: [
      'En claude.ai/design, con tu design system configurado (Reto D.3): "Diseña la pantalla de bienvenida del portal de clientes después del login. Debe mostrar: la propuesta de valor del cliente (texto grande), el tracker de 3 fases (Pre-producción / Producción / Post-producción) con la fase actual destacada, y un botón de acción según la fase."',
      'Itera hasta que te satisfaga. Mínimo 3 instrucciones atómicas de refinamiento.',
      'Exporta el código HTML completo del canvas.',
      'Abre Claude Code en el proyecto del Proyecto 6.3: claude.',
      'Usa el prompt exacto del handoff de la lección: pega el HTML y pide la implementación como componente React con TypeScript, Tailwind, mobile-first y siguiendo las guías de modern-web-guidance.',
      'Verifica que el componente generado: (a) compila sin errores, (b) se ve visualmente fiel al prototipo de Claude Design, (c) pasa el check de modern-web-guidance.',
      'Coloca el componente en la página de dashboard del portal y verifica en el browser. ¿Se ve como en el prototipo?',
    ],
    checkpoint: 'El flujo está completo cuando el componente en el browser se ve visualmente idéntico al prototipo que aprobaste en Claude Design, compila sin warnings TypeScript, y Claude Code lo generó sin que tuvieras que explicar los colores ni la tipografía — los tomó del codebase automáticamente.',
  },
}

export const CLAUDE_DESIGN_LESSONS = [
  CLAUDE_DESIGN_INTRO,
  CLAUDE_DESIGN_BRIEF,
  CLAUDE_DESIGN_SYSTEMS,
  CLAUDE_DESIGN_TO_CODE,
]
