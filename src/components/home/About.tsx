"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                Kailasa Woods isn't just a place you see— <br />
                <span className="italic text-kw-sage">it’s an atmosphere you feel.</span>
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-5 text-sm md:text-base text-kw-forest/80 leading-relaxed font-sans"
            >
              <p className="font-medium text-kw-forest">
                Kailasa Woods: A Luxury Farm Stay
              </p>
              <p>
                A hue that whispers of tranquility, renewal, and balance, inviting you to slow down and breathe deeply. This is the soul of Kailasa Woods—a farm-to-table luxury sanctuary nestled in the quiet, slow-paced village of Bharatwala, Bisht Gaon, right in the gentle foothills of Mussoorie. Here, nature and luxury meet in quiet harmony.
              </p>
              <p>
                Welcome to a serene retreat where comfort meets character in every corner. Nestled amidst lush greenery and bathed in soft, natural light, this cozy haven offers a seamless blend of rustic charm and modern amenities. It is a space designed thoughtfully for you to reconnect with nature, and with yourself.
              </p>
              <p>
                Whether you are a solo traveler seeking solitude, a couple looking for a romantic escape, or a family wanting to slow down together, you will find warmth, peace, and the gift of unhurried time.
              </p>
              <div className="pt-2">
                <p className="font-medium text-kw-forest mb-2">The Estate</p>
                <p>
                  Set within a sprawling 45,000 sq. ft. estate, the property features 12,000 sq. ft. of elegant, theme-based concept living. Each space is crowned with sloping roofs that echo the gentle rhythm of the surrounding hills:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li><strong>The Amazon Bus:</strong> An immersive, playful escape.</li>
                  <li><strong>The Deodar Wood Cottage:</strong> Tucked away in a quiet bamboo forest.</li>
                  <li><strong>The Family Room:</strong> Housed within a Greek-inspired, old-charm homestead.</li>
                </ul>
                <p className="mt-4">
                  Come experience the rhythm of the hills, where every detail invites you to rest, restore, and just be.
                </p>
              </div>
              
              <Link href="/about">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="mt-6 uppercase tracking-widest text-xs font-bold border-b border-kw-forest pb-1 hover:text-kw-sage hover:border-kw-sage transition-all duration-300"
                >
                  Discover the Estate
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-7/12 relative ml-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-80 md:h-162.5 overflow-hidden rounded-sm bg-black group"
            >
              <img 
                src="/about.jpeg" 
                alt="The Experience" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none mix-blend-overlay" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
