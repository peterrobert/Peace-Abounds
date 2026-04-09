import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center min-h-[100dvh] w-full max-w-7xl mx-auto px-6 py-12 lg:py-0 gap-12"
    >
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 z-20"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Logo */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="w-20 h-20 bg-white rounded-full shadow-soft flex items-center justify-center border border-brand-sage/20 mb-4"
        >
          <i className="fa-solid fa-dove text-4xl text-brand-sage"></i>
        </motion.div>

        {/* Typography */}
        <motion.div variants={fadeUp} className="space-y-4 max-w-xl">
          <h1 className="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-brand-text leading-tight">
            Peace <span className="text-brand-sage italic">Abounds</span>
            <br />
            Adult Family Home
          </h1>
          <p className="font-sans text-lg lg:text-xl text-brand-muted font-light leading-relaxed max-w-md mx-auto lg:mx-0">
            A spacious, clean, and calming sanctuary providing compassionate
            care with dignity and respect.
          </p>
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center lg:justify-start gap-4 py-4"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.03 }}
            className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-sage/20 shadow-sm"
          >
            <i className="fa-solid fa-heart text-brand-gold text-sm"></i>
            <span className="text-sm font-medium text-brand-text">
              Compassionate Care
            </span>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.03 }}
            className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-sage/20 shadow-sm"
          >
            <i className="fa-solid fa-house-chimney-window text-brand-gold text-sm"></i>
            <span className="text-sm font-medium text-brand-text">
              Spacious Environment
            </span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <NavLink
              to="/gallery"
              className="group relative px-8 py-4 bg-brand-sage text-white rounded-full font-medium text-lg shadow-[0_8px_20px_-6px_rgba(157,181,168,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(157,181,168,0.7)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">View Gallery</span>
              <i className="fa-solid fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform"></i>
              <div className="absolute inset-0 bg-brand-muted opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </NavLink>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <NavLink
              to="/contact"
              className="px-8 py-4 bg-white text-brand-text border border-brand-sage/30 rounded-full font-medium text-lg hover:bg-brand-sage/5 hover:border-brand-sage transition-all duration-300 flex items-center justify-center shadow-sm"
            >
              Contact Us
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
          <motion.img
            className="w-full h-full object-cover blur-up"
            src="/images/mainimagepage.jpg"
            loading="lazy"
            alt="Care home"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Floating soft glow */}
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gold/10 rounded-full blur-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-sage/20 rounded-full blur-2xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-soft border border-white/50 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage">
              <i className="fa-solid fa-sun text-xl"></i>
            </div>
            <div>
              <p className="font-serif font-medium text-brand-text">
                A Place of Peace
              </p>
              <p className="text-sm text-brand-muted">
                Welcome to your new home.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
