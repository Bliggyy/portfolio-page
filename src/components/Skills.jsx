const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML / CSS'],
  },
  {
    label: 'Backend',
    skills: ['ASP.NET Core', 'Laravel', 'Python'],
  },
  {
    label: 'Languages',
    skills: ['C#', 'PHP', 'JavaScript', 'Python'],
  },
  {
    label: 'Data & tools',
    skills: ['MySQL', 'REST APIs', 'Git / GitHub'],
  },
]

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

export default function Skills() {
  return (
    <section id="skills" style={{ marginBottom: '6rem' }} className="fade-up fade-up-4">
      <SectionHead label="Skills & tools" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1rem',
      }}>
        {skillGroups.map(group => (
          <div key={group.label} style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '1.25rem',
          }}>
            <p style={{
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-faint)',
              marginBottom: '0.75rem',
            }}>
              {group.label}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {group.skills.map(skill => (
                <span key={skill} style={{ fontSize: '14px', color: 'var(--ink)' }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
