// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import MapSection from "./MapSection";

const ContactPage = () => {
  return (
    <section
      className="flex-grow flex flex-col relative z-0 w-full"
      id="main-content"
    >
      {/* Background Pattern/Texture (Subtle) */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Motion wrapper ONLY */}
      <motion.div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ContactForm />
        <MapSection />
      </motion.div>
    </section>
  );
};

export default ContactPage;
