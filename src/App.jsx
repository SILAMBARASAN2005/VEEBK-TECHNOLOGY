import React, { useState } from "react";
import { COLORS } from "./theme";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Assistant from "./components/Assistant";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: COLORS.bg, minHeight: "100vh", color: COLORS.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::selection { background: ${COLORS.orange}33; }
      `}</style>

      <Nav page={page} setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About />}
      {page === "services" && <Services setPage={setPage} />}
      {page === "contact" && <Contact />}

      <Footer setPage={setPage} />
      <Assistant setPage={setPage} />
    </div>
  );
}
