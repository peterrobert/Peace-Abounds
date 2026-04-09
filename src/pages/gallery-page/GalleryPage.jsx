// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeroPage from "./HeroPage";
import PhotogridSection from "./PhotogridSection";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const GalleryPage = () => {
  return (
    <section className="flex-grow flex flex-col relative" id="gallery_page">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <HeroPage />
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <PhotogridSection />
      </motion.div>

      <motion.div
        className="fixed bottom-6 right-6 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <ScrollToTopButton />
      </motion.div>
    </section>
  );
};

export default GalleryPage;
