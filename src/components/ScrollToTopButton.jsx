import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        hidden lg:flex
        cursor-pointer
        fixed bottom-6 right-6 z-50
        w-12 h-12
        rounded-full
        bg-black
        text-white
        shadow-lg
       items-center justify-center
        hover:scale-110
        hover:shadow-xl
        transition-all duration-300
        active:scale-95
      "
    >
      <i className="fa-solid fa-arrow-up text-lg"></i>
    </button>
  );
};

export default ScrollToTopButton;
