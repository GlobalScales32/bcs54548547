import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <span className="font-serif font-bold text-2xl tracking-tight text-white mb-6 block">
              BCS Home Services
            </span>
            <p className="text-white/70 mb-6 max-w-sm">
              Your reliable, family-owned home services partner in Des Moines, Iowa. Professional craftsmanship with a neighborly touch.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="text-white/70 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="text-white/70 hover:text-white transition-colors">Project Gallery</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Get an Estimate</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <a href="tel:515-318-1302" className="text-white/70 hover:text-white transition-colors">
                  (515) 318-1302
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Serving Des Moines, IA<br/>and surrounding areas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white shrink-0 mt-0.5" />
                <span className="text-white/70">
                  contact@bcshomeservices.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Business Hours</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
            <div className="mt-6">
              <Button className="w-full font-bold bg-[#ffffffe6] text-[#0f1729] hover:bg-secondary/90" asChild data-testid="btn-footer-call">
                <a href="tel:515-318-1302">Call Now</a>
              </Button>
            </div>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} BCS Home Services. All rights reserved. Locally owned and operated in Des Moines, IA.</p>
        </div>
      </div>
    </footer>
  );
}
