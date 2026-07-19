import Home from "../pages/Home/components/Home";
import About from "../pages/About/components/About";
import Work from "../pages/Work/components/Work";
// import Contact from "../pages/Contact/components/Contact";

export default function LandingPage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

     <section id="work">
        <Work />
      </section>

      {/* <section id="contact">
        <Contact />
      </section>  */}
    </>
  );
}