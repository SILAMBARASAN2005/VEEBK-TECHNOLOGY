import React from "react";
import { Code2, Cloud, ShieldCheck, Database, Smartphone, LineChart, CheckCircle2 } from "lucide-react";
import { COLORS } from "../theme";
import { Button, Eyebrow, Reveal, Photo } from "../components/UI";

export default function Services({ setPage }) {
  const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const services = [
    [Code2, "Web & App Development", "Marketing sites, customer portals and native mobile apps built in React, Next.js, Swift and Kotlin.", ["Product design & UX", "Frontend & backend build", "QA and accessibility audits"]],
    [Cloud, "Cloud & DevOps", "Infrastructure that scales with usage instead of against it, on AWS, Azure or GCP.", ["Cloud migration", "CI/CD pipelines", "Cost & reliability tuning"]],
    [ShieldCheck, "Cybersecurity", "Practical security that fits your budget and threat model — not a compliance checkbox.", ["Vulnerability audits", "Secure architecture review", "Incident response planning"]],
    [Database, "Data & Analytics", "Pipelines, warehouses and dashboards that turn scattered data into a single source of truth.", ["ETL & data pipelines", "BI dashboards", "Predictive models"]],
    [Smartphone, "Product Strategy", "Early-stage guidance on what to build first, and what to leave for version two.", ["Discovery workshops", "Roadmapping", "Technical due diligence"]],
    [LineChart, "IT Consulting", "Ongoing advisory for teams who need senior engineering judgment without a full hire.", ["Architecture reviews", "Vendor evaluation", "Team augmentation"]],
  ];
  const process = [
    ["01", "Discover", "We map the problem, the users and the constraints before touching a line of code."],
    ["02", "Design", "Wireframes and architecture get reviewed with you before we commit to a build."],
    ["03", "Build", "Two-week cycles, visible progress, a working demo at the end of each one."],
    ["04", "Launch & support", "We ship, monitor, and stay on for the fixes and features that follow."],
  ];
  return (
    <>
      <section style={{ padding: "70px 24px 20px", maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(30px, 4.4vw, 46px)", color: COLORS.ink, maxWidth: 700, lineHeight: 1.1, margin: 0 }}>
            Six disciplines. One accountable team.
          </h1>
          <p style={{ marginTop: 18, fontSize: 16, color: COLORS.muted, maxWidth: 600, lineHeight: 1.7 }}>
            Pick one service or lean on all of them — every engagement is staffed by the same
            senior team from kickoff to launch.
          </p>
        </Reveal>
      </section>

      <section style={{ padding: "30px 24px", maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="cards-3">
          {services.map(([Icon, title, desc, bullets], i) => (
            <Reveal key={title} delay={(i % 3) * 90}>
              <div className="lift-card" style={{ background: "#fff", border: `1px solid ${COLORS.border}`, borderRadius: 18, padding: 26, height: "100%", display: "flex", flexDirection: "column" }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
                  background: `linear-gradient(135deg, ${COLORS.orange}22, ${COLORS.teal}22)`, color: COLORS.orangeDark, marginBottom: 16,
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 17, color: COLORS.ink, margin: "0 0 8px" }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: COLORS.muted, lineHeight: 1.6, margin: "0 0 14px" }}>{desc}</p>
                <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
                  {bullets.map((b) => (
                    <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12.5, color: COLORS.ink }}>
                      <CheckCircle2 size={15} color={COLORS.green} style={{ flexShrink: 0, marginTop: 1 }} /> {b}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 980px) { .cards-3 { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 640px) { .cards-3 { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* FEATURED CAPABILITIES — real photography */}
      <section style={{ padding: "40px 24px 70px", maxWidth: 1180, margin: "0 auto" }}>
        <Reveal>
          <Eyebrow>Inside the work</Eyebrow>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(22px, 2.8vw, 30px)", color: COLORS.ink, margin: "0 0 28px", maxWidth: 500 }}>
            What the day-to-day actually looks like.
          </h2>
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gridTemplateRows: "1fr 1fr", gap: 18, height: 460 }} className="capability-grid">
          {[
            ["photo-1753715613373-90b1ea010731", "Frontend and backend code, reviewed line by line", { gridColumn: "1", gridRow: "1 / 3" }],
            ["photo-1558494949-ef010cbdcc31", "Infrastructure built for uptime, not luck", { gridColumn: "2", gridRow: "1" }],
          ].map(([id, caption, gridStyle], i) => (
            <Reveal key={id} delay={i * 100}>
              <div style={{ position: "relative", height: "100%", ...gridStyle }}>
                <Photo id={id} alt={caption} ratio="auto" radius={18} overlay style={{ height: "100%" }} />
                <div style={{ position: "absolute", left: 16, bottom: 14, right: 16, color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 13.5 }}>
                  {caption}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 800px) {
            .capability-grid { grid-template-columns: 1fr !important; grid-template-rows: none !important; height: auto !important; }
            .capability-grid > div { grid-column: 1 !important; grid-row: auto !important; height: 220px !important; }
          }
        `}</style>
      </section>

      {/* PROCESS — genuine ordered sequence, numbering is meaningful here */}
      <section style={{ padding: "70px 24px", background: COLORS.navy, marginTop: 40 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal>
            <Eyebrow>How an engagement runs</Eyebrow>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(24px, 3.2vw, 34px)", color: "#fff", margin: "0 0 40px", maxWidth: 500 }}>
              The same four stages, every project.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="cards-4">
            {process.map(([n, title, desc], i) => (
              <Reveal key={n} delay={i * 100}>
                <div style={{ borderLeft: `2px solid ${COLORS.orange}`, paddingLeft: 18 }}>
                  <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 22, color: COLORS.orange }}>{n}</div>
                  <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", margin: "8px 0 8px" }}>{title}</h4>
                  <p style={{ fontSize: 13, color: "#AEB9C1", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", textAlign: "center" }}>
        <Reveal>
          <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 24, color: COLORS.ink, margin: "0 0 16px" }}>Not sure which service fits?</h3>
          <Button onClick={() => go("contact")}>Book a discovery call</Button>
        </Reveal>
      </section>
    </>
  );
}
