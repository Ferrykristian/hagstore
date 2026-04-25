/* DESIGN: Mangekyou Sharingan — Why Us section dengan benefits */
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: "⚡",
    title: "Instant Delivery",
    description: "Get your domain transferred within 24 hours. No waiting, no delays.",
  },
  {
    icon: "🔒",
    title: "Verified Authority",
    description: "All domains come with verified DA/PA metrics and backlink profiles.",
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description: "No hidden fees. What you see is what you pay. Full price breakdown included.",
  },
  {
    icon: "📊",
    title: "SEO Ready",
    description: "Domains optimized for search engines with clean history and no penalties.",
  },

  {
    icon: "🤝",
    title: "24/7 Support",
    description: "Dedicated support team ready to help you with any questions or issues.",
  },
];

export default function WhyUs() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "linear-gradient(180deg, #0a0203 0%, #0d0305 100%)",
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

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", marginBottom: "4rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0e8e0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Why Choose <span style={{ color: "#cc1a1a" }}>Us</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)", margin: "1rem auto 0" }} />
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", color: "#7a6a60", marginTop: "1rem", maxWidth: "500px", margin: "1rem auto 0" }}>
            We're not just a domain supplier. We're your partner in building SEO authority.
          </p>
        </div>

        {/* Benefits grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
        className="benefits-grid"
        >
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="reveal-item"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.1}s`,
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
              {/* Top accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)",
              }} />

              {/* Icon */}
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#f0e8e0",
                marginBottom: "0.75rem",
              }}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "#7a6a60",
              }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .benefits-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
