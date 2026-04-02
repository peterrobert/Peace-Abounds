import HeroSection from "./HeroSection";
import SecondaryNavigationSection from "./SecondaryNavigationSection";

const Home = () => {
  return (
    <section className="flex-grow flex flex-col relative" id="home_page">
      {/* <!-- Background Pattern/Texture (Subtle) --> */}
      <div
        clasName="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <HeroSection />
      <SecondaryNavigationSection />
    </section>
  );
};

export default Home;
