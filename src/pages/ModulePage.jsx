import { useParams, useNavigate } from 'react-router-dom'
import { MODULES, LESSONS } from '../data/curriculum.js'
import { useProgress } from '../hooks/useProgress.js'
import { Badge, ProgressBar, Card, Btn } from '../components/UI.jsx'

export default function ModulePage() {
  const { moduleId } = useParams()
  const nav = useNavigate()
  const { getLessonStatus } = useProgress()

  const mod = MODULES.find(m => m.id === moduleId)
  const lessons = LESSONS[moduleId] || []

  if (!mod) return <div style={{ padding: 40, color: 'var(--text-sub)' }}>Módulo no encontrado.</div>

  const done = lessons.filter(l => getLessonStatus(l.id).lessonComplete).length

  return (
    <div style={{ padding: '32px 40px', maxWidth: '780px' }}>
      {/* Back */}
      <button
        onClick={() => nav('/')}
        style={{
          background: 'transparent', border: 'none', color: 'var(--text-muted)',
          cursor: 'pointer', fontSize: '13px', fontFamily: 'var(--font-body)',
          display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px', padding: 0,
        }}
      >← Volver al Dashboard</button>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: '28px' }}>
        <div style={{
          display: 'inline-block',
          background: mod.color + '18',
          border: `1px solid ${mod.color}33`,
          borderRadius: 'var(--radius)',
          padding: '6px 14px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: mod.color,
          letterSpacing: '2px',
          marginBottom: '12px',
        }}>
          MÓDULO {mod.num} · {mod.weeks}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
          <span style={{ fontSize: '36px' }}>{mod.icon}</span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '32px', margin: 0,
            color: '#fff',
          }}>{mod.title}</h1>
        </div>
        <p style={{ color: 'var(--text-sub)', fontSize: '15px', maxWidth: '560px', lineHeight: 1.6 }}>
          {mod.description}
        </p>
      </div>

      {/* Progress */}
      <div className="fade-up" style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', padding: '18px 22px', marginBottom: '28px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '1px' }}>
            PROGRESO DEL MÓDULO
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: mod.color, fontWeight: 600 }}>
            {done}/{lessons.length} lecciones
          </span>
        </div>
        <ProgressBar value={done} max={lessons.length} color={mod.color} height={6} />
      </div>

      {/* Lessons list */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '2px', marginBottom: '12px' }}>
        LECCIONES
      </div>
      <div style={{ display: 'grid', gap: '10px' }}>
        {lessons.map((lesson, idx) => {
          const status = getLessonStatus(lesson.id)
          const isNext = !status.lessonComplete && (idx === 0 || getLessonStatus(lessons[idx-1]?.id).lessonComplete)

          return (
            <div
              key={lesson.id}
              className="fade-up"
              onClick={() => nav(`/modulo/${moduleId}/leccion/${lesson.id}`)}
              style={{
                background: isNext ? `${mod.color}0A` : 'var(--bg-card)',
                border: `1px solid ${status.lessonComplete ? mod.color + '44' : isNext ? mod.color + '33' : 'var(--border)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '16px 18px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '14px',
                transition: 'all 0.15s',
              }}
            >
              {/* Status circle */}
              <div style={{
                width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
                background: status.lessonComplete ? mod.color + '22' : 'rgba(255,255,255,0.04)',
                border: `1px solid ${status.lessonComplete ? mod.color + '55' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: status.lessonComplete ? '16px' : '13px',
                color: status.lessonComplete ? mod.color : 'var(--text-muted)',
                fontFamily: 'var(--font-mono)', fontWeight: 700,
              }}>
                {status.lessonComplete ? '✓' : lesson.num}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>
                  {lesson.title}
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {lesson.duration}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    +{lesson.xpReward} XP
                  </span>
                  {status.quizDone && (
                    <Badge color={status.quizScore?.score >= 2 ? '#10B981' : '#F59E0B'}>
                      Quiz {status.quizScore?.score}/{status.quizScore?.total}
                    </Badge>
                  )}
                  {status.challengeDone && <Badge color="#10B981">Reto ✓</Badge>}
                  {isNext && <Badge color={mod.color}>▶ Siguiente</Badge>}
                </div>
              </div>

              <span style={{ color: 'var(--text-muted)', fontSize: '20px', flexShrink: 0 }}>›</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
