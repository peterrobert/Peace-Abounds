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

const leftItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const WhatincludedSection = () => {
  return (
    <section
      id="included-amenities"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-24"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col lg:flex-row gap-16 items-start"
      >
        {/* LEFT SIDE */}
        <motion.div variants={leftItem} className="w-full lg:w-1/3">
          <h2 className="font-serif text-4xl font-medium text-brand-text mb-6">
            All-Inclusive Living
          </h2>

          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed mb-8">
            We believe in transparent, straightforward care. Our monthly rate
            covers all essential services, amenities, and support.
          </p>

          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/64615c9f4c-136a394962f0ec4d3525.png"
            alt="Peaceful room setting"
            className="w-full h-64 object-cover rounded-[16px] shadow-sm border border-brand-sage/20"
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div variants={rightItem} className="w-full lg:w-2/3">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="bg-white rounded-[24px] border border-brand-sage/20 shadow-card p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-house-chimney text-brand-sage"></i>
                  Room & Board
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Private or semi-private furnished rooms
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Utilities included
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Wi-Fi & TV access
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Maintenance services
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-user-nurse text-brand-sage"></i>
                  Health & Safety
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    24/7 supervision
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Emergency systems
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Health monitoring
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Care coordination
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-mug-hot text-brand-sage"></i>
                  Daily Life
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Meals & snacks
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Housekeeping
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Laundry service
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Shared spaces
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-puzzle-piece text-brand-sage"></i>
                  Enrichment
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Activities & games
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Events & celebrations
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Entertainment visits
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                    Spiritual support
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatincludedSection;
