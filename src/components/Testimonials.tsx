import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Des Moines, IA",
    text: "BCS Home Services fixed my leaky faucet and hung some heavy shelving in the living room. They were incredibly polite, arrived right on time, and the price was exactly what they quoted. Highly recommended!",
    rating: 5
  },
  {
    name: "James T.",
    location: "West Des Moines, IA",
    text: "I've struggled to find a reliable handyman until now. They stained my deck beautifully and even helped with some minor drywall patching inside. Great attention to detail.",
    rating: 5
  },
  {
    name: "Emily R.",
    location: "Ankeny, IA",
    text: "Honest and dependable. They handled a long list of small repairs I'd been putting off for months. It feels so good to have everything working perfectly again. Will definitely call them next time.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Neighbors Talking About Us
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Don't just take our word for it. Here's what your neighbors have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-lg leading-relaxed mb-6 font-medium">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
