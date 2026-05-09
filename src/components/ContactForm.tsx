import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MapPin, Mail, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              Get Your Free Estimate
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Serving Des Moines and surrounding areas. Fill out the form below or give us a call directly to discuss your project needs. We'll get back to you promptly.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Call Us</p>
                  <a href="tel:515-318-1302" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                    (515) 318-1302
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Service Area</p>
                  <p className="text-xl font-bold text-foreground">
                    Des Moines, IA
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Email Us</p>
                  <p className="text-xl font-bold text-foreground">
                    Contact via form
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border shadow-xl rounded-2xl p-8"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required placeholder="John Doe" className="bg-background" data-testid="input-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required placeholder="(515) 555-0123" className="bg-background" data-testid="input-phone" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="bg-background" data-testid="input-email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select required>
                    <SelectTrigger className="bg-background" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="interior">Interior Home Repair</SelectItem>
                      <SelectItem value="safety">Safety Services</SelectItem>
                      <SelectItem value="outdoor">Outdoor Maintenance</SelectItem>
                      <SelectItem value="handyman">General Handyman</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Tell us a little bit about your project..." 
                    className="min-h-[120px] bg-background"
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-base font-bold h-12 shadow-md" data-testid="btn-submit-contact">
                  Request Free Estimate
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
