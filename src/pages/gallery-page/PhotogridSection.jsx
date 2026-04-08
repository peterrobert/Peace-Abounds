import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../../assets/gallery/gateImage1.jpeg";

const images = [
  {
    src: image1,
    title: "Main Entrance & Living Area",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/57fc136093-2e3db1a79e2f2d39707b.png",
    title: "Private Resident Suite",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/652f5f284a-0c74552f465cb3e855fd.png",
    title: "Communal Dining Room",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d27641934c-9ec03c96864d960eeb20.png",
    title: "Outdoor Garden Patio",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/08eccb1c3d-91061be5dc24b706b67e.png",
    title: "Accessible Bathroom",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/40c65d09b5-da31ff8f56e53d2e3aca.png",
    title: "Reading Corner",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/290d55fa37-f4b6534ec32cd94538a5.png",
    title: "Activity Space",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/80e685076f-1623e92d43c3aa8e1591.png",
    title: "Safe Corridors",
  },
  {
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/00c3c3db95-7934f0283ebcf8b47015.png",
    title: "Exterior View",
  },
];

const PhotogridSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const open = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="break-inside-avoid mb-8 group cursor-pointer"
            onClick={() => open(i)}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-md">
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition">
                  <i className="fa-solid fa-expand text-white text-2xl" />
                </div>
              </div>
            </div>

            {/* caption */}
            <p className="mt-3 text-sm text-gray-500 font-light px-1">
              {img.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* close */}
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white text-xl"
            >
              ✕
            </button>

            {/* prev */}
            <button
              onClick={prev}
              className="absolute left-6 text-white text-3xl"
            >
              ‹
            </button>

            {/* image */}
            <motion.img
              key={activeIndex}
              src={images[activeIndex].src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            />

            {/* next */}
            <button
              onClick={next}
              className="absolute right-6 text-white text-3xl"
            >
              ›
            </button>

            {/* caption */}
            <div className="absolute bottom-6 text-white text-sm font-light">
              {images[activeIndex].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotogridSection;
