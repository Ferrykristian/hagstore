/* DESIGN: Mangekyou Sharingan — Domain showcase dengan filter dan list */
import { useEffect, useRef, useState } from "react";

const domains = [
  { id: 1, name: "seo-authority.com", da: 45, pa: 38, price: "$299", niche: "SEO", age: "8 years" },
  { id: 2, name: "ecommerce-store.io", da: 52, pa: 42, price: "$399", niche: "E-commerce", age: "10 years" },
  { id: 3, name: "tech-innovation.net", da: 38, pa: 32, price: "$199", niche: "Tech", age: "6 years" },
  { id: 4, name: "health-wellness.com", da: 48, pa: 40, price: "$349", niche: "Health", age: "9 years" },
  { id: 5, name: "finance-advisor.com", da: 55, pa: 45, price: "$499", niche: "Finance", age: "11 years" },
  { id: 6, name: "travel-guide.org", da: 42, pa: 35, price: "$279", niche: "Travel", age: "7 years" },
  { id: 7, name: "marketing-pro.co", da: 50, pa: 41, price: "$379", niche: "Marketing", age: "9 years" },
  { id: 8, name: "business-hub.biz", da: 46, pa: 37, price: "$319", niche: "Business", age: "8 years" },
];

const niches = ["All", "SEO", "E-commerce", "Tech", "Health", "Finance", "Travel", "Marketing", "Business"];

function DomainCard({ domain }: { domain: typeof domains[0] }) {
  return (
    <div
      style={{
        background: "rgba(12, 3, 5, 0.85)",
        border: "1px solid rgba(204, 26, 26, 0.15)",
        backdropFilter: "blur(12px)",
        padding: "1.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.5)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(204, 26, 26, 0.15)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.15)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
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

      {/* Niche badge */}
      <div style={{
        display: "inline-block",
        padding: "3px 10px",
        background: "rgba(204, 26, 26, 0.1)",
        border: "1px solid rgba(204, 26, 26, 0.2)",
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "0.65rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#cc1a1a",
        marginBottom: "0.75rem",
      }}>
        {domain.niche}
      </div>

      {/* Domain name */}
      <h3 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "1rem",
        fontWeight: 700,
        color: "#f0e8e0",
        marginBottom: "0.75rem",
        wordBreak: "break-word",
      }}>
        {domain.name}
      </h3>

      {/* Metrics */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginBottom: "1rem",
        padding: "1rem 0",
        borderTop: "1px solid rgba(204, 26, 26, 0.08)",
        borderBottom: "1px solid rgba(204, 26, 26, 0.08)",
      }}>
        <div>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", color: "#7a6a60", letterSpacing: "0.1em", marginBottom: "4px", textTransform: "uppercase" }}>
            DA
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", fontWeight: 700, color: "#cc1a1a" }}>
            {domain.da}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", color: "#7a6a60", letterSpacing: "0.1em", marginBottom: "4px", textTransform: "uppercase" }}>
            PA
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", fontWeight: 700, color: "#cc1a1a" }}>
            {domain.pa}
          </div>
        </div>
      </div>

      {/* Age and Price */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <div>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", color: "#7a6a60", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Age
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", color: "#c0a898" }}>
            {domain.age}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", color: "#7a6a60", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Price
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.3rem", fontWeight: 700, color: "#cc1a1a" }}>
            {domain.price}
          </div>
        </div>
      </div>

      {/* Buy button */}
      <button
        onClick={() => window.open("https://t.me/yourusername", "_blank")}
        style={{
          width: "100%",
          padding: "10px",
          background: "rgba(204, 26, 26, 0.1)",
          border: "1px solid rgba(204, 26, 26, 0.3)",
          color: "#cc1a1a",
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.2)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 15px rgba(204, 26, 26, 0.2)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        Buy on Telegram
      </button>
    </div>
  );
}

export default function DomainShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedNiche, setSelectedNiche] = useState("All");
  const [filteredDomains, setFilteredDomains] = useState(domains);

  useEffect(() => {
    if (selectedNiche === "All") {
      setFilteredDomains(domains);
    } else {
      setFilteredDomains(domains.filter((d) => d.niche === selectedNiche));
    }
  }, [selectedNiche]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 80);
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
      id="domains"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "#0a0203",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(204, 26, 26, 0.05) 0%, transparent 60%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", marginBottom: "3rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0e8e0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Featured <span style={{ color: "#cc1a1a" }}>Domains</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)", margin: "1rem auto 0" }} />
        </div>

        {/* Filter buttons */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.1s", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "3rem" }}>
          {niches.map((niche) => (
            <button
              key={niche}
              onClick={() => setSelectedNiche(niche)}
              style={{
                padding: "8px 20px",
                background: selectedNiche === niche ? "rgba(204, 26, 26, 0.2)" : "rgba(204, 26, 26, 0.05)",
                border: `1px solid ${selectedNiche === niche ? "rgba(204, 26, 26, 0.5)" : "rgba(204, 26, 26, 0.15)"}`,
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: selectedNiche === niche ? "#cc1a1a" : "#7a6a60",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (selectedNiche !== niche) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.3)";
                  (e.currentTarget as HTMLElement).style.color = "#c0a898";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedNiche !== niche) {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.15)";
                  (e.currentTarget as HTMLElement).style.color = "#7a6a60";
                }
              }}
            >
              {niche}
            </button>
          ))}
        </div>

        {/* Domains grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
        className="domains-grid"
        >
          {filteredDomains.map((domain, i) => (
            <div
              key={domain.id}
              className="reveal-item"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.08}s`,
              }}
            >
              <DomainCard domain={domain} />
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.5s", textAlign: "center", marginTop: "3rem" }}>
          <button
            onClick={() => window.open("https://t.me/yourusername", "_blank")}
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
            View All Domains
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          .domains-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .domains-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .domains-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
