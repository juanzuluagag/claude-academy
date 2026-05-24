// ─── ACTUALIZACIONES Y NUEVAS LECCIONES — MAYO 2026 ──────────────────────────

// ─── 2.7 ADVISOR STRATEGY ────────────────────────────────────────────────────
export const ADVISOR_STRATEGY_LESSON = {
  id: 'mod2_l7',
  num: '3.7',
  title: 'Advisor Strategy: calidad de Opus al costo de Sonnet',
  duration: '20 min',
  xpReward: 75,
  videoId: 'ssHbtzGIfXk',
  videoCaption: 'Advisor Strategy de Anthropic — el pattern que cambia el cálculo de modelos 2026',
  content: [
    {
      type: 'intro',
      text: 'Durante años el dilema fue: Sonnet es barato pero le falta razonamiento en tareas difíciles. Opus tiene el razonamiento pero cuesta 5x más. El 9 de abril de 2026, Anthropic lanzó el Advisor Strategy y rompió ese dilema: un ejecutor barato (Sonnet o Haiku) corre toda la tarea y cuando encuentra un problema difícil, consulta a Opus como advisor. Una sola llamada API. Contexto compartido completo. Sin orquestación manual.',
    },
    {
      type: 'concept',
      title: '¿Cómo funciona exactamente?',
      body: 'Configuras la llamada API con Sonnet 4.6 o Haiku 4.5 como modelo principal y añades el advisor tool con Opus 4.6 como advisor. El ejecutor corre la tarea completa. Cuando encuentra una decisión arquitectónica compleja, una ambigüedad de alto riesgo, o un razonamiento multi-paso, invoca al advisor tool. Opus responde con ~400-700 tokens de consejo dentro de la misma llamada API. El ejecutor integra el consejo y continúa. Todo dentro de un único request — sin segunda llamada, sin sincronización de contexto, sin overhead de orquestación.',
      highlight: 'Benchmarks documentados del lanzamiento: Sonnet + Advisor Opus: 74.8% en SWE-bench Multilingual (vs 72.1% Sonnet solo). Haiku + Advisor Opus: de 19.7% a 41.2% en BrowseComp — más del doble. Costo total típicamente menor que correr Opus solo para la misma tarea. Los tokens de Opus solo se cobran cuando el ejecutor invoca el advisor.',
    },
    {
      type: 'concept',
      title: 'Cómo implementarlo',
      body: 'Requiere el beta header: anthropic-beta: advisor-tool-2026-03-01. En el array de tools de la llamada API añades un objeto con type: "advisor_20260301", name: "advisor", y model: "claude-opus-4-6". El parámetro max_uses controla cuántas veces el ejecutor puede consultar al advisor en un mismo request — es el principal control de costo. El executor model sigue siendo el modelo principal del request (claude-sonnet-4-6 o claude-haiku-4-5).',
      highlight: 'Tip de costo: empieza con max_uses: 2 o 3. Analiza el campo usage.advisor_uses en las respuestas para ver cuándo y cuánto usa el advisor. Para tareas simples puede ser 0 veces. Para arquitectura de sistemas puede ser 5-6 veces. Ajusta max_uses según el perfil de tu tarea.',
    },
    {
      type: 'cards',
      title: '¿Cuándo usar Advisor Strategy vs otras opciones?',
      items: [
        {
          name: 'Usa Advisor Strategy',
          tag: 'Casos ideales',
          color: '#10B981',
          desc: 'Tareas de agente largas con mayoría de pasos simples pero picos de razonamiento complejo. Debugging de código con dependencias complejas. Análisis de documentos legales o técnicos. Arquitectura de sistemas con múltiples consideraciones. Cualquier tarea donde Sonnet falla el 20-30% de las veces en pasos específicos.',
        },
        {
          name: 'Usa Opus directamente',
          tag: 'Cuando todo es difícil',
          color: '#6366F1',
          desc: 'La tarea completa requiere razonamiento de nivel Opus en cada paso. Si el ejecutor Sonnet invocaría al advisor en el 80%+ de los pasos, el overhead ya no compensa. Para esas tareas, Opus directo es más eficiente.',
        },
        {
          name: 'Usa Sonnet solo',
          tag: 'Tareas estándar',
          color: '#F97316',
          desc: 'La tarea no tiene picos de razonamiento complejo — Sonnet la maneja completa. Agregar el advisor overhead por tareas que Sonnet resuelve bien es costo innecesario. Redacción estándar, clasificación, extracción de datos, resúmenes.',
        },
        {
          name: 'Usa /model opus-plan',
          tag: 'Claude Code específico',
          color: '#8B5CF6',
          desc: 'Para Claude Code interactivo (no API), el comando /model opus-plan activa Opus para la fase de planificación y vuelve a Sonnet para la ejecución. Mismo principio del Advisor Strategy pero en el flujo de terminal.',
        },
      ],
    },
  ],
  quiz: [
    {
      q: 'Un agente de code review analiza 50 Pull Requests por día. La mayoría son simples (Sonnet los maneja perfectamente) pero el 20% tiene arquitectura compleja que requiere razonamiento de Opus. ¿Qué configuración usas?',
      opts: [
        'Opus para todos los 50 PRs — no vale la pena el riesgo de que Sonnet falle en el 20%',
        'Sonnet + Advisor Strategy con max_uses bajo — Sonnet maneja el 80% solo, invoca a Opus solo para los PRs complejos, en la misma llamada',
        'Dos pipelines separados: pre-clasificas los PRs con Haiku y luego mandas cada uno al modelo correcto',
        'Haiku para todos — si hay algún error en el review, el developer lo detectará en la revisión humana',
      ],
      correct: 1,
      exp: 'El Advisor Strategy es exactamente para este patrón: mayoría de casos simples con picos de complejidad. Sonnet maneja el 80% solo sin costo de Opus. El 20% complejo activa al advisor en la misma llamada. El resultado: mejor calidad que Sonnet solo, menor costo que Opus solo, sin infraestructura adicional de orquestación.',
    },
    {
      q: '¿Qué es max_uses en el contexto del Advisor Strategy y por qué es el principal control de costo?',
      opts: [
        'El número máximo de tokens que el advisor puede generar en su respuesta',
        'El número máximo de veces que el ejecutor puede consultar al advisor en un mismo request — limita cuántas veces se cobran tokens de Opus por llamada',
        'El número máximo de requests que puedes hacer con el Advisor Strategy en un día',
        'El porcentaje máximo del costo total que puede representar el advisor',
      ],
      correct: 1,
      exp: 'max_uses define cuántas consultas al advisor (Opus) puede hacer el ejecutor (Sonnet) en un solo request. Cada consulta genera ~400-700 tokens de Opus. Si max_uses es 5, en el peor caso pagas por 5 × ~500 = 2,500 tokens de Opus por request. Si es 1, máximo 500 tokens de Opus. Empieza bajo y sube basándote en usage.advisor_uses de las respuestas reales.',
    },
    {
      q: '¿Qué diferencia al Advisor Strategy del patrón de "llamar a Opus solo cuando Sonnet falla" que alguien podría construir manualmente?',
      opts: [
        'No hay diferencia real — son funcionalmente equivalentes',
        'El Advisor Strategy ocurre dentro de una sola llamada API con contexto completamente compartido — la construcción manual requiere una segunda llamada con contexto re-serializado, añadiendo latencia y riesgo de pérdida de información',
        'El Advisor Strategy es más barato porque Anthropic ofrece descuento en el precio de Opus dentro del pattern',
        'El Advisor Strategy funciona con cualquier modelo como advisor, la construcción manual solo funciona con Opus',
      ],
      correct: 1,
      exp: 'El contexto completamente compartido en una sola llamada es la ventaja técnica clave. En una arquitectura manual de "falla y reintenta", debes serializar el estado de la conversación, hacer una segunda llamada, y el segundo modelo recibe una representación del contexto — no el contexto real. El Advisor Strategy da a Opus acceso al contexto interno completo del ejecutor, produciendo consejos de mayor calidad con menor overhead.',
    },
  ],
  challenge: {
    title: 'Reto 2.7 — Implementa el Advisor Strategy en un script real',
    desc: 'Crea un script que use Sonnet con Opus como advisor para una tarea de análisis.',
    steps: [
      'Crea un archivo advisor-test.js en cualquier carpeta de tu Mac.',
      'Escribe la llamada API con el beta header y el advisor tool: usa claude-sonnet-4-6 como modelo principal con anthropic-beta: advisor-tool-2026-03-01 en los headers.',
      'En el array tools añade: { type: "advisor_20260301", name: "advisor", model: "claude-opus-4-6", max_uses: 3 }',
      'Dale una tarea que requiera razonamiento complejo en algún punto: analizar las tradeoffs de arquitectura entre 3 opciones de almacenamiento de fotos para el portal (Supabase Storage vs Cloudinary vs S3).',
      'Corre el script y revisa la respuesta. ¿Está usage.advisor_uses > 0? ¿El análisis es más profundo que lo que obtienes sin el advisor?',
      'Compara el costo: revisa usage.input_tokens, usage.output_tokens y usage.advisor_tokens. ¿Cuánto costó el advisor vs el total?',
    ],
    checkpoint: 'El Advisor Strategy funciona correctamente cuando: (1) La llamada no requiere dos requests separados. (2) usage.advisor_uses es mayor que 0 para una tarea compleja. (3) La calidad del análisis arquitectónico es notablemente más profunda que con Sonnet solo. Ese es el momento en que el pattern hace sentido para tu stack.',
  },
}

