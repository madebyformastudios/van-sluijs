"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: "prj-1",
    placeholder: "Voor/na — badkamer",
    title: "Badkamer Zuidsingel",
    place: "Middelburg",
    desc: "Complete renovatie met inloopdouche en vloerverwarming.",
  },
  {
    id: "prj-2",
    placeholder: "Voor/na — keuken",
    title: "Open keuken",
    place: "Goes",
    desc: "Draagmuur verwijderd, keuken en woonkamer samengevoegd.",
  },
  {
    id: "prj-3",
    placeholder: "Voor/na — aanbouw",
    title: "Aanbouw achterzijde",
    place: "Vlissingen",
    desc: "Uitbouw van 18 m² met plat dak en pui over de volle breedte.",
  },
  {
    id: "prj-4",
    placeholder: "Voor/na — dakkapel",
    title: "Dakkapel",
    place: "Terneuzen",
    desc: "Prefab dakkapel in één dag geplaatst, extra slaapkamer gecreëerd.",
  },
  {
    id: "prj-5",
    placeholder: "Voor/na — verbouw",
    title: "Jaren-30 renovatie",
    place: "Zierikzee",
    desc: "Volledige verbouwing van een monumentaal woonhuis.",
  },
  {
    id: "prj-6",
    placeholder: "Voor/na — badkamer",
    title: "Gastenbadkamer",
    place: "Kapelle",
    desc: "Compacte badkamer efficiënt heringedeeld met maatwerk.",
  },
];

export default function Projecten() {
  return (
    <section
      id="projecten"
      style={{ background: "#1E2A24", color: "#fff" }}
    >
      <div
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
            }}
          >
            Recent opgeleverd in Zeeland
          </h2>
          <a
            href="#offerte"
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              borderBottom: "2px solid #C9622B",
              paddingBottom: 4,
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            Uw project hier? →
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {projects.map((prj, i) => (
            <motion.div
              key={prj.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: "#28362E" }}
            >
              <div
                style={{
                  position: "relative",
                  height: 240,
                  background: "#2E3C34",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#5A665E",
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                >
                  {prj.placeholder}
                </span>
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-archivo), sans-serif",
                      fontWeight: 700,
                      fontSize: 19,
                    }}
                  >
                    {prj.title}
                  </h3>
                  <span
                    style={{
                      fontSize: 13,
                      color: "#94A39A",
                      fontWeight: 600,
                    }}
                  >
                    {prj.place}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: "#B8C2BB", lineHeight: 1.55 }}>
                  {prj.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
