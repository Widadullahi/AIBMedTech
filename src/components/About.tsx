import { CheckCircle2, Users, Target, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-medical-equipment.jpg";

const features = [
  "Certified biomedical engineers",
  "Quality equipment from trusted manufacturers",
  "Preventive maintenance programs",
  "24/7 emergency support",
  "Competitive pricing",
  "Nationwide service coverage",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-accent/20 shadow-xl">
              <img 
                src={heroImage} 
                alt="Medical laboratory"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <Users className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Satisfied Clients</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-accent/20 rounded-3xl" />
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-6">
              <Lightbulb className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">About Us</span>
            </div>

            <h2 className="section-heading">
              <span className="text-foreground">Your Trusted </span>
              <span className="text-gradient-primary">Partner</span>
              <span className="text-foreground"> in Medical Equipment</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              AIB MedTech Services is a leading provider of durable medical equipment and expert maintenance services. With years of experience in the healthcare industry, we understand the critical importance of reliable medical equipment in patient care.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-card border border-border shadow-sm">
                <Target className="w-8 h-8 text-accent mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To provide world-class medical equipment and services that enhance healthcare delivery.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-card border border-border shadow-sm">
                <Lightbulb className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To be the most trusted name in medical equipment solutions across the nation.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
