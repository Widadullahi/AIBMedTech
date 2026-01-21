import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid md:grid-cols-3 gap-6 md:gap-4">
          {/* Brand Column - EVEN LARGER LOGO */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              {/* Logo - INCREASED BY ANOTHER 50% */}
              <img 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-3"
                src={logo}
                alt="AIB MedTech Services Logo"
              />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary-foreground mb-1">
                AIB MedTech
              </h3>
              <p className="text-sm md:text-base text-primary-foreground/70 text-center md:text-left">
                Medical Equipment Services
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-1">
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-0.5 font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-0.5 font-medium">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-0.5 font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors inline-block py-0.5 font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-1">
            <h4 className="text-base md:text-lg font-bold text-primary-foreground mb-3">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:08069810198" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors block font-medium">
                    08069810198
                  </a>
                  <a href="tel:09133476427" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors block font-medium">
                    09133476427
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:aibmedtechservices@gmail.com" className="text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors block break-all font-medium">
                  aibmedtechservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm md:text-base text-primary-foreground/80 block font-medium">
                  Nigeria - Nationwide
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - More Compact */}
        <div className="mt-6 pt-4 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-xs md:text-sm text-primary-foreground/70 text-center sm:text-left">
              © {currentYear} AIB MedTech Services. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <span className="text-primary-foreground/30">•</span>
              <a href="#" className="text-xs md:text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;