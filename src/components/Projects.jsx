import styles from "../styles/Projects.module.css";

const projects = [
  {
    id: 1,
    featured: true,
    title: "Order Management API",
    description:
      "A game-oriented order management system built with ASP.NET Core and React. Handles order creation, tracking, and fulfillment flows through a clean REST API with a React front end.",
    tags: ["ASP.NET Core", "React", "C#", "REST API"],
    demoUrl: "#",
    status: "In progress",
    thumbPattern: (
      <svg
        viewBox="0 0 600 200"
        preserveAspectRatio="xMidYMid slice"
        className={styles.thumbPatternSvg}
      >
        <defs>
          <pattern
            id="grid1"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#1a1916"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid1)" />
        <circle
          cx="300"
          cy="100"
          r="60"
          fill="none"
          stroke="#1a1916"
          strokeWidth="0.8"
        />
        <circle
          cx="300"
          cy="100"
          r="100"
          fill="none"
          stroke="#1a1916"
          strokeWidth="0.5"
        />
        <line
          x1="180"
          y1="100"
          x2="420"
          y2="100"
          stroke="#1a1916"
          strokeWidth="0.6"
        />
        <line
          x1="300"
          y1="20"
          x2="300"
          y2="180"
          stroke="#1a1916"
          strokeWidth="0.6"
        />
      </svg>
    ),
  },
  {
    id: 2,
    featured: false,
    title: "Inventory Management System",
    description:
      "A multi-user inventory platform built with Laravel and React. Features role-based access, real-time stock tracking, and full CRUD operations.",
    tags: ["Laravel", "React", "PHP", "MySQL"],
    demoUrl: "#",
    status: "In progress",
    thumbPattern: (
      <svg
        viewBox="0 0 300 180"
        preserveAspectRatio="xMidYMid slice"
        className={styles.thumbPatternSvg}
      >
        <defs>
          <pattern
            id="dots2"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.2" fill="#1a1916" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots2)" />
        <rect
          x="60"
          y="40"
          width="80"
          height="50"
          rx="6"
          fill="none"
          stroke="#1a1916"
          strokeWidth="0.8"
        />
        <rect
          x="160"
          y="60"
          width="80"
          height="50"
          rx="6"
          fill="none"
          stroke="#1a1916"
          strokeWidth="0.8"
        />
        <line
          x1="140"
          y1="65"
          x2="160"
          y2="75"
          stroke="#1a1916"
          strokeWidth="0.7"
        />
      </svg>
    ),
  },
  {
    id: 3,
    featured: false,
    title: "Web Scraper",
    description:
      "A Python-based web scraper that extracts, parses, and structures data from target websites — built for reliability and easy extension to new sources.",
    tags: ["Python", "BeautifulSoup", "Requests"],
    demoUrl: "#",
    status: "In progress",
    thumbPattern: (
      <svg
        viewBox="0 0 300 180"
        preserveAspectRatio="xMidYMid slice"
        className={styles.thumbPatternSvg}
      >
        <defs>
          <pattern
            id="diag3"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 16 L 16 0"
              stroke="#1a1916"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag3)" />
        <rect
          x="40"
          y="50"
          width="220"
          height="14"
          rx="3"
          fill="none"
          stroke="#1a1916"
          strokeWidth="0.8"
        />
        <rect
          x="40"
          y="76"
          width="160"
          height="14"
          rx="3"
          fill="none"
          stroke="#1a1916"
          strokeWidth="0.8"
        />
        <rect
          x="40"
          y="102"
          width="190"
          height="14"
          rx="3"
          fill="none"
          stroke="#1a1916"
          strokeWidth="0.8"
        />
      </svg>
    ),
  },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function SectionHead({ label }) {
  return (
    <div className={styles.sectionHead}>
      <span className={styles.sectionLabel}>{label}</span>
      <div className={styles.sectionRule} />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className={`${styles.card} ${project.featured ? styles.cardFeatured : styles.cardRegular}`}
    >
      {/* Thumbnail */}
      <div
        className={`${styles.thumb} ${project.featured ? styles.thumbFeatured : styles.thumbRegular}`}
      >
        {project.thumbPattern}
        <span className={styles.thumbNote}>Screenshot coming soon</span>
      </div>

      {/* Body */}
      <div className={styles.cardBody}>
        <div className={styles.statusPill}>
          <span className={styles.statusDot} />
          {project.status}
        </div>

        <p className={styles.projectTitle}>{project.title}</p>
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.tagList}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <a href={project.demoUrl} className={styles.demoLink}>
          Live demo coming soon <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`fade-up fade-up-3 ${styles.section}`}>
      <SectionHead label="Selected projects" />
      <div className={styles.grid}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
