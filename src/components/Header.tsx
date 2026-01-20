import { Phone, Mail } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl">
      <div className="container mx-auto px-4">
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

        {/* Main navigation */}
        <nav className="flex flex-col md:flex-row md:items-center justify-between py-4 md:py-3 gap-4 md:gap-0">
          {/* Logo Container - Much larger and clean design */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <a href="#home" className="flex items-center gap-4 group">
              {/* Main logo - 1.5x larger with clean design */}
              <div className="relative">
                <img
                  className="h-28 w-auto md:h-36 lg:h-40 relative z-10 transform transition-all duration-500 group-hover:scale-105"
                  src={logo}
                  alt="AIB MedTech Services"
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-500/0 via-navy-400/0 to-blue-500/0 rounded-full blur-xl opacity-0 group-hover:opacity-30 group-hover:via-navy-400/20 transition-opacity duration-700"></div>
              </div>
              
              {/* Company name integrated with logo - Navy Blue Theme */}
              <div className="block">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-navy-800 via-navy-700 to-navy-600 bg-clip-text text-transparent leading-tight">
                  AIB MedTech
                </span>
                <span className="block text-sm md:text-base font-semibold text-navy-600 uppercase tracking-wider mt-1">
                  Medical Excellence
                </span>
                <span className="block text-xs text-gray-500 font-medium mt-1">
                  Trusted Healthcare Solutions
                </span>
              </div>
            </a>
          </div>

          {/* Navigation Links - Navy Blue Theme */}
          <div className="flex items-center justify-center md:justify-end flex-wrap gap-4 md:gap-8 w-full md:w-auto">
            {/* Mobile Contact Info - Visible only on mobile */}
            <div className="flex md:hidden items-center justify-center gap-4 w-full mb-2 bg-navy-50 p-2 rounded-lg">
              <a 
                href="tel:08069810198" 
                className="flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                08069810198
              </a>
              <span className="text-navy-300">|</span>
              <a 
                href="mailto:aibmedtechservices@gmail.com" 
                className="flex items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center justify-center flex-wrap gap-3 md:gap-8">
              <a 
                href="#home" 
                className="text-sm md:text-base font-semibold text-navy-800 hover:text-navy-600 transition-all duration-200 hover:scale-105 relative group px-3 py-2 rounded-lg hover:bg-navy-50"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#services" 
                className="text-sm md:text-base font-semibold text-navy-700 hover:text-navy-600 transition-all duration-200 hover:scale-105 relative group px-3 py-2 rounded-lg hover:bg-navy-50"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#about" 
                className="text-sm md:text-base font-semibold text-navy-700 hover:text-navy-600 transition-all duration-200 hover:scale-105 relative group px-3 py-2 rounded-lg hover:bg-navy-50"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#contact" 
                className="text-sm md:text-base font-semibold text-navy-700 hover:text-navy-600 transition-all duration-200 hover:scale-105 relative group px-3 py-2 rounded-lg hover:bg-navy-50"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-navy-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-navy-700 to-navy-900 text-white text-sm md:text-base font-bold py-3 px-6 md:py-3 md:px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-navy-500/30 active:scale-95 whitespace-nowrap border border-navy-800 hover:border-navy-700"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
