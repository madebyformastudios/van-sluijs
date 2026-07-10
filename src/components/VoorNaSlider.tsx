"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  beforeSrc?: string;
  afterSrc?: string;
  beforeAlt?: string;
  afterAlt?: string;
  height?: number;
}

function useImageExists(src?: string) {
  const [exists, setExists] = useState<boolean | null>(null);
  useEffect(() => {
    if (!src) { setExists(false); return; }
    const img = new window.Image();
    img.onload = () => setExists(true);
    img.onerror = () => setExists(false);
    img.src = src;
  }, [src]);
  return exists;
}

export default function VoorNaSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Voor",
  afterAlt = "Na",
  height = 240,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const beforeExists = useImageExists(beforeSrc);
  const afterExists = useImageExists(afterSrc);
  const showBefore = beforeExists === true;
  const showAfter = afterExists === true;

  const moveTo = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const onTouchStart = () => setDragging(true);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) => moveTo(e.clientX);
    const onTouchMove = (e: TouchEvent) => moveTo(e.touches[0].clientX);
    const stop = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stop);
    };
  }, [dragging, moveTo]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height,
        overflow: "hidden",
        userSelect: "none",
        cursor: dragging ? "ew-resize" : "default",
      }}
    >
      {/* VOOR (before) — bottom layer, full width */}
      <div style={{ position: "absolute", inset: 0, background: "#243028" }}>
        {showBefore ? (
          <Image src={beforeSrc!} alt={beforeAlt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
        ) : (
          <Placeholder label="Voor" color="#1E2A24" />
        )}
      </div>

      {/* NA (after) — top layer, clipped to right of divider */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: `inset(0 0 0 ${position}%)`,
          transition: dragging ? "none" : "clip-path 0.05s linear",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "#2E3C34" }}>
          {showAfter ? (
            <Image src={afterSrc!} alt={afterAlt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
          ) : (
            <Placeholder label="Na" color="#28362E" />
          )}
        </div>
      </div>

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: 2,
          background: "#fff",
          transform: "translateX(-50%)",
          transition: dragging ? "none" : "left 0.05s linear",
          pointerEvents: "none",
        }}
      />

      {/* Drag handle */}
      <div
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          position: "absolute",
          top: "50%",
          left: `${position}%`,
          transform: "translate(-50%, -50%)",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "ew-resize",
          transition: dragging ? "none" : "left 0.05s linear",
          zIndex: 10,
        }}
      >
        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
          <path d="M5 1L1 5l4 4M11 1l4 4-4 4" stroke="#1E2A24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Labels */}
      <span
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#fff",
          background: "rgba(0,0,0,0.45)",
          padding: "3px 8px",
          pointerEvents: "none",
          opacity: position > 8 ? 1 : 0,
          transition: "opacity 0.15s",
        }}
      >
        Voor
      </span>
      <span
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#fff",
          background: "rgba(0,0,0,0.45)",
          padding: "3px 8px",
          pointerEvents: "none",
          opacity: position < 92 ? 1 : 0,
          transition: "opacity 0.15s",
        }}
      >
        Na
      </span>
    </div>
  );
}

function Placeholder({ label, color }: { label: string; color: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ color: "#5A665E", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
