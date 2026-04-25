/* DESIGN: Mangekyou Sharingan — Admin Login untuk protect admin panel */
import { useState } from "react";

const ADMIN_PASSWORD = "adianjing121"; // Ganti dengan password yang kamu inginkan

export default function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("hagstore_admin_logged_in", "true");
      onLogin();
    } else {
      setError("Password salah!");
      setPassword("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0203",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(204, 26, 26, 0.1) 0%, transparent 60%)",
      }} />

      {/* Login box */}
      <div style={{
        position: "relative",
        zIndex: 1,
        background: "rgba(12, 3, 5, 0.9)",
        border: "1px solid rgba(204, 26, 26, 0.3)",
        backdropFilter: "blur(20px)",
        padding: "3rem",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
      }}>
        {/* Top accent line */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)",
        }} />

        {/* Sharingan logo */}
        <div style={{ marginBottom: "2rem" }}>
          <svg viewBox="0 0 100 100" style={{ width: "60px", height: "60px", margin: "0 auto", animation: "sharinganSpin 6s linear infinite" }}>
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

        {/* Title */}
        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.8rem",
          fontWeight: 700,
          color: "#f0e8e0",
          marginBottom: "0.5rem",
          letterSpacing: "0.1em",
        }}>
          HAGSTORE
        </h1>

        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "0.85rem",
          color: "#cc1a1a",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "2rem",
        }}>
          Admin Panel
        </p>

        {/* Password input */}
        <div style={{ marginBottom: "1.5rem", position: "relative" }}>
          <label style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "0.75rem",
            color: "#cc1a1a",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.75rem",
            textAlign: "left",
          }}>
            Password
          </label>
          <div style={{ position: "relative", display: "flex" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyPress={handleKeyPress}
              style={{
                flex: 1,
                padding: "12px 16px",
                background: "rgba(204, 26, 26, 0.05)",
                border: "1px solid rgba(204, 26, 26, 0.2)",
                color: "#f0e8e0",
                fontFamily: "'Nunito', sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.1em",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(204, 26, 26, 0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(204, 26, 26, 0.2)")}
              placeholder="Masukkan password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{
                background: "rgba(204, 26, 26, 0.1)",
                border: "1px solid rgba(204, 26, 26, 0.2)",
                borderLeft: "none",
                color: "#cc1a1a",
                cursor: "pointer",
                padding: "0 12px",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
              }}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            background: "rgba(204, 26, 26, 0.1)",
            border: "1px solid rgba(204, 26, 26, 0.3)",
            color: "#cc1a1a",
            padding: "10px",
            marginBottom: "1rem",
            fontFamily: "'Nunito', sans-serif",
            fontSize: "0.9rem",
            borderRadius: "2px",
            animation: "shake 0.3s ease",
          }}>
            {error}
          </div>
        )}

        {/* Login button */}
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "linear-gradient(135deg, #cc1a1a, #8b0000)",
            color: "#f0e8e0",
            border: "none",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: "pointer",
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
          Login
        </button>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "rgba(204, 26, 26, 0.1)",
          margin: "2rem 0",
        }} />

        {/* Footer hint */}
        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: "0.75rem",
          color: "#5a4a40",
          letterSpacing: "0.05em",
        }}>
          Authorized access only
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}
