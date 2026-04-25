/* DESIGN: Mangekyou Sharingan — Loading screen with spinning Sharingan */
import { useEffect, useState } from "react";

export default function SharinganLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFading(true), 1800);
    const timer2 = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#070102",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      opacity: fading ? 0 : 1,
      transition: "opacity 0.6s ease",
      pointerEvents: fading ? "none" : "all",
    }}>
      {/* Sharingan */}
      <div style={{ position: "relative", width: "120px", height: "120px", marginBottom: "2rem" }}>
        {/* Outer ring */}
        <svg
          viewBox="0 0 120 120"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            animation: "sharinganSpin 2s linear infinite",
          }}
        >
          <circle cx="60" cy="60" r="55" fill="none" stroke="rgba(204,26,26,0.3)" strokeWidth="2" />
          <circle cx="60" cy="60" r="45" fill="none" stroke="rgba(204,26,26,0.15)" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = 60 + 50 * Math.cos(angle);
            const y = 60 + 50 * Math.sin(angle);
            return <circle key={i} cx={x} cy={y} r="3" fill="rgba(204,26,26,0.5)" />;
          })}
        </svg>

        {/* Inner Sharingan */}
        <svg
          viewBox="0 0 120 120"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            animation: "sharinganSpinReverse 3s linear infinite",
          }}
        >
          <circle cx="60" cy="60" r="30" fill="rgba(204,26,26,0.2)" />
          <circle cx="60" cy="60" r="30" fill="none" stroke="#cc1a1a" strokeWidth="2" />
          <circle cx="60" cy="60" r="12" fill="#cc1a1a" />
          <circle cx="60" cy="60" r="5" fill="#070102" />
          {/* Tomoe */}
          <circle cx="60" cy="27" r="7" fill="#070102" />
          <circle cx="60" cy="27" r="4.5" fill="#cc1a1a" />
          <circle cx="86.2" cy="74.5" r="7" fill="#070102" />
          <circle cx="86.2" cy="74.5" r="4.5" fill="#cc1a1a" />
          <circle cx="33.8" cy="74.5" r="7" fill="#070102" />
          <circle cx="33.8" cy="74.5" r="4.5" fill="#cc1a1a" />
        </svg>

        {/* Glow effect */}
        <div style={{
          position: "absolute",
          inset: "-20px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(204,26,26,0.3) 0%, transparent 70%)",
          animation: "redPulse 1.5s ease-in-out infinite",
        }} />
      </div>

      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "0.9rem",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color: "rgba(204,26,26,0.6)",
        animation: "redGlowText 1.5s ease-in-out infinite",
      }}>
        Activating Sharingan...
      </div>
    </div>
  );
}
