import ScrollToTopButton from "../../components/ScrollToTopButton";
import CoreServices from "./CoreServices";
import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import WhatincludedSection from "./WhatincludedSection";

const ServicePage = () => {
  return (
    <section className="flex-grow flex flex-col relative" id="service_page">
      {/* <!-- Background Pattern/Texture (Subtle) --> */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <HeroSection />
      <CoreServices />
      <WhatincludedSection />
      <CtaSection />
      <ScrollToTopButton />
    </section>
  );
};

export default ServicePage;
