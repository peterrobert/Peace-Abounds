import ScrollToTopButton from "../../components/ScrollToTopButton";
import CoreServices from "./CoreServices";
import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import WhatincludedSection from "./WhatincludedSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const page = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const section = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServicePage = () => {
  return (
    <motion.section
      id="service_page"
      variants={page}
      initial="hidden"
      animate="show"
      className="flex-grow flex flex-col relative"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Sections (now consistently animated) */}
      <motion.div variants={section}>
        <HeroSection />
      </motion.div>

      <motion.div variants={section}>
        <CoreServices />
      </motion.div>

      <motion.div variants={section}>
        <WhatincludedSection />
      </motion.div>

      <motion.div variants={section}>
        <CtaSection />
      </motion.div>

      <ScrollToTopButton />
    </motion.section>
  );
};

export default ServicePage;
