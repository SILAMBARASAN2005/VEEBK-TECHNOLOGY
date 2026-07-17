import React from "react";
import { Code2, Cloud, ShieldCheck, Database, ArrowRight, Compass, Quote } from "lucide-react";
import { COLORS } from "../theme";
import { Mark, Wordmark } from "../components/Logo";
import { Button, Eyebrow, Reveal, Swoosh, PixelField, Photo } from "../components/UI";

export default function Home({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const stats = [
    ["120+", "Products shipped"],
    ["40+", "Engineers & designers"],
    ["9", "Years building"],
    ["98%", "Client retention"],
  ];
  const services = [
    [Code2, "Web & App Development", "Fast, accessible products in React, Next.js and native mobile."],
    [Cloud, "Cloud & DevOps", "Infrastructure, CI/CD and reliability engineering on AWS & Azure."],
    [ShieldCheck, "Cybersecurity", "Audits, threat monitoring and secure-by-design architecture."],
    [Database, "Data & Analytics", "Pipelines and dashboards that turn raw data into decisions."],
  ];
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", padding: "76px 24px 40px", background: `linear-gradient(180deg, #FFFDF9 0%, ${COLORS.bg} 60%)` }}>
        <PixelField />
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 40, alignItems: "center", position: "relative" }} className="hero-grid">
          <Reveal>
            <div>
              <Eyebrow>Technology partner, not just a vendor</Eyebrow>
              <h1 style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(34px, 5vw, 54px)",
                lineHeight: 1.06, color: COLORS.ink, letterSpacing: "-0.01em", margin: 0,
              }}>
                We build the software your <span style={{ color: COLORS.teal }}>next stage</span> of growth runs on.
              </h1>
              <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: COLORS.muted, maxWidth: 520 }}>
                Vee.BK Technologies designs and engineers web platforms, cloud systems and data
                products for teams who need to move from idea to production without cutting corners.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
                <Button onClick={() => go("contact")}>Start a project</Button>
                <Button variant="ghost" onClick={() => go("services")} icon={Compass}>Explore services</Button>
              </div>

              <div style={{ display: "flex", gap: 28, marginTop: 48, flexWrap: "wrap" }}>
                {stats.map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 26, color: COLORS.navy }}>{n}</div>
                    <div style={{ fontSize: 12.5, color: COLORS.muted, marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div style={{
              position: "relative", background: "#fff", borderRadius: 28, border: `1px solid ${COLORS.border}`,
              padding: "48px 20px", display: "flex", flexDirection: "column", alignItems: "center",
              boxShadow: "0 30px 60px -30px rgba(18,42,62,0.25)",
            }}>
              <Mark size={130} animated />
              <div style={{ marginTop: 18 }}><Wordmark /></div>
              <p style={{ fontFamily: "'Sora', sans-serif", fontStyle: "italic", fontWeight: 600, color: COLORS.muted, fontSize: 14, marginTop: 10 }}>
                Help Ever! Hurt Never!
              </p>
              <div style={{ width: "100%", marginTop: 22, height: 40 }}>
                <Swoosh style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "70px 24px", maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 3.4vw, 36px)", color: COLORS.ink, margin: 0, maxWidth: 480 }}>
              Four disciplines, one team behind every build.
            </h2>
            <div onClick={() => go("services")} style={{ display: "flex", alignItems: "center", gap: 6, color: COLORS.teal, fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              View all services <ArrowRight size={16} />
            </div>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 36 }} className="cards-4">
          {services.map(([Icon, title, desc], i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="lift-card" style={{
                background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: 18,
                padding: 26, height: "100%",
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  background: `linear-gradient(135deg, ${COLORS.teal}22, ${COLORS.green}22)`, color: COLORS.teal, marginBottom: 16,
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16, color: COLORS.ink, margin: "0 0 8px" }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: COLORS.muted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 980px) { .cards-4 { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 600px) { .cards-4 { grid-template-columns: 1fr !important; } }
          .lift-card { transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
          .lift-card:hover { transform: translateY(-6px); box-shadow: 0 18px 34px -16px rgba(18,42,62,0.2); border-color: ${COLORS.teal}55; }
        `}</style>
      </section>

      {/* PHOTO BANNER */}
      <section style={{ padding: "0 24px 70px", maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <div style={{ position: "relative" }}>
            <Photo
              id="photo-1758873268745-dd2cf0d677b5"
              alt="Vee.BK team collaborating around a laptop in the studio"
              w={1600}
              ratio="21/9"
              radius={26}
              overlay
            />
            <div style={{ position: "absolute", left: 28, bottom: 24, right: 28, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(18px, 2.4vw, 24px)", color: "#fff" }}>
                  Real people, in the room, on every build.
                </div>
                <div style={{ color: "#D7E0E5", fontSize: 13, marginTop: 4 }}>
                  Design, engineering and QA sit together for the length of the project.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MISSION STRIP */}
      <section style={{ background: COLORS.navy, padding: "60px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Reveal>
            <Quote size={30} color={COLORS.orange} style={{ marginBottom: 14 }} />
            <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 2.6vw, 24px)", color: "#fff", lineHeight: 1.6, margin: 0 }}>
              "Technology should lift the people who use it. Every product we ship is judged by
              whether it helps someone do their work better — and by nothing that gets in their way."
            </p>
            <p style={{ marginTop: 18, color: COLORS.orange, fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: "0.08em" }}>
              — THE VEE.BK PRINCIPLE
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "70px 24px" }}>
        <div style={{
          maxWidth: 1180, margin: "0 auto", background: `linear-gradient(120deg, ${COLORS.orange}, ${COLORS.orangeDark})`,
          borderRadius: 26, padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 26, color: "#fff", margin: "0 0 8px" }}>
              Have a project brewing?
            </h3>
            <p style={{ color: "#FFEBD1", margin: 0, fontSize: 14.5 }}>Tell us where you're stuck — we'll tell you how we'd build it.</p>
          </div>
          <Button variant="light" onClick={() => go("contact")}>Talk to our team</Button>
        </div>
      </section>
    </>
  );
}