// ─── LECCIÓN CIERRE: CCA — CERTIFICACIÓN OFICIAL ─────────────────────────────
export const CCA_LESSON = {
  id: 'mod_close_cca',
  num: '10.1',
  title: 'Claude Certified Architect: valida lo que aprendiste oficialmente',
  duration: '15 min',
  xpReward: 50,
  videoId: 'G7iPM9oWhZE',
  videoCaption: 'Claude Certified Architect Foundations — guía de preparación 2026',
  content: [
    {
      type: 'intro',
      text: 'Completaste Claude Academy. Todo lo que estudiaste aquí mapea directamente a los 5 dominios de la certificación oficial Claude Certified Architect (CCA) Foundations, lanzada por Anthropic el 12 de marzo de 2026. Esta lección te muestra exactamente cómo lo que aprendiste corresponde a cada dominio del examen y qué pasos dar para obtener la certificación.',
    },
    {
      type: 'concept',
      title: '¿Qué es la certificación CCA Foundations?',
      body: 'El Claude Certified Architect — Foundations es la primera credencial técnica oficial de Anthropic. Valida que puedes diseñar e implementar soluciones de producción con Claude: arquitectura agéntica, Claude Code, MCP, prompt engineering y uso responsable. El examen tiene 60 preguntas de opción múltiple con escenarios de producción reales. Score mínimo para aprobar: 720/1000. Formato completamente en línea, proctored. Disponible a través del Claude Partner Network — la membresía es gratuita para cualquier organización o desarrollador individual.',
      highlight: 'La certificación está respaldada por $100 millones en inversión para partners. Accenture, Deloitte e Infosys están entrenando activamente a miles de empleados para obtenerla. Es la señal profesional que el ecosistema está adoptando como estándar en 2026.',
    },
    {
      type: 'cards',
      title: 'Los 5 dominios del examen y cómo mapean a este curso',
      items: [
        {
          name: 'Dominio 1: Agentic Architecture (27%)',
          tag: 'Más pesado',
          color: '#EF4444',
          desc: 'Loops agénticos, orquestación multi-agente, subagentes, human-in-the-loop, evals. → Módulo 4 completo (lecciones 4.5, 4.6, 4.7) + lección 2.7 Advisor Strategy.',
        },
        {
          name: 'Dominio 2: Claude Code Configuration',
          tag: 'Técnico',
          color: '#F97316',
          desc: 'CLAUDE.md, AGENTS.md, hooks, worktrees, Plan Mode, Skills, bundled skills. → Módulo 2 completo (lecciones 2.1-2.6) + Módulo Skills (S.1-S.5).',
        },
        {
          name: 'Dominio 3 + 4: Tool Design & MCP Integration (40% combinados)',
          tag: 'El más examinado',
          color: '#6366F1',
          desc: 'JSON Schema para tools, primitivas MCP (tools/resources/prompts), stdio vs SSE, autenticación MCP, Prompt Caching, Batch API, cache diagnostics. → Módulo 5 (5.4) + lecciones 2.5, 2.7.',
        },
        {
          name: 'Dominio 5: Safety & Responsible AI',
          tag: 'No subestimar',
          color: '#10B981',
          desc: 'HHH framework, manejo de alucinaciones, prompt injection (especialmente Haiku), privacidad, sesgos, evals de seguridad, Haiku zero-injection-protection. → Módulo IA Responsable (E.1) completo.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Cómo obtener la certificación — pasos exactos',
      body: 'Paso 1: Únete al Claude Partner Network en anthropic.com/partners — es gratuito y se aprueba en 1-3 días hábiles. Paso 2: Completa los cursos preparatorios en Anthropic Academy (anthropic.skilljar.com) — 13 cursos gratuitos, especialmente: Claude 101, Building with the Claude API, Introduction to MCP, y Claude Code training. Paso 3: Descarga el CCA Foundations Exam Guide PDF oficial desde el portal de partners y estudia las Task Statements de cada dominio. Paso 4: Realiza los exámenes de práctica disponibles. Score de 900+ en práctica con comprensión real (no memorización) = listo para el examen real. Paso 5: Agenda el examen desde el portal de partners.',
      highlight: 'Recurso gratuito validado por la comunidad: claudecertifications.com tiene 25 preguntas de práctica gratuitas y guías de los 5 dominios. El sitio claudecertifiedarchitects.com tiene el CALM framework para Context Management, que es lo que más confunde en el Dominio 4.',
    },
    {
      type: 'concept',
      title: 'La trampa más común: code guarantees, prompts suggest',
      body: 'El examen es scenario-based — no memorización de definiciones. El principio más examinado es: "code guarantees, prompts suggest." Un ejemplo del tipo de pregunta: "Un agente de e-commerce no debe acceder a pedidos sin un ID de usuario verificado. ¿Cómo garantizas esto?" La respuesta incorrecta: "Añadir en el system prompt: siempre verifica el ID antes de consultar pedidos." La respuesta correcta: "Añadir un prerequisito programático en el código que bloquea la consulta de pedidos hasta tener un ID verificado." Los prompts son instrucciones que Claude puede razonar de formas inesperadas. El código es determinista.',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: '¿Cuál es el dominio más pesado del examen CCA Foundations y qué porcentaje representa?',
      opts: [
        'Safety & Responsible AI con 35% — Anthropic prioriza la seguridad sobre todo lo demás',
        'Agentic Architecture & Orchestration con 27% — el dominio más examinado del examen',
        'Claude Code Configuration con 30% — la herramienta más usada en producción',
        'Tool Design & MCP Integration con 40% — el protocolo es la base del ecosistema',
      ],
      correct: 1,
      exp: 'Agentic Architecture & Orchestration representa el 27% del examen — el dominio individual más pesado. Tool Design & MCP Integration combinado con Prompt Engineering & Context Management representa el 40%, pero son dos dominios. Si tienes poco tiempo de estudio, empieza por Agentic Architecture.',
    },
    {
      q: 'En el examen CCA, un escenario pregunta cómo garantizar que un agente NUNCA acceda a datos sin verificación de identidad. ¿Cuál es la respuesta correcta?',
      opts: [
        'Añadir en el system prompt: "Siempre verifica la identidad del usuario antes de acceder a cualquier dato"',
        'Implementar la verificación como prerequisito programático en el código — el código es determinista, los prompts son instrucciones que pueden interpretarse de formas inesperadas',
        'Usar Extended Thinking para que Claude razone más cuidadosamente antes de acceder',
        'Configurar un hook PreToolUse que le recuerde a Claude verificar la identidad',
      ],
      correct: 1,
      exp: 'Este es el principio más examinado: "code guarantees, prompts suggest." Un prompt puede ignorarse, malinterpretarse o bypasearse en escenarios edge. El código es determinista. Para requisitos de seguridad críticos, la garantía debe estar en el código — no en las instrucciones al modelo.',
    },
    {
      q: '¿Qué debes completar ANTES de poder agendar el examen CCA Foundations?',
      opts: [
        'Pagar una tarifa de certificación de $299 directamente a Anthropic',
        'Unirte al Claude Partner Network gratuitamente en anthropic.com/partners',
        'Completar los 13 cursos de Anthropic Academy con una nota mínima de 80%',
        'Tener al menos 6 meses de experiencia usando Claude en producción verificable',
      ],
      correct: 1,
      exp: 'El Claude Partner Network es el prerequisito — y es gratuito. No hay tarifa de membresía. Una vez dentro, tienes acceso al Exam Guide PDF oficial, los exámenes de práctica, y el sistema de agendamiento del examen. El Partner Network tiene acceso en 1-3 días hábiles después de la solicitud.',
    },
  ],
  challenge: {
    title: 'Reto Z.1 — Prepárate para la certificación',
    desc: 'Los pasos concretos para llegar al examen en las próximas 4-8 semanas.',
    steps: [
      'Únete al Claude Partner Network: ve a anthropic.com/partners → "Join the Partner Network" → completa el formulario (nombre, empresa/individuo, caso de uso). Aprobación en 1-3 días hábiles.',
      'Una vez aprobado: accede a Anthropic Academy (anthropic.skilljar.com) y completa en orden: Claude 101, Building with the Claude API, Introduction to MCP, Claude Code training.',
      'Descarga el CCA Foundations Exam Guide PDF oficial desde el portal de partners. Lee específicamente las Task Statements de cada dominio — son las que el examen examina directamente.',
      'Haz las 25 preguntas de práctica gratuitas en claudecertifications.com. Para cada respuesta incorrecta, lee la explicación completa — la comprensión del razonamiento es más valiosa que memorizar la respuesta.',
      'Mapea mentalmente cada lección de Claude Academy a su dominio del examen. ¿Cuáles dominios sientes más sólidos? ¿Cuáles necesitan repaso?',
      'Cuando pases consistentemente el 80%+ en práctica con comprensión real (no memorización): agenda el examen desde el portal de partners.',
    ],
    checkpoint: 'Estás listo para el examen cuando: (1) Puedes explicar con tus propias palabras el principio "code guarantees, prompts suggest" con un ejemplo concreto tuyo. (2) Puedes diseñar en papel un sistema multi-agente con orquestador y subagentes para un caso de uso real. (3) Scores consistentes de 80%+ en práctica con preguntas que no has visto antes. La certificación es la validación formal de todo lo que construiste en Claude Academy.',
  },
}
