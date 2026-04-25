/* DESIGN: Mangekyou Sharingan — Admin Panel untuk manage aged domain */
import { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";

interface Domain {
  id: number;
  name: string;
  da: number;
  pa: number;
  price: string;
  niche: string;
  age: string;
}

const initialDomains: Domain[] = [
  { id: 1, name: "seo-authority.com", da: 45, pa: 38, price: "$299", niche: "SEO", age: "8 years" },
  { id: 2, name: "ecommerce-store.io", da: 52, pa: 42, price: "$399", niche: "E-commerce", age: "10 years" },
  { id: 3, name: "tech-innovation.net", da: 38, pa: 32, price: "$199", niche: "Tech", age: "6 years" },
  { id: 4, name: "health-wellness.com", da: 48, pa: 40, price: "$349", niche: "Health", age: "9 years" },
  { id: 5, name: "finance-advisor.com", da: 55, pa: 45, price: "$499", niche: "Finance", age: "11 years" },
  { id: 6, name: "travel-guide.org", da: 42, pa: 35, price: "$279", niche: "Travel", age: "7 years" },
];

function AdminPanelContent() {
  const [domains, setDomains] = useState<Domain[]>(initialDomains);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Omit<Domain, "id">>({
    name: "",
    da: 0,
    pa: 0,
    price: "",
    niche: "SEO",
    age: "",
  });

  const handleAddDomain = () => {
    if (formData.name && formData.price && formData.age) {
      if (editingId) {
        setDomains(domains.map((d) => (d.id === editingId ? { ...d, ...formData } : d)));
        setEditingId(null);
      } else {
        setDomains([...domains, { ...formData, id: Math.max(...domains.map((d) => d.id), 0) + 1 }]);
      }
      setFormData({ name: "", da: 0, pa: 0, price: "", niche: "SEO", age: "" });
      setShowForm(false);
    }
  };

  const handleEditDomain = (domain: Domain) => {
    setFormData(domain);
    setEditingId(domain.id);
    setShowForm(true);
  };

  const handleDeleteDomain = (id: number) => {
    setDomains(domains.filter((d) => d.id !== id));
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", da: 0, pa: 0, price: "", niche: "SEO", age: "" });
  };

  const handleLogout = () => {
    localStorage.removeItem("hagstore_admin_logged_in");
    window.location.href = "/";
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0203",
      padding: "2rem",
      paddingTop: "100px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header with logout */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <div>
            <h1 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#f0e8e0",
              marginBottom: "0.5rem",
            }}>
              Admin Panel — <span style={{ color: "#cc1a1a" }}>HAGSTORE</span>
            </h1>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "0.95rem",
              color: "#7a6a60",
            }}>
              Manage your aged domain inventory
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "10px 24px",
              background: "transparent",
              color: "#cc1a1a",
              border: "1px solid rgba(204, 26, 26, 0.4)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.4)";
            }}
          >
            Logout
          </button>
        </div>

        {/* Add Domain Button */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "12px 32px",
              background: "linear-gradient(135deg, #cc1a1a, #8b0000)",
              color: "#f0e8e0",
              border: "none",
              cursor: "pointer",
              marginBottom: "2rem",
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
            + Add New Domain
          </button>
        )}

        {/* Add/Edit Form */}
        {showForm && (
          <div style={{
            background: "rgba(12, 3, 5, 0.85)",
            border: "1px solid rgba(204, 26, 26, 0.3)",
            backdropFilter: "blur(12px)",
            padding: "2rem",
            marginBottom: "2rem",
            borderRadius: "4px",
          }}>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#f0e8e0",
              marginBottom: "1.5rem",
            }}>
              {editingId ? "Edit Domain" : "Add New Domain"}
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginBottom: "1.5rem" }}>
              {/* Domain Name */}
              <div>
                <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#cc1a1a", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  Domain Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(204, 26, 26, 0.05)",
                    border: "1px solid rgba(204, 26, 26, 0.2)",
                    color: "#f0e8e0",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.95rem",
                  }}
                  placeholder="example.com"
                />
              </div>

              {/* Price */}
              <div>
                <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#cc1a1a", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  Price
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(204, 26, 26, 0.05)",
                    border: "1px solid rgba(204, 26, 26, 0.2)",
                    color: "#f0e8e0",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.95rem",
                  }}
                  placeholder="$299"
                />
              </div>

              {/* DA */}
              <div>
                <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#cc1a1a", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  DA (Domain Authority)
                </label>
                <input
                  type="number"
                  value={formData.da}
                  onChange={(e) => setFormData({ ...formData, da: parseInt(e.target.value) || 0 })}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(204, 26, 26, 0.05)",
                    border: "1px solid rgba(204, 26, 26, 0.2)",
                    color: "#f0e8e0",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.95rem",
                  }}
                  min="0"
                  max="100"
                />
              </div>

              {/* PA */}
              <div>
                <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#cc1a1a", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  PA (Page Authority)
                </label>
                <input
                  type="number"
                  value={formData.pa}
                  onChange={(e) => setFormData({ ...formData, pa: parseInt(e.target.value) || 0 })}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(204, 26, 26, 0.05)",
                    border: "1px solid rgba(204, 26, 26, 0.2)",
                    color: "#f0e8e0",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.95rem",
                  }}
                  min="0"
                  max="100"
                />
              </div>

              {/* Niche */}
              <div>
                <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#cc1a1a", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  Niche
                </label>
                <select
                  value={formData.niche}
                  onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(204, 26, 26, 0.05)",
                    border: "1px solid rgba(204, 26, 26, 0.2)",
                    color: "#f0e8e0",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.95rem",
                  }}
                >
                  <option>SEO</option>
                  <option>E-commerce</option>
                  <option>Tech</option>
                  <option>Health</option>
                  <option>Finance</option>
                  <option>Travel</option>
                  <option>Marketing</option>
                  <option>Business</option>
                </select>
              </div>

              {/* Age */}
              <div>
                <label style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.85rem", color: "#cc1a1a", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  Age
                </label>
                <input
                  type="text"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px",
                    background: "rgba(204, 26, 26, 0.05)",
                    border: "1px solid rgba(204, 26, 26, 0.2)",
                    color: "#f0e8e0",
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "0.95rem",
                  }}
                  placeholder="8 years"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={handleAddDomain}
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 24px",
                  background: "rgba(204, 26, 26, 0.2)",
                  color: "#cc1a1a",
                  border: "1px solid rgba(204, 26, 26, 0.3)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.2)";
                }}
              >
                {editingId ? "Update Domain" : "Add Domain"}
              </button>
              <button
                onClick={handleCancel}
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "10px 24px",
                  background: "transparent",
                  color: "#7a6a60",
                  border: "1px solid rgba(204, 26, 26, 0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#c0a898";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#7a6a60";
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Domains Table */}
        <div style={{
          background: "rgba(12, 3, 5, 0.85)",
          border: "1px solid rgba(204, 26, 26, 0.15)",
          backdropFilter: "blur(12px)",
          overflow: "hidden",
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "'Nunito', sans-serif",
          }}>
            <thead>
              <tr style={{ background: "rgba(204, 26, 26, 0.05)", borderBottom: "1px solid rgba(204, 26, 26, 0.15)" }}>
                <th style={{ padding: "1rem", textAlign: "left", color: "#cc1a1a", fontWeight: 700, fontSize: "0.9rem" }}>Domain</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700, fontSize: "0.9rem" }}>DA</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700, fontSize: "0.9rem" }}>PA</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700, fontSize: "0.9rem" }}>Niche</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700, fontSize: "0.9rem" }}>Age</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700, fontSize: "0.9rem" }}>Price</th>
                <th style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700, fontSize: "0.9rem" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {domains.map((domain) => (
                <tr key={domain.id} style={{ borderBottom: "1px solid rgba(204, 26, 26, 0.08)", transition: "background 0.3s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(204, 26, 26, 0.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <td style={{ padding: "1rem", color: "#f0e8e0" }}>{domain.name}</td>
                  <td style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700 }}>{domain.da}</td>
                  <td style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700 }}>{domain.pa}</td>
                  <td style={{ padding: "1rem", textAlign: "center", color: "#7a6a60" }}>{domain.niche}</td>
                  <td style={{ padding: "1rem", textAlign: "center", color: "#7a6a60" }}>{domain.age}</td>
                  <td style={{ padding: "1rem", textAlign: "center", color: "#cc1a1a", fontWeight: 700 }}>{domain.price}</td>
                  <td style={{ padding: "1rem", textAlign: "center", display: "flex", gap: "0.5rem", justifyContent: "center" }}>
                    <button
                      onClick={() => handleEditDomain(domain)}
                      style={{
                        padding: "6px 12px",
                        background: "rgba(204, 26, 26, 0.1)",
                        color: "#cc1a1a",
                        border: "1px solid rgba(204, 26, 26, 0.2)",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteDomain(domain.id)}
                      style={{
                        padding: "6px 12px",
                        background: "rgba(204, 26, 26, 0.1)",
                        color: "#cc1a1a",
                        border: "1px solid rgba(204, 26, 26, 0.2)",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stats */}
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          <div style={{
            background: "rgba(12, 3, 5, 0.85)",
            border: "1px solid rgba(204, 26, 26, 0.15)",
            padding: "1.5rem",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", fontWeight: 700, color: "#cc1a1a" }}>
              {domains.length}
            </div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#7a6a60", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Total Domains
            </div>
          </div>
          <div style={{
            background: "rgba(12, 3, 5, 0.85)",
            border: "1px solid rgba(204, 26, 26, 0.15)",
            padding: "1.5rem",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", fontWeight: 700, color: "#cc1a1a" }}>
              {(domains.reduce((sum, d) => sum + parseInt(d.price.replace(/\D/g, "")), 0) / 100).toFixed(0)}
            </div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#7a6a60", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Total Value
            </div>
          </div>
          <div style={{
            background: "rgba(12, 3, 5, 0.85)",
            border: "1px solid rgba(204, 26, 26, 0.15)",
            padding: "1.5rem",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "'Cinzel', serif", fontSize: "1.8rem", fontWeight: 700, color: "#cc1a1a" }}>
              {(domains.reduce((sum, d) => sum + d.da, 0) / domains.length).toFixed(1)}
            </div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "0.8rem", color: "#7a6a60", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Avg DA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("hagstore_admin_logged_in") === "true";
    setIsLoggedIn(isLoggedIn);
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return <div style={{ minHeight: "100vh", background: "#0a0203" }} />;
  }

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return <AdminPanelContent />;
}
