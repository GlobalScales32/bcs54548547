import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Clock, ShieldCheck, Phone, ArrowRight } from "lucide-react";
import heroBgVideo from "@assets/hero-bg.mp4";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/55 z-10" />
        <video
          src={heroBgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white font-medium text-sm mb-6 border border-white/30 backdrop-blur-sm">
              <BadgeCheck className="h-4 w-4" />
              <span>Des Moines' Trusted Choice</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
              Reliable Home Services <span className="text-blue-300 italic">You Can Trust.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto font-medium drop-shadow">
              Your local, family-owned partner for plumbing, repairs, and general maintenance.
              We bring craftsmanship, honesty, and prompt service to every Des Moines home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button size="lg" className="text-base font-semibold shadow-lg h-14 px-8 group" asChild data-testid="btn-hero-call">
                <a href="tel:515-318-1302">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (515) 318-1302
                </a>
              </Button>
              <Button size="lg" className="text-base font-semibold shadow-md h-14 px-8 group bg-white hover:bg-blue-50 text-[#162E73]" asChild data-testid="btn-hero-estimate">
                <a href="#contact">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <div className="bg-white/15 backdrop-blur-sm rounded-full p-2 border border-white/25">
                  <ShieldCheck className="h-5 w-5 text-blue-300" />
                </div>
                <span className="font-semibold text-white">Locally Owned</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="bg-white/15 backdrop-blur-sm rounded-full p-2 border border-white/25">
                  <Clock className="h-5 w-5 text-blue-300" />
                </div>
                <span className="font-semibold text-white">Fast Response</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="bg-white/15 backdrop-blur-sm rounded-full p-2 border border-white/25">
                  <BadgeCheck className="h-5 w-5 text-blue-300" />
                </div>
                <span className="font-semibold text-white">Professional Work</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
