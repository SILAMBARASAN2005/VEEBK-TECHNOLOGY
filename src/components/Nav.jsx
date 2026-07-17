import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { COLORS } from "../theme";
import { Mark, Wordmark } from "./Logo";
import { Button } from "./UI";

export default function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["home", "Home"], ["about", "About Us"], ["services", "Services"], ["contact", "Contact Us"],
  ];
  const go = (p) => { setPage(p); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, background: "rgba(251,250,247,0.92)",
      backdropFilter: "blur(10px)", borderBottom: `1px solid ${COLORS.border}`,
    }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto", padding: "12px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => go("home")}>
          <Mark size={38} />
          <Wordmark compact />
        </div>

        <nav style={{ display: "flex", gap: 4 }} className="nav-desktop">
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} style={{
              border: "none", cursor: "pointer",
              fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14.5,
              padding: "9px 16px", borderRadius: 999,
              color: page === id ? "#fff" : COLORS.ink,
              background: page === id ? COLORS.navy : "transparent",
              transition: "all .18s ease",
            }}>
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-desktop">
          <Button variant="primary" onClick={() => go("contact")} style={{ padding: "10px 20px", fontSize: 13.5 }}>
            Get in touch
          </Button>
        </div>

        <button className="nav-burger" onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", cursor: "pointer", display: "none", color: COLORS.navy,
        }}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div style={{ borderTop: `1px solid ${COLORS.border}`, padding: "10px 24px 18px", display: "flex", flexDirection: "column", gap: 6 }}>
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} style={{
              textAlign: "left", background: page === id ? COLORS.navy : "transparent",
              color: page === id ? "#fff" : COLORS.ink, border: "none", padding: "12px 14px",
              borderRadius: 10, fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 15,
            }}>
              {label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
