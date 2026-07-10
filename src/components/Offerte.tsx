"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const typeLabels = [
  "Badkamerrenovatie",
  "Keukenverbouw",
  "Aanbouw / dakkapel",
  "Algehele verbouw",
];

const steps = [
  { num: "01", label: "Vrijblijvend en kosteloos" },
  { num: "02", label: "Reactie binnen 2 werkdagen" },
  { num: "03", label: "Vaste projectleider als contact" },
];

const itemVariants = {
  hidden: { opacity: 0, y: -24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.25,
      ease: "easeOut" as const,
    },
  }),
};

export default function Offerte() {
  const [activeType, setActiveType] = useState("Badkamerrenovatie");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="offerte"
      style={{
        background: "#EEF0ED",
        borderTop: "1px solid #DDE0DC",
      }}
    >
      <div
        style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 64,
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                fontSize: 40,
                lineHeight: 1.06,
                letterSpacing: "-0.015em",
                marginBottom: 22,
              }}
            >
              Vertel ons over uw project
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#4A554E",
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              Binnen 2 werkdagen nemen wij contact op voor een vrijblijvend
              gesprek en een heldere prijsindicatie.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  style={{ display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      background: "#1E2A24",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontWeight: 800,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    style={{ fontSize: 15, color: "#1E2A24", fontWeight: 600 }}
                  >
                    {step.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              padding: 40,
              border: "1px solid #DDE0DC",
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    minHeight: 420,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: "#C9622B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 22,
                    }}
                  >
                    <span
                      style={{ color: "#fff", fontSize: 26, fontWeight: 800 }}
                    >
                      ✓
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontWeight: 800,
                      fontSize: 26,
                      marginBottom: 12,
                    }}
                  >
                    Bedankt voor uw aanvraag
                  </h3>
                  <p
                    style={{ fontSize: 16, color: "#5A665E", lineHeight: 1.6 }}
                  >
                    Wij nemen binnen 2 werkdagen contact met u op. U ontvangt
                    een bevestiging per e-mail.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div style={{ marginBottom: 22 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 14,
                        fontWeight: 700,
                        marginBottom: 12,
                        letterSpacing: "0.02em",
                      }}
                    >
                      Type verbouwing
                    </label>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: 10,
                      }}
                    >
                      {typeLabels.map((label) => {
                        const active = activeType === label;
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => setActiveType(label)}
                            style={{
                              padding: "13px 14px",
                              border: `1px solid ${active ? "#C9622B" : "#C9BFB8"}`,
                              background: active ? "#C9622B" : "#FAFBFA",
                              color: active ? "#fff" : "#1E2A24",
                              fontFamily: "inherit",
                              fontSize: 14,
                              fontWeight: 700,
                              cursor: "pointer",
                              textAlign: "left",
                              transition: "all 0.12s",
                            }}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                      marginBottom: 22,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Oppervlakte (m²)</label>
                      <input
                        type="text"
                        placeholder="bijv. 12"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Budgetindicatie</label>
                      <select style={inputStyle}>
                        <option>&lt; € 10.000</option>
                        <option>€ 10.000 – € 25.000</option>
                        <option>€ 25.000 – € 50.000</option>
                        <option>&gt; € 50.000</option>
                      </select>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                      marginBottom: 22,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>Naam</label>
                      <input
                        type="text"
                        placeholder="Voor- en achternaam"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Plaats</label>
                      <input
                        type="text"
                        placeholder="bijv. Middelburg"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                      marginBottom: 28,
                    }}
                  >
                    <div>
                      <label style={labelStyle}>E-mailadres</label>
                      <input
                        type="email"
                        placeholder="naam@email.nl"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Telefoon</label>
                      <input
                        type="tel"
                        placeholder="06 – 12 34 56 78"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      background: "#C9622B",
                      color: "#fff",
                      border: "none",
                      padding: 17,
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: "0.02em",
                      cursor: "pointer",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.background = "#b3551f")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.background = "#C9622B")
                    }
                  >
                    Verstuur aanvraag
                  </button>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#94A39A",
                      marginTop: 14,
                      textAlign: "center",
                    }}
                  >
                    Wij gaan zorgvuldig om met uw gegevens. Geen verplichtingen.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 14,
  fontWeight: 700,
  marginBottom: 10,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  border: "1px solid #C9BFB8",
  background: "#FAFBFA",
  fontFamily: "inherit",
  fontSize: 15,
  color: "#1E2A24",
  outline: "none",
};
