import { useState } from 'react'
import { GLOSSARY } from '../data/curriculum.js'

const CATS = ['Todos', 'Básico', 'Prompting', 'Herramientas', 'API & Dev', 'Agentes', 'MCP', 'Skills', 'Técnico', 'Plataforma']
const CAT_COLORS = {
  'Básico':       '#6366F1',
  'Prompting':    '#8B5CF6',
  'Herramientas': '#10B981',
  'API & Dev':    '#F97316',
  'Agentes':      '#EC4899',
  'MCP':          '#0EA5E9',
  'Skills':       '#F59E0B',
  'Técnico':      '#EF4444',
  'Plataforma':   '#64748B',
}

export default function GlossaryPage() {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('Todos')

  const filtered = GLOSSARY.filter(g => {
    const matchSearch = !search ||
      g.term.toLowerCase().includes(search.toLowerCase()) ||
      g.def.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCat === 'Todos' || g.cat === activeCat
    return matchSearch && matchCat
  })

  return (
    <div style={{ padding: '32px 40px', maxWidth: 820 }}>
      {/* Header */}
      <div className="fade-up" style={{ marginBottom: 28 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: 3, marginBottom: 8 }}>
          REFERENCIA RÁPIDA
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>
          Glosario Completo
        </h1>
        <p style={{ color: 'var(--text-sub)', fontSize: 15, margin: 0 }}>
          {GLOSSARY.length} términos esenciales organizados por categoría. Con definiciones claras y ejemplos reales.
        </p>
      </div>

      {/* Search */}
      <div style={{ marginBottom: 16, position: 'relative' }}>
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: 15 }}>🔍</span>
        <input
          type="text"
          placeholder="Buscar término o concepto..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%', padding: '11px 14px 11px 40px',
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', color: '#fff',
            fontSize: 14, fontFamily: 'var(--font-body)',
            outline: 'none', boxSizing: 'border-box',
          }}
        />
        {search && (
          <button onClick={() => setSearch('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: 16 }}>×</button>
        )}
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
        {CATS.map(cat => {
          const color = cat === 'Todos' ? 'var(--accent)' : CAT_COLORS[cat]
          const active = activeCat === cat
          return (
            <button key={cat} onClick={() => setActiveCat(cat)} style={{
              background: active ? (color + '22') : 'rgba(255,255,255,0.03)',
              border: `1px solid ${active ? color + '66' : 'var(--border)'}`,
              borderRadius: 'var(--radius-sm)',
              padding: '5px 12px',
              fontSize: 12, fontFamily: 'var(--font-mono)',
              color: active ? color : 'var(--text-muted)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}>
              {cat}
              {cat !== 'Todos' && (
                <span style={{ marginLeft: 5, fontSize: 10, opacity: 0.7 }}>
                  {GLOSSARY.filter(g => g.cat === cat).length}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Count */}
      <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 14 }}>
        {filtered.length} término{filtered.length !== 1 ? 's' : ''} {activeCat !== 'Todos' ? `en ${activeCat}` : ''}{search ? ` con "${search}"` : ''}
      </div>

      {/* Terms */}
      <div style={{ display: 'grid', gap: 10 }}>
        {filtered.map((item, i) => {
          const color = CAT_COLORS[item.cat] || 'var(--accent)'
          return (
            <div key={i} className="fade-up" style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '16px 18px',
              display: 'flex', gap: 14, alignItems: 'flex-start',
              borderLeft: `3px solid ${color}`,
            }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  background: color + '22', color, border: `1px solid ${color}44`,
                  borderRadius: 6, padding: '2px 7px',
                  fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}>
                  {item.cat}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 5 }}>
                  {item.term}
                </div>
                <p style={{ color: 'var(--text-sub)', fontSize: 13, lineHeight: 1.7, margin: '0 0 8px' }}>
                  {item.def}
                </p>
                {item.ex && (
                  <div style={{
                    background: color + '0D', border: `1px solid ${color}22`,
                    borderRadius: 6, padding: '6px 10px',
                    color: color, fontSize: 12, fontFamily: 'var(--font-mono)', lineHeight: 1.5,
                  }}>
                    Ej: {item.ex}
                  </div>
                )}
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '48px 20px', fontSize: 14 }}>
            No se encontraron términos con "{search}"
            {activeCat !== 'Todos' && ` en la categoría ${activeCat}`}
          </div>
        )}
      </div>
    </div>
  )
}
