/* DESIGN: Mangekyou Sharingan — Full-width quote section with Sharingan eye background */
import { useEffect, useRef } from "react";

const SHARINGAN_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663597813049/Fa4U3b57VpfCNTg3pVWbMA/sharingan-bg-DyVQXQSijmfbBZMu3XrjF3.webp";

export default function QuoteSection() {
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
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "5rem 2rem",
        overflow: "hidden",
        background: "#080103",
      }}
    >
      {/* Sharingan background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${SHARINGAN_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.12,
      }} />

      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(90deg, rgba(8,1,3,0.95) 0%, rgba(8,1,3,0.7) 50%, rgba(8,1,3,0.95) 100%)",
      }} />

      {/* Red top/bottom borders */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(204,26,26,0.5), transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(204,26,26,0.5), transparent)" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        {/* Quote mark */}
        <div
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.9)",
            transition: "all 0.8s ease",
            fontFamily: "'Cinzel', serif",
            fontSize: "6rem",
            color: "rgba(204, 26, 26, 0.2)",
            lineHeight: 0.8,
            marginBottom: "1rem",
          }}
        >
          "
        </div>

        {/* Main quote */}
        <blockquote
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.98)",
            transition: "all 0.8s ease 0.15s",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#e0d0c0",
            fontStyle: "italic",
            letterSpacing: "0.03em",
            margin: "0 0 1.5rem",
          }}
        >
          People live their lives bound by what they accept as correct and true. 
          That's how they define Reality. But what does it mean to be correct or true? 
          Merely vague concepts... their Reality may all be an illusion.
        </blockquote>

        {/* Attribution */}
        <div
          className="reveal-item"
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.98)",
            transition: "all 0.8s ease 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "rgba(204,26,26,0.5)" }} />
          <span style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#cc1a1a",
          }}>
            Itachi Uchiha
          </span>
          <div style={{ width: "40px", height: "1px", background: "rgba(204,26,26,0.5)" }} />
        </div>
      </div>
    </section>
  );
}
