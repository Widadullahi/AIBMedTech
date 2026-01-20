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
      <div className="container mx-auto px-3 sm:px-4">
        {/* Top bar with contact info - Navy Blue Theme */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-gray-600 border-b border-gray-200/50">
          <a 
            href="tel:08069810198" 
            className="flex items-center gap-2 hover:text-navy-600 transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            08069810198
          </a>
          <a 
            href="mailto:aibmedtechservices@gmail.com" 
            className="flex items-center gap-2 hover:text-navy-600 transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5" />
            aibmedtechservices@gmail.com
          </a>
        </div>

        {/* Main navigation - COMPACT MOBILE LAYOUT */}
        <nav className="flex flex-row items-center justify-between py-2 md:py-3 gap-2 md:gap-0">
          {/* Logo Container - Smaller on mobile */}
          <div className="flex items-center justify-start flex-shrink-0">
            <a href="#home" className="flex items-center gap-1 md:gap-2 group">
              {/* Logo - Smaller on mobile */}
              <div className="relative">
                <img
                  className="h-10 md:h-16 lg:h-18 w-auto z-10 transition-transform duration-300 group-hover:scale-105"
                  src={logo}
                  alt="AIB MedTech Services"
                />
                <div className="absolute inset-0 rounded-full blur-md opacity-0 
                  group-hover:opacity-30 transition-opacity duration-500 
                  bg-gradient-to-r from-navy-400/10 to-blue-400/10">
                </div>
              </div>

              {/* Company name - Smaller on mobile */}
              <div className="flex flex-col leading-none hidden sm:block">
                <span className="text-sm md:text-xl lg:text-2xl font-bold 
                  bg-gradient-to-r from-navy-800 via-navy-700 to-navy-600 
                  bg-clip-text text-transparent">
                  AIB MedTech
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links - Horizontal scroll on mobile */}
          <div className="flex items-center justify-end flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 md:gap-6 lg:gap-8">
              {/* Mobile Contact Icons - Only icons on mobile */}
              <div className="flex md:hidden items-center gap-2 mr-2">
                <a 
                  href="tel:08069810198" 
                  className="p-1.5 rounded-lg bg-navy-50 hover:bg-navy-100 transition-colors"
                  aria-label="Call 08069810198"
                >
                  <Phone className="w-4 h-4 text-navy-700" />
                </a>
                <a 
                  href="mailto:aibmedtechservices@gmail.com" 
                  className="p-1.5 rounded-lg bg-navy-50 hover:bg-navy-100 transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="w-4 h-4 text-navy-700" />
                </a>
              </div>

              {/* Navigation Links - Smaller text and padding on mobile */}
              <a 
                href="#home" 
                className="text-xs md:text-base font-semibold text-navy-800 hover:text-navy-600 transition-all duration-200 relative group px-2 py-1.5 md:px-3 md:py-2 rounded-lg hover:bg-navy-50 whitespace-nowrap"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#services" 
                className="text-xs md:text-base font-semibold text-navy-700 hover:text-navy-600 transition-all duration-200 relative group px-2 py-1.5 md:px-3 md:py-2 rounded-lg hover:bg-navy-50 whitespace-nowrap"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#about" 
                className="text-xs md:text-base font-semibold text-navy-700 hover:text-navy-600 transition-all duration-200 relative group px-2 py-1.5 md:px-3 md:py-2 rounded-lg hover:bg-navy-50 whitespace-nowrap"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#contact" 
                className="text-xs md:text-base font-semibold text-navy-700 hover:text-navy-600 transition-all duration-200 relative group px-2 py-1.5 md:px-3 md:py-2 rounded-lg hover:bg-navy-50 whitespace-nowrap"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              
              {/* Book Appointment - Smaller on mobile */}
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-navy-700 to-navy-900 text-white text-xs md:text-base font-bold py-1.5 px-3 md:py-3 md:px-8 rounded-lg md:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:shadow-2xl hover:shadow-navy-500/30 active:scale-95 whitespace-nowrap border border-navy-800 hover:border-navy-700 ml-1"
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