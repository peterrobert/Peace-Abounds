// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const MissionSection = () => {
  return (
    <section
      id="mission-values"
      className="relative z-10 w-full bg-white py-24 border-y border-brand-sage/10"
    >
      <motion.div
        className="max-w-[1440px] mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.div
          variants={item}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl font-medium text-brand-text mb-6">
            Our Core Philosophy
          </h2>
          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed">
            We don't just provide medical assistance; we nurture the spirit. Our
            approach is built on four fundamental pillars that guide every
            interaction and care plan.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
        >
          {/* Card 1 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm"
            >
              <i className="fa-solid fa-hand-holding-heart text-2xl"></i>
            </motion.div>

            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Compassion
            </h3>

            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Treating every resident as if they were our own family, with
              endless patience, gentle hands, and a listening ear.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm"
            >
              <i className="fa-solid fa-scale-balanced text-2xl"></i>
            </motion.div>

            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Dignity
            </h3>

            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Respecting the autonomy, history, and personal preferences of each
              individual, empowering them every day.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm"
            >
              <i className="fa-solid fa-shield-halved text-2xl"></i>
            </motion.div>

            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Transparency
            </h3>

            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Maintaining open, honest communication with families, ensuring you
              are always informed and involved in care decisions.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm"
            >
              <i className="fa-solid fa-leaf text-2xl"></i>
            </motion.div>

            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Peacefulness
            </h3>

            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Cultivating a serene, quiet, and harmonious environment where
              anxiety fades and genuine relaxation begins.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
