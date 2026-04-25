/* DESIGN: Mangekyou Sharingan — Aged Domain Supplier Hero */
import { useEffect, useState } from "react";

const BANNER_URL = "/manus-storage/itachi-banner_3387e612.png";
const SHARINGAN_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663597813049/Fa4U3b57VpfCNTg3pVWbMA/sharingan-bg-DyVQXQSijmfbBZMu3XrjF3.webp";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const tagline = "HAGSTORE — Premium Aged Domains for SEO Success";

  // Typewriter effect
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < tagline.length) {
      timeout = setTimeout(() => setDisplayText(tagline.slice(0, displayText.length + 1)), 50);
    } else if (!isDeleting && displayText.length === tagline.length) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, tagline]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#0a0203",
      }}
    >
      {/* Sharingan background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${SHARINGAN_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.08,
        zIndex: 0,
      }} />

      {/* Dark gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(10,2,3,0.97) 0%, rgba(20,4,6,0.85) 40%, rgba(10,2,3,0.7) 100%)",
        zIndex: 1,
      }} />

      {/* Red atmospheric glow bottom */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "300px",
        background: "linear-gradient(to top, rgba(139,0,0,0.15), transparent)",
        zIndex: 1,
      }} />

      {/* Content container */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        alignItems: "center",
        paddingTop: "80px",
        minHeight: "calc(100vh - 80px)",
      }}
      className="hero-grid"
      >
        {/* Left: Text content */}
        <div style={{ animation: "slideInLeft 0.9s ease forwards" }}>
          {/* Brand accent text */}
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "0.85rem",
            color: "rgba(204, 26, 26, 0.7)",
            letterSpacing: "0.3em",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}>
            HAGSTORE — Domain Supplier
          </div>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: "0.5rem",
            color: "#f0e8e0",
            textShadow: "0 0 40px rgba(204, 26, 26, 0.3)",
          }}>
            HAG
            <br />
            <span style={{ color: "#cc1a1a", textShadow: "0 0 30px rgba(204, 26, 26, 0.6), 0 0 60px rgba(204, 26, 26, 0.3)" }}>
              STORE
            </span>
          </h1>

          {/* Divider line */}
          <div style={{
            width: "80px",
            height: "3px",
            background: "linear-gradient(90deg, #cc1a1a, transparent)",
            marginBottom: "1.5rem",
          }} />

          {/* Typewriter tagline */}
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#c0a898",
            marginBottom: "2rem",
            minHeight: "2.5rem",
            whiteSpace: "nowrap",
            overflow: "visible",
          }}>
            {displayText}
            <span style={{
              borderRight: `2px solid #cc1a1a`,
              opacity: showCursor ? 1 : 0,
              transition: "opacity 0.1s",
              marginLeft: "2px",
            }} />
          </div>

          {/* Description */}
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#9a8070",
            maxWidth: "480px",
            marginBottom: "2.5rem",
          }}>
            HAGSTORE menyediakan aged domain berkualitas tinggi dengan track record terbukti. Sempurna untuk SEO, affiliate marketing, dan brand building. Metrik transparan, pengiriman instan, dan dukungan pelanggan premium.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
            {[
              { number: "500+", label: "Domains Available" },
              { number: "10+", label: "Years Authority" },
              { number: "99.9%", label: "Uptime Guarantee" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.5rem", fontWeight: 700, color: "#cc1a1a" }}>
                  {stat.number}
                </div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", letterSpacing: "0.1em", color: "#7a6a60", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("domains")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "14px 32px",
                background: "linear-gradient(135deg, #cc1a1a, #8b0000)",
                color: "#f0e8e0",
                border: "none",
                cursor: "pointer",
                clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                transition: "all 0.3s ease",
                boxShadow: "0 0 20px rgba(204, 26, 26, 0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(255, 34, 34, 0.7)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(204, 26, 26, 0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Browse Domains
            </button>
            <button
              onClick={() => window.open("https://t.me/yourusername", "_blank")}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "14px 32px",
                background: "transparent",
                color: "#cc1a1a",
                border: "1px solid rgba(204, 26, 26, 0.5)",
                cursor: "pointer",
                clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "#cc1a1a";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(204, 26, 26, 0.2)";
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
        </div>

        {/* Right: Domain showcase visual */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "slideInRight 0.9s ease forwards",
          }}
        >
          {/* Outer glow ring */}
          <div style={{
            position: "absolute",
            width: "110%",
            height: "110%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204, 26, 26, 0.15) 0%, transparent 70%)",
            animation: "redPulse 3s ease-in-out infinite",
          }} />

          {/* Domain cards stack */}
          <div style={{ position: "relative", width: "min(420px, 90%)" }}>
            {[
              { domain: "example-seo.com", da: 45, price: "$299" },
              { domain: "brandname-store.com", da: 38, price: "$199" },
              { domain: "niche-authority.com", da: 52, price: "$399" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${i * 20}px`,
                  top: `${i * 20}px`,
                  width: "100%",
                  padding: "20px",
                  background: "rgba(10, 2, 3, 0.9)",
                  border: "1px solid rgba(204, 26, 26, 0.3)",
                  backdropFilter: "blur(12px)",
                  transform: `rotate(${i * 3}deg)`,
                  zIndex: 10 - i,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `rotate(0deg) translateY(-10px)`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(204, 26, 26, 0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `rotate(${i * 3}deg)`;
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", color: "#cc1a1a", letterSpacing: "0.2em", marginBottom: "8px", textTransform: "uppercase" }}>
                  Domain
                </div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", fontWeight: 700, color: "#f0e8e0", marginBottom: "12px" }}>
                  {item.domain}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", color: "#7a6a60", marginRight: "8px" }}>DA:</span>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", color: "#cc1a1a", fontWeight: 700 }}>
                      {item.da}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1rem", fontWeight: 700, color: "#cc1a1a" }}>
                    {item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        animation: "floatUp 2s ease-in-out infinite",
      }}>
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", letterSpacing: "0.3em", color: "#5a4a40", textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, #cc1a1a, transparent)",
        }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding-top: 100px !important;
          }
        }
      `}</style>
    </section>
  );
}
