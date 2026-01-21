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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="container mx-auto px-2 sm:px-3">
        {/* Top bar - EVEN MORE COMPACT */}
        <div className="hidden md:flex items-center justify-end gap-2 py-0.5 text-[10px] text-gray-600 border-b border-gray-200/10">
          <a 
            href="tel:08069810198" 
            className="flex items-center gap-1 hover:text-navy-600 transition-colors duration-200"
          >
            <Phone className="w-2 h-2" />
            08069810198
          </a>
          <a 
            href="mailto:aibmedtechservices@gmail.com" 
            className="flex items-center gap-1 hover:text-navy-600 transition-colors duration-200"
          >
            <Mail className="w-2 h-2" />
            aibmedtechservices@gmail.com
          </a>
        </div>

        {/* Main navigation - MINIMAL HEIGHT */}
        <nav className="flex flex-row items-center justify-between py-0.5 md:py-0.5 gap-0">
          {/* Logo Container - FULL HEIGHT ON MOBILE */}
          <div className="flex items-center justify-start flex-shrink-0">
            <a href="#home" className="flex items-center gap-0.5 md:gap-1 group">
              {/* Logo - FULL HEIGHT ON MOBILE, 50% LARGER ON DESKTOP */}
              <div className="relative flex items-center h-full">
                {/* Mobile: Logo fills available header height */}
                <img
                  className="h-16 w-auto z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-md md:hidden"
                  src={logo}
                  alt="AIB MedTech Services"
                />
                {/* Desktop: Logo 50% larger */}
                <img
                  className="hidden md:block h-30 w-auto z-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
                  src={logo}
                  alt="AIB MedTech Services"
                />
                {/* Dark shadow for boldness */}
                <div className="absolute inset-0 rounded-full blur-xs opacity-0 
                  group-hover:opacity-30 transition-opacity duration-500 
                  bg-gradient-to-r from-navy-900/20 to-blue-900/20">
                </div>
              </div>

              {/* Company name - ADJUSTED FOR LARGER LOGO */}
              <div className="flex flex-col leading-none">
                <span className="text-xs md:text-lg lg:text-xl font-black 
                  bg-gradient-to-r from-navy-900 via-navy-800 to-navy-800 
                  bg-clip-text text-transparent tracking-tight
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                  AIB MedTech
                </span>
                <span className="text-[8px] md:text-[10px] text-navy-700 font-bold mt-0 hidden md:block">
                  Services
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links - ADJUSTED FOR LOGO HEIGHT */}
          <div className="flex items-center justify-end flex-1 overflow-x-auto scrollbar-hide min-w-0">
            <div className="flex items-center gap-0 md:gap-1 lg:gap-2">
              {/* Mobile Contact Icons - Positioned for taller logo */}
              <div className="flex md:hidden items-center gap-0.5 mr-0.5">
                <a 
                  href="tel:08069810198" 
                  className="p-0.5 rounded bg-navy-50 hover:bg-navy-100 transition-colors"
                  aria-label="Call 08069810198"
                >
                  <Phone className="w-3 h-3 text-navy-700" />
                </a>
                <a 
                  href="mailto:aibmedtechservices@gmail.com" 
                  className="p-0.5 rounded bg-navy-50 hover:bg-navy-100 transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-3 h-3 text-navy-700" />
                </a>
              </div>

              {/* Navigation Links - VERTICALLY CENTERED */}
              <div className="flex items-center">
                <a 
                  href="#home" 
                  className="text-xs md:text-xs font-bold text-navy-900 hover:text-navy-700 transition-all duration-200 relative group px-1.5 py-0.5 md:px-1 md:py-0.5 rounded hover:bg-navy-50 whitespace-nowrap"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
                <a 
                  href="#services" 
                  className="text-xs md:text-xs font-bold text-navy-800 hover:text-navy-700 transition-all duration-200 relative group px-1.5 py-0.5 md:px-1 md:py-0.5 rounded hover:bg-navy-50 whitespace-nowrap"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
                <a 
                  href="#about" 
                  className="text-xs md:text-xs font-bold text-navy-800 hover:text-navy-700 transition-all duration-200 relative group px-1.5 py-0.5 md:px-1 md:py-0.5 rounded hover:bg-navy-50 whitespace-nowrap"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
                <a 
                  href="#contact" 
                  className="text-xs md:text-xs font-bold text-navy-800 hover:text-navy-700 transition-all duration-200 relative group px-1.5 py-0.5 md:px-1 md:py-0.5 rounded hover:bg-navy-50 whitespace-nowrap"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-navy-700 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </a>
                
                {/* Book Appointment - VERTICALLY CENTERED */}
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-navy-700 to-navy-900 text-white text-xs md:text-xs font-black py-1 px-2 md:py-1 md:px-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-sm hover:shadow-navy-500/20 active:scale-95 whitespace-nowrap border border-navy-800 hover:border-navy-700 ml-0.5"
                >
                  Book
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;