import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
    alt: "Plumber repairing pipe under sink"
    /* REPLACE WITH REAL PHOTO: plumbing work */
  },
  {
    url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    alt: "Handyman tools and equipment"
    /* REPLACE WITH REAL PHOTO: tools / handyman */
  },
  {
    url: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=800",
    alt: "Lawn care and maintenance"
    /* REPLACE WITH REAL PHOTO: lawn care */
  },
  {
    url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800",
    alt: "Deck and outdoor maintenance"
    /* REPLACE WITH REAL PHOTO: deck / outdoor work */
  },
  {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
    alt: "Interior wall painting and repair"
    /* REPLACE WITH REAL PHOTO: interior painting / drywall */
  },
  {
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800",
    alt: "Home kitchen repair and maintenance"
    /* REPLACE WITH REAL PHOTO: home repair / general handyman */
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into the quality and care we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
