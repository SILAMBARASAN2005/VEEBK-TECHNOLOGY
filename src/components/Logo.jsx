import React from "react";
import { COLORS } from "../theme";

/* ---------------------------------------------------------------------- */
/*  LOGO — redrawn from the supplied mark                                 */
/* ---------------------------------------------------------------------- */
export function Mark({ size = 44, animated = false }) {
  return (
    <svg width={size} height={size * 1.15} viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="markHead" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1AA6D9" />
          <stop offset="100%" stopColor="#2E6FA6" />
        </linearGradient>
        <linearGradient id="markBody" x1="0" y1="1" x2="0.4" y2="0">
          <stop offset="0%" stopColor="#1A5FA0" />
          <stop offset="100%" stopColor="#17A9D1" />
        </linearGradient>
        <linearGradient id="markGreen" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#2E8B3D" />
          <stop offset="100%" stopColor="#5CB85C" />
        </linearGradient>
        <linearGradient id="markOrange" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#DE6A00" />
          <stop offset="100%" stopColor="#F5941F" />
        </linearGradient>
      </defs>

      <g className={animated ? "mark-float" : ""}>
        {/* pixel cluster */}
        <g className={animated ? "mark-pulse" : ""}>
          <rect x="70" y="10" width="8" height="8" fill={COLORS.orange} />
          <rect x="84" y="4" width="6" height="6" fill={COLORS.teal} />
          <rect x="96" y="14" width="9" height="9" fill={COLORS.teal} opacity="0.85" />
          <rect x="78" y="24" width="14" height="14" fill="#8BC34A" />
          <rect x="96" y="30" width="6" height="6" fill={COLORS.teal} />
          <rect x="70" y="34" width="6" height="6" fill={COLORS.orange} />
          <rect x="82" y="40" width="10" height="6" fill={COLORS.navy} opacity="0.7" />
        </g>

        {/* ribbon person */}
        <path d="M18 62 C34 66 44 60 52 44 C56 36 60 30 66 26 C58 46 50 66 46 84 C42 104 40 120 38 138 L30 138 C34 112 38 86 34 70 C24 74 16 70 8 60 Z" fill="url(#markGreen)" />
        <path d="M66 26 C60 46 52 66 48 88 C45 108 44 122 43 138 L36 138 C39 112 41 90 44 72 C48 52 56 36 66 26 Z" fill="url(#markOrange)" />
        <circle cx="45" cy="32" r="15" fill="url(#markHead)" />
        <path d="M45 47 C34 47 22 42 14 32 C22 40 36 42 45 40 C50 46 46 52 44 58 C40 74 38 96 40 116 L48 116 C46 94 48 72 52 56 C54 50 58 46 62 42 C56 46 50 48 45 47 Z" fill="url(#markBody)" />
      </g>

      <style>{`
        .mark-float { transform-origin: 60px 70px; animation: markFloat 4.5s ease-in-out infinite; }
        @keyframes markFloat { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-4px);} }
        .mark-pulse rect { animation: markPulse 2.6s ease-in-out infinite; }
        .mark-pulse rect:nth-child(2n) { animation-delay: .4s; }
        .mark-pulse rect:nth-child(3n) { animation-delay: .8s; }
        @keyframes markPulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }
      `}</style>
    </svg>
  );
}

export function Wordmark({ compact = false }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
      <span style={{
        fontFamily: "'Sora', sans-serif", fontWeight: 800,
        fontSize: compact ? 18 : 26, color: COLORS.orange, letterSpacing: "-0.01em",
      }}>
        Vee<span style={{ color: COLORS.orangeDark }}>.</span>BK
      </span>
      <span style={{
        fontFamily: "'Sora', sans-serif", fontWeight: 700,
        fontSize: compact ? 8.5 : 11.5, color: COLORS.teal, letterSpacing: "0.16em",
        marginTop: -2,
      }}>
        TECHNOLOGIES
      </span>
    </div>
  );
}
