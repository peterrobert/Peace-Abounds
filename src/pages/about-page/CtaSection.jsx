import { NavLink } from "react-router-dom";

const CtaSection = () => {
  return (
    <section
      id="reassurance-cta"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-24"
    >
      <div className="bg-brand-sage rounded-[24px] p-12 md:p-20 text-center relative overflow-hidden shadow-lg">
        {/* <!-- Decorative background elements --> */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <i className="fa-solid fa-dove text-white/80 text-4xl mb-6"></i>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
            Find Peace of Mind Today
          </h2>
          <p className="font-sans text-lg text-white/90 font-light leading-relaxed mb-10">
            Choosing the right care is a difficult decision. We are here to
            answer all your questions, provide transparent information, and help
            you determine if Peace Abounds is the right sanctuary for your
            family.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink
              to="/schedule"
              className="px-8 py-4 bg-white text-brand-sage rounded-full font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              Schedule a Private Tour
            </NavLink>
            <NavLink
              to="/contact"
              className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              Contact Our Team
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
