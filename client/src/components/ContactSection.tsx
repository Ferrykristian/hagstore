/* DESIGN: Mangekyou Sharingan — Contact section with glowing form, red accents, Sharingan eye */
import { useEffect, useRef, useState } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "14px 16px",
    background: "rgba(10, 2, 3, 0.8)",
    border: `1px solid ${focused === field ? "rgba(204, 26, 26, 0.6)" : "rgba(204, 26, 26, 0.2)"}`,
    color: "#f0e8e0",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === field ? "0 0 15px rgba(204, 26, 26, 0.1), inset 0 0 10px rgba(204, 26, 26, 0.05)" : "none",
  });

  return (
    <section
      id="contact"
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
        background: "radial-gradient(circle at 50% 50%, rgba(204, 26, 26, 0.06) 0%, transparent 60%)",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", marginBottom: "4rem", textAlign: "center" }}>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "0.8rem", color: "rgba(204, 26, 26, 0.6)", letterSpacing: "0.4em", marginBottom: "0.5rem" }}>
            連絡先
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0e8e0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Get In <span style={{ color: "#cc1a1a" }}>Touch</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)", margin: "1rem auto 0" }} />
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "4rem",
          alignItems: "start",
        }}
        className="contact-grid"
        >
          {/* Left: Info */}
          <div>
            {/* Sharingan SVG decoration */}
            <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.1s", marginBottom: "2rem", display: "flex", justifyContent: "center" }}>
              <svg viewBox="0 0 200 200" style={{ width: "160px", height: "160px", animation: "sharinganSpin 12s linear infinite" }}>
                <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(204,26,26,0.2)" strokeWidth="2" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(204,26,26,0.15)" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" fill="rgba(204,26,26,0.15)" />
                <circle cx="100" cy="100" r="40" fill="none" stroke="#cc1a1a" strokeWidth="2" />
                <circle cx="100" cy="100" r="16" fill="#cc1a1a" opacity="0.9" />
                <circle cx="100" cy="100" r="6" fill="#0a0203" />
                {/* Tomoe */}
                <circle cx="100" cy="56" r="10" fill="#0a0203" />
                <circle cx="100" cy="56" r="6" fill="#cc1a1a" />
                <circle cx="134.6" cy="122" r="10" fill="#0a0203" />
                <circle cx="134.6" cy="122" r="6" fill="#cc1a1a" />
                <circle cx="65.4" cy="122" r="10" fill="#0a0203" />
                <circle cx="65.4" cy="122" r="6" fill="#cc1a1a" />
                {/* Outer ring details */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x = 100 + 80 * Math.cos(angle);
                  const y = 100 + 80 * Math.sin(angle);
                  return <circle key={i} cx={x} cy={y} r="3" fill="rgba(204,26,26,0.4)" />;
                })}
              </svg>
            </div>

            <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.2s" }}>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.2rem", fontWeight: 700, color: "#f0e8e0", marginBottom: "1rem" }}>
                Let's Create Something <span style={{ color: "#cc1a1a" }}>Powerful</span>
              </h3>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "#7a6a60", marginBottom: "2rem" }}>
                Whether you need a stunning website, a powerful application, or a creative solution — 
                I'm ready to bring your vision to life with the precision of a shinobi.
              </p>
            </div>

            {/* Contact info */}
            <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.3s" }}>
              {[
                { icon: "✉", label: "Email", value: "itachi@uchiha.dev" },
                { icon: "📍", label: "Location", value: "Konohagakure, JP" },
                { icon: "⏰", label: "Availability", value: "Mon - Fri, 9AM - 6PM" },
              ].map((item) => (
                <div key={item.label} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(204, 26, 26, 0.08)",
                }}>
                  <span style={{ fontSize: "1.1rem", width: "24px", textAlign: "center" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase" }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.9rem", color: "#c0a898" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.2s" }}>
            <div style={{
              background: "rgba(12, 3, 5, 0.85)",
              border: "1px solid rgba(204, 26, 26, 0.15)",
              backdropFilter: "blur(12px)",
              padding: "2.5rem",
              position: "relative",
            }}>
              {/* Top accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)",
              }} />

              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>⚡</div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "1.3rem", color: "#cc1a1a", marginBottom: "0.5rem" }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontFamily: "'Nunito', sans-serif", color: "#7a6a60" }}>
                    I'll respond faster than Amaterasu ignites.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Enter your name"
                      style={{ ...inputStyle("name"), "::placeholder": { color: "#5a4a40" } } as React.CSSProperties}
                    />
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="your@email.com"
                      style={inputStyle("email")}
                    />
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.75rem", letterSpacing: "0.2em", color: "#cc1a1a", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project..."
                      style={{ ...inputStyle("message"), resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "16px",
                      background: "linear-gradient(135deg, #cc1a1a, #8b0000)",
                      color: "#f0e8e0",
                      border: "none",
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow: "0 0 20px rgba(204, 26, 26, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255, 34, 34, 0.5)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(204, 26, 26, 0.3)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: #5a4a40;
        }
      `}</style>
    </section>
  );
}
