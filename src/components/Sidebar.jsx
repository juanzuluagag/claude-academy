import { useLocation, useNavigate } from 'react-router-dom'
import { MODULES, LESSONS } from '../data/curriculum.js'
import { useProgress } from '../hooks/useProgress.js'
import { ProgressBar } from './UI.jsx'

export default function Sidebar({ collapsed, onToggle }) {
  const { pathname } = useLocation()
  const nav = useNavigate()
  const { progress, getLessonStatus } = useProgress()

  const getModuleProgress = (modId) => {
    const lessons = LESSONS[modId] || []
    if (!lessons.length) return { done: 0, total: 0 }
    const done = lessons.filter(l => getLessonStatus(l.id).lessonComplete).length
    return { done, total: lessons.length }
  }

  return (
    <nav style={{
      width: collapsed ? '60px' : '240px',
      minHeight: '100vh',
      background: 'var(--bg-card)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.25s ease',
      overflow: 'hidden',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      alignSelf: 'flex-start',
      height: '100vh',
    }}>
      <div style={{
        padding: collapsed ? '20px 0' : '20px 20px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center',
        justifyContent: collapsed ? 'center' : 'space-between',
        minHeight: '64px',
      }}>
        {!collapsed && (
          <div onClick={() => nav('/')} style={{ cursor: 'pointer' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '17px', color: '#fff' }}>Claude</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px' }}>ACADEMY</div>
          </div>
        )}
        {collapsed && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', color: 'var(--accent)' }}>C</div>}
        <button onClick={onToggle} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '18px', padding: '4px', lineHeight: 1 }}>
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      {!collapsed && (
        <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '1px' }}>XP TOTAL</span>
            <span style={{ fontSize: '12px', color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{progress.xp}</span>
          </div>
          <ProgressBar value={progress.xp} max={1000} color="var(--accent)" height={4} />
        </div>
      )}

      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        <NavItem icon="⊞" label="Dashboard"  active={pathname === '/'}          onClick={() => nav('/')}         collapsed={collapsed} />
        <NavItem icon="📖" label="Glosario"   active={pathname === '/glosario'}  onClick={() => nav('/glosario')} collapsed={collapsed} />

        {!collapsed && (
          <div style={{ padding: '14px 20px 6px', fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '2px' }}>
            MÓDULOS
          </div>
        )}

        {MODULES.map(m => {
          const { done, total } = getModuleProgress(m.id)
          const active = pathname.startsWith(`/modulo/${m.id}`)
          return (
            <div key={m.id} onClick={() => m.available && nav(`/modulo/${m.id}`)} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: collapsed ? '10px 0' : '10px 20px',
              justifyContent: collapsed ? 'center' : 'flex-start',
              cursor: m.available ? 'pointer' : 'default',
              background: active ? `${m.color}18` : 'transparent',
              borderLeft: active ? `2px solid ${m.color}` : '2px solid transparent',
              opacity: m.available ? 1 : 0.4,
              transition: 'all 0.15s',
            }}>
              <span style={{ fontSize: '15px', flexShrink: 0 }}>{m.icon}</span>
              {!collapsed && (
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: active ? 600 : 400, color: active ? '#fff' : 'var(--text-sub)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {m.title}
                    {!m.available && <span style={{ marginLeft: '6px', fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>pronto</span>}
                  </div>
                  {total > 0 && <div style={{ marginTop: '3px' }}><ProgressBar value={done} max={total} color={m.color} height={3} /></div>}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!collapsed && (
        <div style={{ padding: '12px 20px', borderTop: '1px solid var(--border)', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Claude Academy v1.0
        </div>
      )}
    </nav>
  )
}

function NavItem({ icon, label, active, onClick, collapsed }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: '10px',
      padding: collapsed ? '10px 0' : '10px 20px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      cursor: 'pointer',
      background: active ? 'rgba(99,102,241,0.1)' : 'transparent',
      borderLeft: active ? '2px solid var(--accent)' : '2px solid transparent',
      transition: 'all 0.15s',
    }}>
      <span style={{ fontSize: '15px' }}>{icon}</span>
      {!collapsed && <span style={{ fontSize: '13px', fontWeight: active ? 600 : 400, color: active ? '#fff' : 'var(--text-sub)' }}>{label}</span>}
    </div>
  )
}
