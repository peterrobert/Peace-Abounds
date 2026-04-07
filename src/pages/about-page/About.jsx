import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import HomeOverview from "./HomeOverview";
import LeadershipSection from "./LeadershipSection";
import MissionSection from "./MissionSection";

const About = () => {
  return (
    <section className="flex-grow flex flex-col relative" id="about_page">
      {/* <!-- Background Pattern/Texture (Subtle) --> */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <HeroSection />
      <MissionSection />
      <HomeOverview />
      <LeadershipSection />
      <CtaSection />
    </section>
  );
};

export default About;
