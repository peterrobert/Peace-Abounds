import { NavLink } from "react-router-dom";
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SecondaryNavigationSection = () => {
  return (
    <section
      id="entry-points"
      className="w-full max-w-7xl mx-auto px-6 pb-24 relative z-20"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Card 1 */}
        <motion.div variants={item}>
          <motion.div whileHover={{ y: -6, scale: 1.02 }}>
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to="/about"
              className="group bg-white rounded-[1.5rem] p-8 shadow-soft border border-brand-sage/10 hover:border-brand-sage/40 transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage group-hover:bg-brand-sage group-hover:text-white transition-colors"
              >
                <i className="fa-solid fa-book-open text-2xl"></i>
              </motion.div>

              <h3 className="font-serif text-xl font-medium text-brand-text">
                Our Story
              </h3>

              <p className="text-sm text-brand-muted leading-relaxed">
                Learn about our mission to provide dignified, compassionate care
                in a home setting.
              </p>
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={item}>
          <motion.div whileHover={{ y: -6, scale: 1.02 }}>
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to="/services"
              className="group bg-white rounded-[1.5rem] p-8 shadow-soft border border-brand-sage/10 hover:border-brand-sage/40 transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage group-hover:bg-brand-sage group-hover:text-white transition-colors"
              >
                <i className="fa-solid fa-hand-holding-heart text-2xl"></i>
              </motion.div>

              <h3 className="font-serif text-xl font-medium text-brand-text">
                Our Services
              </h3>

              <p className="text-sm text-brand-muted leading-relaxed">
                Discover the personalized care plans and daily support we offer
                our residents.
              </p>
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={item}>
          <motion.div whileHover={{ y: -6, scale: 1.02 }}>
            <NavLink
              onClick={() => window.scrollTo(0, 0)}
              to="/contact"
              className="group bg-brand-sage rounded-[1.5rem] p-8 shadow-[0_10px_30px_-10px_rgba(157,181,168,0.5)] border border-transparent transition-all duration-300 flex flex-col items-center text-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white"
              >
                <i className="fa-regular fa-calendar-check text-2xl"></i>
              </motion.div>

              <h3 className="font-serif text-xl font-medium text-white">
                Schedule a Visit
              </h3>

              <p className="text-sm text-white/90 leading-relaxed">
                Come see our peaceful home in person and meet our dedicated care
                team.
              </p>
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SecondaryNavigationSection;
