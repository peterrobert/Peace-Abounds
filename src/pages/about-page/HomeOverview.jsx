// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import kitchenImage from "../../assets/kitchenImage.jpeg";
import toiletImage from "../../assets/toilet.jpeg";
// eslint-disable-next-line no-unused-vars
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
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

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HomeOverview = () => {
  return (
    <section
      id="home-overview"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-24"
    >
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
        {/* Text Side */}
        <motion.div
          className="w-full lg:w-1/2 space-y-8"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={item}
            className="font-serif text-4xl font-medium text-brand-text leading-tight"
          >
            Designed for Comfort and Safety
          </motion.h2>

          <motion.p
            variants={item}
            className="font-sans text-lg text-brand-muted font-light leading-relaxed"
          >
            Our facility is specifically architected to remove barriers and
            enhance the daily lives of seniors. We blend the warmth of a
            residential home with the critical safety features of a premium care
            facility.
          </motion.p>

          <motion.ul variants={stagger} className="space-y-6 pt-4">
            {/* Item 1 */}
            <motion.li
              variants={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-1"
              >
                <i className="fa-solid fa-check text-sm"></i>
              </motion.div>

              <div>
                <h4 className="font-serif font-medium text-brand-text text-lg">
                  Single-Level Living
                </h4>
                <p className="text-sm text-brand-muted font-light mt-1">
                  No stairs or sudden drops. Wide, clear hallways designed for
                  walkers and wheelchairs.
                </p>
              </div>
            </motion.li>

            {/* Item 2 */}
            <motion.li
              variants={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-1"
              >
                <i className="fa-solid fa-check text-sm"></i>
              </motion.div>

              <div>
                <h4 className="font-serif font-medium text-brand-text text-lg">
                  Secure Perimeters
                </h4>
                <p className="text-sm text-brand-muted font-light mt-1">
                  State-of-the-art security systems and monitored exits to
                  ensure residents are always safe, especially those with memory
                  care needs.
                </p>
              </div>
            </motion.li>

            {/* Item 3 */}
            <motion.li
              variants={item}
              whileHover={{ x: 4 }}
              className="flex items-start gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-1"
              >
                <i className="fa-solid fa-check text-sm"></i>
              </motion.div>

              <div>
                <h4 className="font-serif font-medium text-brand-text text-lg">
                  Tranquil Outdoor Spaces
                </h4>
                <p className="text-sm text-brand-muted font-light mt-1">
                  Enclosed, beautifully landscaped gardens where residents can
                  safely enjoy fresh air and sunshine.
                </p>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={kitchenImage}
              alt="Bright hallway"
              className="w-full h-[300px] object-cover rounded-[16px] shadow-sm"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />

            <motion.img
              src={toiletImage}
              alt="Cozy living room"
              className="w-full h-[300px] object-cover rounded-[16px] shadow-sm translate-y-8"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeOverview;
