// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HeroPage = () => {
  return (
    <motion.section
      id="gallery-header"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-24 pb-16 text-center"
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-brand-sage/40"></div>
          <i className="fa-solid fa-dove text-brand-gold/80 text-xl"></i>
          <div className="h-[1px] w-12 bg-brand-sage/40"></div>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl font-medium text-brand-text leading-tight text-balance">
          Our Peaceful Home
        </h1>

        <p className="font-sans text-lg text-brand-muted font-light leading-relaxed">
          Take a glimpse into the warm, inviting spaces where our residents
          live, relax, and thrive. Every corner is designed with comfort and
          dignity in mind.
        </p>
      </div>
    </motion.section>
  );
};

export default HeroPage;
