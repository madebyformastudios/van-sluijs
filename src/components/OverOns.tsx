"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const trust = [
  { stat: "1998", value: 1998, from: 1950, label: "Opgericht", sub: "Meer dan 26 jaar in Zeeland" },
  { stat: "640+", value: 640, suffix: "+", label: "Projecten", sub: "Opgeleverd en afgeleverd" },
  { stat: "VCA*", label: "Veiligheid", sub: "Gecertificeerd op de bouwplaats" },
  { stat: "9,2", value: 9.2, decimals: 1, decimalSeparator: ",", label: "Klantcijfer", sub: "Gemiddeld op basis van reviews" },
];

export default function OverOns() {
  return (
    <section
      id="overons"
      style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 40px" }}
    >
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            fontSize: 40,
            lineHeight: 1.06,
            letterSpacing: "-0.015em",
            marginBottom: 22,
          }}
        >
          Betrouwbaar werk, controleerbaar geleverd
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 17,
            color: "#4A554E",
            lineHeight: 1.6,
            marginBottom: 36,
            maxWidth: 520,
          }}
        >
          Sinds 1998 bouwen wij aan huizen in heel Zeeland. Geen loze beloftes
          — een vaste projectleider, transparante offertes en werk dat voldoet
          aan elke norm.
        </motion.p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "#DDE0DC",
            border: "1px solid #DDE0DC",
          }}
        >
          {trust.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: "#fff", padding: "26px 24px" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 34,
                  color: "#C9622B",
                  lineHeight: 1,
                }}
              >
                {t.value !== undefined ? (
                  <CountUp
                    to={t.value}
                    from={t.from}
                    suffix={t.suffix}
                    decimals={t.decimals}
                    decimalSeparator={t.decimalSeparator}
                  />
                ) : (
                  t.stat
                )}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  margin: "8px 0 4px",
                }}
              >
                {t.label}
              </div>
              <div style={{ fontSize: 14, color: "#5A665E", lineHeight: 1.5 }}>
                {t.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
