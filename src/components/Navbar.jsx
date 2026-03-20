import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`fade-up fade-up-1 ${styles.nav}`}>
      <a href="#" className={styles.name}>
        Bligh Stian Ignacio
      </a>
      <ul className={styles.links}>
        {[
          ["#projects", "Work"],
          ["#skills", "Skills"],
          ["#contact", "Contact"],
        ].map(([href, label]) => (
          <li key={href}>
            <a href={href} className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
