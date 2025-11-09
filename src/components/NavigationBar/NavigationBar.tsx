import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticEffect from "../AnimationComponent/MagneticComponent";

const navItems = [
  { name: "Home", href: "home" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

const NavigationBar = () => {
  const [active, setActive] = useState("Home");

  // Scroll to section smoothly when a nav item is clicked
  const handleScroll = (id: string, name: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(name);
    }
  };

  // Update active tab on scroll (scroll spy behavior)
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = "Home";
      for (const item of navItems) {
        const section = document.getElementById(item.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = item.name;
            break;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="flex w-full px-4 py-3 justify-between backdrop-blur-sm bg-white/7 shadow-lg bg-background/100 rounded-xl">
      <h1 className="text-white flex items-center">
        <span className="font-thin pr-2 text-lg">Ⓒ</span>
        Pushpak Jangela
      </h1>

      <nav>
        <ul className="flex gap-4 text-white items-center">
          {navItems.map((item) => (
            <MagneticEffect key={item.name}>
              <li
                className="relative cursor-pointer"
                onClick={() => handleScroll(item.href, item.name)}
              >
                <a
                  className={`px-5 py-1 rounded-xl relative z-10 transition-all duration-300 ${
                    active === item.name ? "text-black" : "text-white"
                  }`}
                >
                  {item.name}
                </a>
                <AnimatePresence>
                  {active === item.name && (
                    <motion.div
                      layoutId="active-bg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute inset-0 bg-white opacity-90 rounded-xl z-0"
                    />
                  )}
                </AnimatePresence>
              </li>
            </MagneticEffect>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
