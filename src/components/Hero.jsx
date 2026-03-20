const styles = {
  section: {
    marginBottom: '7rem',
  },
  label: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    background: 'var(--accent-light)',
    padding: '5px 14px',
    borderRadius: '100px',
    marginBottom: '1.75rem',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--accent)',
    animation: 'pulse 2s infinite',
    display: 'inline-block',
  },
  h1: {
    fontFamily: "'Lora', serif",
    fontSize: 'clamp(42px, 7vw, 72px)',
    lineHeight: '1.08',
    letterSpacing: '-0.03em',
    marginBottom: '1.5rem',
    fontWeight: '400',
  },
  em: {
    fontStyle: 'italic',
    color: 'var(--ink-muted)',
  },
  bio: {
    fontSize: '17px',
    fontWeight: '300',
    color: 'var(--ink-muted)',
    maxWidth: '520px',
    lineHeight: '1.75',
    marginBottom: '2.5rem',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    padding: '11px 22px',
    background: 'var(--ink)',
    color: 'var(--paper)',
    borderRadius: '100px',
    textDecoration: 'none',
    transition: 'opacity 0.2s, transform 0.2s',
  },
  btnGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '400',
    padding: '11px 22px',
    border: '1px solid var(--border-mid)',
    borderRadius: '100px',
    textDecoration: 'none',
    color: 'var(--ink)',
    transition: 'background 0.2s, transform 0.2s',
  },
}

export default function Hero() {
  return (
    <section style={styles.section} className="fade-up fade-up-2">
      <div style={styles.label}>
        <span style={styles.dot} />
        Available for work
      </div>

      <h1 style={styles.h1}>
        Full-stack developer<br />
        who builds <em style={styles.em}>clean,<br />scalable</em> systems.
      </h1>

      <p style={styles.bio}>
        I'm a full-stack developer who enjoys building systems that are clean, scalable,
        and easy to maintain. I work across Python, JavaScript, and the web stack —
        and I pick up new tools fast when the problem calls for it.
      </p>

      <div style={styles.actions}>
        <a
          href="#projects"
          style={styles.btnPrimary}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          View my work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a
          href="mailto:your@email.com"
          style={styles.btnGhost}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
