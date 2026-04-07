import HeroPage from "./HeroPage";
import PhotogridSection from "./PhotogridSection";

const GalleryPage = () => {
  return (
    <section className="flex-grow flex flex-col relative" id="gallery_page">
      {/* <!-- Background Pattern/Texture (Subtle) --> */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#9db5a8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <HeroPage />
      <PhotogridSection />
    </section>
  );
};

export default GalleryPage;
