// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import creatorImage from "../../assets/creator.jpg";

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

const LeadershipSection = () => {
  return (
    <section
      id="leadership"
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
            Meet the Heart of Our Home
          </h2>
          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed">
            Our leadership team brings decades of clinical expertise combined
            with a profound personal commitment to elder care.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.01 }}
          className="max-w-4xl mx-auto bg-brand-cream/20 rounded-[24px] border border-brand-sage/20 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center"
        >
          {/* Image */}
          <motion.img
            src={creatorImage}
            alt="Facility Director"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md shrink-0"
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Content */}
          <motion.div variants={container}>
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-2"
            >
              <h3 className="font-serif text-2xl font-medium text-brand-text">
                Maureen Ngigi
              </h3>
              <span className="px-3 py-1 bg-brand-sage/10 text-brand-sage rounded-full text-xs font-medium">
                MN
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="text-brand-gold font-medium text-sm mb-4 uppercase tracking-wider"
            >
              Facility Director & Founder
            </motion.p>

            <motion.p
              variants={item}
              className="text-brand-muted font-light leading-relaxed mb-6"
            >
              “At Peace Abounds, our purpose is to serve and support individuals
              who need care and attention. We believe everyone deserves to feel
              valued, respected, and at home, and we strive to bring that into
              everything we do.”
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-brand-sage hover:text-brand-gold transition-colors"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeadershipSection;
