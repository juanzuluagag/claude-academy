import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ModulePage from './pages/ModulePage.jsx'
import LessonPage from './pages/LessonPage.jsx'
import GlossaryPage from './pages/GlossaryPage.jsx'

export default function App() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(c => !c)} />
      <main style={{ flex: 1, overflowX: 'hidden', overflowY: 'auto' }}>
        <Routes>
          <Route path="/"                                   element={<Dashboard />} />
          <Route path="/glosario"                           element={<GlossaryPage />} />
          <Route path="/modulo/:moduleId"                   element={<ModulePage />} />
          <Route path="/modulo/:moduleId/leccion/:lessonId" element={<LessonPage />} />
        </Routes>
      </main>
    </div>
  )
}
