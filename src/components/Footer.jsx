const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-white border-t border-brand-sage/20 py-16 relative z-10"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* <!-- Brand Col --> */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-dove text-brand-sage text-3xl"></i>
              <span className="font-serif font-medium text-brand-text text-2xl">
                Peace Abounds
              </span>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              Providing a spacious, clean, and calming sanctuary for your loved
              ones. We focus on compassionate care with dignity and respect in a
              true family home setting.
            </p>
          </div>

          {/* <!-- Quick Links --> */}
          <div className="space-y-6">
            <h4 className="font-serif font-medium text-brand-text text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-brand-muted hover:text-brand-sage transition-colors"
                >
                  Homepage
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-brand-muted hover:text-brand-sage transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-brand-muted hover:text-brand-sage transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-brand-sage font-medium">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-brand-muted hover:text-brand-sage transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact Info --> */}
          <div className="space-y-6">
            <h4 className="font-serif font-medium text-brand-text text-lg">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-muted">
                <i className="fa-solid fa-location-dot mt-1 text-brand-sage"></i>
                <span>
                  22003 50 Ave Ct E,
                  <br />
                  Spanaway, WA 983875
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-muted">
                <i className="fa-solid fa-phone text-brand-sage"></i>
                <span>318-344-6503 | 206-460-9059</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-muted">
                <i className="fa-solid fa-envelope text-brand-sage"></i>
                <span>care@peaceabounds.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-sage/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-brand-muted text-center md:text-left">
            &copy; 2026 Peace Abounds Adult Family Home. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage hover:bg-brand-sage hover:text-white transition-colors"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-sage hover:bg-brand-sage hover:text-white transition-colors"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
