import { Settings, Stethoscope, Building2, ScanLine, Star } from "lucide-react";
import microscopeImg from "@/assets/microscope.jpg";
import surgicalLightImg from "@/assets/surgical-light.jpg";
import hospitalBedImg from "@/assets/hospital-bed.jpg";
import dentalXrayImg from "@/assets/dental-xray.jpg";

const services = [
  {
    icon: Settings,
    title: "Biomedical Engineering Services",
    description: "Expert repair, calibration, and maintenance of all biomedical equipment ensuring optimal performance.",
    image: microscopeImg,
  },
  {
    icon: Stethoscope,
    title: "General Medical Equipment",
    description: "Supply of high-quality diagnostic, therapeutic, and monitoring equipment for healthcare facilities.",
    image: surgicalLightImg,
  },
  {
    icon: Building2,
    title: "Hospital Furniture",
    description: "Durable and ergonomic hospital beds, examination tables, and medical furniture solutions.",
    image: hospitalBedImg,
  },
  {
    icon: ScanLine,
    title: "Dental Radiology/Digital Imaging",
    description: "Advanced dental X-ray systems and digital imaging equipment for precise diagnostics.",
    image: dentalXrayImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Our Expertise</span>
          </div>
          <h2 className="section-heading">
            <span className="text-foreground">List of </span>
            <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="section-subheading mx-auto">
            Comprehensive medical equipment solutions tailored to meet the highest standards of healthcare delivery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-2/5 h-48 lg:h-auto overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
