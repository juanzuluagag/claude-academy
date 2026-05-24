// ─── LECCIÓN S.5: Debuggear y perfeccionar tus Skills ────────────────────────
const SKILLS_DEBUG_LESSON = {
  id: 'mskills_l5',
  num: '4.5',
  title: 'Debuggear y perfeccionar tus Skills: los errores que todos cometen',
  duration: '25 min',
  xpReward: 70,
  videoId: 'VLIYe7vdNiI',
  videoCaption: 'Debuggear Skills de Claude: errores comunes y cómo resolverlos — 2026',
  content: [
    {
      type: 'intro',
      text: 'Creaste tu primera Skill. La subiste. Claude no la carga. O la carga cuando no debe. O la carga pero no sigue las instrucciones. Estos 5 problemas aparecen en el 90% de las Skills nuevas — y todos tienen causa exacta y fix concreto. Esta lección, basada en la guía oficial de Anthropic traducida por la comunidad tododeia, te da las herramientas para diagnosticar y corregir cualquier Skill en menos de 15 minutos.',
    },
    {
      type: 'cards',
      title: 'Las 5 reglas duras del frontmatter YAML — ninguna es opcional',
      items: [
        {
          name: 'Regla 1: kebab-case estricto',
          tag: 'La más ignorada',
          color: '#EF4444',
          desc: 'El name va en kebab-case: sin espacios, sin mayúsculas, sin guión bajo. "mi-skill-de-fotografia" ✅. "MiSkill" ❌. "mi_skill" ❌. Además debe coincidir exactamente con el nombre de la carpeta. Un carácter diferente y Claude no la encuentra.',
        },
        {
          name: 'Regla 2: sin "claude" ni "anthropic"',
          tag: 'Rompe el upload',
          color: '#F97316',
          desc: 'El name no puede contener las palabras "claude" ni "anthropic". Están reservadas por Anthropic. Si las usas, el upload falla silenciosamente. "fotografia-skill" ✅. "claude-fotografia" ❌.',
        },
        {
          name: 'Regla 3: sin < ni > en ningún lado',
          tag: 'Seguridad',
          color: '#8B5CF6',
          desc: 'Los corchetes angulares están prohibidos en todo el frontmatter. El frontmatter viaja dentro del system prompt de Claude — los tags XML podrían inyectar instrucciones. Si necesitas un placeholder, usa [NOMBRE] con corchetes cuadrados.',
        },
        {
          name: 'Regla 4: description con QUÉ + CUÁNDO',
          tag: 'La más crítica',
          color: '#6366F1',
          desc: 'La description debe decir QUÉ hace la Skill Y CUÁNDO cargarla con frases-disparador concretas. Es lo único que Claude lee en cada conversación nueva. Sin triggers explícitos, Claude nunca sabe cuándo activarla. Máximo 1024 caracteres.',
        },
        {
          name: 'Regla 5: SKILL.md bajo 5,000 palabras',
          tag: 'Performance',
          color: '#10B981',
          desc: 'El cuerpo del SKILL.md idealmente bajo 5,000 palabras. Lo que pase ese límite va a references/ — Claude lo carga solo cuando lo necesita. Una Skill pesada hace las respuestas lentas y consume más tokens innecesariamente.',
        },
      ],
    },
    {
      type: 'cards',
      title: 'Los 5 errores típicos — con causa exacta y fix',
      items: [
        {
          name: 'Error 1: "Could not find SKILL.md"',
          tag: 'Al subir',
          color: '#EF4444',
          desc: 'Causa: el archivo no se llama exactamente SKILL.md. Es case-sensitive — skill.md, Skill.md y SKILL.MD no funcionan. Fix: renombra a SKILL.md exacto. Verifica con "ls -la" en la carpeta antes de comprimir el .zip.',
        },
        {
          name: 'Error 2: Skill nunca se carga sola',
          tag: 'Más frecuente',
          color: '#F97316',
          desc: 'Causa: la description es vaga o no tiene frases-disparador. Claude la lee y no encuentra match con lo que el usuario dijo. Fix: reescribe la description con triggers específicos — frases que el usuario realmente diría. Usa el prompt de diagnóstico de esta lección.',
        },
        {
          name: 'Error 3: Skill se carga cuando no toca',
          tag: 'Over-triggering',
          color: '#F59E0B',
          desc: 'Causa: la description es demasiado amplia. No tiene negative triggers que aclaren límites. Fix: acota el dominio ("para PDFs de contratos legales, no PDFs en general") y agrega explícitamente "NO la uses para [contexto]" al final de la description.',
        },
        {
          name: 'Error 4: Claude no sigue las instrucciones',
          tag: 'Más frustrante',
          color: '#8B5CF6',
          desc: 'Causa: SKILL.md verboso, reglas críticas enterradas a mitad del documento, lenguaje ambiguo. Fix: pon lo crítico al inicio bajo ## CRITICAL. Usa bullets numerados, no párrafos largos. Reemplaza "asegúrate de validar" con pasos concretos ejecutables.',
        },
        {
          name: 'Error 5: Respuestas lentas o difusas',
          tag: 'Performance',
          color: '#6366F1',
          desc: 'Causa: SKILL.md pasó las 5,000 palabras o tienes 50+ Skills activas simultáneamente. Fix: mueve documentación detallada a references/. En el SKILL.md pon solo "para detalle de X, consulta references/x.md". Deja el núcleo liviano.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Los 3 niveles de testing: saber si tu Skill realmente funciona',
      body: 'Una Skill que "parece funcionar" no es lo mismo que una Skill que funciona. Hay 3 niveles de verificación: (1) Triggering tests — corre 10-20 queries que deberían activar la Skill. Meta: 90% trigger automático sin que invoques manualmente. (2) Functional tests — para cada caso de uso, verifica que el output tenga el formato y contenido esperado. (3) Performance comparison — corre el mismo task con la Skill activa y desactivada. Compara: ¿cuántas idas y vueltas con Claude, cuántos tokens, cuánto tardó? Si con la Skill es peor en alguna de estas métricas, hay algo que optimizar.',
      highlight: 'El test más rápido: en una conversación nueva con la Skill activa, pregunta "¿cuándo usarías la Skill llamada [nombre]?". Claude te cita la description y te dice qué triggers reconoce. Si las frases que menciona no coinciden con lo que tus usuarios realmente dicen, la description necesita reescritura.',
    },
    {
      type: 'concept',
      title: 'Los 5 patrones que Anthropic ha visto funcionar en producción',
      body: 'Workflow secuencial: pasos en orden estricto con validación entre cada uno — para procesos que no pueden saltarse etapas. Coordinación multi-MCP: el output de un MCP es el input del siguiente (Figma → Drive → Linear) — para flujos que cruzan varios servicios. Refinamiento iterativo: la Skill evalúa su propio output y mejora en bucle hasta cumplir criterios de calidad — para reportes y drafts largos. Selección de tool por contexto: árbol de decisión que elige la herramienta según el input — para el mismo objetivo con distintos caminos. Inteligencia de dominio embebida: reglas de compliance o conocimiento especializado dentro de la lógica — para sectores regulados o procesos críticos.',
      highlight: 'La pregunta para elegir el patrón correcto: ¿el flujo tiene orden estricto? → secuencial. ¿Toca varios servicios? → multi-MCP. ¿La calidad mejora con iteraciones? → iterativo. ¿El tool depende del input? → context-aware. ¿Necesita reglas de negocio? → domain-specific.',
    },
    {
      type: 'concept',
      title: '4 prompts copiables para diagnosticar y corregir cualquier Skill',
      body: 'Prompt 1 — Diagnóstico de triggers: "¿Cuándo usarías la Skill llamada [nombre]? Dame: (1) la description literal que tienes cargada, (2) tres frases que la activarían, (3) tres que NO la activarían, (4) qué mejorarías en la description." Prompt 2 — Revisar SKILL.md antes de subir: "Revisa este SKILL.md: [pega el contenido]. Verifica: frontmatter en kebab-case, sin claude/anthropic, sin <>, description con QUÉ+CUÁNDO, bajo 1024 chars. Dame el listado de problemas y el SKILL.md corregido." Prompt 3 — Refinar description que no triggerea: "Mi Skill [nombre] no se carga aunque el usuario dice: [queries]. Description actual: [description]. Reescríbela con sinónimos y parafraseos que cubran esos queries. Bajo 1024 chars. Sin <>." Prompt 4 — Mover detalle a references/: "Mi SKILL.md tiene más de 5,000 palabras. Separa: SKILL.md liviano con las reglas críticas + links a references/. Un archivo references/[tema].md por cada tema profundo. Dime el conteo de palabras antes y después."',
      highlight: null,
    },
  ],
  quiz: [
    {
      q: 'Tu Skill se subió sin error pero Claude nunca la carga automáticamente — siempre tienes que invocarla manualmente. ¿Cuál es la causa más probable y el fix?',
      opts: [
        'El SKILL.md tiene más de 5,000 palabras — hay que dividirlo en references/',
        'La description es vaga o no tiene frases-disparador concretas — Claude la lee y no encuentra match con lo que el usuario dijo. Fix: reescribir con triggers específicos',
        'El name tiene mayúsculas — hay que pasarlo a kebab-case',
        'La Skill tiene demasiados archivos en references/ — hay que simplificar la estructura',
      ],
      correct: 1,
      exp: 'La description es lo único que Claude lee en cada conversación nueva. Si no tiene frases concretas que el usuario realmente diría, Claude no sabe cuándo activarla. El fix es reescribir con triggers explícitos: "Úsala cuando el usuario diga \'revisar contrato\', \'validar cláusulas\' o \'analizar este PDF legal\'."',
    },
    {
      q: 'Construiste una Skill de revisión de contratos PDF. Ahora Claude la activa también para cualquier pregunta sobre documentos en general. ¿Cómo lo corriges?',
      opts: [
        'Reduces el tamaño del SKILL.md moviendo contenido a references/',
        'Cambias el name a kebab-case estricto',
        'Acota el dominio en la description ("para PDFs de contratos legales, no PDFs en general") y añades "NO la uses para [contexto fuera del dominio]" al final',
        'Añades más ejemplos positivos en el cuerpo del SKILL.md',
      ],
      correct: 2,
      exp: 'El over-triggering se corrige en la description, no en el cuerpo. Necesitas dos cosas: acotar el dominio ("contratos legales, no documentos en general") y agregar negative triggers explícitos. Claude usa la description para decidir cuándo activar la Skill — si es demasiado amplia, la activa en exceso.',
    },
    {
      q: '¿Cuál es el test más rápido para verificar si los triggers de tu Skill están bien escritos, sin correr una suite de tests completa?',
      opts: [
        'Subir la Skill, usarla 10 veces y contar cuántas veces se activó sola',
        'En una conversación nueva con la Skill activa, preguntarle a Claude "¿cuándo usarías la Skill llamada [nombre]?" — Claude cita la description y te dice qué triggers reconoce',
        'Revisar el SKILL.md manualmente buscando errores en el frontmatter',
        'Comparar el costo de tokens con la Skill activa vs desactivada',
      ],
      correct: 1,
      exp: 'Es el test de 30 segundos que la comunidad usa más. Claude te dice literalmente qué frases activarían la Skill. Si las frases que cita no coinciden con lo que tus usuarios realmente dicen, sabes exactamente qué reescribir en la description — sin necesitar un setup de tests formal.',
    },
  ],
  challenge: {
    title: 'Reto S.5 — Audita y corrige una Skill tuya',
    desc: 'Aplica los 5 criterios de diagnóstico a una Skill real — la que creaste en S.4 o cualquier otra.',
    steps: [
      'Abre el SKILL.md de tu Skill más reciente. Verifica las 5 reglas del frontmatter: name en kebab-case, sin "claude"/"anthropic", sin <>, description con QUÉ+CUÁNDO bajo 1024 chars, cuerpo bajo 5,000 palabras. Anota cuántas reglas cumple.',
      'Test de triggers rápido: en una conversación nueva con la Skill activa, escribe "¿cuándo usarías la Skill llamada [nombre]?". ¿Las frases que cita Claude son las que tus usuarios realmente escribirían?',
      'Si el test de triggers falla, usa el Prompt 3 de la lección para refinar la description. Reemplaza la description actual con la nueva versión. Sube la Skill actualizada.',
      'Test de over-triggering: escribe 3 queries de un dominio cercano pero diferente. ¿Claude activa la Skill cuando no debe? Si sí, agrega negative triggers a la description.',
      'Si el SKILL.md tiene más de 5,000 palabras, usa el Prompt 4 para separar el detalle a references/. Verifica el conteo antes y después.',
      'Corre el test de performance: mismo task con Skill activa vs desactivada. ¿El resultado es mejor con la Skill? ¿Cuántos menos turnos necesitó Claude para llegar al resultado correcto?',
    ],
    checkpoint: 'La Skill está optimizada cuando: (1) Se activa en al menos 8 de cada 10 queries que deberían activarla. (2) No se activa en queries fuera de su dominio. (3) Claude sigue las instrucciones sin necesitar corrección en el primer intento. (4) El SKILL.md está bajo 5,000 palabras. Si cumples los 4 criterios, tienes una Skill de nivel producción.',
  },
}

// ─── MÓDULO SKILLS — Lecciones completas ────────────────────────────────────

export const SKILLS_LESSONS = [
  {
    id: 'mskills_l1',
    num: '4.1',
    title: '¿Qué son las Skills y por qué cambian todo?',
    duration: '20 min',
    xpReward: 55,
    videoId: 'dOxUroR57xs',
    videoCaption: 'Agent Skills — Introducción oficial de Anthropic',
    content: [
      {
        type: 'intro',
        text: 'Imagina que cada vez que contratas un empleado nuevo tienes que explicarle desde cero cómo trabaja tu empresa, qué herramientas usa y cómo prefieres las cosas. Las Skills son el "manual de inducción" que Claude lee automáticamente — lo explicas una vez, y nunca más tienes que repetirte.',
      },
      {
        type: 'concept',
        title: '¿Qué es una Skill exactamente?',
        body: 'Una Skill es una carpeta con un archivo llamado SKILL.md. Ese archivo contiene: (1) Un encabezado YAML con nombre y descripción. (2) Instrucciones en Markdown que Claude sigue cuando la Skill es relevante. Nada más. No es código complejo, no es una integración difícil — es un documento de texto muy bien escrito que le enseña a Claude a hacer algo específico de forma consistente y repetible.',
        highlight: 'Analogía perfecta: una Skill es como el SOP (Standard Operating Procedure) de tu empresa, pero escrito para que lo lea una IA en lugar de un empleado nuevo.',
      },
      {
        type: 'concept',
        title: 'El problema que resuelven las Skills',
        body: 'Sin Skills: cada conversación nueva con Claude empieza desde cero. Tienes que repetir "mi empresa se llama X", "prefiero el formato Y", "siempre incluye Z en los reportes". Con Skills: Claude carga ese contexto automáticamente en cada sesión. Es la diferencia entre un asistente que te conoce desde el día uno versus uno que te olvida cada noche.',
        highlight: null,
      },
      {
        type: 'cards',
        title: 'Los 3 tipos de Skills',
        items: [
          { name: 'Pre-built (Nativas)', tag: 'Listas ya', color: '#6366F1', desc: 'Creadas por Anthropic. Sin instalación. Incluyen: pptx, xlsx, docx, pdf. Se activan solas cuando Claude detecta que las necesitas. Disponibles para todos los planes pagos.' },
          { name: 'Comunidad (GitHub)', tag: 'Instalar', color: '#10B981', desc: 'Miles de Skills creadas por desarrolladores. Cubren desde diseño frontend hasta análisis legal. Instalación en minutos desde GitHub. Más de 85,000 indexadas en 2026.' },
          { name: 'Custom (Tuyas)', tag: 'Crear', color: '#F97316', desc: 'Skills que creas para tu caso de uso específico. Tu flujo, tu empresa, tu estilo. Son las más valiosas porque nadie más en el mundo las tiene — encapsulan tu conocimiento único.' },
        ],
      },
      {
        type: 'concept',
        title: 'Cómo Claude "descubre" las Skills — Progressive Disclosure',
        body: 'Claude no carga todas las Skills al inicio (sería muy costoso en tokens). En cambio usa un sistema elegante: al abrir una sesión, Claude lee SOLO el nombre y descripción de cada Skill (~100 tokens por Skill). Cuando detecta que una tarea coincide, ENTONCES carga el contenido completo (<5,000 tokens). Es como una biblioteca enorme donde solo lees los títulos hasta que necesitas un libro específico.',
        highlight: 'Esto significa que puedes tener cientos de Skills instaladas sin que afecten la velocidad o el costo de las conversaciones donde no se usan.',
      },
      {
        type: 'concept',
        title: 'SKILL.md es portable: funciona en Claude Code, Cursor y más',
        body: 'Una de las ventajas más subestimadas de las Skills: el archivo SKILL.md no está atado a Claude Code. La misma Skill que usas en Claude Code funciona en Cursor con la extensión de Claude instalada, y en cualquier herramienta que adopte el estándar de Skills de Anthropic. Esto significa que la inversión en escribir una buena Skill de "correos-empresa" o "fotografia-retrato" vale para todos tus entornos de trabajo, no solo para uno. Guarda tus Skills personalizadas en ~/.claude/skills/ — esa carpeta se aplica globalmente en cualquier proyecto que abras con Claude Code.',
        highlight: 'Consejo práctico: si cambias de Claude Code a Cursor o viceversa, tus Skills siguen funcionando. Si colaboras con un equipo, puedes versionar las Skills del proyecto en una carpeta .claude/skills/ en el repositorio compartido — todos en el equipo las heredan automáticamente.',
      },
      {
        type: 'cards',
        title: 'Skills vs Prompts vs MCP — las diferencias clave',
        items: [
          { name: 'Prompt', tag: 'Un solo uso', color: '#64748B', desc: 'Instrucción para una conversación específica. Muere al cerrar el chat. Debes repetirlo cada vez.' },
          { name: 'Skill', tag: 'Reutilizable', color: '#F97316', desc: 'Conocimiento especializado persistente. Se activa automáticamente cuando es relevante. Se escribe una vez, funciona siempre. Y es portable: el mismo SKILL.md funciona en Claude Code, Cursor con extensión Claude, y cualquier herramienta que respete el estándar.' },
          { name: 'MCP', tag: 'Conexión', color: '#EC4899', desc: 'Conecta Claude con herramientas externas (GitHub, Slack, Drive). Se complementa con Skills: MCP da el acceso, la Skill da el cómo usarlo correctamente.' },
        ],
      },
    ],
    quiz: [
      {
        q: '¿Cuál es la analogía más precisa para una Skill de Claude?',
        opts: [
          'Un plugin de navegador que agrega botones nuevos a la interfaz',
          'El manual de inducción de tu empresa escrito para que una IA lo lea automáticamente en cada sesión',
          'Una contraseña para desbloquear funciones premium de Claude',
          'Un chatbot separado con su propia personalidad independiente',
        ],
        correct: 1,
        exp: 'Las Skills son documentos de instrucciones persistentes — como SOPs o manuales de inducción. Claude los lee cuando son relevantes y los aplica consistentemente, igual que un empleado que interiorizó el manual desde el primer día.',
      },
      {
        q: '¿Qué es "Progressive Disclosure" en el contexto de Skills?',
        opts: [
          'Las Skills se desbloquean gradualmente conforme el usuario sube de nivel en Claude',
          'Claude solo lee nombre y descripción de cada Skill al inicio, y carga el contenido completo solo cuando la tarea es relevante',
          'Las instrucciones de la Skill se revelan al usuario de forma gradual durante la conversación',
          'Anthropic lanza Skills nuevas de forma progresiva cada semana',
        ],
        correct: 1,
        exp: 'Progressive Disclosure es el sistema de carga eficiente: ~100 tokens por Skill en el escaneo inicial. El contenido completo (<5,000 tokens) solo se carga cuando Claude decide que la Skill es relevante. Permite cientos de Skills sin impacto en velocidad.',
      },
      {
        q: 'Tienes una Skill para "escribir correos en el estilo de tu empresa". ¿Cuándo la activa Claude?',
        opts: [
          'Cada vez que abres Claude, sin importar la tarea',
          'Solo cuando escribes el comando /email explícitamente',
          'Automáticamente cuando detecta que la tarea involucra redactar correos profesionales',
          'Nunca de forma automática — las Skills siempre requieren invocación manual',
        ],
        correct: 2,
        exp: 'Claude escanea la descripción de la Skill y la compara con la tarea actual. Si le pides "escríbeme un correo para el cliente X", Claude cargará la Skill de correos automáticamente — sin que debas mencionarla.',
      },
    ],
    challenge: {
      title: 'Reto S.1 — Explorar las Skills nativas de Anthropic',
      desc: 'Activa y prueba las Skills pre-construidas que ya tienes disponibles en claude.ai.',
      steps: [
        'En claude.ai, ve a tu avatar (esquina superior derecha) → Settings.',
        'Busca "Capabilities" → verifica que "Code execution and file creation" esté activado.',
        'Ve a "Customize" → "Skills" y observa las Skills pre-built disponibles.',
        'Activa las Skills de docx, pptx, xlsx y pdf si no están activas.',
        'Inicia un chat nuevo y escribe: "Crea un documento Word con un plan de trabajo de 30 días para aprender Claude IA, incluyendo una tabla con actividades diarias y columna de estado."',
        'Observa que Claude genera un archivo .docx real descargable, no solo texto plano.',
        'Prueba también: "Crea una presentación PowerPoint de 5 slides sobre los beneficios de Claude para equipos de trabajo."',
      ],
      checkpoint: 'Con Skills activas, Claude genera archivos reales (.docx, .pptx) que puedes abrir en Word y PowerPoint. Sin Skills activas, solo mostraría el texto. Esa diferencia concreta es el valor de las Skills.',
    },
  },

  {
    id: 'mskills_l2',
    num: '4.2',
    title: 'Instalar las mejores Skills de la comunidad',
    duration: '30 min',
    xpReward: 65,
    videoId: 'T9aRN5JkmL8',
    videoCaption: 'Instalando Skills desde GitHub — tutorial paso a paso',
    content: [
      {
        type: 'intro',
        text: 'El ecosistema de Skills explotó desde octubre 2025. Hay más de 85,000 Skills indexadas. El reto ya no es encontrarlas — es saber cuáles valen la pena. Aquí están las mejores, verificadas por estrellas GitHub, cantidad de instalaciones reales y reviews de la comunidad.',
      },
      {
        type: 'concept',
        title: '3 métodos para instalar Skills en Claude Code',
        body: 'Método 1 — Plugin Manager (más fácil): En una sesión de Claude Code escribe /plugin, ve a "Discover" y busca por nombre. Un Enter la instala. Método 2 — Copiar carpeta (más control): Clona el repo de GitHub y copia la carpeta de la Skill a ~/.claude/skills/ para uso personal, o a .claude/skills/ dentro de tu proyecto para uso específico. Método 3 — Claude.ai Settings: Ve a Settings → Customize → Skills → sube el ZIP de la Skill para usarla en el chat.',
        highlight: '~/.claude/skills/ = disponible en TODOS tus proyectos. .claude/skills/ dentro del repo = solo ese proyecto. Elige según si la Skill es personal o específica de un cliente/tecnología.',
      },
      {
        type: 'cards',
        title: '🏆 Top Skills verificadas por la comunidad (mayo 2026)',
        items: [
          { name: 'find-skills — Vercel', tag: '418K installs', color: '#10B981', desc: 'La meta-skill: descubre e instala otras Skills desde dentro de Claude Code. Punto de partida recomendado para cualquier nuevo usuario de Skills. Instalar primero.' },
          { name: 'frontend-design — Anthropic', tag: '124K installs', color: '#6366F1', desc: 'Elimina el "AI slop" en diseño. Produce UIs memorables con tipografía y layouts creativos en lugar de genérico azul-sobre-blanco. Para React, HTML y artefactos.' },
          { name: 'nutlope/hallmark', tag: '🆕 Mayo 2026', color: '#EC4899', desc: 'La Skill de diseño más importante lanzada en 2026. 22 temas y 65 gates anti-"AI slop" que Claude verifica antes de entregar cualquier UI: tipografía, color, layout, motion y microinteracciones. Instala: npx skills add nutlope/hallmark. Esencial para el Proyecto 9.3.' },
          { name: 'obra/superpowers', tag: '40.9K ⭐ GitHub', color: '#8B5CF6', desc: 'El framework de desarrollo más completo. 7 fases: Brainstorm → Spec → Plan → TDD → Subagentes → Review → Finalize. Literalmente elimina código sin tests.' },
          { name: 'alirezarezvani/claude-skills', tag: '5.2K ⭐ GitHub', color: '#F97316', desc: '245+ Skills: ingeniería, marketing, producto, C-level. 359 scripts Python stdlib-only. Compatible con Claude Code, Cursor, Codex y Gemini CLI.' },
          { name: 'NeoLabHQ/code-review', tag: 'Multi-agente', color: '#0EA5E9', desc: 'Code review con 6 agentes especializados paralelos: bug-hunter, security-auditor, quality-reviewer, contracts-reviewer, historical-context, test-coverage.' },
        ],
      },
      {
        type: 'concept',
        title: 'Skills nativas de Claude Code — ya instaladas, sin setup',
        body: 'Claude Code incluye 5 bundled skills disponibles en CADA sesión sin instalar nada: /simplify — lanza 3 agentes de revisión en paralelo sobre el código modificado (reuso, calidad, eficiencia) y aplica los fixes automáticamente. Úsalo después de implementar cualquier feature. /batch — descompone un cambio grande en hasta 30 unidades independientes, lanza un agente por unidad en worktrees aislados y abre un PR por unidad. Para refactorizaciones masivas. /debug — guía el proceso de debugging con análisis de causa raíz antes de proponer fixes. /loop — repite un prompt en intervalos definidos, útil para monitoreo. /claude-api — orientado a trabajo con la API de Claude directamente. Son las Skills más usadas del ecosistema y la mayoría las ignora porque no requieren instalación.',
        highlight: 'Flujo recomendado post-implementación: terminas una feature → /simplify → Claude lanza 3 agents de revisión en paralelo → fixes automáticos → commit. Añadir este paso al final de cada sesión elimina una categoría entera de bugs antes del PR.',
      },
      {
        type: 'concept',
        title: 'gstack (Garry Tan, CEO de Y Combinator) — el toolkit más influyente de 2026',
        body: 'gstack (github.com/garrytan/gstack, 97,000+ estrellas en GitHub) convierte Claude Code en un equipo de ingeniería virtual con 23 slash commands. El loop de un sprint completo: /office-hours (6 preguntas de presión que refinan el scope antes de escribir código) → /plan-ceo-review (scope review en 4 modos: expansion/selectivo/hold/reduction) → /plan-eng-review (arquitectura, data flow, edge cases, test matrix) → build → /review (staff engineer que scannea bugs y auto-fixes) → /qa (QA lead que abre Chromium real y corre el flujo) → /ship. Cada skill pasa su output a la siguiente — nada se pierde. Instalación: npx skills add garrytan/gstack.',
        highlight: 'Garry Tan reportó 10,000-20,000 líneas de código y 100 PRs por semana usando este stack part-time mientras dirige Y Combinator. Tómalo como ceiling, no como floor. La estructura del workflow es lo realmente valioso.',
      },
      {
        type: 'concept',
        title: 'Superpowers (Jesse Vincent / Prime Radiant) — estructura de desarrollo con IA',
        body: 'Superpowers (29,000+ estrellas, aceptado en el marketplace oficial de Anthropic el 15 enero 2026) implementa la metodología de desarrollo que todo senior developer reconocería: brainstorming socrático que refina requisitos antes de tocar código, TDD con ciclos red-green-refactor obligatorios (los tests deben fallar antes de implementar), ejecución por subagentes en paralelo con review intercalado, debugging de 4 fases con causa raíz obligatoria. Simon Willison describió a Jesse Vincent como "uno de los usuarios más creativos de coding agents que conozco." Instalación: /plugin install superpowers en Claude Code o desde el marketplace oficial en claude.com/plugins.',
        highlight: null,
      },
      {
        type: 'concept',
        title: 'marketingskills (Corey Haines) — para crecer tu negocio de fotografía',
        body: 'marketingskills (github.com/coreyhaines31/marketingskills) tiene Skills de marketing para Claude Code: CRO (optimización de conversiones), copywriting directo, SEO, analytics, email marketing, y growth engineering. Conectores MCP incluidos: GA4, Stripe, Mailchimp, Google Ads, Resend. Via Composio: HubSpot, Salesforce, Meta Ads, LinkedIn Ads, Google Sheets. Relevante directo para tu negocio: la skill de copywriting puede escribir el copy de tu sitio de fotografía en tu voz. La skill de SEO puede optimizar tus páginas de servicios. La skill de analytics conecta con GA4 para analizar el tráfico de tu portal. Instalación: npx skills add coreyhaines31/marketingskills.',
        highlight: null,
      },
      {
        type: 'concept',
        title: 'Los 3 repositorios esenciales del ecosistema',
        body: '1) github.com/anthropics/skills — Repositorio oficial de Anthropic. Skills pre-built y ejemplos de referencia. La fuente más confiable. 2) github.com/VoltAgent/awesome-agent-skills — La colección más grande: 1,000+ Skills de proveedores oficiales (Vercel, Google, DuckDB, GSAP) y comunidad. 3) github.com/ComposioHQ/awesome-claude-skills — 1,000+ Skills con foco en integraciones de apps (HubSpot, Salesforce, Slack, GitHub). Perfecto para automatización de negocio.',
        highlight: '⚠️ Regla de seguridad: solo instala Skills de fuentes que reconoces. Las Skills pueden ejecutar código en tu entorno. Revisa siempre el contenido de SKILL.md antes de instalar una Skill de un autor desconocido.',
      },
      {
        type: 'concept',
        title: 'Cómo verificar que una Skill está funcionando',
        body: 'En Claude Code: escribe /skills para listar todas las Skills activas. Puedes invocar una Skill directamente con /nombre-de-la-skill. Para verificar activación automática: pide una tarea relacionada y observa si Claude menciona o aplica la Skill. En claude.ai: Settings → Customize → Skills muestra cuáles están activas.',
        highlight: null,
      },
    ],
    quiz: [
      {
        q: '¿Cuál es la diferencia entre instalar una Skill en ~/.claude/skills/ vs .claude/skills/ de un proyecto?',
        opts: [
          'No hay diferencia real — ambas rutas producen el mismo resultado',
          '~/.claude/skills/ aplica a todos tus proyectos; .claude/skills/ solo al proyecto actual',
          '~/.claude/skills/ es para Skills de pago; .claude/skills/ para Skills gratuitas',
          '~/.claude/skills/ es más rápida; .claude/skills/ tiene acceso a más funciones',
        ],
        correct: 1,
        exp: 'La ruta personal (~/.claude/skills/) activa la Skill en cualquier proyecto. La ruta de proyecto (.claude/skills/) la limita al repositorio específico — ideal para Skills de un cliente particular, stack tecnológico específico, o para compartir con el equipo vía git.',
      },
      {
        q: 'La Skill "find-skills" de Vercel tiene 418,000 instalaciones. ¿Por qué debería ser tu primera instalación?',
        opts: [
          'Porque es la Skill oficial de Vercel y solo funciona con proyectos de Next.js',
          'Porque es una meta-skill que te ayuda a descubrir e instalar otras Skills desde dentro de Claude Code',
          'Porque es la Skill más rápida del ecosistema',
          'Porque es la única Skill que funciona sin Claude Code',
        ],
        correct: 1,
        exp: 'find-skills es una meta-skill: su función es ayudarte a encontrar e instalar otras Skills. Es el punto de partida recomendado para nuevos usuarios — como instalar un gestor de paquetes antes de instalar los paquetes.',
      },
      {
        q: '¿Por qué es obligatorio revisar SKILL.md antes de instalar una Skill de un autor desconocido?',
        opts: [
          'Para asegurarte de que esté escrita correctamente en español',
          'Porque las Skills pueden incluir scripts que ejecutan código en tu entorno, y una Skill maliciosa podría ser dañina',
          'Para calcular el costo en tokens antes de activarla',
          'Solo es una recomendación de estilo — no hay ningún riesgo real',
        ],
        correct: 1,
        exp: 'Las Skills avanzadas pueden incluir scripts en la carpeta scripts/ que se ejecutan en tu entorno. Una Skill de fuente maliciosa podría ejecutar comandos dañinos. Siempre verifica fuente y contenido — exactamente como verificarías un script de shell antes de ejecutarlo.',
      },
    ],
    challenge: {
      title: 'Reto S.2 — Instala frontend-design de Anthropic',
      desc: 'Instala la Skill más popular de Anthropic y comprueba la diferencia en calidad visual.',
      steps: [
        'Abre Terminal y verifica que tienes git: git --version',
        'Crea la carpeta de Skills personales: mkdir -p ~/.claude/skills',
        'Clona el repositorio oficial: git clone https://github.com/anthropics/skills.git /tmp/anthropic-skills',
        'Copia la Skill de diseño: cp -r /tmp/anthropic-skills/skills/frontend-design ~/.claude/skills/',
        'Verifica la instalación: ls ~/.claude/skills/',
        'Abre Claude Code: cd ~/Desktop && claude',
        'Lista las Skills activas: /skills (verifica que frontend-design aparece)',
        'Prueba SIN la Skill primero: "Crea un componente React para una tarjeta de usuario." Toma nota del resultado.',
        'Luego prueba CON la Skill activa la misma petición y compara la diferencia en diseño.',
      ],
      checkpoint: 'Con frontend-design activa, Claude toma decisiones específicas de tipografía, color y layout en lugar de producir el diseño genérico azul corporativo habitual. La diferencia debe ser visible y notable.',
    },
  },

  {
    id: 'mskills_l3',
    num: '4.3',
    title: 'Crea tu primera Skill desde cero',
    duration: '35 min',
    xpReward: 80,
    videoId: 'FMBiVlEMvQE',
    videoCaption: 'Creando Skills personalizadas — tutorial completo',
    content: [
      {
        type: 'intro',
        text: 'La Skill más valiosa que tendrás nunca es la que creaste tú. Nadie en el mundo tiene exactamente tu flujo de trabajo, tu empresa, tu estilo. Una Skill personalizada es un activo que se vuelve más valioso con el tiempo — encapsula tu conocimiento y lo hace reproducible infinitamente.',
      },
      {
        type: 'concept',
        title: 'Anatomía de un SKILL.md perfecto',
        body: 'Estructura mínima: frontmatter YAML (entre ---) con "name" y "description", seguido del cuerpo en Markdown. Estructura avanzada: agrega carpeta scripts/ para código ejecutable y references/ para documentos de apoyo. El frontmatter es lo más crítico: la descripción determina cuándo Claude activa la Skill.',
        highlight: null,
      },
      {
        type: 'comparison',
        bad: 'SKILL.md MALO:\n---\nname: mi-skill\ndescription: Ayuda con cosas de trabajo\n---\n# Instrucciones\nSé útil y responde bien.\n\n❌ Descripción vaga → Claude nunca la activa.\n❌ Instrucciones vacías → no cambia nada en las respuestas.',
        good: 'SKILL.md BUENO:\n---\nname: correos-empresa\ndescription: Redactar correos profesionales para Empresa X. Usar cuando el usuario pida escribir, responder o revisar correos de trabajo. Tono: formal pero cercano, nunca robótico.\n---\n# Correos Empresa X\n## Estilo obligatorio\n- Saludo: "Estimado/a [nombre],"\n- Cierre siempre: "Quedo atento a tus comentarios, [nombre]"\n## Estructura estándar\n1. Contexto en 1 oración\n2. Solicitud o información principal\n3. Próximos pasos concretos',
      },
      {
        type: 'cards',
        title: 'Los 4 tipos de Skills que puedes crear',
        items: [
          { name: 'Encoded Preference', tag: 'Más común', color: '#6366F1', desc: 'Encapsula tu estilo y preferencias. "Mis correos tienen este tono", "el código siempre va con estos estándares". Claude ya sabe escribir — esta Skill le dice CÓMO quieres TÚ que lo haga.' },
          { name: 'Capability Uplift', tag: 'Más potente', color: '#10B981', desc: 'Agrega capacidades nuevas con scripts Python, referencias técnicas o integraciones. Requiere más trabajo pero el resultado transforma lo que Claude puede hacer.' },
          { name: 'Workflow', tag: 'Para procesos', color: '#F59E0B', desc: 'Codifica un proceso de múltiples pasos que se repite. "Para code reviews: primero seguridad, luego performance, luego legibilidad." Garantiza consistencia en cada ejecución.' },
          { name: 'Domain Knowledge', tag: 'Para expertise', color: '#8B5CF6', desc: 'Inyecta conocimiento específico de tu industria. Terminología técnica, regulaciones, mejores prácticas internas. Convierte a Claude en un especialista de tu sector.' },
        ],
      },
      {
        type: 'concept',
        title: 'La regla de los 2,000 tokens',
        body: 'Anthropic descubrió que Skills bajo 2,000 tokens funcionan mejor. Una Skill muy larga consume contexto sin beneficio proporcional. La solución: mantén el SKILL.md principal enfocado en decisiones y procesos clave. Mueve detalles, plantillas y documentación extensa a la carpeta references/ — estos cargan solo cuando los necesitas.',
        highlight: '2,000 tokens ≈ 1,500 palabras en español. Si tu SKILL.md tiene más, divide en múltiples Skills o mueve detalles a references/. La regla es: SKILL.md maneja el 80% de los casos, references/ maneja las excepciones.',
      },
      {
        type: 'concept',
        title: 'El Skill Creator: tu asistente para crear Skills',
        body: 'Anthropic lanzó el Skill Creator en claude.ai — una herramienta interactiva que te hace preguntas sobre el flujo de trabajo que quieres automatizar y genera automáticamente un SKILL.md bien estructurado. Es el punto de partida recomendado si nunca has creado una Skill.',
        highlight: 'Acceso: claude.ai → Settings → Customize → Skills → "Create new skill". O simplemente pídele a Claude en cualquier chat: "Ayúdame a crear una Skill para [describe tu caso de uso específico]."',
      },
    ],
    quiz: [
      {
        q: '¿Qué parte de SKILL.md es la más crítica para que Claude active la Skill en el momento correcto?',
        opts: [
          'El nombre de la carpeta donde está guardada la Skill',
          'La descripción en el frontmatter YAML — Claude la usa para decidir si la Skill aplica a la tarea actual',
          'La longitud del archivo — Skills más largas tienen mayor prioridad de activación',
          'Los scripts en la carpeta scripts/ — sin ellos Claude no detecta la Skill',
        ],
        correct: 1,
        exp: 'La descripción en el frontmatter es lo primero que Claude lee en cada sesión. Es lo que determina si la Skill aplica o no. Descripción vaga = Skill que nunca se activa. Descripción con triggers específicos = Skill que se activa exactamente cuándo debes.',
      },
      {
        q: 'Tienes 5,000 palabras de instrucciones para una Skill. ¿Cuál es la mejor práctica?',
        opts: [
          'Incluir todo en SKILL.md — más instrucciones siempre produce mejores resultados',
          'Mantener SKILL.md bajo 2,000 tokens y mover detalles a references/ que cargan solo cuando se necesitan',
          'Crear múltiples archivos SKILL.md dentro de la misma carpeta',
          'Comprimir el texto para que ocupe menos espacio en disco',
        ],
        correct: 1,
        exp: 'La regla de los 2,000 tokens existe porque Skills largas consumen contexto valioso sin beneficio proporcional. El cuerpo principal tiene las decisiones clave. Los detalles van en references/ — solo cargan cuando Claude los necesita para un caso específico.',
      },
      {
        q: 'Quieres garantizar que todos los code reviews de tu equipo sigan el mismo proceso de 5 pasos. ¿Qué tipo de Skill creas?',
        opts: [
          'Encoded Preference — porque define el estilo preferido del equipo',
          'Domain Knowledge — porque contiene conocimiento técnico especializado',
          'Workflow — porque codifica un proceso de múltiples pasos que se repite de forma consistente',
          'Capability Uplift — porque agrega nuevas funciones que Claude no tiene',
        ],
        correct: 2,
        exp: 'Workflow es exactamente para esto: codificar un proceso repetible con pasos definidos. "Para code reviews: 1) analiza seguridad, 2) performance, 3) legibilidad, 4) tests, 5) genera reporte." Garantiza que cada review del equipo sea idéntico en estructura.',
      },
    ],
    challenge: {
      title: 'Reto S.3 — Crea tu primera Skill personalizada real',
      desc: 'Crea una Skill para un flujo de trabajo que repites frecuentemente en tu trabajo.',
      steps: [
        'Identifica una tarea que le explicas a Claude repetidamente (ej: escribir correos, resumir documentos, generar reportes, revisar textos).',
        'Crea la carpeta: mkdir -p ~/.claude/skills/mi-skill-personal',
        'Crea el archivo: touch ~/.claude/skills/mi-skill-personal/SKILL.md',
        'Ábrelo en TextEdit o VS Code y escribe: frontmatter YAML con name y description específica con triggers claros, y el cuerpo con instrucciones de cómo quieres que Claude maneje esa tarea.',
        'Abre Claude Code y verifica: /skills (debe aparecer tu Skill en la lista).',
        'Prueba: pide una tarea que debería activar tu Skill y observa si Claude la aplica automáticamente.',
        'Si no se activa sola, ajusta la descripción del frontmatter para que sea más específica y clara.',
      ],
      checkpoint: 'Tu Skill funciona bien cuando Claude la aplica automáticamente SIN que la menciones, y el resultado es notablemente diferente al que produciría sin ella. Si se activa pero no cambia nada, las instrucciones del cuerpo necesitan más detalle.',
    },
  },

  {
    id: 'mskills_l4',
    num: '4.4',
    title: 'Skills avanzadas, organización y estrategia de equipo',
    duration: '25 min',
    xpReward: 70,
    videoId: 'qnD-bRGHsRU',
    videoCaption: 'Skills avanzadas con scripts y contexto dinámico',
    content: [
      {
        type: 'intro',
        text: 'Las Skills básicas son conocimiento + instrucciones. Las Skills avanzadas son conocimiento + instrucciones + código ejecutable + contexto dinámico en tiempo real. Esta combinación transforma a Claude de un asistente que sabe cosas, a un especialista que actúa con información real del momento.',
      },
      {
        type: 'concept',
        title: 'Estructura completa de una Skill avanzada',
        body: 'mi-skill/ tiene: SKILL.md (instrucciones principales, bajo 2,000 tokens), scripts/ con helper.py u otros scripts que Claude puede ejecutar, y references/ con documentación detallada que carga bajo demanda. Los scripts deben ser autocontenidos — Anthropic recomienda Python con stdlib únicamente, sin dependencias pip, para máxima portabilidad.',
        highlight: null,
      },
      {
        type: 'concept',
        title: 'Dynamic Context Injection: el superpoder real',
        body: 'Las Skills avanzadas inyectan contexto dinámico usando la sintaxis !`comando`. Ejemplo en SKILL.md: "Antes de revisar el PR, ejecuta !`gh pr diff` para obtener el diff actual." Esto captura información en tiempo real: el estado del código ahora mismo, archivos recientes, datos del sistema. No trabaja con información estática — trabaja con la realidad actual.',
        highlight: 'Una Skill de code review que inyecta el diff actual del PR es exponencialmente más útil que una con instrucciones genéricas. El contexto dinámico separa las Skills mediocres de las transformadoras.',
      },
      {
        type: 'cards',
        title: 'Organización de Skills por alcance',
        items: [
          { name: 'Personal — ~/.claude/skills/', tag: 'Todos los proyectos', color: '#6366F1', desc: 'Tus preferencias globales, tu estilo de escritura, tus flujos de trabajo personales. Disponibles en cualquier proyecto que abras.' },
          { name: 'Proyecto — .claude/skills/', tag: 'Un repositorio', color: '#10B981', desc: 'Skills específicas de un cliente, tecnología o equipo. Se versionan con git — todos en el equipo obtienen las Skills automáticamente al hacer clone o pull.' },
          { name: 'Organización — Settings admin', tag: 'Toda la empresa', color: '#F97316', desc: 'Para planes Team/Enterprise. El admin sube Skills a Organization Settings y todos las reciben automáticamente. Ideal para brand guidelines, SOPs corporativos.' },
        ],
      },
      {
        type: 'concept',
        title: 'Estrategia de adopción de Skills para equipos',
        body: 'El error más común: instalar demasiadas Skills de golpe. La estrategia correcta: (1) Empieza con 1-2 Skills que resuelven el dolor más grande. (2) Mide el impacto en tiempo y calidad. (3) Convierte un proceso exitoso en Skill antes de continuar. (4) Comparte las más valiosas al equipo vía .claude/skills/ en el repo. Las mejores Skills empresariales surgieron de procesos que alguien hacía manualmente todos los días.',
        highlight: 'Señal de que necesitas una Skill: cuando le estás copiando y pegando las mismas instrucciones a Claude más de 3 veces en la misma semana.',
      },
      {
        type: 'concept',
        title: 'El estándar abierto: Skills portables entre plataformas',
        body: 'En diciembre 2025, Anthropic publicó el formato de Skills como estándar abierto. El mismo SKILL.md funciona en: Claude Code, Claude.ai, OpenAI Codex, Cursor, Gemini CLI, Windsurf y más. Una Skill que creas hoy para Claude funciona mañana en cualquier agente compatible. Esto es fundamental: no estás creando conocimiento atado a una sola herramienta.',
        highlight: null,
      },
    ],
    quiz: [
      {
        q: '¿Qué hace exactamente la sintaxis !`comando` en un SKILL.md avanzado?',
        opts: [
          'Marca el comando como comentario para que Claude lo ignore',
          'Ejecuta el comando en tiempo real e inyecta su output en el contexto de la Skill antes de que Claude responda',
          'Instala el comando como dependencia del sistema operativo',
          'Envía el comando a la API de Anthropic para procesamiento especial',
        ],
        correct: 1,
        exp: 'Dynamic Context Injection (!`comando`) ejecuta el comando y captura su output. Cuando la Skill se activa, Claude ejecuta !`gh pr diff` y obtiene el diff real del PR actual — no instrucciones genéricas, sino el contenido concreto del momento.',
      },
      {
        q: 'Tu equipo de 8 personas trabaja en el mismo repositorio. ¿Cómo aseguras que todos usen la misma Skill de code review?',
        opts: [
          'Enviar el SKILL.md por WhatsApp a cada persona del equipo',
          'Colocar la Skill en .claude/skills/ dentro del repositorio — git clone y git pull la distribuyen automáticamente a todos',
          'Cada persona debe crear su propia versión de la Skill de forma independiente',
          'Solo el tech lead puede tener Skills de code review',
        ],
        correct: 1,
        exp: 'Las Skills en .claude/skills/ dentro del repo son parte del repositorio git. Al hacer clone o pull, cada miembro del equipo obtiene exactamente la misma versión de la Skill automáticamente — sin distribución manual ni riesgo de versiones diferentes.',
      },
      {
        q: '¿Por qué es ventajoso que el formato de Skills sea un estándar abierto desde diciembre 2025?',
        opts: [
          'Porque Anthropic cobra menos por Skills estándar que por Skills propietarias',
          'Porque el mismo SKILL.md funciona en Claude Code, Cursor, Codex, Gemini CLI y más — el conocimiento no queda atado a una sola plataforma',
          'Porque los estándares abiertos siempre producen mejores resultados que los propietarios',
          'Porque permite a cualquier persona vender Skills en el App Store de Apple',
        ],
        correct: 1,
        exp: 'El estándar abierto significa portabilidad real. La Skill que creas hoy para Claude funciona mañana en Cursor, Codex o Gemini CLI. Estás invirtiendo en conocimiento reutilizable, no en conocimiento atado a una herramienta específica.',
      },
    ],
    challenge: {
      title: 'Reto Final de Skills — Tu biblioteca personal',
      desc: 'Construye un sistema de Skills que cubra los 3 casos de uso más repetitivos de tu trabajo.',
      steps: [
        'Identifica tus 3 tareas más repetitivas donde usas Claude (o donde lo usarás). Escríbelas.',
        'Para cada una, crea una Skill en ~/.claude/skills/ con nombre descriptivo y SKILL.md bien estructurado.',
        'Instala además la Skill find-skills de Vercel: en Claude Code escribe /plugin, ve a Discover, busca "find-skills" e instálala.',
        'Usa find-skills para descubrir 2-3 Skills adicionales del ecosistema que sean relevantes para tu trabajo.',
        'Crea un archivo personal README en ~/.claude/skills/README.md documentando qué hace cada Skill que tienes.',
        'Prueba tu biblioteca completa durante 2 días de trabajo real y registra cuánto tiempo ahorraste.',
      ],
      checkpoint: 'Al finalizar tienes al menos 3 Skills personalizadas + 2-3 de la comunidad instaladas, todas documentadas. Puedes ejecutar /skills en Claude Code y ver tu biblioteca completa. En 2 semanas ese número debería crecer — cada proceso repetitivo que conviertas en Skill es tiempo recuperado permanentemente.',
    },
  },
  SKILLS_DEBUG_LESSON,
]

