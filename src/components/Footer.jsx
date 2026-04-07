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

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-brand-sage/20 py-16 relative z-10"
    >
      <motion.div
        className="max-w-[1440px] mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            variants={item}
            className="col-span-1 md:col-span-2 space-y-6"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <i className="fa-solid fa-dove text-brand-sage text-3xl"></i>
              <span className="font-serif font-medium text-brand-text text-2xl">
                Peace Abounds
              </span>
            </motion.div>

            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              Providing a spacious, clean, and calming sanctuary for your loved
              ones. We focus on compassionate care with dignity and respect in a
              true family home setting.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-6">
            <h4 className="font-serif font-medium text-brand-text text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Homepage" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <motion.li
                  key={link.to}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <NavLink
                    to={link.to}
                    className="text-sm text-brand-muted hover:text-brand-sage transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item} className="space-y-6">
            <h4 className="font-serif font-medium text-brand-text text-lg">
              Contact Us
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-muted">
                <i className="fa-solid fa-location-dot mt-1 text-brand-sage"></i>
                <span>
                  22003 50 Ave Ct E,
                  <br />
                  Spanaway, WA 983875
                </span>
              </li>

              <li className="flex items-center gap-3 text-sm text-brand-muted">
                <i className="fa-solid fa-phone text-brand-sage"></i>
                <span>318-344-6503 | 206-460-9059</span>
              </li>

              <li className="flex items-center gap-3 text-sm text-brand-muted">
                <i className="fa-solid fa-envelope text-brand-sage"></i>
                <span>care@peaceabounds.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="pt-8 border-t border-brand-sage/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-sm text-brand-muted text-center md:text-left">
            &copy; 2026 Peace Abounds Adult Family Home. All rights reserved.
          </div>

          <div className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage hover:bg-brand-sage hover:text-white transition-colors"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage hover:bg-brand-sage hover:text-white transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
