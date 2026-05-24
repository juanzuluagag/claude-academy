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
9.1 — Knowledge OS (fusión: Personal AI OS + Research Stack + Living Academy automatizado)
9.2 — Living Academy (curso que se actualiza solo en GitHub — PENDIENTE construir)
9.3 — QA Agent Autónomo
9.4 — Portal de Fotografía + Asistente Creativo (fusión — PENDIENTE completar)
9.5 — QA Agent del Portal

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
2. Construir lección 9.1 Knowledge OS fusionada
3. Construir lección 9.2 Living Academy (GitHub Actions semanal)
4. Fusionar contenido creativo de fotografía (antiguo 9.5) en Proyecto 9.4
5. Resolver problemas estructurales documentados abajo

## Problemas estructurales a resolver
1. IDs internos (mod6_p0, mod6_p1...) no coinciden con numeración (9.0, 9.1...)
2. Lección 9.3 QA Agent depende del portal 9.4 — agregar nota de dependencia
3. Claude Design referenciado en CoWork (lección 5.3) — eliminar esa referencia
4. Agregar en lección 3.1: Cursor Rules vs CLAUDE.md con ventajas/desventajas
5. Lección 3.4 Worktrees — agregar comparación con Cursor 3 Agents Window
6. Lección 4.1 Skills — agregar que SKILL.md es portable entre herramientas
7. Lección 9.0 Stack técnico — agregar Cursor en el stack

## Cómo verificar que los datos compilan
node --input-type=module -e "import('./src/data/curriculum.js').then(m => {
  const total = Object.values(m.LESSONS).flat().length
  console.log('OK:', m.MODULES.length, 'módulos |', total, 'lecciones |', m.GLOSSARY.length, 'términos')
})"
