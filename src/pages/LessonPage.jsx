import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { MODULES, LESSONS } from '../data/curriculum.js'
import { VIDEOS } from '../data/videos.js'
import { useProgress } from '../hooks/useProgress.js'
import { Badge, Btn } from '../components/UI.jsx'

// ─── ANIMACIONES ─────────────────────────────────────────────────────────────

function AnimClaudeIntro() {
  const [step, setStep] = useState(-1)
  const [running, setRunning] = useState(false)
  const timerRef = useRef(null)
  const steps = [
    { icon: '🧑‍💻', label: 'Tú escribes', text: '¿Cómo mejoro mi CV?', color: '#6366F1' },
    { icon: '📥', label: 'Claude recibe', text: 'Leyendo cada palabra...', color: '#8B5CF6' },
    { icon: '🔍', label: 'Busca patrones', text: '250 mil millones de textos aprendidos', color: '#EC4899' },
    { icon: '⚡', label: 'Construye respuesta', text: 'Generando token a token...', color: '#F97316' },
    { icon: '💬', label: 'Te responde', text: 'Aquí tienes 5 formas de mejorar tu CV...', color: '#10B981' },
  ]
  const run = () => {
    clearInterval(timerRef.current)
    setStep(0); setRunning(true)
    let i = 0
    timerRef.current = setInterval(() => {
      i++
      if (i >= steps.length) { clearInterval(timerRef.current); setRunning(false) } else setStep(i)
    }, 1100)
  }
  useEffect(() => () => clearInterval(timerRef.current), [])

  return (
    <Anim color="#6366F1" title="¿Cómo funciona Claude por dentro?">
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap', marginBottom: 16 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{
              background: step >= i ? `${s.color}22` : 'rgba(255,255,255,0.03)',
              border: `2px solid ${step >= i ? s.color : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 10, padding: '8px 10px', textAlign: 'center', minWidth: 70,
              transition: 'all 0.4s', transform: step === i ? 'scale(1.08)' : 'scale(1)',
            }}>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
              <div style={{ fontSize: 10, color: step >= i ? '#fff' : 'var(--text-muted)', marginTop: 3, lineHeight: 1.2 }}>{s.label}</div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ fontSize: 14, color: step > i ? s.color : 'var(--text-muted)', transition: 'color 0.4s' }}>→</div>
            )}
          </div>
        ))}
      </div>
      {step >= 0 && (
        <div style={{
          background: `${steps[step].color}15`, border: `1px solid ${steps[step].color}44`,
          borderRadius: 8, padding: '9px 13px', fontSize: 13, color: '#fff', marginBottom: 12,
        }}>
          <strong>{steps[step].label}:</strong> {steps[step].text}
        </div>
      )}
      <Btn onClick={run} disabled={running} style={{ fontSize: 13 }}>
        {running ? '▶ Procesando...' : step >= 0 ? '↺ Ver de nuevo' : '▶ Ver cómo funciona Claude'}
      </Btn>
    </Anim>
  )
}

function AnimContextWindow() {
  const [msgs, setMsgs] = useState([])
  const [newChat, setNewChat] = useState(false)
  const MAX = 6
  const pct = Math.round((msgs.length / MAX) * 100)
  const barColor = pct < 50 ? '#10B981' : pct < 85 ? '#F59E0B' : '#EF4444'

  const addMsg = () => { if (msgs.length < MAX) setMsgs(m => [...m, m.length]); setNewChat(false) }
  const reset = () => { setMsgs([]); setNewChat(false) }
  const startNew = () => { setMsgs([]); setNewChat(true) }

  return (
    <Anim color="#8B5CF6" title="La memoria de Claude — Ventana de Contexto">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6, fontFamily: 'var(--font-mono)' }}>
            {newChat ? '✨ CHAT NUEVO — Memoria en blanco' : 'CHAT ACTUAL'}
          </div>
          <div style={{
            background: 'var(--bg-raised)', border: `1px solid ${newChat ? '#10B981' : 'var(--border)'}`,
            borderRadius: 8, padding: 10, minHeight: 130, transition: 'border-color 0.4s', position: 'relative',
          }}>
            {newChat ? (
              <div style={{ textAlign: 'center', paddingTop: 30, color: '#6EE7B7', fontSize: 13 }}>
                ✨ Contexto vacío<br />
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Claude no recuerda nada</span>
              </div>
            ) : msgs.length === 0 ? (
              <div style={{ textAlign: 'center', paddingTop: 30, color: 'var(--text-muted)', fontSize: 12 }}>Chat vacío</div>
            ) : (
              msgs.map((_, i) => (
                <div key={i} style={{ display: 'flex', gap: 5, marginBottom: 5, alignItems: 'center' }}>
                  <span style={{ fontSize: 13 }}>{i % 2 === 0 ? '🧑' : '🤖'}</span>
                  <div style={{
                    background: i % 2 === 0 ? 'rgba(99,102,241,0.15)' : 'rgba(16,185,129,0.1)',
                    borderRadius: 5, padding: '3px 8px', fontSize: 11,
                    color: i % 2 === 0 ? '#A5B4FC' : '#6EE7B7',
                  }}>
                    {i % 2 === 0 ? `Pregunta ${Math.ceil((i+1)/2)}` : `Respuesta ${Math.ceil((i+1)/2)}`}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6, fontFamily: 'var(--font-mono)' }}>MEMORIA USADA</div>
          <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: 8, padding: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Tokens</span>
              <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: barColor }}>{pct}%</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 99, height: 8, marginBottom: 10 }}>
              <div style={{ width: `${pct}%`, height: '100%', background: barColor, borderRadius: 99, transition: 'all 0.5s' }} />
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-sub)', lineHeight: 1.5 }}>
              {pct === 0 && 'Vacío. Claude no recuerda nada.'}
              {pct > 0 && pct < 50 && '✅ Saludable. Claude recuerda todo.'}
              {pct >= 50 && pct < 85 && '⚠️ Moderado. Considera un chat nuevo pronto.'}
              {pct >= 85 && '🔴 Casi lleno. Claude podría olvidar el inicio.'}
            </div>
          </div>
          <div style={{ marginTop: 8, background: 'rgba(99,102,241,0.08)', borderRadius: 8, padding: 10, fontSize: 11, color: '#A5B4FC', lineHeight: 1.5 }}>
            💡 Al abrir un <strong>chat nuevo</strong>, la memoria vuelve a cero. Claude no recuerda conversaciones anteriores.
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Btn onClick={addMsg} disabled={msgs.length >= MAX} style={{ fontSize: 12 }}>+ Agregar mensaje</Btn>
        <Btn onClick={startNew} variant="ghost" style={{ fontSize: 12 }}>✨ Nuevo chat</Btn>
        <Btn onClick={reset} variant="ghost" style={{ fontSize: 12 }}>↺ Reiniciar</Btn>
      </div>
    </Anim>
  )
}

function AnimPromptBuilder() {
  const [parts, setParts] = useState({ context: false, task: false, format: false, restrict: false })
  const defs = {
    context: { emoji: '👤', label: 'Contexto', color: '#6366F1', ex: 'Soy gerente de ventas en empresa B2B...' },
    task:    { emoji: '🎯', label: 'Tarea específica', color: '#10B981', ex: 'Escribe un correo rechazando una reunión...' },
    format:  { emoji: '📋', label: 'Formato deseado', color: '#F59E0B', ex: '3 párrafos, tono profesional pero cálido...' },
    restrict:{ emoji: '🚫', label: 'Restricciones', color: '#EC4899', ex: 'Sin excusas vagas, sin frases cliché...' },
  }
  const count = Object.values(parts).filter(Boolean).length

  return (
    <Anim color="#10B981" title="Constructor de Prompts — toca cada ingrediente">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
        {Object.entries(defs).map(([key, val]) => (
          <div key={key} onClick={() => setParts(p => ({ ...p, [key]: !p[key] }))} style={{
            background: parts[key] ? `${val.color}18` : 'rgba(255,255,255,0.03)',
            border: `1px solid ${parts[key] ? val.color + '66' : 'var(--border)'}`,
            borderRadius: 8, padding: '10px 12px', cursor: 'pointer', transition: 'all 0.2s',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: parts[key] ? 5 : 0 }}>
              <div style={{
                width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                background: parts[key] ? val.color : 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, color: '#fff', fontWeight: 700,
              }}>{parts[key] ? '✓' : '+'}</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: parts[key] ? '#fff' : 'var(--text-muted)' }}>
                {val.emoji} {val.label}
              </span>
            </div>
            {parts[key] && <div style={{ fontSize: 11, color: val.color, paddingLeft: 25, fontStyle: 'italic' }}>"{val.ex}"</div>}
          </div>
        ))}
      </div>
      <div style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: 8, padding: 12, marginBottom: 10 }}>
        <div style={{ fontSize: 10, color: 'var(--text-muted)', marginBottom: 6, fontFamily: 'var(--font-mono)', letterSpacing: 1 }}>TU PROMPT:</div>
        <div style={{ fontSize: 13, color: 'var(--text-sub)', lineHeight: 1.7, minHeight: 36 }}>
          {count === 0 && <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Activa ingredientes...</span>}
          {parts.context && <span style={{ color: '#A5B4FC' }}>Soy gerente de ventas B2B. </span>}
          {parts.task && <span style={{ color: '#6EE7B7' }}>Escribe un correo rechazando la reunión. </span>}
          {parts.format && <span style={{ color: '#FCD34D' }}>3 párrafos, tono profesional. </span>}
          {parts.restrict && <span style={{ color: '#F9A8D4' }}>Sin excusas vagas.</span>}
        </div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: count === 4 ? 'rgba(16,185,129,0.1)' : count >= 2 ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.08)',
        border: `1px solid ${count === 4 ? '#10B98144' : count >= 2 ? '#F59E0B44' : '#EF444444'}`,
        borderRadius: 8, padding: '9px 12px',
      }}>
        <span style={{ fontSize: 16 }}>{count === 4 ? '🎯' : count >= 2 ? '⚡' : '💡'}</span>
        <span style={{ fontSize: 13, color: count === 4 ? '#6EE7B7' : count >= 2 ? '#FCD34D' : '#FCA5A5' }}>
          {count === 0 && 'Sin ingredientes — Claude no sabrá qué quieres.'}
          {count === 1 && 'Muy vago — respuesta genérica e inútil.'}
          {count === 2 && 'Básico — mejor, pero le falta precisión.'}
          {count === 3 && 'Casi completo — agrega el último ingrediente.'}
          {count === 4 && '¡Prompt perfecto! Claude tiene todo para dar un resultado excelente.'}
        </span>
      </div>
    </Anim>
  )
}

function AnimAgentCycle() {
  const [active, setActive] = useState(-1)
  const [running, setRunning] = useState(false)
  const timerRef = useRef(null)
  const phases = [
    { icon: '👁️', label: 'Percibir', desc: 'Lee la tarea y entiende el contexto actual', color: '#6366F1' },
    { icon: '🧠', label: 'Planificar', desc: 'Decide cuál es el mejor siguiente paso', color: '#8B5CF6' },
    { icon: '⚡', label: 'Actuar', desc: 'Ejecuta: busca en web, escribe código, llama herramienta', color: '#F97316' },
    { icon: '📊', label: 'Observar', desc: 'Revisa el resultado de la acción', color: '#10B981' },
    { icon: '🔄', label: '¿Listo?', desc: 'No → volver al inicio. Sí → entregar resultado final', color: '#EC4899' },
  ]
  const run = () => {
    clearInterval(timerRef.current); setActive(0); setRunning(true)
    let i = 0
    timerRef.current = setInterval(() => {
      i++
      if (i >= phases.length) { clearInterval(timerRef.current); setRunning(false) } else setActive(i)
    }, 900)
  }
  useEffect(() => () => clearInterval(timerRef.current), [])

  return (
    <Anim color="#F97316" title="El ciclo de un Agente — cómo trabaja solo">
      <div style={{ fontSize: 12, color: 'var(--text-sub)', marginBottom: 14 }}>
        Un agente no responde una vez y para. Repite este ciclo hasta completar toda la tarea:
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 14, flexWrap: 'wrap' }}>
        {phases.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{
              background: active === i ? `${p.color}33` : active > i ? `${p.color}15` : 'rgba(255,255,255,0.04)',
              border: `2px solid ${active === i ? p.color : active > i ? p.color + '55' : 'var(--border)'}`,
              borderRadius: 10, padding: '8px 10px', textAlign: 'center', minWidth: 72,
              transition: 'all 0.3s', transform: active === i ? 'scale(1.07)' : 'scale(1)',
            }}>
              <div style={{ fontSize: 20 }}>{p.icon}</div>
              <div style={{ fontSize: 10, color: active >= i ? '#fff' : 'var(--text-muted)', marginTop: 3 }}>{p.label}</div>
            </div>
            {i < phases.length - 1 && (
              <div style={{ fontSize: 14, color: active > i ? phases[i].color : 'var(--border)', transition: 'color 0.3s' }}>→</div>
            )}
          </div>
        ))}
      </div>
      {active >= 0 && (
        <div style={{
          background: `${phases[active].color}15`, border: `1px solid ${phases[active].color}44`,
          borderRadius: 8, padding: '9px 13px', fontSize: 13, color: '#fff', marginBottom: 12,
        }}>
          <strong>{phases[active].label}:</strong> {phases[active].desc}
        </div>
      )}
      <Btn onClick={run} disabled={running} style={{ fontSize: 13 }}>
        {running ? 'Ejecutando...' : active >= 0 ? '↺ Ver de nuevo' : '▶ Iniciar ciclo agéntico'}
      </Btn>
    </Anim>
  )
}

function AnimMCP() {
  const [sel, setSel] = useState(null)
  const tools = [
    { id: 'github', icon: '🐙', name: 'GitHub', desc: 'Lee repositorios, crea issues, revisa pull requests directamente' },
    { id: 'slack', icon: '💬', name: 'Slack', desc: 'Lee canales, resume conversaciones, envía mensajes' },
    { id: 'notion', icon: '📓', name: 'Notion', desc: 'Crea páginas, actualiza bases de datos, busca notas' },
    { id: 'gdrive', icon: '📁', name: 'Drive', desc: 'Lee documentos, crea hojas de cálculo, organiza archivos' },
    { id: 'obsidian', icon: '🔮', name: 'Obsidian', desc: 'Lee y escribe en tu bóveda de notas personal' },
    { id: 'custom', icon: '⚙️', name: 'Tu app', desc: 'Cualquier herramienta que construyas con el protocolo MCP' },
  ]
  return (
    <Anim color="#EC4899" title="Cómo funciona MCP — toca una herramienta">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12,
            background: 'rgba(99,102,241,0.2)', border: '2px solid #6366F1',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 4px',
          }}>🤖</div>
          <div style={{ fontSize: 11, color: '#A5B4FC' }}>Claude</div>
        </div>
        <div style={{ flex: 1, textAlign: 'center', minWidth: 80 }}>
          <div style={{ height: 2, background: 'linear-gradient(90deg, #6366F1, #EC4899)', borderRadius: 99, marginBottom: 4 }} />
          <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>MCP — idioma universal</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
          {tools.map(t => (
            <div key={t.id} onClick={() => setSel(sel === t.id ? null : t.id)} style={{
              background: sel === t.id ? 'rgba(236,72,153,0.15)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${sel === t.id ? '#EC4899' : 'var(--border)'}`,
              borderRadius: 8, padding: '7px 5px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s',
            }}>
              <div style={{ fontSize: 17 }}>{t.icon}</div>
              <div style={{ fontSize: 9, color: sel === t.id ? '#fff' : 'var(--text-muted)', marginTop: 2 }}>{t.name}</div>
            </div>
          ))}
        </div>
      </div>
      {sel ? (
        <div style={{ background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: 8, padding: '10px 13px', fontSize: 13, color: '#F9A8D4' }}>
          🤖 <strong>Claude + {tools.find(t=>t.id===sel)?.name}:</strong> {tools.find(t=>t.id===sel)?.desc}. Claude hace esto directamente en la conversación, sin que tú cambies de aplicación.
        </div>
      ) : (
        <div style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', fontStyle: 'italic' }}>
          Toca cualquier herramienta para ver qué puede hacer Claude con ella
        </div>
      )}
    </Anim>
  )
}

