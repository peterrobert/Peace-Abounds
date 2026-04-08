// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import CtaSection from "./CtaSection";
import HeroSection from "./HeroSection";
import HomeOverview from "./HomeOverview";
import LeadershipSection from "./LeadershipSection";
import MissionSection from "./MissionSection";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <motion.section
      className="flex-grow flex flex-col relative"
      id="about_page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sections */}
      <motion.div
        className="relative z-10"
        variants={sectionVariant}
        initial="hidden"
        animate="show"
      >
        <HeroSection />
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <MissionSection />
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <HomeOverview />
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <LeadershipSection />
      </motion.div>

      <motion.div
        className="relative z-10"
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <CtaSection />
      </motion.div>

      {/* Scroll Button */}
      <ScrollToTopButton />
    </motion.section>
  );
}
