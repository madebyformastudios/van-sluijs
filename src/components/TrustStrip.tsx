"use client";

import { motion } from "framer-motion";

const certs = ["VCA*", "Bouwgarant", "KvK Zeeland", "SBB Erkend", "Komo"];

export default function TrustStrip() {
  return (
    <section
      style={{
        borderTop: "1px solid #DDE0DC",
        borderBottom: "1px solid #DDE0DC",
        background: "#EEF0ED",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#94A39A",
          }}
        >
          Aangesloten &amp; gecertificeerd
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 38,
            flexWrap: "wrap",
          }}
        >
          {certs.map((cert) => (
            <motion.span
              key={cert}
              whileHover={{ color: "#1E2A24" }}
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 700,
                fontSize: 17,
                color: "#5A665E",
              }}
            >
              {cert}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
