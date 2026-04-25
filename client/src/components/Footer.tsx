/* DESIGN: Mangekyou Sharingan — Footer untuk aged domain supplier */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      position: "relative",
      background: "#070102",
      borderTop: "1px solid rgba(204, 26, 26, 0.1)",
      padding: "3rem 2rem 2rem",
      overflow: "hidden",
    }}>
      {/* Top glow line */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "10%",
        right: "10%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(204, 26, 26, 0.4), transparent)",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          marginBottom: "2rem",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <svg viewBox="0 0 60 60" style={{ width: "32px", height: "32px", animation: "sharinganSpin 10s linear infinite" }}>
              <circle cx="30" cy="30" r="27" fill="none" stroke="#cc1a1a" strokeWidth="2" />
              <circle cx="30" cy="30" r="12" fill="#cc1a1a" opacity="0.8" />
              <circle cx="30" cy="30" r="5" fill="#070102" />
              <circle cx="30" cy="16" r="4" fill="#070102" />
              <circle cx="30" cy="16" r="2.5" fill="#cc1a1a" />
              <circle cx="43.6" cy="37" r="4" fill="#070102" />
              <circle cx="43.6" cy="37" r="2.5" fill="#cc1a1a" />
              <circle cx="16.4" cy="37" r="4" fill="#070102" />
              <circle cx="16.4" cy="37" r="2.5" fill="#cc1a1a" />
            </svg>
            <div>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.95rem", fontWeight: 700, color: "#f0e8e0", letterSpacing: "0.1em" }}>
                HAGSTORE
              </div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#5a4a40", textTransform: "uppercase" }}>
                Domain Supplier
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {["Home", "Domains", "Why Us", "FAQ", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#5a4a40",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#cc1a1a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5a4a40")}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Telegram link */}
          <button
            onClick={() => window.open("https://t.me/Hagsen", "_blank")}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "8px 20px",
              background: "rgba(204, 26, 26, 0.1)",
              color: "#cc1a1a",
              border: "1px solid rgba(204, 26, 26, 0.3)",
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
            Contact Us
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(204, 26, 26, 0.08)", marginBottom: "1.5rem" }} />

        {/* Bottom row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            color: "#3a2a20",
          }}>
            © {currentYear} HAGSTORE. All rights reserved. | BY HAGSEN
          </p>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(204, 26, 26, 0.25)",
            letterSpacing: "0.1em",
          }}>
            Trusted by SEO professionals worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
