// ─── SHARED UI COMPONENTS ────────────────────────────────────────────────────

export function Badge({ children, color, size = 'sm' }) {
  const c = color || 'var(--accent)'
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      background: c + '1A',
      color: c,
      border: `1px solid ${c}33`,
      borderRadius: '6px',
      padding: size === 'sm' ? '2px 8px' : '4px 12px',
      fontSize: size === 'sm' ? '11px' : '13px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      letterSpacing: '0.3px',
      whiteSpace: 'nowrap',
    }}>{children}</span>
  )
}

export function Btn({ children, onClick, variant = 'primary', disabled, style: extra }) {
  const styles = {
    primary: {
      background: disabled ? 'rgba(255,255,255,0.06)' : 'var(--accent)',
      color: disabled ? 'var(--text-muted)' : '#fff',
      border: 'none',
    },
    secondary: {
      background: 'transparent',
      color: disabled ? 'var(--text-muted)' : 'var(--text-sub)',
      border: '1px solid var(--border)',
    },
    ghost: {
      background: 'rgba(255,255,255,0.04)',
      color: 'var(--text-sub)',
      border: '1px solid var(--border)',
    },
    danger: {
      background: disabled ? 'rgba(255,255,255,0.06)' : 'rgba(239,68,68,0.15)',
      color: disabled ? 'var(--text-muted)' : '#EF4444',
      border: '1px solid rgba(239,68,68,0.3)',
    },
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles[variant],
        borderRadius: '8px',
        padding: '9px 18px',
        fontSize: '14px',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.15s',
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        ...extra,
      }}
    >{children}</button>
  )
}

export function ProgressBar({ value, max, color, height = 5 }) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0
  return (
    <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 99, height, overflow: 'hidden' }}>
      <div style={{
        width: `${pct}%`, height: '100%',
        background: color || 'var(--accent)',
        borderRadius: 99,
        transition: 'width 0.6s cubic-bezier(.4,0,.2,1)',
      }} />
    </div>
  )
}

export function Card({ children, style: extra, onClick, highlight }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${highlight ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'border-color 0.2s, background 0.2s',
        cursor: onClick ? 'pointer' : 'default',
        ...extra,
      }}
    >{children}</div>
  )
}

export function Divider({ style: extra }) {
  return <div style={{ height: 1, background: 'var(--border)', margin: '20px 0', ...extra }} />
}

export function Mono({ children, color }) {
  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: color || 'var(--text-muted)' }}>
      {children}
    </span>
  )
}
