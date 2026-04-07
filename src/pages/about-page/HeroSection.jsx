const HeroSection = () => {
  return (
    <section
      id="about-hero"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-24 pb-20"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-sage/40"></div>
            <i className="fa-solid fa-dove text-brand-gold/80 text-xl"></i>
            <span className="text-brand-sage font-medium tracking-wider uppercase text-sm">
              Our Story
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-brand-text leading-tight text-balance">
            A Sanctuary of Compassion and Dignity
          </h1>
          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed max-w-xl">
            At Peace Abounds, we believe that every individual deserves to age
            with grace in an environment that feels like home. Our mission is
            rooted in unwavering respect, holistic care, and the deep peace that
            comes from knowing your loved ones are safe.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-brand-sage/10 rounded-[24px] translate-x-4 translate-y-4"></div>
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/64615c9f4c-136a394962f0ec4d3525.png"
            alt="Caregiver holding hands with resident"
            className="w-full h-[500px] object-cover rounded-[24px] relative z-10 shadow-lg border border-brand-sage/20"
          />
          {/*  <!-- Floating Badge --> */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[16px] shadow-xl border border-brand-sage/10 z-20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage">
              <i className="fa-solid fa-heart text-xl"></i>
            </div>
            <div>
              <div className="font-serif text-2xl font-medium text-brand-text">
                1+ Years
              </div>
              <div className="text-sm text-brand-muted font-light">
                of Compassionate Care
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
