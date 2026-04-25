/* DESIGN: Mangekyou Sharingan — Projects grid with hover reveal, red glow, glass cards */
import { useEffect, useRef } from "react";

const CROW_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663597813049/Fa4U3b57VpfCNTg3pVWbMA/crow-silhouette-YD2SmmkGxnkVGEPBPKqfxM.webp";

const projects = [
  {
    id: 1,
    title: "Sharingan Analytics",
    category: "Web App",
    description: "A powerful real-time analytics dashboard with dark UI, interactive charts, and live data streaming. Built with React, TypeScript, and WebSockets.",
    tags: ["React", "TypeScript", "WebSocket", "D3.js"],
    color: "#cc1a1a",
    featured: true,
  },
  {
    id: 2,
    title: "Tsukuyomi CMS",
    category: "Full Stack",
    description: "A headless CMS with a beautiful admin interface, drag-and-drop content builder, and multi-language support.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    color: "#8b0000",
    featured: true,
  },
  {
    id: 3,
    title: "Crow Messenger",
    category: "Mobile App",
    description: "End-to-end encrypted messaging app with real-time delivery, voice messages, and disappearing messages feature.",
    tags: ["React Native", "Firebase", "Encryption"],
    color: "#cc1a1a",
    featured: false,
  },
  {
    id: 4,
    title: "Amaterasu UI Kit",
    category: "Design System",
    description: "A comprehensive dark-themed UI component library with 50+ components, Figma design tokens, and full accessibility support.",
    tags: ["React", "Storybook", "Figma", "CSS"],
    color: "#8b0000",
    featured: false,
  },
  {
    id: 5,
    title: "Susanoo E-Commerce",
    category: "E-Commerce",
    description: "Full-featured e-commerce platform with AI-powered recommendations, real-time inventory, and seamless checkout flow.",
    tags: ["Next.js", "Stripe", "MongoDB", "AI"],
    color: "#cc1a1a",
    featured: false,
  },
  {
    id: 6,
    title: "Genjutsu Portfolio",
    category: "Portfolio",
    description: "An immersive 3D portfolio experience with WebGL animations, particle systems, and cinematic scroll effects.",
    tags: ["Three.js", "GSAP", "WebGL", "React"],
    color: "#8b0000",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div
      className="reveal-item project-card"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: `all 0.7s ease ${index * 0.1}s`,
        background: "rgba(12, 3, 5, 0.85)",
        border: "1px solid rgba(204, 26, 26, 0.15)",
        backdropFilter: "blur(12px)",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        gridColumn: project.featured ? "span 1" : "span 1",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(204, 26, 26, 0.5)";
        el.style.boxShadow = "0 0 40px rgba(204, 26, 26, 0.15), inset 0 0 30px rgba(204, 26, 26, 0.05)";
        el.style.transform = "translateY(-4px)";
        const overlay = el.querySelector(".card-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(204, 26, 26, 0.15)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
        const overlay = el.querySelector(".card-overlay") as HTMLElement;
        if (overlay) overlay.style.opacity = "0";
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
      }} />

      {/* Hover overlay */}
      <div
        className="card-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(204, 26, 26, 0.05) 0%, transparent 70%)",
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />

      {/* Category badge */}
      <div style={{
        display: "inline-block",
        padding: "3px 12px",
        background: "rgba(204, 26, 26, 0.1)",
        border: "1px solid rgba(204, 26, 26, 0.2)",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#cc1a1a",
        marginBottom: "1rem",
      }}>
        {project.category}
      </div>

      {/* Project number */}
      <div style={{
        position: "absolute",
        top: "1.5rem",
        right: "1.5rem",
        fontFamily: "'Cinzel', serif",
        fontSize: "2.5rem",
        fontWeight: 700,
        color: "rgba(204, 26, 26, 0.08)",
        lineHeight: 1,
      }}>
        {String(project.id).padStart(2, "0")}
      </div>

      <h3 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "1.1rem",
        fontWeight: 700,
        color: "#f0e8e0",
        marginBottom: "0.75rem",
        letterSpacing: "0.05em",
      }}>
        {project.title}
      </h3>

      <p style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: "0.9rem",
        lineHeight: 1.7,
        color: "#7a6a60",
        marginBottom: "1.5rem",
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            padding: "3px 10px",
            background: "rgba(204, 26, 26, 0.06)",
            border: "1px solid rgba(204, 26, 26, 0.1)",
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "#9a8070",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* View link */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "0.8rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#cc1a1a",
        }}>
          View Project
        </span>
        <div style={{
          width: "20px",
          height: "1px",
          background: "#cc1a1a",
          transition: "width 0.3s ease",
        }} />
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "linear-gradient(180deg, #0a0203 0%, #0d0305 100%)",
        overflow: "hidden",
      }}
    >
      {/* Crow silhouette background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${CROW_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.04,
        filter: "invert(1) sepia(1) saturate(3) hue-rotate(330deg)",
      }} />

      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 20% 80%, rgba(204, 26, 26, 0.05) 0%, transparent 50%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "0.8rem", color: "rgba(204, 26, 26, 0.6)", letterSpacing: "0.4em", marginBottom: "0.5rem" }}>
            プロジェクト
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0e8e0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Featured <span style={{ color: "#cc1a1a" }}>Projects</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)", margin: "1rem auto 0" }} />
        </div>

        {/* Projects grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
        className="projects-grid"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all button */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.6s", textAlign: "center", marginTop: "3rem" }}>
          <button
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "14px 40px",
              background: "transparent",
              color: "#cc1a1a",
              border: "1px solid rgba(204, 26, 26, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(204, 26, 26, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            View All Projects
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
