import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react";
import { COLORS } from "../theme";
import { Mark } from "../components/Logo";
import { Button, Eyebrow, Reveal, Photo } from "../components/UI";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "Web & App Development", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inputStyle = {
    width: "100%", padding: "13px 14px", borderRadius: 10, border: `1.5px solid ${COLORS.border}`,
    fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: COLORS.ink, outline: "none",
    transition: "border-color .15s ease", background: "#fff", boxSizing: "border-box",
  };
  const labelStyle = { fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 12.5, color: COLORS.ink, marginBottom: 6, display: "block" };

  return (
    <>
      <section style={{ padding: "70px 24px 20px", maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow>Contact us</Eyebrow>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 46px)", color: COLORS.ink, maxWidth: 620, lineHeight: 1.1, margin: 0 }}>
            Tell us what you're building. We'll reply within one business day.
          </h1>
        </Reveal>
      </section>

      <section style={{ padding: "30px 24px 80px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 40 }} className="contact-grid">
          {/* info column */}
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <Photo id="photo-1746021535489-00edc5efb203" alt="Vee.BK studio desk setup" ratio="16/10" radius={16} />
              {[
                [Mail, "Email", "hello@veebktech.com"],
                [Phone, "Phone", "+91 98765 43210"],
                [MapPin, "Studio", "Bengaluru, Karnataka, India"],
              ].map(([Icon, label, val]) => (
                <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: 18 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${COLORS.teal}18`, color: COLORS.teal, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 13.5, color: COLORS.ink }}>{label}</div>
                    <div style={{ fontSize: 13.5, color: COLORS.muted, marginTop: 2 }}>{val}</div>
                  </div>
                </div>
              ))}
              <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${COLORS.border}` }}>
                <div style={{ background: COLORS.navy, padding: "26px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
                  <Mark size={54} />
                  <p style={{ color: "#AEB9C1", fontSize: 12.5, margin: 0, lineHeight: 1.6 }}>
                    Prefer async? Drop your brief by email and we'll come back with next steps, not a sales call.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* form column */}
          <Reveal delay={120}>
            <div style={{ background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: 20, padding: 32 }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 10px" }}>
                  <CheckCircle2 size={44} color={COLORS.green} />
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: COLORS.ink, margin: "16px 0 8px" }}>Message sent</h3>
                  <p style={{ color: COLORS.muted, fontSize: 14, margin: "0 0 20px" }}>
                    Thanks, {form.name.split(" ")[0]} — we'll be in touch at {form.email}.
                  </p>
                  <Button variant="ghost" onClick={() => { setSent(false); setForm({ name: "", email: "", service: "Web & App Development", message: "" }); }} icon={Sparkles}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="form-row">
                    <div>
                      <label style={labelStyle}>Full name</label>
                      <input style={inputStyle} value={form.name} onChange={set("name")} placeholder="Anita Rao" required />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input style={inputStyle} type="email" value={form.email} onChange={set("email")} placeholder="anita@company.com" required />
                    </div>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <label style={labelStyle}>What do you need help with?</label>
                    <select style={inputStyle} value={form.service} onChange={set("service")}>
                      {["Web & App Development", "Cloud & DevOps", "Cybersecurity", "Data & Analytics", "Product Strategy", "IT Consulting", "Something else"].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginTop: 18 }}>
                    <label style={labelStyle}>Project details</label>
                    <textarea style={{ ...inputStyle, resize: "vertical", minHeight: 120, fontFamily: "'Inter', sans-serif" }}
                      value={form.message} onChange={set("message")} placeholder="What are you building, and what's the timeline?" required />
                  </div>

                  <div style={{ marginTop: 24 }}>
                    <Button icon={Send} style={{ width: "100%", justifyContent: "center" }}>Send message</Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 520px) { .form-row { grid-template-columns: 1fr !important; } }
          input:focus, select:focus, textarea:focus { border-color: ${COLORS.teal} !important; }
        `}</style>
      </section>
    </>
  );
}
