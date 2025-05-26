import HeroSection from "./components/HeroSection";
import NavBanner from "./components/NavBanner";
import Navbar from "./components/Navbar";
import FunFact from "./components/FunFact";
import SkillsExp from "./components/SkillsExp";
import Testimonials from "./components/Testimonials";
import OurProjects from "./components/OurProjects";
import LastestNews from "./components/LastestNews";
import Explore from "./components/Explore";
import OurCompany from "./components/OurCompany";
import Transformative from "./components/Transformative";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <>
      <NavBanner /> {/* usually always visible – keep outside */}
      <Navbar /> {/* navbar sticks – keep outside */}
      <ScrollReveal y={0}>
        {" "}
        {/* hero already animated; no slide */}
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Explore />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <OurCompany />
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <Transformative />
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <FunFact />
      </ScrollReveal>
      <ScrollReveal delay={0.5}>
        <SkillsExp />
      </ScrollReveal>
      <ScrollReveal delay={0.6}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={0.7}>
        <OurProjects />
      </ScrollReveal>
      <ScrollReveal delay={0.8}>
        <LastestNews />
      </ScrollReveal>
      <Footer />
    </>
  );
}

export default App;
