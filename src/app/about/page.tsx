"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-kw-offwhite text-kw-forest">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-125 flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/main house/h (5).png"
            alt="About Kailasa Woods"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-kw-offwhite/20" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-kw-offwhite/80 tracking-widest uppercase text-sm mb-6 block font-medium"
          >
            The Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-light tracking-wide text-4xl md:text-5xl lg:text-6xl text-kw-offwhite mb-6"
          >
            Kailasa Woods is more <br className="hidden md:block" /> than a colour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-kw-sage text-xl md:text-2xl max-w-2xl mx-auto font-sans font-light tracking-widest uppercase"
          >
            ...it's a feeling.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Text Content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 text-base md:text-lg text-kw-forest/80 leading-relaxed font-sans"
              >
                <p className="font-medium text-kw-forest text-xl md:text-2xl leading-snug">
                  A farm to table luxury Farm Stay in the Foothills of Mussoorie, located in the slow-paced village of Bharatwala, Bisht Gaon.
                </p>
                
                <div className="h-px w-24 bg-kw-sage/50 my-8" />
                
                <p>
                  A hue that whispers of tranquillity, renewal, and balance, inviting you to slow down and breathe deeply. It’s the soul of this farm stay, where nature and luxury meet in quiet harmony.
                </p>
                <p>
                  Welcome to our serene farmstay, where comfort meets character in every corner. Nestled amidst greenery and bathed in natural light, this Cozy Farm Stay Retreat offers a perfect blend of natural charm and modern amenities. A space to reconnect with nature and yourself.
                </p>
                <p>
                  Ideal for solo travellers, couples, or families seeking warmth, tranquillity, and time to themselves.
                </p>
                <p>
                  Set within a 45,000 sq. ft estate, this farm stay offers 12,000 sq. ft of elegant construction, theme based concept living be it our Amazon Bus, Deodar Wood Cottage in Bamboo forest or our own Family Room in our Greek Architecture old charm house, crowned with sloping roofs that echo the rhythm of the hills.
                </p>
                
                <div className="pt-8">
                  <Link href="/stay">
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="uppercase tracking-widest text-sm font-bold border-b-2 border-kw-forest pb-1 hover:text-kw-sage hover:border-kw-sage transition-all duration-300"
                    >
                      Discover Our Rooms
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Images Grid Content */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2 md:gap-3 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="col-span-2 h-64 md:h-100 relative overflow-hidden rounded-sm group"
              >
                <img 
                  src="/about.jpeg" 
                  alt="Kailasa Woods Estate" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="h-48 md:h-64 relative overflow-hidden rounded-sm group"
              >
                <img 
                  src="/gym/g (2).webp" 
                  alt="Nature at Kailasa" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="h-48 md:h-64 relative overflow-hidden rounded-sm group"
              >
                <img 
                  src="/mandir bonfire/m (1).webp" 
                  alt="Peaceful Evenings" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
