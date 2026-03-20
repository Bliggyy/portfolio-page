import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer style={{
          borderTop: '1px solid var(--border)',
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{ fontSize: '12px', color: 'var(--ink-faint)' }}>© 2026 Bligh Stian Ignacio</p>
          <p style={{ fontSize: '12px', color: 'var(--ink-faint)' }}>Built with React + Vite</p>
        </footer>
      </div>
    </>
  )
}
