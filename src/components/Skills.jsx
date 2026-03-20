import styles from "../styles/Skills.module.css";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["React", "JavaScript", "HTML / CSS"],
  },
  {
    label: "Backend",
    skills: ["ASP.NET Core", "Laravel", "Python"],
  },
  {
    label: "Languages",
    skills: ["C#", "PHP", "JavaScript", "Python"],
  },
  {
    label: "Data & tools",
    skills: ["MySQL", "REST APIs", "Git / GitHub"],
  },
];

function SectionHead({ label }) {
  return (
    <div className={styles.sectionHead}>
      <span className={styles.sectionLabel}>{label}</span>
      <div className={styles.sectionRule} />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={`fade-up fade-up-4 ${styles.section}`}>
      <SectionHead label="Skills & tools" />
      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.label} className={styles.groupCard}>
            <p className={styles.groupLabel}>{group.label}</p>
            <div className={styles.skillList}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.skillItem}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
