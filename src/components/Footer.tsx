import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6">
        {/* Main Content - Single Row on Desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <img 
              className="w-12 h-12"
              src={logo}
              alt="AIB MedTech Logo"
            />
            <div>
              <h3 className="text-lg font-bold">AIB MedTech</h3>
              <p className="text-xs text-primary-foreground/70">Medical Equipment Solutions</p>
            </div>
          </div>

          {/* Contact Info - Horizontal on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <Phone className="w-4 h-4 mb-1" />
              <a href="tel:08069810198" className="text-sm hover:text-accent">08069810198</a>
              <a href="tel:09133476427" className="text-xs text-primary-foreground/70 hover:text-accent">09133476427</a>
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              <Mail className="w-4 h-4 mb-1" />
              <a href="mailto:aibmedtechservices@gmail.com" className="text-sm hover:text-accent break-all">
                Email Us
              </a>
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              <MapPin className="w-4 h-4 mb-1" />
              <span className="text-sm">Nigeria</span>
              <span className="text-xs text-primary-foreground/70">Nationwide</span>
            </div>
          </div>
        </div>

        {/* Links and Copyright - Single Line */}
        <div className="border-t border-primary-foreground/20 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#home" className="text-xs hover:text-accent">Home</a>
              <a href="#services" className="text-xs hover:text-accent">Services</a>
              <a href="#about" className="text-xs hover:text-accent">About</a>
              <a href="#contact" className="text-xs hover:text-accent">Contact</a>
            </div>
            
            <p className="text-xs text-primary-foreground/70">
              © {currentYear} AIB MedTech Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;