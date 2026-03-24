import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`fade-up fade-up-5 ${styles.section}`}>
      <div>
        <h2 className={styles.title}>
          Let's work
          <br />
          together.
        </h2>
        <p className={styles.subtitle}>
          Open to new opportunities and collaborations.
        </p>
      </div>

      <div className={styles.actions}>
        <a
          href="mailto:bligh.ignacio23@gmail.com"
          className={styles.primaryButton}
        >
          Send an email
        </a>
        <a
          href="https://www.linkedin.com/in/bligh-stian-ignacio/"
          target="_blank"
          rel="noreferrer"
          className={styles.secondaryButton}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