function AnimSkillLoader() {
  const [phase, setPhase] = useState(0)
  const timerRef = useRef(null)
  const skills = [
    { name: 'frontend-design', icon: '🎨', relevance: 94, loaded: true },
    { name: 'correos-empresa', icon: '📧', relevance: 11, loaded: false },
    { name: 'code-review', icon: '🔍', relevance: 7, loaded: false },
    { name: 'data-analysis', icon: '📊', relevance: 2, loaded: false },
  ]
  const run = () => {
    clearInterval(timerRef.current)
    setPhase(1)
    timerRef.current = setTimeout(() => setPhase(2), 1000)
    setTimeout(() => setPhase(3), 2200)
  }
  useEffect(() => () => clearTimeout(timerRef.current), [])

  return (
    <Anim color="#F97316" title="Cómo Claude carga Skills — sin gastar contexto">
      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', borderRadius: 8, padding: 10, marginBottom: 12 }}>
        <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 5 }}>TAREA DEL USUARIO:</div>
        <div style={{ fontSize: 13, color: '#fff', fontStyle: 'italic' }}>"Crea un componente React con buen diseño"</div>
      </div>
      <div style={{ marginBottom: 12 }}>
        {skills.map((s, i) => (
          <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, opacity: phase === 0 ? 0.4 : 1, transition: 'opacity 0.4s' }}>
            <span style={{ fontSize: 14 }}>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--text-sub)' }}>{s.name}</span>
                {phase >= 2 && <span style={{ fontSize: 11, color: s.relevance > 50 ? '#F97316' : 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{s.relevance}% relevante</span>}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 99, height: 5 }}>
                <div style={{ width: phase >= 2 ? `${s.relevance}%` : '0%', height: '100%', background: s.relevance > 50 ? '#F97316' : 'rgba(255,255,255,0.15)', borderRadius: 99, transition: 'width 0.7s ease' }} />
              </div>
            </div>
            {phase >= 3 && (
              <span style={{ fontSize: 11, color: s.loaded ? '#FCD34D' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {s.loaded ? '📂 Completa' : '💤 Solo título'}
              </span>
            )}
          </div>
        ))}
      </div>
      {phase >= 3 && (
        <div style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: 8, padding: '9px 13px', fontSize: 12, color: '#FDBA74', marginBottom: 12 }}>
          ✅ Solo <strong>frontend-design</strong> se cargó completa (~3,000 tokens). Las otras 3 Skills usaron solo ~100 tokens de "título". Así Claude puede tener cientos de Skills activas sin desperdiciar memoria.
        </div>
      )}
      <Btn style={{ fontSize: 13, background: '#F97316' }} onClick={() => { if (phase === 3) { setPhase(0); setTimeout(run, 100) } else run() }} disabled={phase > 0 && phase < 3}>
        {phase === 0 ? '▶ Simular carga de Skills' : phase < 3 ? 'Escaneando...' : '↺ Ver de nuevo'}
      </Btn>
    </Anim>
  )
}

