"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Badkamerrenovatie",
    desc: "Van tegelwerk tot leidingen — een complete, waterdichte badkamer, strak afgemonteerd.",
    tag: "Sloop → afmontage",
  },
  {
    num: "02",
    title: "Keukenverbouw",
    desc: "Constructie, installatie en plaatsing. Wij regelen ook de doorbraak en het stucwerk.",
    tag: "Incl. installatie",
  },
  {
    num: "03",
    title: "Aanbouw & dakkapel",
    desc: "Meer ruimte met een constructief doordachte aanbouw of dakkapel, inclusief vergunning.",
    tag: "Incl. vergunningtraject",
  },
  {
    num: "04",
    title: "Algehele verbouw",
    desc: "Grootschalige renovatie van A tot Z, met één vaste projectleider als aanspreekpunt.",
    tag: "Turn-key oplevering",
  },
];

export default function Diensten() {
  return (
    <section
      id="diensten"
      style={{ maxWidth: 1240, margin: "0 auto", padding: "96px 40px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 32,
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            fontSize: 42,
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
            maxWidth: 640,
          }}
        >
          Complete verbouwingen onder één dak
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#5A665E",
            maxWidth: 340,
            lineHeight: 1.6,
          }}
        >
          Wij nemen het hele traject uit handen: ontwerp, vergunning, uitvoering
          en oplevering.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          background: "#DDE0DC",
          border: "1px solid #DDE0DC",
        }}
      >
        {services.map((svc, i) => (
          <motion.div
            key={svc.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ boxShadow: "inset 0 -4px 0 #C9622B" }}
            style={{
              background: "#fff",
              padding: "34px 30px",
              display: "flex",
              flexDirection: "column",
              minHeight: 340,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                fontSize: 15,
                color: "#94A39A",
              }}
            >
              {svc.num}
            </div>
            <div style={{ flex: 1 }} />
            <h3
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 700,
                fontSize: 23,
                lineHeight: 1.1,
                marginBottom: 14,
              }}
            >
              {svc.title}
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "#5A665E",
                lineHeight: 1.55,
                marginBottom: 18,
              }}
            >
              {svc.desc}
            </p>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#C9622B",
                letterSpacing: "0.02em",
              }}
            >
              {svc.tag}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
