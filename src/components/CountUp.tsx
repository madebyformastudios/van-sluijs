"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  decimalSeparator?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 1.5,
  prefix = "",
  suffix = "",
  decimals = 0,
  decimalSeparator = ",",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const current = progress * (to - from) + from;
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  }, [isInView, to, from, duration]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    if (decimals > 0 && decimalSeparator !== ".") {
      return fixed.replace(".", decimalSeparator);
    }
    return fixed;
  };

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
