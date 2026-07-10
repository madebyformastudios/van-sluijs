"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(244,245,243,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #DDE0DC",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.2s",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 34,
              height: 34,
              background: "#1E2A24",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                border: "3px solid #C9622B",
              }}
            />
          </div>
          <div style={{ lineHeight: 1.05 }}>
            <div
              style={{
                fontFamily: "var(--font-archivo), sans-serif",
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#1E2A24",
              }}
            >
              Van Sluijs
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                color: "#94A39A",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Bouw &amp; Techniek
            </div>
          </div>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 34 }}>
          {["Diensten", "Projecten", "Over ons"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(" ", "")}`}
              style={{
                color: "#1E2A24",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#C9622B")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#1E2A24")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="#offerte"
            style={{
              background: "#C9622B",
              color: "#fff",
              padding: "11px 22px",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: "0.02em",
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
            Offerte aanvragen
          </a>
        </nav>
      </div>
    </header>
  );
}
