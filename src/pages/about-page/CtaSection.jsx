import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CtaSection = () => {
  return (
    <section
      id="reassurance-cta"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-brand-sage rounded-[24px] p-12 md:p-20 text-center relative overflow-hidden shadow-lg"
      >
        {/* Ambient background motion (very subtle, slow) */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"
        />

        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Icon */}
          <motion.div variants={item}>
            <i className="fa-solid fa-dove text-white/80 text-4xl mb-6 inline-block" />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={item}
            className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight"
          >
            Find Peace of Mind Today
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={item}
            className="font-sans text-lg text-white/90 font-light leading-relaxed mb-10"
          >
            Choosing the right care is a difficult decision. We are here to
            answer all your questions, provide transparent information, and help
            you determine if Peace Abounds is the right sanctuary for your
            family.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <NavLink
                to="/schedule"
                className="px-8 py-4 bg-white text-brand-sage rounded-full font-medium shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
              >
                Schedule a Private Tour
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <NavLink
                to="/contact"
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Contact Our Team
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
