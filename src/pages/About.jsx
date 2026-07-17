import React from "react";
import { Heart, ShieldCheck, Target, Users } from "lucide-react";
import { COLORS } from "../theme";
import { Mark } from "../components/Logo";
import { Eyebrow, Reveal, Photo } from "../components/UI";

export default function About() {
  const values = [
    [Heart, "Help Ever", "We measure success by the problems we removed from someone else's day."],
    [ShieldCheck, "Hurt Never", "No dark patterns, no shortcuts that cost the client later. Sound engineering, always."],
    [Target, "Precision", "We scope tightly, estimate honestly, and build exactly what was agreed."],
    [Users, "Partnership", "Your team and ours share one backlog, one Slack channel, one goal."],
  ];
  const timeline = [
    ["2016", "Founded as a two-person dev shop building websites for local businesses."],
    ["2019", "Grew into full-stack product teams; first enterprise cloud migration delivered."],
    ["2022", "Opened a dedicated data & analytics practice; crossed 100 shipped products."],
    ["2026", "40+ engineers across web, cloud, security and data — same founding principle."],
  ];
  return (
    <>
      <section style={{ padding: "70px 24px 20px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "center" }} className="about-hero-grid">
          <Reveal>
            <Eyebrow>About Vee.BK Technologies</Eyebrow>
            <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 46px)", color: COLORS.ink, lineHeight: 1.1, margin: 0 }}>
              Built by engineers who'd rather fix the root cause than patch the symptom.
            </h1>
            <p style={{ marginTop: 20, fontSize: 16.5, color: COLORS.muted, lineHeight: 1.75 }}>
              We started as a small team frustrated by software that shipped fast and broke faster.
              Today we're a multi-discipline studio — but the brief hasn't changed: build things that
              work, explain them honestly, and never leave a client worse off than we found them.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Photo id="photo-1737573296361-75315239293a" alt="Two Vee.BK engineers working together in the office" ratio="4/3" radius={22} />
          </Reveal>
        </div>
        <style>{`@media (max-width: 800px) { .about-hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* VALUES */}
      <section style={{ padding: "40px 24px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="cards-4">
          {values.map(([Icon, title, desc], i) => (
            <Reveal key={title} delay={i * 90}>
              <div style={{ background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: 18, padding: 24, height: "100%" }}>
                <Icon size={24} color={i % 2 ? COLORS.orange : COLORS.teal} />
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16, margin: "14px 0 8px", color: COLORS.ink }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: COLORS.muted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`@media (max-width: 980px) { .cards-4 { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .cards-4 { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* STORY / TIMELINE — order carries real meaning here */}
      <section style={{ padding: "60px 24px", background: COLORS.card, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 0.8fr", gap: 40, alignItems: "start" }} className="timeline-grid">
          <div>
            <Reveal><Eyebrow>How we got here</Eyebrow></Reveal>
            {timeline.map(([year, text], i) => (
              <Reveal key={year} delay={i * 80}>
                <div style={{ display: "flex", gap: 24, padding: "18px 0", borderBottom: i < timeline.length - 1 ? `1px dashed ${COLORS.border}` : "none" }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 22, color: COLORS.teal, width: 70, flexShrink: 0 }}>{year}</div>
                  <p style={{ margin: 0, fontSize: 15, color: COLORS.ink, lineHeight: 1.6, paddingTop: 3 }}>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Photo id="photo-1746021535489-00edc5efb203" alt="A Vee.BK workspace desk with dual monitors" ratio="3/4" radius={20} />
          </Reveal>
        </div>
        <style>{`@media (max-width: 800px) { .timeline-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* LOGO STORY */}
      <section style={{ padding: "70px 24px", maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: 36, alignItems: "center" }} className="logo-story">
        <Reveal><Mark size={110} animated /></Reveal>
        <Reveal delay={100}>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: COLORS.ink, margin: "0 0 10px" }}>Why a figure reaching upward?</h3>
          <p style={{ fontSize: 14.5, color: COLORS.muted, lineHeight: 1.75, margin: 0 }}>
            Our mark is a person mid-stride, trailing the tricolour energy of where we're based and
            reaching toward a cluster of data points. It's a reminder that every system we build has
            a person on the other end of it — and that technology is only worth building if it moves
            them forward.
          </p>
        </Reveal>
        <style>{`@media (max-width: 700px) { .logo-story { grid-template-columns: 1fr !important; text-align: center; justify-items: center; } }`}</style>
      </section>
    </>
  );
}
