/* DESIGN: Mangekyou Sharingan — Skills with animated progress bars, glass cards, red energy */
import { useEffect, useRef, useState } from "react";

const SKILLS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663597813049/Fa4U3b57VpfCNTg3pVWbMA/itachi-skills-bg-6jJkxB7EpEBKgNnotPRXaU.webp";

const skillCategories = [
  {
    title: "Frontend",
    icon: "⚡",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "🔥",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Python / FastAPI", level: 78 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Tools & Design",
    icon: "🎯",
    skills: [
      { name: "Figma / UI Design", level: 88 },
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS / Cloud", level: 65 },
    ],
  },
];

const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Git", color: "#F05032" },
];

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.05em", color: "#c0a898" }}>
          {name}
        </span>
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.8rem", color: "#cc1a1a" }}>
          {level}%
        </span>
      </div>
      <div style={{
        height: "4px",
        background: "rgba(204, 26, 26, 0.1)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: visible ? `${level}%` : "0%",
          background: `linear-gradient(90deg, #8b0000, #cc1a1a, #ff4444)`,
          transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: "0 0 8px rgba(204, 26, 26, 0.6)",
          position: "relative",
        }}>
          {/* Glow tip */}
          <div style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#ff4444",
            boxShadow: "0 0 10px #ff4444, 0 0 20px rgba(255, 68, 68, 0.6)",
          }} />
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "#0a0203",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${SKILLS_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.07,
      }} />

      {/* Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, #0a0203 0%, rgba(10,2,3,0.85) 50%, #0a0203 100%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "0.8rem", color: "rgba(204, 26, 26, 0.6)", letterSpacing: "0.4em", marginBottom: "0.5rem" }}>
            スキル
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0e8e0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            My <span style={{ color: "#cc1a1a" }}>Skills</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)", margin: "1rem auto 0" }} />
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", color: "#7a6a60", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
            Mastering each technique like a shinobi mastering jutsu — with dedication and precision.
          </p>
        </div>

        {/* Skills grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          marginBottom: "4rem",
        }}
        className="skills-grid"
        >
          {skillCategories.map((category, ci) => (
            <div
              key={category.title}
              className="reveal-item"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${ci * 0.15}s`,
                background: "rgba(12, 3, 5, 0.85)",
                border: "1px solid rgba(204, 26, 26, 0.15)",
                backdropFilter: "blur(12px)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(204, 26, 26, 0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.15)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Card top accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)",
              }} />

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "1.4rem" }}>{category.icon}</span>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#f0e8e0",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}>
                  {category.title}
                </h3>
              </div>

              {category.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} visible={visible} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech icons row */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.5s" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", letterSpacing: "0.3em", color: "#5a4a40", textTransform: "uppercase" }}>
              Technologies I Work With
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                style={{
                  padding: "8px 20px",
                  background: "rgba(12, 3, 5, 0.8)",
                  border: "1px solid rgba(204, 26, 26, 0.15)",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#9a8070",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = tech.color;
                  (e.currentTarget as HTMLElement).style.borderColor = tech.color + "50";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${tech.color}20`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#9a8070";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.15)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
