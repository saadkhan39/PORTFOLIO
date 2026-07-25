import Home from "../pages/Home/components/Home";
import About from "../pages/About/components/About";
import Skills from "../pages/Skills/Skills";
import Work from "../pages/Work/components/Work";
import Contact from "../pages/Contact/components/Contact";

export default function LandingPage() {
  return (
    <div className="relative w-full bg-[#0a0a0a]">
      {/* ================= MAIN CONTENT CURTAIN ================= */}
      {/* This solid container sits OVER the contact section and slides up */}
      <div className="relative z-20 bg-[#0a0a0a] mb-[100vh] shadow-2xl">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="work">
          <Work />
        </section>
      </div>

      {/* ================= FIXED SUNDOWN FOOTER ================= */}
      {/* Sitting underneath waiting to be exposed */}
      <Contact />
    </div>
  );
}