const WhatincludedSection = () => {
  return (
    <section
      id="included-amenities"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-24"
    >
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/3">
          <h2 className="font-serif text-4xl font-medium text-brand-text mb-6">
            All-Inclusive Living
          </h2>
          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed mb-8">
            We believe in transparent, straightforward care. Our monthly rate
            covers all essential services, amenities, and support, eliminating
            the stress of hidden fees.
          </p>
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/64615c9f4c-136a394962f0ec4d3525.png"
            alt="Peaceful room setting"
            className="w-full h-64 object-cover rounded-[16px] shadow-sm border border-brand-sage/20"
          />
        </div>

        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-[24px] border border-brand-sage/20 shadow-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* <!-- Amenity Group --> */}
              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-house-chimney text-brand-sage"></i>{" "}
                  Room & Board
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Private or semi-private furnished rooms
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    All utilities (electricity, water, heating/AC)
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Cable TV and high-speed Wi-Fi
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Maintenance of building and grounds
                  </li>
                </ul>
              </div>

              {/* <!-- Amenity Group --> */}
              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-user-nurse text-brand-sage"></i>{" "}
                  Health & Safety
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    24/7 awake staff supervision
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Emergency call system in rooms/bathrooms
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Routine health and wellness assessments
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Coordination with home health/hospice
                  </li>
                </ul>
              </div>

              {/* <!-- Amenity Group --> */}
              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-mug-hot text-brand-sage"></i> Daily
                  Life
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    3 home-cooked meals + unlimited snacks
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Daily housekeeping and trash removal
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Personal laundry and linen service
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Access to all common areas and gardens
                  </li>
                </ul>
              </div>

              {/* <!-- Amenity Group --> */}
              <div>
                <h4 className="font-serif text-xl font-medium text-brand-text mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-puzzle-piece text-brand-sage"></i>{" "}
                  Enrichment
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Scheduled group activities and games
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Holiday celebrations and birthday parties
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Visiting entertainers and therapy pets
                  </li>
                  <li className="flex items-center gap-3 text-brand-muted font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>{" "}
                    Spiritual support and religious services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatincludedSection;
