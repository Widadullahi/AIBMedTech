import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex items-center justify-end gap-6 py-2 text-sm text-muted-foreground border-b border-border/50">
          <a 
            href="tel:08069810198" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            08069810198
          </a>
          <a 
            href="mailto:aibmedtechservices@gmail.com" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            aibmedtechservices@gmail.com
          </a>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-teal-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent-foreground font-serif">A</span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">+</span>
                </span>
              </div>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground tracking-tight">AIB</span>
              <span className="text-xl font-bold text-gradient-primary ml-1">MedTech</span>
              <p className="text-xs text-muted-foreground -mt-1">Services</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-accent transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Contact</a>
            <a href="#contact" className="btn-cta text-sm py-2.5 px-6">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-sm font-medium text-foreground py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a href="#contact" className="btn-cta text-sm py-2.5 px-6 w-fit" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
