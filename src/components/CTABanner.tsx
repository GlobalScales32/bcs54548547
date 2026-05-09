import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-[#162E73]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl text-white">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl font-medium text-white/80">
              Stop stressing over home repairs. Call us today and let's get your to-do list done.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              size="lg"
              className="text-lg font-bold shadow-xl h-16 px-10 bg-white text-[#162E73] hover:bg-blue-50"
              asChild
              data-testid="btn-banner-call"
            >
              <a href="tel:515-318-1302">
                <Phone className="mr-2 h-6 w-6" />
                Call (515) 318-1302
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
