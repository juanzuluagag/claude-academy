import { useNavigate } from 'react-router-dom'
import { MODULES, LESSONS } from '../data/curriculum.js'
import { useProgress } from '../hooks/useProgress.js'
import { Badge, ProgressBar, Btn } from '../components/UI.jsx'

export default function Dashboard() {
  const nav = useNavigate()
  const { progress, getLessonStatus } = useProgress()

  const getModuleStats = (modId) => {
    const lessons = LESSONS[modId] || []
    if (!lessons.length) return { done: 0, total: 0, pct: 0 }
    const done = lessons.filter(l => getLessonStatus(l.id).lessonComplete).length
    return { done, total: lessons.length, pct: Math.round((done / lessons.length) * 100) }
  }

  const totalLessons = Object.values(LESSONS).flat().length
  const completedLessons = progress.completedLessons.length
  const totalChallenges = Object.values(LESSONS).flat().length
  const doneChallenges = progress.completedChallenges.length

  return (
    <div style={{ padding: '32px 40px', maxWidth: '900px' }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '36px' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '3px', marginBottom: '8px' }}>
          BIENVENIDO A TU PLATAFORMA DE ENTRENAMIENTO
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.1,
          margin: '0 0 10px',
          background: 'linear-gradient(120deg, #fff 0%, #A5B4FC 60%, #818CF8 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>
          De Cero a Experto<br />en Claude IA
        </h1>
        <p style={{ color: 'var(--text-sub)', fontSize: '15px', maxWidth: '500px' }}>
          19 semanas · {MODULES.length} módulos · {totalLessons} lecciones · Sin brechas de conocimiento
        </p>
      </div>

      {/* Stats bar */}
      <div className="fade-up" style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '36px',
      }}>
        {[
          { label: 'XP Total', value: progress.xp, unit: 'pts', color: 'var(--accent)' },
          { label: 'Lecciones', value: `${completedLessons}/${totalLessons}`, color: '#10B981' },
          { label: 'Retos', value: `${doneChallenges}/${totalChallenges}`, color: '#F59E0B' },
          { label: 'Racha', value: `${progress.streak?.count || 0}`, unit: 'días', color: '#EC4899' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 18px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: s.color, fontFamily: 'var(--font-display)', lineHeight: 1 }}>
              {s.value}<span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '2px' }}>{s.unit}</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '5px', letterSpacing: '1px' }}>
              {s.label.toUpperCase()}
            </div>
          </div>
        ))}
      </div>

      {/* Continue CTA */}
      {progress.lastVisited?.lessonId && (() => {
        const allLessons = Object.values(LESSONS).flat()
        const last = allLessons.find(l => l.id === progress.lastVisited.lessonId)
        if (!last) return null
        const modId = Object.entries(LESSONS).find(([, ls]) => ls.find(l => l.id === last.id))?.[0]
        const mod = MODULES.find(m => m.id === modId)
        return (
          <div className="fade-up" style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: 'var(--radius-xl)',
            padding: '20px 24px',
            marginBottom: '32px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
            flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '4px' }}>
                CONTINUAR DONDE LO DEJASTE
              </div>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>{last.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-sub)', marginTop: '2px' }}>
                {mod?.title} · {last.num} · {last.duration}
              </div>
            </div>
            <Btn onClick={() => nav(`/modulo/${modId}/leccion/${last.id}`)}>
              Continuar →
            </Btn>
          </div>
        )
      })()}

      {/* Modules grid */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '14px' }}>
        PLAN DE ESTUDIO COMPLETO
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        {MODULES.map((m, i) => {
          const stats = getModuleStats(m.id)
          return (
            <div
              key={m.id}
              className="fade-up"
              onClick={() => m.available && nav(`/modulo/${m.id}`)}
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${m.available ? 'var(--border)' : 'rgba(255,255,255,0.04)'}`,
                borderRadius: 'var(--radius-xl)',
                padding: '20px 22px',
                cursor: m.available ? 'pointer' : 'default',
                opacity: m.available ? 1 : 0.45,
                transition: 'border-color 0.2s, background 0.2s',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Color accent top bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: m.color, opacity: m.available ? 1 : 0.3,
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '22px' }}>{m.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: m.color, letterSpacing: '1.5px' }}>
                      MÓDULO {m.num} · {m.weeks}
                    </div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>
                      {m.title}
                    </div>
                  </div>
                </div>
                {!m.available
                  ? <Badge color="#64748B">Próximo</Badge>
                  : stats.pct === 100
                    ? <Badge color="#10B981">✓ Completo</Badge>
                    : stats.pct > 0
                      ? <Badge color={m.color}>{stats.pct}%</Badge>
                      : null
                }
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-sub)', lineHeight: 1.6, margin: '0 0 14px' }}>
                {m.description}
              </p>

              {stats.total > 0 && (
                <>
                  <ProgressBar value={stats.done} max={stats.total} color={m.color} height={4} />
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '6px' }}>
                    {stats.done}/{stats.total} lecciones completadas
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
