"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <section id="stay" className="py-24 md:py-32 px-6 md:px-12 bg-kw-offwhite text-kw-forest relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div ref={ref} className="w-full lg:w-5/12 space-y-8">
            <div>
              <span className="text-kw-sage tracking-widest uppercase text-sm mb-6 block font-medium">The Experience</span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-4xl md:text-5xl leading-tight"
              >
                Kailasa Woods is more than a colour— <br />
                <span className="italic text-kw-sage">it’s a feeling.</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-5 text-sm md:text-base text-kw-forest/80 leading-relaxed font-sans"
            >
              <p className="font-medium text-kw-forest">
                Kailasa Woods (Farm Stay) – A farm to table luxury Farm Stay in the Foothills of Mussoorie (In a slow paced village Bharatwala, Bisht Gaon)
              </p>
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
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="mt-6 uppercase tracking-widest text-xs font-bold border-b border-kw-forest pb-1 hover:text-kw-sage hover:border-kw-sage transition-all duration-300"
              >
                Discover the Estate
              </motion.button>
            </motion.div>
          </div>

          {/* Image Content */}
          <div ref={containerRef} className="w-full lg:w-7/12 relative h-[80vh] min-h-[600px] overflow-hidden rounded-sm group">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-[150%] -top-[25%]"
              style={{ y }}
            >
              <img
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop"
                alt="Property View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            {/* Subtle premium border frame inside */}
            <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none mix-blend-overlay transition-all duration-500 group-hover:inset-6" />
          </div>

        </div>
      </div>
    </section>
  );
}
