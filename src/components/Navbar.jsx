const styles = {
  nav: {
    padding: '2rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid var(--border)',
    marginBottom: '6rem',
  },
  name: {
    fontFamily: "'Lora', serif",
    fontSize: '17px',
    letterSpacing: '-0.01em',
    color: 'var(--ink)',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  link: {
    fontSize: '13px',
    fontWeight: '400',
    color: 'var(--ink-muted)',
    textDecoration: 'none',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
  },
}

export default function Navbar() {
  return (
    <nav style={styles.nav} className="fade-up fade-up-1">
      <a href="#" style={styles.name}>Bligh Stian Ignacio</a>
      <ul style={styles.links}>
        {[['#projects', 'Work'], ['#skills', 'Skills'], ['#contact', 'Contact']].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              style={styles.link}
              onMouseEnter={e => e.target.style.color = 'var(--ink)'}
              onMouseLeave={e => e.target.style.color = 'var(--ink-muted)'}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
