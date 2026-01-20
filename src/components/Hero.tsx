import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Shield, Clock, Award, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-medical-equipment.jpg";
import microscopeImg from "@/assets/microscope.jpg";
import hospitalBedImg from "@/assets/hospital-bed.jpg";
import dentalXrayImg from "@/assets/dental-xray.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Modern Laboratory Equipment",
    subtitle: "State-of-the-art diagnostic solutions",
  },
  {
    image: microscopeImg,
    title: "Precision Microscopy",
    subtitle: "Advanced optical instruments for accurate analysis",
  },
  {
    image: hospitalBedImg,
    title: "Hospital Furniture",
    subtitle: "Comfort and durability for patient care",
  },
  {
    image: dentalXrayImg,
    title: "Digital Imaging",
    subtitle: "Cutting-edge radiology equipment",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center mt-80 pt-0 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-accent font-medium">Trusted Medical Equipment Partner</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Welcome To
              <br />
              <span className="text-foreground">AIB </span>
              <span className="text-gradient-primary">MedTech</span>
              <br />
              <span className="text-foreground">Services</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              We supply durable medical equipment and offer expert repair and maintenance services designed to keep your machines functioning safely and efficiently.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-cta">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-outline">
                Our Services
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-lg animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Certified</p>
                  <p className="text-xs text-muted-foreground">Engineers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">24/7</p>
                  <p className="text-xs text-muted-foreground">Support</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Premium</p>
                  <p className="text-xs text-muted-foreground">Quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/20">
              {/* Slides */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{slide.title}</h3>
                      <p className="text-white/80 text-sm md:text-base">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
