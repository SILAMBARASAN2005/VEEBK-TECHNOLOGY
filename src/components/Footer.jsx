import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { COLORS } from "../theme";
import { Mark, Wordmark } from "./Logo";

export default function Footer({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <footer style={{ background: COLORS.navyDeep, color: "#CBD4DA", padding: "56px 24px 28px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 32 }} className="footer-grid">
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <Mark size={34} />
            <Wordmark compact />
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#9AA7B0", maxWidth: 260 }}>
            A technology partner building software, cloud and data systems for teams who'd rather ship than wait.
          </p>
          <p style={{ marginTop: 14, fontFamily: "'Sora', sans-serif", fontStyle: "italic", fontWeight: 600, fontSize: 13, color: COLORS.orange }}>
            Help Ever! Hurt Never!
          </p>
        </div>
        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontSize: 14, marginBottom: 14 }}>Company</h4>
          {["home", "about", "services", "contact"].map((p) => (
            <div key={p} onClick={() => go(p)} style={{ cursor: "pointer", fontSize: 13.5, marginBottom: 10, color: "#AEB9C1", textTransform: "capitalize" }}>
              {p === "home" ? "Home" : p === "about" ? "About Us" : p === "services" ? "Services" : "Contact Us"}
            </div>
          ))}
        </div>
        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontSize: 14, marginBottom: 14 }}>Services</h4>
          {["Web & App Dev", "Cloud & DevOps", "Cybersecurity", "Data & Analytics"].map((s) => (
            <div key={s} style={{ fontSize: 13.5, marginBottom: 10, color: "#AEB9C1" }}>{s}</div>
          ))}
        </div>
        <div>
          <h4 style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontSize: 14, marginBottom: 14 }}>Reach us</h4>
          <div style={{ display: "flex", gap: 8, fontSize: 13.5, marginBottom: 10, color: "#AEB9C1" }}><Mail size={16} /> hello@veebktech.com</div>
          <div style={{ display: "flex", gap: 8, fontSize: 13.5, marginBottom: 10, color: "#AEB9C1" }}><Phone size={16} /> +91 98765 43210</div>
          <div style={{ display: "flex", gap: 8, fontSize: 13.5, color: "#AEB9C1" }}><MapPin size={16} /> Bengaluru, Karnataka, India</div>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: "34px auto 0", paddingTop: 20, borderTop: "1px solid #1F3648", fontSize: 12.5, color: "#7C8993", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <span>© {new Date().getFullYear()} Vee.BK Technologies. All rights reserved.</span>
        <span>Designed with intent, not templates.</span>
      </div>
      <style>{`@media (max-width: 860px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  );
}
