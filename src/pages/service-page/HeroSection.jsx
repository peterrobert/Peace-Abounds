// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const line = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  return (
    <section
      id="services-hero"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-24 pb-20 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto space-y-6"
      >
        {/* Decorative line cluster */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 mb-4"
        >
          <motion.div
            variants={line}
            className="h-[1px] w-12 bg-brand-sage/40 origin-center"
          />
          <motion.i
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fa-solid fa-dove text-brand-gold/80 text-xl"
          />
          <motion.div
            variants={line}
            className="h-[1px] w-12 bg-brand-sage/40 origin-center"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-serif text-5xl md:text-6xl font-medium text-brand-text leading-tight text-balance"
        >
          Comprehensive Care, Tailored for You
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={item}
          className="font-sans text-lg text-brand-muted font-light leading-relaxed"
        >
          We provide a holistic approach to daily living, ensuring every
          resident receives the precise level of support they need while
          maintaining their dignity and independence.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
