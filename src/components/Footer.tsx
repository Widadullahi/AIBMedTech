import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <span className="text-xl font-bold text-accent-foreground font-serif">A</span>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-foreground rounded-sm flex items-center justify-center">
                    <span className="text-primary text-[8px] font-bold">+</span>
                  </span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-primary-foreground">AIB</span>
                <span className="text-lg font-bold text-accent ml-1">MedTech</span>
              </div>
            </a>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for durable medical equipment and expert maintenance services. We keep your machines functioning safely and efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:08069810198" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  08069810198, 09133476427
                </a>
              </li>
              <li>
                <a href="mailto:aibmedtechservices@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  aibmedtechservices@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-primary-foreground/80">
                  <MapPin className="w-4 h-4" />
                  Nigeria - Nationwide Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} AIB MedTech Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
