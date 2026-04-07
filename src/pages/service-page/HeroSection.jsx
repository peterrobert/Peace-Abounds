const HeroSection = () => {
  return (
    <section
      id="services-hero"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 pt-24 pb-20 text-center"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-brand-sage/40"></div>
          <i className="fa-solid fa-dove text-brand-gold/80 text-xl"></i>
          <div className="h-[1px] w-12 bg-brand-sage/40"></div>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-medium text-brand-text leading-tight text-balance">
          Comprehensive Care, Tailored for You
        </h1>
        <p className="font-sans text-lg text-brand-muted font-light leading-relaxed">
          We provide a holistic approach to daily living, ensuring every
          resident receives the precise level of support they need while
          maintaining their dignity and independence.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
