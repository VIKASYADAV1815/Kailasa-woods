"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const accommodations = [
  {
    title: "The Family Room",
    description: "Located in our Greek Architecture old charm house, crowned with sloping roofs that echo the rhythm of the hills. The architecture blends nature with spatial grandeur, featuring old world colonial interiors, and a high ceiling drawing room that invites light and air to dance freely through the space.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",
    details: "Greek Architecture • Colonial Interiors"
  },
  {
    title: "The Amazon Bus",
    description: "A unique theme-based concept living experience. Surrounded by beautiful gardens and organic grown vegetables, offering stunning views of the manicured landscape. From the edges, your gaze stretches towards the Mussoorie mountains, their misty silhouettes rising like a sacred hymn to the sky.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    details: "Theme Based • Mountain Views"
  },
  {
    title: "The Bamboo Cottage",
    description: "A Deodar Wood Cottage set amidst a lush bamboo forest. Constructed keeping in mind the authenticity of natural materials, offering a living connection to nature. Stunning views of either the manicured garden, the forest trees or our farm vegetables.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop",
    details: "Deodar Wood • Bamboo Forest"
  },
];

const roomAmenities = [
  "A cozy bed", "Smart TV", "Wifi", "Living Area", "Dining area", "Kitchenette", "Hot and Cold Air Conditioner", "Geyser", "Intercom"
];

export default function Accommodations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="experience" ref={containerRef} className="relative bg-kw-beige text-kw-forest pb-[10vh]">
      
      {/* Intro Header */}
      <div className="py-24 md:py-32 px-6 md:px-12 text-center relative z-10 bg-kw-beige">
        <span className="text-kw-sage tracking-widest uppercase text-sm mb-4 block font-medium">The Stay</span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
          Theme Based Living
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-kw-forest/80 leading-relaxed">
          Each of the three ensuite bedrooms are designed keeping in mind all finer details to make your stay comfortable and memorable. Stunning views of either the manicured garden, the forest trees or our farm vegetables/fruit trees and farm tamed and untamed wildlife—bringing nature right into your room.
        </p>
      </div>

      <div className="relative">
        {accommodations.map((item, index) => {
          return (
            <div 
              key={index}
              className="md:sticky md:top-0 min-h-screen md:h-screen w-full flex flex-col-reverse md:flex-row bg-kw-beige overflow-hidden border-t border-kw-forest/10"
              style={{ zIndex: index + 10 }}
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-8 py-16 md:p-16 lg:p-24 flex flex-col justify-center h-auto md:h-full bg-kw-beige shadow-[0_-20px_50px_rgba(0,0,0,0.05)] md:shadow-none z-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-kw-sage tracking-widest font-mono text-sm">0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-kw-sage/50" />
                    <span className="text-xs uppercase tracking-widest text-kw-forest/50">{item.details}</span>
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-kw-forest/80 leading-relaxed mb-10 max-w-lg">
                    {item.description}
                  </p>
                  
                  <div className="mb-10">
                    <h4 className="text-xs uppercase tracking-widest text-kw-forest/50 mb-4">Room Includes</h4>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {roomAmenities.slice(0, 6).map((amenity, i) => (
                        <li key={i} className="text-sm text-kw-forest/80 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-kw-sage" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group overflow-hidden border-b border-kw-forest pb-1 uppercase tracking-widest text-xs font-bold w-fit"
                  >
                    <span className="relative z-10 group-hover:text-kw-sage transition-colors duration-300">
                      Reserve this room
                    </span>
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Image Side with Parallax */}
              <div className="w-full md:w-1/2 relative h-[50vh] min-h-[400px] md:h-full overflow-hidden z-10">
                <motion.div 
                  className="absolute inset-0 w-full h-[130%] -top-[15%] hidden md:block"
                  style={{
                    y: useTransform(scrollYProgress, [Math.max(0, (index - 1) / accommodations.length), (index + 1) / accommodations.length], ["-15%", "15%"])
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                </motion.div>
                
                {/* Mobile static image without parallax to prevent layout issues */}
                <div className="absolute inset-0 w-full h-full md:hidden block">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
