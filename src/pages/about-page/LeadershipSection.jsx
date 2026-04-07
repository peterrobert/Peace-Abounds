import creatorImage from "../../assets/creator.jpg";
const LeadershipSection = () => {
  return (
    <section
      id="leadership"
      className="relative z-10 w-full bg-white py-24 border-y border-brand-sage/10"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-medium text-brand-text mb-6">
            Meet the Heart of Our Home
          </h2>
          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed">
            Our leadership team brings decades of clinical expertise combined
            with a profound personal commitment to elder care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-cream/20 rounded-[24px] border border-brand-sage/20 p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          <img
            src={creatorImage}
            alt="Facility Director"
            className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md shrink-0"
          />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-serif text-2xl font-medium text-brand-text">
                Maureen Ngigi
              </h3>
              <span className="px-3 py-1 bg-brand-sage/10 text-brand-sage rounded-full text-xs font-medium">
                MN
              </span>
            </div>
            <p className="text-brand-gold font-medium text-sm mb-4 uppercase tracking-wider">
              Facility Director & Founder
            </p>
            <p className="text-brand-muted font-light leading-relaxed mb-6">
              “At Peace Abounds, our purpose is to serve and support individuals
              who need care and attention. We believe everyone deserves to feel
              valued, respected, and at home, and we strive to bring that into
              everything we do.”
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-brand-sage hover:text-brand-gold transition-colors"
              >
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a
                href="#"
                className="text-brand-sage hover:text-brand-gold transition-colors"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
