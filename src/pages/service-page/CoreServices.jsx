// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const CoreServices = () => {
  return (
    <section
      id="core-services"
      className="relative z-10 w-full bg-white py-24 border-y border-brand-sage/10"
    >
      <motion.div
        className="max-w-[1440px] mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-hands-holding-child text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Assistance with ADLs
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Compassionate support with Activities of Daily Living, including
              bathing, dressing, grooming, and mobility, always delivered with
              the utmost respect for personal boundaries.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Personal hygiene care
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Dressing & grooming assistance
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Mobility & transfer support
              </li>
            </ul>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-pills text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Medication Management
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Rigorous, error-free administration and tracking of all
              prescriptions and supplements, coordinated directly with
              healthcare providers and pharmacies.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Scheduled administration
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Pharmacy coordination
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Health vitals monitoring
              </li>
            </ul>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-utensils text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Nutritious Meals
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Three delicious, home-cooked meals daily plus snacks, tailored to
              dietary needs and preferences.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Dietitian-approved menus
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Diabetic & low-sodium options
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Hydration monitoring
              </li>
            </ul>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-brain text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Memory & Dementia Care
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Specialized cognitive support focused on safety, routine, and
              emotional stability.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Secure environment
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Cognitive therapies
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Redirection techniques
              </li>
            </ul>
          </motion.div>

          {/* CARD 5 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-music text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Enriching Activities
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Activities designed to maintain cognitive and physical engagement.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Exercise & stretching
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Arts
                & music therapy
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Social engagement
              </li>
            </ul>
          </motion.div>

          {/* CARD 6 */}
          <motion.div
            variants={card}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full"
          >
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-broom text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Housekeeping & Laundry
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Clean, maintained living environments with daily support services.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Room
                tidying
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Laundry service
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Deep
                cleaning
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CoreServices;
