import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-brand-sage border-b-2 border-brand-gold pb-1"
                  : "text-brand-muted hover:text-brand-sage"
              }`
            }
          >
            Homepage
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-brand-sage border-b-2 border-brand-gold pb-1"
                  : "text-brand-muted hover:text-brand-sage"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-brand-sage border-b-2 border-brand-gold pb-1"
                  : "text-brand-muted hover:text-brand-sage"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-brand-sage border-b-2 border-brand-gold pb-1"
                  : "text-brand-muted hover:text-brand-sage"
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-brand-sage border-b-2 border-brand-gold pb-1"
                  : "text-brand-muted hover:text-brand-sage"
              }`
            }
          >
            Contact
          </NavLink>
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
