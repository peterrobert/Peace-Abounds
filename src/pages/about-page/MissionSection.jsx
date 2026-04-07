const MissionSection = () => {
  return (
    <section
      id="mission-values"
      className="relative z-10 w-full bg-white py-24 border-y border-brand-sage/10"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-medium text-brand-text mb-6">
            Our Core Philosophy
          </h2>
          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed">
            We don't just provide medical assistance; we nurture the spirit. Our
            approach is built on four fundamental pillars that guide every
            interaction and care plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Value Card 1 --> */}
          <div className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-hand-holding-heart text-2xl"></i>
            </div>
            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Compassion
            </h3>
            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Treating every resident as if they were our own family, with
              endless patience, gentle hands, and a listening ear.
            </p>
          </div>

          {/* <!-- Value Card 2 --> */}
          <div className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-scale-balanced text-2xl"></i>
            </div>
            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Dignity
            </h3>
            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Respecting the autonomy, history, and personal preferences of each
              individual, empowering them every day.
            </p>
          </div>

          {/* <!-- Value Card 3 --> */}
          <div className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-shield-halved text-2xl"></i>
            </div>
            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Transparency
            </h3>
            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Maintaining open, honest communication with families, ensuring you
              are always informed and involved in care decisions.
            </p>
          </div>
          {/*   <!-- Value Card 4 --> */}
          <div className="bg-brand-cream/30 p-8 rounded-[16px] border border-brand-sage/20 hover:shadow-card transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-leaf text-2xl"></i>
            </div>
            <h3 className="font-serif text-xl font-medium text-brand-text mb-3">
              Peacefulness
            </h3>
            <p className="text-sm text-brand-muted font-light leading-relaxed">
              Cultivating a serene, quiet, and harmonious environment where
              anxiety fades and genuine relaxation begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
