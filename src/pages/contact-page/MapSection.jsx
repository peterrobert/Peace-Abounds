const MapSection = () => {
  return (
    // <!-- Right Column: Contact Details & Map Card -->
    <div className="w-full lg:w-1/3">
      <div className="sticky top-32 space-y-8">
        {/* <!-- Contact Info Card (Reference Style) --> */}
        <div className="bg-white rounded-[12px] shadow-card border border-brand-sage/20 overflow-hidden">
          {/* <!-- Image Header for Card --> */}
          <div className="h-48 w-full relative overflow-hidden bg-brand-cream">
            <img
              className="w-full h-full object-cover"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e32ed1c5b-11a769e82b81493915a9.png"
              alt="Warm, inviting front porch of a peaceful adult family home, soft sunlight, potted plants, serene architectural photography, sage green door"
            />
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div>
              <p className="text-sm text-brand-muted mb-1 font-medium">
                Our Home
              </p>
              <h3 className="font-serif text-2xl text-brand-text font-medium">
                Peace Abounds
              </h3>
              <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                Providing compassionate, dignified care in a serene and
                comfortable environment.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-brand-sage/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-location-dot text-brand-sage text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-text">Address</p>
                  <p className="text-sm text-brand-muted mt-0.5">
                    123 Serenity Lane
                    <br />
                    Seattle, WA 98101
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-phone text-brand-sage text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-text">Phone</p>
                  <p className="text-sm text-brand-sage font-medium mt-0.5">
                    (555) 987-6543
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-cream flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-envelope text-brand-sage text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-brand-text">Email</p>
                  <p className="text-sm text-brand-sage font-medium mt-0.5">
                    care@peaceabounds.com
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-sage/10 flex justify-between items-center text-sm">
              <span className="text-brand-muted">Visiting Hours</span>
              <span className="font-medium text-brand-text">
                9am - 7pm Daily
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Map Card --> */}
        <div className="bg-white rounded-[12px] shadow-card border border-brand-sage/20 p-2 overflow-hidden">
          <div className="w-full h-64 bg-brand-cream rounded-[8px] overflow-hidden relative flex items-center justify-center border border-brand-sage/10">
            {/* <!-- Placeholder for actual embedded map --> */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://storage.googleapis.com/uxpilot-auth.appspot.com/default-placeholder.png')] bg-cover bg-center mix-blend-multiply"></div>
            <div className="relative z-10 flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                <i className="fa-solid fa-map-pin text-brand-sage text-xl"></i>
              </div>
              <span className="text-sm font-medium text-brand-text bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
                Interactive Map
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
