import image1 from "../../assets/mainimagepage.png";

const MapSection = () => {
  return (
    // <!-- Right Column: Contact Details & Map Card -->
    <div className="w-full lg:w-1/2">
      <div className="sticky top-32 space-y-8">
        {/* <!-- Contact Info Card (Reference Style) --> */}
        <div className="bg-white rounded-[12px] shadow-card border border-brand-sage/20 overflow-hidden">
          {/* <!-- Image Header for Card --> */}
          <div className="h-48 w-full relative overflow-hidden bg-brand-cream">
            <img
              className="w-full h-full object-cover"
              src={image1}
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
                    22003 50 Ave Ct E,
                    <br />
                    Spanaway, WA 983875
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
                    318-344-6503 | 206-460-9059
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
                    shirogee98@gmail.com
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
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=22003%2050%20Ave%20Ct%20E,%20Spanaway,%20WA%2098387&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
