const Navigation = () => {
  return (
    <header
      id="header"
      className="w-full bg-white/80 backdrop-blur-md border-b border-brand-sage/20 sticky top-0 z-50"
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <i className="fa-solid fa-dove text-brand-sage text-2xl group-hover:text-brand-gold transition-colors"></i>
          <span className="font-serif font-medium text-brand-text text-xl tracking-wide">
            Peace Abounds
          </span>
        </a>

        {/* <!-- Desktop Nav --> */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-brand-muted hover:text-brand-sage transition-colors"
          >
            Homepage
          </a>
          <a
            href="#"
            className="text-sm font-medium text-brand-sage border-b-2 border-brand-gold pb-1"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-medium text-brand-muted hover:text-brand-sage transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-sm font-medium text-brand-muted hover:text-brand-sage transition-colors"
          >
            Gallery
          </a>
          <a
            href="#"
            className="text-sm font-medium text-brand-muted hover:text-brand-sage transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="#"
          className="hidden md:flex px-6 py-2.5 bg-brand-sage text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          Schedule Visit
        </a>

        {/* <!-- Mobile Menu Button --> */}
        <button className="md:hidden text-brand-text text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
