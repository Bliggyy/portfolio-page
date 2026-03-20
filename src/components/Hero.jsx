import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={`fade-up fade-up-2 ${styles.section}`}>
      <div className={styles.label}>
        <span className={styles.dot} />
        Available for work
      </div>

      <h1 className={styles.h1}>
        Full-stack developer
        <br />
        who builds{" "}
        <em className={styles.em}>
          clean,
          <br />
          scalable
        </em>{" "}
        systems.
      </h1>

      <p className={styles.bio}>
        I'm a full-stack developer who enjoys building systems that are clean,
        scalable, and easy to maintain. I work across Python, JavaScript, and
        the web stack — and I pick up new tools fast when the problem calls for
        it.
      </p>

      <div className={styles.actions}>
        <a href="#projects" className={styles.btnPrimary}>
          View my work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a href="mailto:your@email.com" className={styles.btnGhost}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
