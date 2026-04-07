const CoreServices = () => {
  return (
    <section
      id="core-services"
      className="relative z-10 w-full bg-white py-24 border-y border-brand-sage/10"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Service Card 1: ADLs --> */}
          <div className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-hands-holding-child text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Assistance with ADLs
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Compassionate support with Activities of Daily Living, including
              bathing, dressing, grooming, and mobility, always delivered with
              the utmost respect for personal boundaries.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Personal hygiene care
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Dressing & grooming assistance
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Mobility & transfer support
              </li>
            </ul>
          </div>

          {/* <!-- Service Card 2: Medication --> */}
          <div className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-pills text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Medication Management
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Rigorous, error-free administration and tracking of all
              prescriptions and supplements, coordinated directly with
              healthcare providers and pharmacies.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Scheduled administration
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Pharmacy coordination
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Health vitals monitoring
              </li>
            </ul>
          </div>

          {/* <!-- Service Card 3: Meals --> */}
          <div className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-utensils text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Nutritious Meals
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Three delicious, home-cooked meals daily plus snacks, tailored to
              specific dietary requirements, allergies, and personal
              preferences.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Dietitian-approved menus
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Diabetic & low-sodium options
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Hydration monitoring
              </li>
            </ul>
          </div>

          {/* <!-- Service Card 4: Dementia Care --> */}
          <div className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-brain text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Memory & Dementia Care
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Specialized, gentle support for residents experiencing cognitive
              decline, focusing on maintaining routine, reducing anxiety, and
              ensuring physical safety.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Secure environment
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Cognitive stimulation therapies
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Redirection techniques
              </li>
            </ul>
          </div>

          {/* <!-- Service Card 5: Activities --> */}
          <div className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-music text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Enriching Activities
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              A robust calendar of physical, mental, and social activities
              designed to keep the mind sharp and the spirit joyful.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Light
                exercise & stretching
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Arts,
                crafts & music therapy
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i>{" "}
                Social gatherings & games
              </li>
            </ul>
          </div>

          {/* <!-- Service Card 6: Housekeeping --> */}
          <div className="service-card bg-brand-cream/20 rounded-[16px] border border-brand-sage/20 p-8 hover:shadow-hover flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-white border border-brand-sage/10 flex items-center justify-center text-brand-sage mb-6 shadow-sm">
              <i className="fa-solid fa-broom text-2xl"></i>
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-text mb-4">
              Housekeeping & Laundry
            </h3>
            <p className="text-brand-muted font-light leading-relaxed mb-6 flex-grow">
              Complete maintenance of personal spaces and daily laundry
              services, ensuring a clean, fresh, and comfortable environment at
              all times.
            </p>
            <ul className="space-y-3 mt-auto pt-6 border-t border-brand-sage/10">
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Daily
                room tidying
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Fresh
                linens & personal laundry
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-text">
                <i className="fa-solid fa-check text-brand-sage mt-1"></i> Deep
                cleaning schedules
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