function AnimTokens() {
  const [hl, setHl] = useState(null)
  const words = [
    { text: 'Hola', tokens: 1, color: '#6366F1' },
    { text: 'mundo', tokens: 1, color: '#8B5CF6' },
    { text: 'inteligencia', tokens: 3, color: '#EC4899' },
    { text: 'artificial', tokens: 4, color: '#F97316' },
    { text: 'generativa', tokens: 5, color: '#EF4444' },
    { text: 'Claude', tokens: 2, color: '#10B981' },
  ]
  return (
    <Anim color="#6366F1" title="¿Qué es un Token? — pasa el cursor sobre cada palabra">
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
        {words.map((w, i) => (
          <div key={i} onMouseEnter={() => setHl(i)} onMouseLeave={() => setHl(null)} style={{
            background: hl === i ? `${w.color}22` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${hl === i ? w.color : 'var(--border)'}`,
            borderRadius: 8, padding: '8px 12px', cursor: 'default', transition: 'all 0.15s', textAlign: 'center',
          }}>
            <div style={{ fontSize: 14, color: hl === i ? '#fff' : 'var(--text-sub)', marginBottom: 4 }}>{w.text}</div>
            <div style={{ fontSize: 10, color: w.color, fontFamily: 'var(--font-mono)' }}>{w.tokens} token{w.tokens > 1 ? 's' : ''}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div style={{ background: 'rgba(99,102,241,0.08)', borderRadius: 8, padding: 10 }}>
          <div style={{ fontSize: 12, color: '#A5B4FC', fontWeight: 600, marginBottom: 4 }}>¿Por qué importa?</div>
          <div style={{ fontSize: 12, color: 'var(--text-sub)', lineHeight: 1.6 }}>Los LLMs se cobran por tokens y tienen un límite de cuántos pueden procesar (ventana de contexto).</div>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.08)', borderRadius: 8, padding: 10 }}>
          <div style={{ fontSize: 12, color: '#6EE7B7', fontWeight: 600, marginBottom: 4 }}>Regla práctica</div>
          <div style={{ fontSize: 12, color: 'var(--text-sub)', lineHeight: 1.6 }}>~750 palabras en español ≈ 1,000 tokens. Una página A4 ≈ 500–600 tokens.</div>
        </div>
      </div>
    </Anim>
  )
}

// Wrapper genérico para animaciones
function Anim({ color, title, children }) {
  return (
    <div style={{ background: `${color}0A`, border: `1px solid ${color}30`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
      <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color, letterSpacing: 2, marginBottom: 12 }}>
        ⚡ ANIMACIÓN INTERACTIVA — {title}
      </div>
      {children}
    </div>
  )
}

// Mapa lección → animaciones
const ANIM_MAP = {
  mod1_l1: ['claude_intro', 'context_window', 'tokens'],
  mod1_l2: ['prompt_builder'],
  mod1_l3: ['prompt_builder'],
  mod1_l6: [],
  mod1_l7: ['tokens', 'prompt_builder'],
  mskills_l1: ['skill_loader'],
  mskills_l3: ['skill_loader'],
  mod4_l5: ['agent_cycle'],
  mod5_l4: ['mcp'],
}
const ANIM_COMPONENTS = {
  claude_intro: AnimClaudeIntro,
  context_window: AnimContextWindow,
  tokens: AnimTokens,
  prompt_builder: AnimPromptBuilder,
  skill_loader: AnimSkillLoader,
  agent_cycle: AnimAgentCycle,
  mcp: AnimMCP,
}

// ─── VIDEO ────────────────────────────────────────────────────────────────────
function VideoBlock({ lessonId }) {
  const [playing, setPlaying] = useState(false)
  const video = VIDEOS[lessonId]
  if (!video) return null
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: 2, marginBottom: 8 }}>
        📺 VIDEO — {video.lang === 'ES' ? '🇪🇸 En español' : '🌐 Subtítulos ES disponibles'}
      </div>
      <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)', background: '#09090f' }}>
        {playing ? (
          <iframe width="100%" height="320"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&cc_load_policy=1&cc_lang_pref=es`}
            title={video.title} frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen style={{ display: 'block' }}
          />
        ) : (
          <div onClick={() => setPlaying(true)} style={{
            height: 240, cursor: 'pointer',
            background: 'linear-gradient(135deg, #0F0F1A, #1a1a2e)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(220,30,30,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, paddingLeft: 3, boxShadow: '0 0 24px rgba(220,30,30,0.35)' }}>▶</div>
            <div style={{ textAlign: 'center', padding: '0 24px' }}>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{video.title}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: 11, fontFamily: 'var(--font-mono)' }}>{video.duration} · {video.note}</div>
            </div>
            <div style={{ background: 'rgba(220,30,30,0.2)', border: '1px solid rgba(220,30,30,0.4)', borderRadius: 6, padding: '3px 12px', fontSize: 11, color: '#FCA5A5', fontFamily: 'var(--font-mono)' }}>
              {video.lang === 'ES' ? '🇪🇸 En Español' : '🌐 Activar subtítulos: ⚙️ → Subtítulos → Español'}
            </div>
          </div>
        )}
      </div>
      {!playing && <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 5, paddingLeft: 2 }}>Clic para reproducir en esta ventana</div>}
    </div>
  )
}

