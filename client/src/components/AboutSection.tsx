/* DESIGN: Mangekyou Sharingan — About section with asymmetric layout, glass cards, red accents */
import { useEffect, useRef } from "react";

const ABOUT_ART = "https://d2xsxph8kpxj0f.cloudfront.net/310519663597813049/Fa4U3b57VpfCNTg3pVWbMA/itachi-about-art-83WESKcxChYWkge89BQzMD.webp";

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Happy Clients" },
  { value: "10+", label: "Technologies" },
];

export default function AboutSection() {
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
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "linear-gradient(180deg, #0a0203 0%, #0d0305 50%, #0a0203 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle at 80% 50%, rgba(204, 26, 26, 0.06) 0%, transparent 60%)`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "0.8rem", color: "rgba(204, 26, 26, 0.6)", letterSpacing: "0.4em", marginBottom: "0.5rem" }}>
            自己紹介
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0e8e0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            About <span style={{ color: "#cc1a1a" }}>Me</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)", margin: "1rem auto 0" }} />
        </div>

        {/* Main content grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="about-grid"
        >
          {/* Left: Image */}
          <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.1s", position: "relative" }}>
            <div style={{ position: "relative", maxWidth: "340px", margin: "0 auto" }}>
              {/* Decorative background shape */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                right: "-20px",
                bottom: "-20px",
                border: "1px solid rgba(204, 26, 26, 0.2)",
                zIndex: 0,
              }} />

              <img
                src={ABOUT_ART}
                alt="Itachi Portrait"
                style={{
                  width: "100%",
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                  filter: "contrast(1.05) saturate(1.1)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(204, 26, 26, 0.15)",
                }}
              />

              {/* Quote overlay */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "1.5rem",
                background: "linear-gradient(to top, rgba(10,2,3,0.95) 0%, transparent 100%)",
                zIndex: 2,
              }}>
                <p style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.75rem",
                  color: "#cc1a1a",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                  letterSpacing: "0.05em",
                }}>
                  "It is not wise to judge others based on your own preconceptions and by their appearance."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div>
            <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.2s" }}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 700,
                color: "#f0e8e0",
                marginBottom: "1rem",
              }}>
                A Developer Who Walks in the <span style={{ color: "#cc1a1a" }}>Shadows</span>
              </h3>
            </div>

            <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.3s" }}>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#9a8070",
                marginBottom: "1.5rem",
              }}>
                Like Itachi, I operate with precision and purpose. Every line of code is crafted with intention, 
                every design decision made with foresight. I specialize in building powerful web applications 
                that leave a lasting impression — beautiful on the surface, formidable underneath.
              </p>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "#9a8070",
                marginBottom: "2rem",
              }}>
                With expertise in modern frontend and backend technologies, I transform complex ideas into 
                seamless digital experiences. My approach combines technical mastery with creative vision, 
                delivering solutions that are both powerful and elegant.
              </p>
            </div>

            {/* Info grid */}
            <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.4s" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "2rem",
              }}>
                {[
                  { label: "Name", value: "Itachi Uchiha" },
                  { label: "Role", value: "Full Stack Dev" },
                  { label: "Location", value: "Konohagakure" },
                  { label: "Status", value: "Available" },
                ].map((item) => (
                  <div key={item.label} style={{
                    padding: "12px 16px",
                    background: "rgba(15, 3, 5, 0.8)",
                    border: "1px solid rgba(204, 26, 26, 0.15)",
                    backdropFilter: "blur(8px)",
                  }}>
                    <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase", marginBottom: "4px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", color: "#f0e8e0" }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.5s" }}>
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                {stats.map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#cc1a1a",
                      textShadow: "0 0 20px rgba(204, 26, 26, 0.5)",
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "#7a6a60",
                      textTransform: "uppercase",
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
