import { Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const height = header.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };
    
    // Initial update
    updateHeaderHeight();
    
    // Update on resize
    window.addEventListener('resize', updateHeaderHeight);
    
    // Update when DOM changes (if header content changes)
    const observer = new MutationObserver(updateHeaderHeight);
    const header = document.querySelector('header');
    if (header) {
      observer.observe(header, { 
        attributes: true, 
        childList: true, 
        subtree: true 
      });
    }
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl">
      <div className="container mx-auto px-2 sm:px-3">
        {/* Top bar with contact info - Navy Blue Theme - COMPACT */}
        <div className="hidden md:flex items-center justify-end gap-3 py-1 text-xs text-gray-600 border-b border-gray-200/20">
          <a 
            href="tel:08069810198" 
            className="flex items-center gap-1.5 hover:text-navy-600 transition-colors duration-200"
          >
            <Phone className="w-2.5 h-2.5" />
            08069810198
          </a>
          <a 
            href="mailto:aibmedtechservices@gmail.com" 
            className="flex items-center gap-1.5 hover:text-navy-600 transition-colors duration-200"
          >
            <Mail className="w-2.5 h-2.5" />
            aibmedtechservices@gmail.com
          </a>
        </div>

        {/* Main navigation - ULTRA COMPACT */}
        <nav className="flex flex-row items-center justify-between py-1.5 md:py-1.5 gap-0">
          {/* Logo Container - LARGER ON MOBILE */}
          <div className="flex items-center justify-start flex-shrink-0">
            <a href="#home" className="flex items-center gap-1 md:gap-1.5 group">
              {/* Logo - LARGER ON MOBILE, SAME ON DESKTOP */}
              <div className="relative">
                <img
                  className="h-28 md:h-32 lg:h-40 w-auto z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
                  src={logo}
                  alt="AIB MedTech Services"
                />
                {/* Dark shadow for boldness */}
                <div className="absolute inset-0 rounded-full blur-sm opacity-0 
                  group-hover:opacity-40 transition-opacity duration-500 
                  bg-gradient-to-r from-navy-900/30 to-blue-900/30">
                </div>
              </div>

              {/* Company name - SHOW ON MOBILE TOO */}
              <div className="flex flex-col leading-none">
                <span className="text-base md:text-2xl lg:text-3xl font-black 
                  bg-gradient-to-r from-navy-900 via-navy-800 to-navy-800 
                  bg-clip-text text-transparent tracking-tight
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                  AIB MedTech
                </span>
                <span className="text-[10px] md:text-xs text-navy-700 font-bold mt-0.5 hidden md:block">
                  Services
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links - ULTRA COMPACT */}
          <div className="flex items-center justify-end flex-1 overflow-x-auto scrollbar-hide min-w-0">
            <div className="flex items-center gap-0.5 md:gap-2 lg:gap-3">
              {/* Mobile Contact Icons - Micro size */}
              <div className="flex md:hidden items-center gap-1 mr-1">
                <a 
                  href="tel:08069810198" 
                  className="p-1 rounded-md bg-navy-50 hover:bg-navy-100 transition-colors"
                  aria-label="Call 08069810198"
                >
                  <Phone className="w-3.5 h-3.5 text-navy-700" />
                </a>
                <a 
                  href="mailto:aibmedtechservices@gmail.com" 
                  className="p-1 rounded-md bg-navy-50 hover:bg-navy-100 transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-3.5 h-3.5 text-navy-700" />
                </a>
              </div>

              {/* Navigation Links - Slightly larger on mobile */}
              <a 
                href="#home" 
                className="text-sm md:text-sm font-bold text-navy-900 hover:text-navy-700 transition-all duration-200 relative group px-2 py-1 md:px-1.5 md:py-1 rounded-md hover:bg-navy-50 whitespace-nowrap"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#services" 
                className="text-sm md:text-sm font-bold text-navy-800 hover:text-navy-700 transition-all duration-200 relative group px-2 py-1 md:px-1.5 md:py-1 rounded-md hover:bg-navy-50 whitespace-nowrap"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#about" 
                className="text-sm md:text-sm font-bold text-navy-800 hover:text-navy-700 transition-all duration-200 relative group px-2 py-1 md:px-1.5 md:py-1 rounded-md hover:bg-navy-50 whitespace-nowrap"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#contact" 
                className="text-sm md:text-sm font-bold text-navy-800 hover:text-navy-700 transition-all duration-200 relative group px-2 py-1 md:px-1.5 md:py-1 rounded-md hover:bg-navy-50 whitespace-nowrap"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              
              {/* Book Appointment - Slightly larger on mobile */}
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-navy-700 to-navy-900 text-white text-sm md:text-sm font-black py-1.5 px-3 md:py-1.5 md:px-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow hover:shadow-navy-500/20 active:scale-95 whitespace-nowrap border border-navy-800 hover:border-navy-700 ml-0.5"
              >
                Book
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;