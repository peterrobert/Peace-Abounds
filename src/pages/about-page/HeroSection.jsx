// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import mainImage2 from "../../assets/mainimage2.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
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
      id="about-hero"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-24 pb-20"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-sage/40"></div>
            <i className="fa-solid fa-dove text-brand-gold/80 text-xl"></i>
            <span className="text-brand-sage font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl md:text-6xl font-medium text-brand-text leading-tight text-balance"
          >
            A Sanctuary of Compassion and Dignity
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-sans text-lg text-brand-muted font-light leading-relaxed max-w-xl"
          >
            At Peace Abounds, we believe that every individual deserves to age
            with grace in an environment that feels like home. Our mission is
            rooted in unwavering respect, holistic care, and the deep peace that
            comes from knowing your loved ones are safe.
          </motion.p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Background layer */}
          <motion.div
            className="absolute inset-0 bg-brand-sage/10 rounded-[24px] translate-x-4 translate-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          {/* Image */}
          <motion.img
            src={mainImage2}
            alt="Caregiver holding hands with resident"
            className="w-full h-[500px] object-cover rounded-[24px] relative z-10 shadow-lg border border-brand-sage/20"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[16px] shadow-xl border border-brand-sage/10 z-20 flex items-center gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage">
              <i className="fa-solid fa-heart text-xl"></i>
            </div>

            <div>
              <div className="font-serif text-2xl font-medium text-brand-text">
                1+ Years
              </div>
              <div className="text-sm text-brand-muted font-light">
                of Compassionate Care
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
