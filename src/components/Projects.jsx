const projects = [
  {
    id: 1,
    featured: true,
    title: 'Order Management API',
    description:
      'A game-oriented order management system built with ASP.NET Core and React. Handles order creation, tracking, and fulfillment flows through a clean REST API with a React front end.',
    tags: ['ASP.NET Core', 'React', 'C#', 'REST API'],
    demoUrl: '#',
    status: 'In progress',
    thumbPattern: (
      <svg viewBox="0 0 600 200" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
        <defs>
          <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1916" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid1)" />
        <circle cx="300" cy="100" r="60" fill="none" stroke="#1a1916" strokeWidth="0.8" />
        <circle cx="300" cy="100" r="100" fill="none" stroke="#1a1916" strokeWidth="0.5" />
        <line x1="180" y1="100" x2="420" y2="100" stroke="#1a1916" strokeWidth="0.6" />
        <line x1="300" y1="20" x2="300" y2="180" stroke="#1a1916" strokeWidth="0.6" />
      </svg>
    ),
  },
  {
    id: 2,
    featured: false,
    title: 'Inventory Management System',
    description:
      'A multi-user inventory platform built with Laravel and React. Features role-based access, real-time stock tracking, and full CRUD operations.',
    tags: ['Laravel', 'React', 'PHP', 'MySQL'],
    demoUrl: '#',
    status: 'In progress',
    thumbPattern: (
      <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
        <defs>
          <pattern id="dots2" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="#1a1916" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots2)" />
        <rect x="60" y="40" width="80" height="50" rx="6" fill="none" stroke="#1a1916" strokeWidth="0.8" />
        <rect x="160" y="60" width="80" height="50" rx="6" fill="none" stroke="#1a1916" strokeWidth="0.8" />
        <line x1="140" y1="65" x2="160" y2="75" stroke="#1a1916" strokeWidth="0.7" />
      </svg>
    ),
  },
  {
    id: 3,
    featured: false,
    title: 'Web Scraper',
    description:
      'A Python-based web scraper that extracts, parses, and structures data from target websites — built for reliability and easy extension to new sources.',
    tags: ['Python', 'BeautifulSoup', 'Requests'],
    demoUrl: '#',
    status: 'In progress',
    thumbPattern: (
      <svg viewBox="0 0 300 180" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
        <defs>
          <pattern id="diag3" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 0 16 L 16 0" stroke="#1a1916" strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag3)" />
        <rect x="40" y="50" width="220" height="14" rx="3" fill="none" stroke="#1a1916" strokeWidth="0.8" />
        <rect x="40" y="76" width="160" height="14" rx="3" fill="none" stroke="#1a1916" strokeWidth="0.8" />
        <rect x="40" y="102" width="190" height="14" rx="3" fill="none" stroke="#1a1916" strokeWidth="0.8" />
      </svg>
    ),
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function SectionHead({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
      <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

function ProjectCard({ project }) {
  const thumbAspect = project.featured ? '16 / 7' : '16 / 9'

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        gridColumn: project.featured ? 'span 2' : 'span 1',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(26,25,22,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Thumbnail */}
      <div style={{
        width: '100%',
        aspectRatio: thumbAspect,
        background: 'var(--paper-mid)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {project.thumbPattern}
        <span style={{
          fontSize: '12px',
          color: 'var(--ink-faint)',
          letterSpacing: '0.05em',
          position: 'relative',
          zIndex: 1,
          background: 'rgba(247,245,240,0.8)',
          padding: '6px 14px',
          borderRadius: '100px',
          border: '1px solid var(--border)',
        }}>
          Screenshot coming soon
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '11px',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#92651a',
          background: '#fdf3dc',
          padding: '3px 10px',
          borderRadius: '100px',
          marginBottom: '0.75rem',
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c8871f', display: 'inline-block' }} />
          {project.status}
        </div>

        <p style={{ fontFamily: "'Lora', serif", fontSize: '19px', fontWeight: '500', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: '1.3' }}>
          {project.title}
        </p>
        <p style={{ fontSize: '14px', fontWeight: '300', color: 'var(--ink-muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '11px',
              fontWeight: '500',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'var(--paper-mid)',
              color: 'var(--ink-muted)',
              letterSpacing: '0.02em',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.demoUrl}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: '500',
            color: 'var(--accent)',
            textDecoration: 'none',
            transition: 'gap 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.gap = '10px'}
          onMouseLeave={e => e.currentTarget.style.gap = '6px'}
        >
          Live demo coming soon <ArrowIcon />
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ marginBottom: '6rem' }} className="fade-up fade-up-3">
      <SectionHead label="Selected projects" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '1.25rem',
      }}>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  )
}
