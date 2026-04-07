const SecondaryNavigationSection = () => {
  return (
    <section
      id="entry-points"
      className="w-full max-w-7xl mx-auto px-6 pb-24 relative z-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Card 1 --> */}
        <a
          href="#about"
          className="group bg-white rounded-[1.5rem] p-8 shadow-soft border border-brand-sage/10 hover:border-brand-sage/40 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1"
        >
          <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage group-hover:bg-brand-sage group-hover:text-white transition-colors">
            <i className="fa-solid fa-book-open text-2xl"></i>
          </div>
          <h3 className="font-serif text-xl font-medium text-brand-text">
            Our Story
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed">
            Learn about our mission to provide dignified, compassionate care in
            a home setting.
          </p>
        </a>

        {/* <!-- Card 2 --> */}
        <a
          href="#services"
          className="group bg-white rounded-[1.5rem] p-8 shadow-soft border border-brand-sage/10 hover:border-brand-sage/40 transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1"
        >
          <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage group-hover:bg-brand-sage group-hover:text-white transition-colors">
            <i className="fa-solid fa-hand-holding-heart text-2xl"></i>
          </div>
          <h3 className="font-serif text-xl font-medium text-brand-text">
            Our Services
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed">
            Discover the personalized care plans and daily support we offer our
            residents.
          </p>
        </a>

        {/* <!-- Card 3 --> */}
        <a
          href="#schedule"
          className="group bg-brand-sage rounded-[1.5rem] p-8 shadow-[0_10px_30px_-10px_rgba(157,181,168,0.5)] border border-transparent transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white">
            <i className="fa-regular fa-calendar-check text-2xl"></i>
          </div>
          <h3 className="font-serif text-xl font-medium text-white">
            Schedule a Visit
          </h3>
          <p className="text-sm text-white/90 leading-relaxed">
            Come see our peaceful home in person and meet our dedicated care
            team.
          </p>
        </a>
      </div>
    </section>
  );
};

export default SecondaryNavigationSection;
