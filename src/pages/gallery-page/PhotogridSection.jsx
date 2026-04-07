import image1 from "../../assets/gallery/gateImage1.jpeg";

const PhotogridSection = () => {
  return (
    <section
      id="photo-grid-masonry"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 pb-32"
    >
      {/* <!-- Grid Container with generous spacing --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {/* <!-- Gallery Item 1 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(0)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[4/3] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src={image1}
              alt="Main entrance and living area of an adult family home, cozy seating, warm lighting, inviting atmosphere, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Main Entrance & Living Area
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 2 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(1)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[3/4] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/57fc136093-2e3db1a79e2f2d39707b.png"
              alt="Cozy private bedroom in an adult family home, neatly made bed, floral accents, natural light from window, serene and dignified, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Private Resident Suite
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 3 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(2)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[4/3] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/652f5f284a-0c74552f465cb3e855fd.png"
              alt="Spacious, clean dining area in an adult family home, wooden table set for meal, warm lighting, inviting and communal, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Communal Dining Room
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 4 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(3)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[3/4] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d27641934c-9ec03c96864d960eeb20.png"
              alt="Peaceful outdoor garden patio at an adult family home, comfortable seating, potted plants, sunny day, relaxing environment, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Outdoor Garden Patio
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 5 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(4)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[4/3] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/08eccb1c3d-91061be5dc24b706b67e.png"
              alt="Accessible modern bathroom in an adult family home, grab bars, walk in shower, clean and safe, neutral tones, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Accessible En-suite Bathroom
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 6 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(5)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[4/3] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/40c65d09b5-da31ff8f56e53d2e3aca.png"
              alt="Quiet reading corner in an adult family home, comfortable chair, small bookshelf, soft lighting, relaxing space, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Quiet Reading Corner
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 7 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(6)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[4/3] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/290d55fa37-f4b6534ec32cd94538a5.png"
              alt="Activity room in adult family home, puzzles on table, crafting supplies, bright and engaging, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Engaging Activity Space
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 8 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(7)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[3/4] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/80e685076f-1623e92d43c3aa8e1591.png"
              alt="Warmly lit hallway in adult family home, handrails on walls, clean carpet, safe environment, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Safe, Accessible Corridors
            </p>
          </div>
        </div>

        {/* <!-- Gallery Item 9 --> */}
        <div
          className="gallery-item group cursor-pointer rounded-[6px] border border-brand-sage/30 bg-white p-2 shadow-sm"
          onclick="openLightbox(8)"
        >
          <div className="overflow-hidden rounded-[4px] aspect-[4/3] relative">
            <img
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/00c3c3db95-7934f0283ebcf8b47015.png"
              alt="Front exterior of a beautiful, welcoming adult family home, landscaped yard, inviting porch, peaceful neighborhood, high quality photography"
            />
            <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
              <i className="fa-solid fa-expand text-white opacity-0 group-hover:opacity-100 text-2xl transition-opacity duration-300 drop-shadow-md"></i>
            </div>
          </div>
          <div className="pt-4 pb-2 px-2">
            <p className="font-sans text-sm text-brand-muted font-light">
              Welcoming Exterior
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotogridSection;
