"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "./CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "76px 40px 40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 800,
              fontSize: 60,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Degelijk gebouwd.
            <br />
            Vakkundig verbouwd.
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              fontSize: 19,
              lineHeight: 1.6,
              color: "#4A554E",
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            Van badkamer tot aanbouw — wij verzorgen uw verbouwing van eerste
            tekening tot oplevering. Eén aanspreekpunt, heldere planning, werk
            dat blijft staan.
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 44,
            }}
          >
            <a
              href="#offerte"
              style={{
                background: "#C9622B",
                color: "#fff",
                padding: "16px 30px",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "0.01em",
                textDecoration: "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.background = "#b3551f")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.background = "#C9622B")
              }
            >
              Vraag een offerte aan
            </a>
            <a
              href="#projecten"
              style={{
                color: "#1E2A24",
                fontWeight: 700,
                fontSize: 16,
                padding: "16px 4px",
                borderBottom: "2px solid #1E2A24",
                textDecoration: "none",
              }}
            >
              Bekijk projecten
            </a>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid #DDE0DC",
            }}
          >
            <div style={{ padding: "22px 20px 0 0" }}>
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 30,
                }}
              >
                <CountUp to={26} suffix="+" />
              </div>
              <div style={{ fontSize: 14, color: "#5A665E", fontWeight: 500 }}>
                jaar ervaring
              </div>
            </div>
            <div
              style={{
                padding: "22px 20px 0",
                borderLeft: "1px solid #DDE0DC",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 30,
                }}
              >
                <CountUp to={640} suffix="+" />
              </div>
              <div style={{ fontSize: 14, color: "#5A665E", fontWeight: 500 }}>
                opgeleverde projecten
              </div>
            </div>
            <div
              style={{
                padding: "22px 0 0 20px",
                borderLeft: "1px solid #DDE0DC",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontWeight: 800,
                  fontSize: 30,
                }}
              >
                VCA
              </div>
              <div style={{ fontSize: 14, color: "#5A665E", fontWeight: 500 }}>
                gecertificeerd
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{ position: "relative", height: 560 }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#E8EAE6",
              overflow: "hidden",
            }}
          >
            <Image
              src="/hero-kitchen.png"
              alt="Moderne witte keuken met kookeiland"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: -28,
              bottom: 44,
              background: "#1E2A24",
              color: "#fff",
              padding: "22px 26px",
              maxWidth: 250,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 700,
                fontSize: 17,
                marginBottom: 6,
              }}
            >
              Eén aannemer, geen onderaanneming-chaos.
            </div>
            <div
              style={{ fontSize: 14, color: "#B8C2BB", lineHeight: 1.5 }}
            >
              Vast team, vaste projectleider, van sloop tot afmontage.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
