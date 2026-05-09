import { motion } from "framer-motion";
import { Wrench, PaintRoller, Flame, Leaf, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Plumbing",
    description: "Leaky faucets, minor plumbing repairs, and general maintenance to keep your home's water systems running smoothly.",
    icon: Wrench,
  },
  {
    title: "Interior Home Repair",
    description: "Expert drywall patching, furniture assembly, hanging shelves, and all the small details that make a house a home.",
    icon: PaintRoller,
  },
  {
    title: "Safety Services",
    description: "Peace of mind with thorough fire safety inspections and meticulous fire extinguisher tag checks.",
    icon: Flame,
  },
  {
    title: "Outdoor Maintenance",
    description: "Keep your exterior pristine with deck staining, deck repair, lawn care, and prompt snow removal.",
    icon: Leaf,
  },
  {
    title: "General Handyman",
    description: "Reliable home maintenance, tackling small projects, and finally clearing out those persistent to-do list items.",
    icon: Hammer,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            Expert Craftsmanship for Every Corner
          </h2>
          <p className="text-lg text-muted-foreground">
            From the roof to the basement, inside and out. Our comprehensive services 
            ensure your home is maintained with the highest standard of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 group hover:border-primary/20 bg-card">
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
