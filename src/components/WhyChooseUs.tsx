import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Reliable and Professional",
    description: "We show up on time, respect your property, and communicate clearly from start to finish."
  },
  {
    title: "Affordable Pricing",
    description: "Honest, transparent quotes with no hidden fees. High quality doesn't have to mean high cost."
  },
  {
    title: "Fast Response Times",
    description: "When you have a problem, you need answers. We pride ourselves on getting back to you quickly."
  },
  {
    title: "Quality Workmanship",
    description: "We don't cut corners. Every job, big or small, is done right the first time."
  },
  {
    title: "Locally Owned",
    description: "We live and work in Des Moines. When you hire us, you're supporting a local family business."
  },
  {
    title: "Customer Satisfaction",
    description: "Your home is your sanctuary. We aren't satisfied until you're thrilled with our work."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
                Why Des Moines Chooses Us
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We know it can be stressful to invite a contractor into your home. That's why we’ve built BCS Home Services on a foundation of trust, integrity, and good old-fashioned hard work.
              </p>
              
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Craftsman working on wood" 
                  className="w-full h-[400px] object-cover"
                />
                {/* REPLACE WITH REAL PHOTO LATER */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
