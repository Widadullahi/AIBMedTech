import { Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${header.offsetHeight}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    const observer = new MutationObserver(updateHeaderHeight);
    const header = document.querySelector("header");
    if (header) observer.observe(header, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-2 sm:px-3">
        {/* Top bar - hidden on mobile */}
        <div className="hidden md:flex justify-end gap-2 py-0.5 text-[10px] text-gray-600">
          <a href="tel:08069810198" className="flex items-center gap-1">
            <Phone className="w-2 h-2" /> 08069810198
          </a>
          <a
            href="mailto:aibmedtechservices@gmail.com"
            className="flex items-center gap-1"
          >
            <Mail className="w-2 h-2" /> aibmedtechservices@gmail.com
          </a>
        </div>

        {/* Main nav */}
        <nav className="flex items-center justify-between py-1">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <div className="relative overflow-visible">
              <img
                src={logo}
                alt="AIB MedTech Services"
                className="ml-0
                  h-24 sm:h-26 md:h-30
                  w-auto
                  scale-150 sm:scale-140 md:scale-120
                  origin-left
                  drop-shadow-xl
                  filter
                  brightness-95
                  contrast-125
                "
                style={{
                  filter:
                    "drop-shadow(2px 2px 2px rgba(0,0,0,0.25)) brightness(0.95) contrast(1.25)",
                }}
              />
            </div>

            {/* NAME - hidden on mobile */}
            <div className="hidden md:flex flex-col leading-tight min-w-[90px] ml-12">
              <span className="text-sm md:text-lg lg:text-xl font-black text-navy-900">
                AIB MedTech
              </span>
              <span className="text-[10px] font-bold text-navy-700">
                Services
              </span>
            </div>
          </a>

          {/* LINKS */}
          <div className="flex items-center gap-0.01 lg:gap-2">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className=" gap-0.01 text-xs font-bold px-0.5 py-1.5 rounded hover:bg-navy-50"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-navy-800 text-white text-xs font-black px-3 py-1 rounded hover:scale-105 transition"
            >
              Book
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
