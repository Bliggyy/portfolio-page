import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import styles from './styles/App.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className={styles.footer}>
        <p className={styles.footerText}>© 2026 Bligh Stian Ignacio</p>
        <p className={styles.footerText}>Built with React + Vite</p>
      </footer>
    </div>
  )
}
