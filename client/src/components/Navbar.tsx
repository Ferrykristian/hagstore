/* DESIGN: Mangekyou Sharingan — Aged Domain Supplier Navbar */
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Domains", href: "#domains" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "domains", "why-us", "faq", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(8, 2, 3, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(204, 26, 26, 0.2)" : "none",
        padding: "0 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
          onClick={() => handleNavClick("#home")}
        >
          <div style={{ width: "36px", height: "36px", position: "relative" }}>
            <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", animation: "sharinganSpin 8s linear infinite" }}>
              <circle cx="50" cy="50" r="45" fill="none" stroke="#cc1a1a" strokeWidth="3" />
              <circle cx="50" cy="50" r="20" fill="#cc1a1a" opacity="0.9" />
              <circle cx="50" cy="50" r="8" fill="#0a0203" />
              <circle cx="50" cy="28" r="6" fill="#0a0203" />
              <circle cx="50" cy="28" r="3.5" fill="#cc1a1a" />
              <circle cx="69.6" cy="61" r="6" fill="#0a0203" />
              <circle cx="69.6" cy="61" r="3.5" fill="#cc1a1a" />
              <circle cx="30.4" cy="61" r="6" fill="#0a0203" />
              <circle cx="30.4" cy="61" r="3.5" fill="#cc1a1a" />
            </svg>
          </div>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "1.1rem", fontWeight: 700, color: "#f0e8e0", letterSpacing: "0.1em" }}>
            HAGSTORE
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: activeSection === link.href.replace("#", "") ? "#cc1a1a" : "#c0a898",
                cursor: "pointer",
                transition: "color 0.3s ease",
                padding: "4px 0",
                borderBottom: activeSection === link.href.replace("#", "") ? "1px solid #cc1a1a" : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  (e.target as HTMLElement).style.color = "#f0e8e0";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace("#", "")) {
                  (e.target as HTMLElement).style.color = "#c0a898";
                }
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "2px",
                  background: "#cc1a1a",
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 1 ? "opacity: 0"
                    : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(8, 2, 3, 0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(204, 26, 26, 0.2)",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: activeSection === link.href.replace("#", "") ? "#cc1a1a" : "#c0a898",
                cursor: "pointer",
                textAlign: "left",
                padding: "8px 0",
                borderBottom: "1px solid rgba(204, 26, 26, 0.1)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