// ─── CONTENT BLOCKS ───────────────────────────────────────────────────────────
function ContentBlock({ item }) {
  if (item.type === 'intro') return (
    <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: 18, marginBottom: 28, color: 'var(--text-sub)', fontSize: 16, fontStyle: 'italic', lineHeight: 1.7 }}>{item.text}</div>
  )
  if (item.type === 'concept') return (
    <div style={{ marginBottom: 24 }}>
      <h4 style={{ color: '#fff', fontSize: 15, fontWeight: 600, margin: '0 0 8px' }}>{item.title}</h4>
      <p style={{ color: 'var(--text-sub)', fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.body}</p>
      {item.highlight && (
        <div style={{ marginTop: 10, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.22)', borderRadius: 8, padding: '10px 14px', color: '#A5B4FC', fontSize: 13, lineHeight: 1.6 }}>
          💡 {item.highlight}
        </div>
      )}
    </div>
  )
  if (item.type === 'comparison') return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 8, padding: 14 }}>
          <div style={{ color: '#F87171', fontSize: 10, fontFamily: 'var(--font-mono)', marginBottom: 8 }}>❌ PROMPT VAGO</div>
          <p style={{ color: 'var(--text-sub)', fontSize: 13, lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>{item.bad}</p>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 8, padding: 14 }}>
          <div style={{ color: '#6EE7B7', fontSize: 10, fontFamily: 'var(--font-mono)', marginBottom: 8 }}>✅ PROMPT EFECTIVO</div>
          <p style={{ color: 'var(--text-sub)', fontSize: 13, lineHeight: 1.6, margin: 0, whiteSpace: 'pre-line' }}>{item.good}</p>
        </div>
      </div>
    </div>
  )
  if (item.type === 'cards') return (
    <div style={{ marginBottom: 28 }}>
      <h4 style={{ color: '#fff', fontSize: 15, fontWeight: 600, margin: '0 0 12px' }}>{item.title}</h4>
      <div style={{ display: 'grid', gridTemplateColumns: item.items.length <= 3 ? `repeat(${item.items.length}, 1fr)` : 'repeat(2, 1fr)', gap: 10 }}>
        {item.items.map((ci, i) => (
          <div key={i} style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', borderRadius: 10, padding: 14, borderTop: `2px solid ${ci.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{ci.name}</span>
              <Badge color={ci.color}>{ci.tag}</Badge>
            </div>
            <p style={{ color: 'var(--text-sub)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{ci.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
  return null
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────
function QuizSection({ quiz, onComplete, savedScore }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(!!savedScore)
  const [score, setScore] = useState(savedScore?.score ?? null)
  const submit = () => {
    let s = 0; quiz.forEach((q, i) => { if (answers[i] === q.correct) s++ })
    setScore(s); setSubmitted(true); onComplete(s, quiz.length)
  }
  return (
    <div>
      {quiz.map((q, qi) => (
        <div key={qi} style={{ marginBottom: 24 }}>
          <p style={{ color: '#fff', fontSize: 14, fontWeight: 500, marginBottom: 10, lineHeight: 1.5 }}>{qi + 1}. {q.q}</p>
          <div style={{ display: 'grid', gap: 6 }}>
            {q.opts.map((opt, oi) => {
              let bg = 'rgba(255,255,255,0.02)', bc = 'var(--border)', tc = 'var(--text-sub)'
              if (submitted) {
                if (oi === q.correct) { bg = 'rgba(16,185,129,0.1)'; bc = 'rgba(16,185,129,0.4)'; tc = '#6EE7B7' }
                else if (answers[qi] === oi) { bg = 'rgba(239,68,68,0.08)'; bc = 'rgba(239,68,68,0.3)'; tc = '#FCA5A5' }
              } else if (answers[qi] === oi) { bg = 'rgba(99,102,241,0.1)'; bc = 'rgba(99,102,241,0.35)'; tc = '#A5B4FC' }
              return (
                <div key={oi} onClick={() => !submitted && setAnswers({ ...answers, [qi]: oi })} style={{ background: bg, border: `1px solid ${bc}`, borderRadius: 8, padding: '10px 14px', cursor: submitted ? 'default' : 'pointer', color: tc, fontSize: 13, lineHeight: 1.5, transition: 'all 0.15s' }}>
                  {opt}
                </div>
              )
            })}
          </div>
          {submitted && <div style={{ marginTop: 8, padding: '8px 12px', background: 'rgba(99,102,241,0.07)', borderRadius: 8, color: '#A5B4FC', fontSize: 12, lineHeight: 1.5 }}>💡 {q.exp}</div>}
        </div>
      ))}
      {submitted ? (
        <div style={{ background: score >= quiz.length ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)', border: `1px solid ${score >= quiz.length ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}`, borderRadius: 10, padding: '14px 18px', textAlign: 'center' }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: score >= quiz.length ? '#10B981' : '#F59E0B' }}>{score}/{quiz.length}</div>
          <div style={{ fontSize: 13, color: 'var(--text-sub)', marginTop: 4 }}>{score === quiz.length ? '¡Perfecto! Continúa al reto práctico.' : score >= quiz.length / 2 ? 'Bien. Revisa las explicaciones.' : 'Vuelve a la lección e inténtalo de nuevo.'}</div>
        </div>
      ) : (
        <Btn onClick={submit} disabled={Object.keys(answers).length < quiz.length}>
          {Object.keys(answers).length < quiz.length ? `Responde ${quiz.length - Object.keys(answers).length} pregunta(s) más` : 'Enviar respuestas'}
        </Btn>
      )}
    </div>
  )
}

// ─── CHALLENGE ────────────────────────────────────────────────────────────────
function ChallengeSection({ challenge, onComplete, alreadyDone }) {
  const [checked, setChecked] = useState({})
  const [done, setDone] = useState(alreadyDone)
  const allChecked = challenge.steps.every((_, i) => checked[i])
  return (
    <div>
      <p style={{ color: 'var(--text-sub)', fontSize: 14, fontStyle: 'italic', marginBottom: 20, lineHeight: 1.6 }}>{challenge.desc}</p>
      <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
        {challenge.steps.map((step, si) => (
          <div key={si} onClick={() => !done && setChecked({ ...checked, [si]: !checked[si] })} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: checked[si] ? 'rgba(16,185,129,0.07)' : 'rgba(255,255,255,0.02)', border: `1px solid ${checked[si] ? 'rgba(16,185,129,0.25)' : 'var(--border)'}`, borderRadius: 8, padding: '11px 14px', cursor: done ? 'default' : 'pointer', transition: 'all 0.15s' }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, background: checked[si] ? '#10B981' : 'rgba(255,255,255,0.06)', border: `1px solid ${checked[si] ? '#10B981' : 'rgba(255,255,255,0.12)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', fontWeight: 700, marginTop: 1 }}>
              {checked[si] ? '✓' : si + 1}
            </div>
            <span style={{ color: checked[si] ? '#6EE7B7' : 'var(--text-sub)', fontSize: 13, lineHeight: 1.65 }}>{step}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 8, padding: '11px 14px', marginBottom: 16, color: '#FCD34D', fontSize: 13, lineHeight: 1.5 }}>
        🎯 Checkpoint: {challenge.checkpoint}
      </div>
      {done
        ? <Badge color="#10B981" size="md">✓ Reto completado — +25 XP</Badge>
        : <Btn onClick={() => { setDone(true); onComplete() }} disabled={!allChecked} variant={allChecked ? 'primary' : 'secondary'}>
            {allChecked ? 'Marcar como completado (+25 XP)' : 'Completa todos los pasos primero'}
          </Btn>
      }
    </div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function LessonPage() {
  const { moduleId, lessonId } = useParams()
  const nav = useNavigate()
  const { completeQuiz, completeChallenge, setLastVisited, getLessonStatus } = useProgress()
  const mod = MODULES.find(m => m.id === moduleId)
  const lessons = LESSONS[moduleId] || []
  const lesson = lessons.find(l => l.id === lessonId)
  const lessonIdx = lessons.findIndex(l => l.id === lessonId)
  const status = getLessonStatus(lessonId)
  const [tab, setTab] = useState('content')

  if (!lesson || !mod) return <div style={{ padding: 40, color: 'var(--text-sub)' }}>Lección no encontrada.</div>

  const animKeys = ANIM_MAP[lessonId] || []
  const prevLesson = lessons[lessonIdx - 1]
  const nextLesson = lessons[lessonIdx + 1]

  return (
    <div style={{ padding: '28px 40px', maxWidth: 780 }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 22, flexWrap: 'wrap' }}>
        <button onClick={() => nav('/')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 13 }}>Dashboard</button>
        <span style={{ color: 'var(--text-muted)' }}>›</span>
        <button onClick={() => nav(`/modulo/${moduleId}`)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 13 }}>{mod.title}</button>
        <span style={{ color: 'var(--text-muted)' }}>›</span>
        <span style={{ color: 'var(--text-sub)', fontSize: 13 }}>{lesson.num}</span>
      </div>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: mod.color, letterSpacing: 2, marginBottom: 6 }}>
              UNIDAD {lesson.num} · {lesson.duration} · +{lesson.xpReward} XP
            </div>
            <h1 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: '#fff', lineHeight: 1.2 }}>{lesson.title}</h1>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {status.quizDone && <Badge color={status.quizScore?.score >= 2 ? '#10B981' : '#F59E0B'}>Quiz {status.quizScore?.score}/{status.quizScore?.total}</Badge>}
            {status.challengeDone && <Badge color="#10B981">Reto ✓</Badge>}
            {status.lessonComplete && <Badge color="#10B981">✓ Completa</Badge>}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', marginBottom: 28 }}>
        {[{ key: 'content', label: '📖 Lección' }, { key: 'quiz', label: '🧠 Quiz' }, { key: 'challenge', label: '⚡ Reto' }].map(t => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{ background: 'none', border: 'none', borderBottom: `2px solid ${tab === t.key ? mod.color : 'transparent'}`, padding: '10px 20px', cursor: 'pointer', color: tab === t.key ? '#fff' : 'var(--text-muted)', fontSize: 14, fontWeight: tab === t.key ? 600 : 400, transition: 'all 0.15s', marginBottom: -1 }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 'content' && (
        <div className="fade-in">
          <VideoBlock lessonId={lessonId} />
          {animKeys.map(key => { const Comp = ANIM_COMPONENTS[key]; return Comp ? <Comp key={key} /> : null })}
          {lesson.content.map((item, i) => <ContentBlock key={i} item={item} />)}
          <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
            <Btn onClick={() => setTab('quiz')}>Ir al quiz →</Btn>
          </div>
        </div>
      )}

      {tab === 'quiz' && (
        <div className="fade-in">
          <QuizSection quiz={lesson.quiz} savedScore={status.quizScore} onComplete={(s, t) => { completeQuiz(lessonId, s, t); setLastVisited(lessonId) }} />
          {status.quizDone && <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end' }}><Btn onClick={() => setTab('challenge')}>Ir al reto →</Btn></div>}
        </div>
      )}

      {tab === 'challenge' && (
        <div className="fade-in">
          <ChallengeSection challenge={lesson.challenge} alreadyDone={status.challengeDone} onComplete={() => { completeChallenge(lessonId); setLastVisited(lessonId) }} />
        </div>
      )}

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
        {prevLesson ? <Btn variant="ghost" onClick={() => nav(`/modulo/${moduleId}/leccion/${prevLesson.id}`)}>← {prevLesson.num}</Btn> : <div />}
        {nextLesson && <Btn onClick={() => nav(`/modulo/${moduleId}/leccion/${nextLesson.id}`)}>Siguiente: {nextLesson.num} →</Btn>}
      </div>
    </div>
  )
}
