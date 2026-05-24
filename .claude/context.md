# Contexto del proyecto — para Claude Code

## Qué es este proyecto
Claude Academy es una plataforma educativa local en React+Vite para aprender 
Claude IA de cero a experto, en español, construida para un fotógrafo profesional 
en Medellín, Colombia.

## Estado actual (mayo 2026)
- 11 módulos, 44 lecciones, 118 términos de glosario
- Todo compilando sin errores
- Migrado de ZIP a GitHub + Cursor + pnpm

## Orden de módulos (DEFINITIVO — no cambiar sin instrucción explícita)
0. Setup & Identidad
1. Claude Chat  
2. Claude Design
3. Claude Code
4. Claude Skills
5. Claude CoWork
6. Agentes & Subagentes
7. MCP & Conexiones
8. IA Responsable
9. Proyectos Maestros
10. Certificación CCA

## Proyectos Maestros (Módulo 9 — orden DEFINITIVO)
9.0 — Stack técnico y setup
9.1 — Knowledge OS (genérico, extensible a cualquier dominio: fotografía, Claude IA, fútbol, etc. Infraestructura: Obsidian + Claude + GitHub)
9.2 — Living Academy (primera instancia de Knowledge OS aplicada al ecosistema Claude IA — el patrón es replicable: Living Photography, Living Football, Living Finance)
9.3 — Portal de Fotografía + Asistente Creativo (fusión: portal web con autenticación de clientes + 6 flujos de trabajo creativos + Skill personalizada claude-fotografia.md)
9.4 — QA Agent del Portal (testea el sitio del Proyecto 9.3 con Claude Code + Playwright)

## Decisiones técnicas tomadas (NO reabrir)
- Auth del portal: Clerk + Twilio WhatsApp (OTP). Better Auth descartado.
- Animaciones: CSS Scroll-Driven Animations nativas (no GSAP para hero/parallax)
- Transiciones entre páginas: View Transitions API (no Framer Motion)
- Lightbox: <dialog> nativo + @use-gesture/react
- Fade-ins: @starting-style CSS (no IntersectionObserver)
- IDE: Cursor con extensión Claude Code + CLAUDE.md (no .cursorrules)
- Gestor de paquetes: pnpm (nunca npm)

## Stack del Portal de Fotografía (Proyecto 9.4)
Next.js 15 + TypeScript + Tailwind + Supabase + Clerk + Twilio + Vercel
Mobile-first, OTP por WhatsApp, máx. 5 colaboradores por proyecto

## Pendientes críticos (en orden de prioridad)
1. Definir pasos exactos del tracker de 3 fases del portal (Pre-producción /
   Producción / Post-producción) por tipo de proyecto (Boda/Retrato/Producto/Moda)

## Problemas estructurales resueltos (commit c42f2b9 + refactor 9.x)
- IDs internos ya usan mod9_l* consistente con numeración 9.x
- QA Agent (9.4) ya tiene nota de prerequisito del portal (9.3)
- Claude Design removido de CoWork (lección 5.3)
- Cursor Rules vs CLAUDE.md añadido a lección 3.1
- Cursor 3 Agents Window añadido a lección 3.4
- SKILL.md portabilidad añadida a lección 4.1
- Knowledge OS y Living Academy separados como 9.1 y 9.2 definitivo
- PROJECT_PHOTOGRAPHY_AI fusionado en 9.3 — eliminado como proyecto independiente

## Cómo verificar que los datos compilan
node --input-type=module -e "import('./src/data/curriculum.js').then(m => {
  const total = Object.values(m.LESSONS).flat().length
  console.log('OK:', m.MODULES.length, 'módulos |', total, 'lecciones |', m.GLOSSARY.length, 'términos')
})"
