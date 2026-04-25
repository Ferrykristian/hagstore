/* DESIGN: Mangekyou Sharingan — Contact CTA section */
import { useEffect, useRef } from "react";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 2rem",
        background: "#080103",
        overflow: "hidden",
      }}
    >
      {/* Red top/bottom borders */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(204,26,26,0.5), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(204,26,26,0.5), transparent)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        {/* Main heading */}
        <h2
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.98)",
            transition: "all 0.8s ease",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            color: "#f0e8e0",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "1rem",
          }}
        >
          Siap Dapatkan Domain dari <span style={{ color: "#cc1a1a" }}>HAGSTORE</span>?
        </h2>

        {/* Subheading */}
        <p
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.98)",
            transition: "all 0.8s ease 0.15s",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            color: "#9a8070",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}
        >
          Browse our collection of premium aged domains or contact us directly on Telegram 
          to discuss your specific needs and get personalized recommendations.
        </p>

        {/* CTA Buttons */}
        <div
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.98)",
            transition: "all 0.8s ease 0.3s",
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "linear-gradient(135deg, #cc1a1a, #8b0000)",
              color: "#f0e8e0",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 0 25px rgba(204, 26, 26, 0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255, 34, 34, 0.7)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(204, 26, 26, 0.4)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Browse All Domains
          </button>

          <button
            onClick={() => window.open("https://t.me/yourusername", "_blank")}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "16px 40px",
              background: "transparent",
              color: "#cc1a1a",
              border: "2px solid rgba(204, 26, 26, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "#cc1a1a";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(204, 26, 26, 0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.5)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Contact on Telegram
          </button>
        </div>

        {/* Contact info */}
        <div
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.98)",
            transition: "all 0.8s ease 0.45s",
            marginTop: "3rem",
            padding: "2rem",
            background: "rgba(12, 3, 5, 0.8)",
            border: "1px solid rgba(204, 26, 26, 0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase", marginBottom: "8px" }}>
                Response Time
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: "#f0e8e0" }}>
                &lt; 1 Hour
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase", marginBottom: "8px" }}>
                Available
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: "#f0e8e0" }}>
                24/7
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase", marginBottom: "8px" }}>
                Delivery
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", color: "#f0e8e0" }}>
                &lt; 24 Hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
