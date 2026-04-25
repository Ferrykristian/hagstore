/* DESIGN: Mangekyou Sharingan — FAQ section dengan accordion */
import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "What is an aged domain?",
    answer: "An aged domain is a previously registered domain that has been around for several years. These domains typically have established authority, backlinks, and search engine history, making them valuable for SEO.",
  },
  {
    question: "Are these domains penalized?",
    answer: "No. All our domains are thoroughly vetted and come with clean histories. We verify that they have no Google penalties, spam history, or negative SEO issues before listing them.",
  },
  {
    question: "How long does delivery take?",
    answer: "Most domains are delivered within 24 hours of purchase. We handle all the technical transfer process, so you can start using your domain immediately.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments via Telegram. Simply contact us on Telegram with your domain choice, and we'll provide payment instructions and complete the transaction securely.",
  },
  {
    question: "Can I get a refund?",
    answer: "Yes! We offer a 30-day money-back guarantee. If you're not satisfied with your domain for any reason, we'll refund your full payment.",
  },
  {
    question: "Do you provide backlink profiles?",
    answer: "Absolutely. We provide detailed backlink profiles, DA/PA metrics, and traffic history for each domain. You'll have complete transparency before purchasing.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "rgba(12, 3, 5, 0.85)",
        border: "1px solid rgba(204, 26, 26, 0.15)",
        backdropFilter: "blur(12px)",
        marginBottom: "1rem",
        overflow: "hidden",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        if (!open) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.3)";
        }
      }}
      onMouseLeave={(e) => {
        if (!open) {
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(204, 26, 26, 0.15)";
        }
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "1.5rem",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h3 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1rem",
          fontWeight: 700,
          color: "#f0e8e0",
          margin: 0,
        }}>
          {question}
        </h3>
        <div style={{
          fontSize: "1.2rem",
          color: "#cc1a1a",
          transition: "transform 0.3s ease",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          flexShrink: 0,
        }}>
          ▼
        </div>
      </button>

      {open && (
        <div style={{
          padding: "0 1.5rem 1.5rem",
          borderTop: "1px solid rgba(204, 26, 26, 0.1)",
          animation: "slideInUp 0.3s ease",
        }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            color: "#7a6a60",
            margin: 0,
          }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal-item").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
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

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease", marginBottom: "3rem", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, color: "#f0e8e0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Frequently Asked <span style={{ color: "#cc1a1a" }}>Questions</span>
          </h2>
          <div style={{ width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #cc1a1a, transparent)", margin: "1rem auto 0" }} />
        </div>

        {/* FAQ items */}
        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="reveal-item"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.08}s`,
              }}
            >
              <FAQItem question={faq.question} answer={faq.answer} index={i} />
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="reveal-item" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.5s", textAlign: "center", marginTop: "3rem" }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.95rem", color: "#7a6a60", marginBottom: "1rem" }}>
            Still have questions? Reach out to us on Telegram!
          </p>
          <button
            onClick={() => window.open("https://t.me/yourusername", "_blank")}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "12px 32px",
              background: "rgba(204, 26, 26, 0.1)",
              color: "#cc1a1a",
              border: "1px solid rgba(204, 26, 26, 0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.2)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(204, 26, 26, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(204, 26, 26, 0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
