const HomeOverview = () => {
  return (
    <section
      id="home-overview"
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-24"
    >
      <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="font-serif text-4xl font-medium text-brand-text leading-tight">
            Designed for Comfort and Safety
          </h2>
          <p className="font-sans text-lg text-brand-muted font-light leading-relaxed">
            Our facility is specifically architected to remove barriers and
            enhance the daily lives of seniors. We blend the warmth of a
            residential home with the critical safety features of a premium care
            facility.
          </p>

          <ul className="space-y-6 pt-4">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-1">
                <i className="fa-solid fa-check text-sm"></i>
              </div>
              <div>
                <h4 className="font-serif font-medium text-brand-text text-lg">
                  Single-Level Living
                </h4>
                <p className="text-sm text-brand-muted font-light mt-1">
                  No stairs or sudden drops. Wide, clear hallways designed for
                  walkers and wheelchairs.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-1">
                <i className="fa-solid fa-check text-sm"></i>
              </div>
              <div>
                <h4 className="font-serif font-medium text-brand-text text-lg">
                  Secure Perimeters
                </h4>
                <p className="text-sm text-brand-muted font-light mt-1">
                  State-of-the-art security systems and monitored exits to
                  ensure residents are always safe, especially those with memory
                  care needs.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center text-brand-sage shrink-0 mt-1">
                <i className="fa-solid fa-check text-sm"></i>
              </div>
              <div>
                <h4 className="font-serif font-medium text-brand-text text-lg">
                  Tranquil Outdoor Spaces
                </h4>
                <p className="text-sm text-brand-muted font-light mt-1">
                  Enclosed, beautifully landscaped gardens where residents can
                  safely enjoy fresh air and sunshine.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/64615c9f4c-136a394962f0ec4d3525.png"
              alt="Bright hallway"
              className="w-full h-[300px] object-cover rounded-[16px] shadow-sm"
            />
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/64615c9f4c-136a394962f0ec4d3525.png"
              alt="Cozy living room"
              className="w-full h-[300px] object-cover rounded-[16px] shadow-sm translate-y-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOverview;
