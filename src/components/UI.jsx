import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { COLORS } from "../theme";

export function Swoosh({ style }) {
  return (
    <svg viewBox="0 0 400 60" style={style} width="100%" height="100%" preserveAspectRatio="none">
      <path d="M0 20 C 90 55, 230 55, 400 8" fill="none" stroke={COLORS.navy} strokeWidth="5" strokeLinecap="round" />
      <path d="M60 40 C 150 65, 280 62, 400 28" fill="none" stroke={COLORS.orange} strokeWidth="4" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(18px)",
      transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

export function Button({ children, variant = "primary", onClick, icon: Icon = ArrowRight, style }) {
  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "13px 26px", borderRadius: 999, fontFamily: "'Sora', sans-serif",
    fontWeight: 600, fontSize: 14.5, cursor: "pointer", border: "2px solid transparent",
    transition: "transform .18s ease, box-shadow .18s ease, background .18s ease, color .18s ease",
    ...style,
  };
  const variants = {
    primary: { background: COLORS.orange, color: "#fff", boxShadow: "0 8px 20px -8px rgba(245,148,31,.55)" },
    ghost: { background: "transparent", color: COLORS.navy, borderColor: COLORS.navy },
    light: { background: "#fff", color: COLORS.navy },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...variants[variant] }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {children}
      <Icon size={16} />
    </button>
  );
}

/* Real photography helper — Unsplash CDN, free-to-use license, sized on the fly */
export function Photo({ id, alt, w = 1200, q = 80, ratio = "16/10", radius = 20, style, overlay = false }) {
  const src = `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: ratio, borderRadius: radius, overflow: "hidden", ...style }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {overlay && (
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(180deg, transparent 40%, ${COLORS.navyDeep}CC 100%)`,
        }} />
      )}
    </div>
  );
}

export function Eyebrow({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Sora', sans-serif",
      fontWeight: 700, fontSize: 12, letterSpacing: "0.14em", color: COLORS.teal,
      textTransform: "uppercase", marginBottom: 14,
    }}>
      <span style={{ width: 22, height: 2, background: COLORS.orange, borderRadius: 2 }} />
      {children}
    </div>
  );
}

/* Floating pixel field used behind the hero */
export function PixelField() {
  const dots = [
    { t: "8%", l: "6%", c: COLORS.orange, s: 10, d: "0s" },
    { t: "20%", l: "88%", c: COLORS.teal, s: 14, d: ".6s" },
    { t: "68%", l: "92%", c: COLORS.green, s: 9, d: "1.1s" },
    { t: "80%", l: "4%", c: COLORS.teal, s: 12, d: "1.6s" },
    { t: "40%", l: "95%", c: COLORS.orange, s: 8, d: "2.1s" },
    { t: "10%", l: "50%", c: COLORS.green, s: 7, d: ".3s" },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {dots.map((d, i) => (
        <span key={i} style={{
          position: "absolute", top: d.t, left: d.l, width: d.s, height: d.s,
          background: d.c, opacity: 0.55, borderRadius: 3,
          animation: `floaty 5s ease-in-out ${d.d} infinite`,
        }} />
      ))}
      <style>{`@keyframes floaty { 0%,100%{ transform: translateY(0) rotate(0deg);} 50%{ transform: translateY(-14px) rotate(12deg);} }`}</style>
    </div>
  );
}
