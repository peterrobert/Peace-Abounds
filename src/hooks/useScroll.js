import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, threshold) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, threshold]);

  return activeId;
}
