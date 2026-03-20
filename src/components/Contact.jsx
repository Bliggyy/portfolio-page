export default function Contact() {
  return (
    <section
      id="contact"
      className="fade-up fade-up-5"
      style={{
        borderTop: '1px solid var(--border)',
        padding: '4rem 0 5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: '2rem',
        flexWrap: 'wrap',
      }}
    >
      <div>
        <h2 style={{
          fontFamily: "'Lora', serif",
          fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: '400',
          letterSpacing: '-0.02em',
          lineHeight: '1.15',
          marginBottom: '0.6rem',
        }}>
          Let's work<br />together.
        </h2>
        <p style={{ fontSize: '15px', fontWeight: '300', color: 'var(--ink-muted)' }}>
          Open to new opportunities and collaborations.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a
          href="mailto:your@email.com"
          style={{
            fontSize: '14px',
            fontWeight: '500',
            padding: '11px 22px',
            background: 'var(--ink)',
            color: 'var(--paper)',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          Send an email
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: '14px',
            fontWeight: '400',
            padding: '11px 22px',
            border: '1px solid var(--border-mid)',
            borderRadius: '100px',
            textDecoration: 'none',
            color: 'var(--ink)',
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--paper-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
