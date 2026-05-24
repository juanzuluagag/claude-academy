# Claude Academy — CLAUDE.md

## Qué es este proyecto
Plataforma educativa React+Vite para aprender Claude IA de cero a experto.
Stack: React 18, Vite, JavaScript. Los datos del curso viven en src/data/*.js
Gestor de paquetes: pnpm (NUNCA usar npm)

## Cómo correr el proyecto
pnpm dev → abre http://localhost:5173 en el navegador
pnpm build → genera la versión de producción

## Estructura de datos (archivos principales)
- src/data/curriculum.js → módulos, lecciones y glosario (el archivo central)
- src/data/mod6Projects.js → proyectos maestros
- src/data/gapLessons.js → lecciones de gaps
- src/data/skillsLessons.js → lecciones del módulo Skills
- src/data/claudeCodeLessons.js → lecciones de Claude Code
- src/data/claudeDesignLessons.js → lecciones de Claude Design
- src/data/updateLessons.js → Advisor Strategy y CCA
- src/data/newLessons.js → lecciones adicionales

## Cómo verificar que el código funciona
node --input-type=module -e "import('./src/data/curriculum.js').then(m => console.log('OK:', Object.values(m.LESSONS).flat().length, 'lecciones'))"

## Reglas de trabajo
- SIEMPRE verificar con el comando de arriba después de cualquier cambio a src/data/
- SIEMPRE usar pnpm, nunca npm ni yarn
- Un commit por tarea completada con mensaje descriptivo
- Nunca modificar node_modules/
- El repo en GitHub ES la fuente de verdad
