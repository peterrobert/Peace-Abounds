import { motion, cubicBezier } from "framer-motion";
import { NavLink } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -18 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

const CtaSection = () => {
  return (
    <section
      id="services-cta"
      className="relative z-10 w-full bg-white border-y border-brand-sage/10 py-24"
    >
      <motion.div
        className="max-w-[1440px] mx-auto px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        <motion.div
          variants={item}
          className="bg-brand-sage rounded-[24px] p-12 md:p-20 text-center relative overflow-hidden shadow-lg max-w-5xl mx-auto"
        >
          {/* Decorative elements (no motion on purpose) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10">
            <motion.i
              variants={item}
              className="fa-solid fa-dove text-white/80 text-4xl mb-6 inline-block"
            />

            <motion.h2
              variants={item}
              className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight"
            >
              Experience the Care Your Loved One Deserves
            </motion.h2>

            <motion.p
              variants={item}
              className="font-sans text-lg text-white/90 font-light leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              We invite you to visit and meet our team, and see how our services
              bring comfort and peace of mind.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <NavLink
                to="/schedule"
                className="px-8 py-4 bg-white text-brand-sage rounded-full font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                Schedule a Visit
              </NavLink>

              <NavLink
                to="/contact"
                className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto"
              >
                Contact Us
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
