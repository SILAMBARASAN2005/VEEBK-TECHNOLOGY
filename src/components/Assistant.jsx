import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles, ArrowRight } from "lucide-react";
import { COLORS } from "../theme";
import { Mark } from "./Logo";

/* ---------------------------------------------------------------------- */
/*  KNOWLEDGE BASE                                                        */
/*  Keep this in sync with the copy on Home/About/Services/Contact.       */
/* ---------------------------------------------------------------------- */
const KB = [
  {
    keys: ["service", "offer", "what do you do", "what can you build", "capabilit"],
    answer:
      "We work across six areas: Web & App Development, Cloud & DevOps, Cybersecurity, Data & Analytics, Product Strategy, and IT Consulting. Every engagement is staffed by the same senior team from kickoff to launch. Want details on one of these?",
  },
  {
    keys: ["process", "how do you work", "how does it work", "engagement", "methodology"],
    answer:
      "Every project runs through four stages: Discover → Design → Build → Launch & support. We work in two-week cycles with a working demo at the end of each one, so you always see visible progress.",
  },
  {
    keys: ["price", "cost", "pricing", "budget", "how much", "quote", "estimate"],
    answer:
      "Pricing depends on scope, so we don't quote a number blind — the Discover stage is where we scope tightly and estimate honestly. The fastest way to get a real number is to send us a brief on the Contact Us page.",
  },
  {
    keys: ["contact", "reach", "email", "phone", "talk to", "get in touch", "call"],
    answer:
      "You can reach us at hello@veebktech.com or +91 98765 43210, or just fill out the form on the Contact Us page — we reply within one business day.",
  },
  {
    keys: ["location", "where are you", "address", "based", "office"],
    answer: "Our studio is based in Bengaluru, Karnataka, India, and we work with clients remotely worldwide.",
  },
  {
    keys: ["about", "who are you", "history", "founded", "when did", "company"],
    answer:
      "Vee.BK Technologies started in 2016 as a two-person dev shop and has grown into a 40+ person studio spanning web, cloud, security and data — same founding principle the whole way through.",
  },
  {
    keys: ["mission", "value", "principle", "help ever", "hurt never", "philosophy"],
    answer:
      "Our guiding line is \"Help Ever! Hurt Never!\" — we judge a product by whether it genuinely helps the person using it, and build nothing that gets in their way. That shows up as four values: Help Ever, Hurt Never, Precision, and Partnership.",
  },
  {
    keys: ["logo", "mark", "symbol", "design of the logo"],
    answer:
      "Our mark is a person mid-stride, trailing tricolour energy, reaching toward a cluster of data points — a reminder that there's always a person on the other end of the systems we build.",
  },
  {
    keys: ["team", "engineer", "how many people", "size of the company", "staff"],
    answer: "We're a team of 40+ engineers and designers, and we've shipped 120+ products to date.",
  },
  {
    keys: ["start", "begin a project", "kick off", "new project", "hire you"],
    answer:
      "Easiest first step: tell us what you're building on the Contact Us page — name, email, the service you need, and a couple of lines on timeline. We'll follow up within a business day to set up a discovery call.",
  },
];

function findAnswer(text) {
  const q = text.toLowerCase();
  for (const entry of KB) {
    if (entry.keys.some((k) => q.includes(k))) return entry.answer;
  }
  return null;
}

const SUGGESTIONS = [
  "What services do you offer?",
  "What's your process?",
  "Where are you located?",
  "How do I start a project?",
];

/* ---------------------------------------------------------------------- */
/*  WIDGET                                                                */
/* ---------------------------------------------------------------------- */
export default function Assistant({ setPage }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi, I'm the Vee.BK assistant. Ask me about our services, process, pricing, or how to get in touch — I'm happy to help with quick doubts about the company.",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const goContact = () => {
    setOpen(false);
    if (setPage) {
      setPage("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const send = (raw) => {
    const text = (raw ?? input).trim();
    if (!text) return;
    const answer = findAnswer(text);
    const botReply = answer || {
      fallback: true,
      text:
        "I don't have a ready answer for that one — it's best answered by the team directly. Want me to take you to Contact Us, or you can email hello@veebktech.com anytime.",
    };
    setMessages((m) => [
      ...m,
      { from: "user", text },
      typeof botReply === "string" ? { from: "bot", text: botReply } : { from: "bot", ...botReply },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open company assistant"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 100,
          width: 58, height: 58, borderRadius: "50%", border: "none", cursor: "pointer",
          background: open ? COLORS.navy : COLORS.orange,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 14px 28px -10px rgba(18,42,62,0.45)",
          transition: "background .18s ease, transform .18s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        {open ? <X size={24} color="#fff" /> : <MessageCircle size={24} color="#fff" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div style={{
          position: "fixed", bottom: 92, right: 24, zIndex: 100,
          width: 344, maxWidth: "calc(100vw - 32px)", height: 480, maxHeight: "70vh",
          background: "#fff", borderRadius: 20, border: `1px solid ${COLORS.border}`,
          boxShadow: "0 26px 60px -20px rgba(18,42,62,0.4)",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            background: COLORS.navy, padding: "16px 18px", display: "flex", alignItems: "center", gap: 10,
          }}>
            <Mark size={30} />
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff" }}>
                Vee.BK Assistant
              </div>
              <div style={{ fontSize: 11, color: "#9AA7B0", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.green, display: "inline-block" }} />
                Answers company FAQs
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10, background: COLORS.bg }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "84%", padding: "10px 13px", borderRadius: 14,
                  borderBottomRightRadius: m.from === "user" ? 4 : 14,
                  borderBottomLeftRadius: m.from === "user" ? 14 : 4,
                  background: m.from === "user" ? COLORS.navy : "#fff",
                  color: m.from === "user" ? "#fff" : COLORS.ink,
                  border: m.from === "user" ? "none" : `1px solid ${COLORS.border}`,
                  fontSize: 13.5, lineHeight: 1.55,
                }}>
                  {m.text}
                  {m.fallback && (
                    <div
                      onClick={goContact}
                      style={{
                        marginTop: 10, display: "inline-flex", alignItems: "center", gap: 5,
                        color: COLORS.teal, fontFamily: "'Sora', sans-serif", fontWeight: 700,
                        fontSize: 12.5, cursor: "pointer",
                      }}
                    >
                      Go to Contact Us <ArrowRight size={13} />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    style={{
                      border: `1px solid ${COLORS.border}`, background: "#fff", color: COLORS.ink,
                      borderRadius: 999, padding: "7px 12px", fontSize: 12, cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            style={{ display: "flex", gap: 8, padding: 12, borderTop: `1px solid ${COLORS.border}`, background: "#fff" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, process, contact…"
              style={{
                flex: 1, border: `1.5px solid ${COLORS.border}`, borderRadius: 999, padding: "10px 14px",
                fontSize: 13.5, outline: "none", fontFamily: "'Inter', sans-serif",
              }}
            />
            <button
              type="submit"
              aria-label="Send"
              style={{
                width: 40, height: 40, borderRadius: "50%", border: "none", cursor: "pointer",
                background: COLORS.orange, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Send size={16} />
            </button>
          </form>
          <div style={{ fontSize: 10.5, color: COLORS.muted, textAlign: "center", padding: "0 12px 10px", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
            <Sparkles size={11} /> Answers common questions — for anything else, use Contact Us.
          </div>
        </div>
      )}
    </>
  );
}
