// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HeroPage from "./HeroPage";
import PhotogridSection from "./PhotogridSection";

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
    </section>
  );
};

export default GalleryPage;
