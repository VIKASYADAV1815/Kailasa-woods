"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800",
  "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=800",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800",
  "https://images.unsplash.com/photo-1679984743278-1e325c4c899a?q=80&w=800",
  "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800",
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-35%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="gallery" ref={containerRef} className="py-24 bg-kw-offwhite overflow-hidden h-[150vh] md:h-[130vh] flex flex-col justify-center relative">


      <div className="container mx-auto px-4 md:px-6 flex gap-3 md:gap-6 h-[80vh] md:h-[90vh]">
        
        <motion.div style={{ y: y1 }} className="w-1/3 flex flex-col gap-3 md:gap-6 h-[180%] -mt-[15%]">
          <img src={images[0]} className="w-full h-[30%] object-cover hover-trigger" alt="Gallery" />
          <img src={images[1]} className="w-full h-[40%] object-cover hover-trigger" alt="Gallery" />
          <img src={images[6]} className="w-full h-[30%] object-cover hover-trigger" alt="Gallery" />
        </motion.div>
        
        <motion.div style={{ y: y2 }} className="w-1/3 flex flex-col gap-3 md:gap-6 h-[180%]">
          <img src={images[2]} className="w-full h-[40%] object-cover hover-trigger" alt="Gallery" />
          <img src={images[3]} className="w-full h-[30%] object-cover hover-trigger" alt="Gallery" />
          <img src={images[7]} className="w-full h-[30%] object-cover hover-trigger" alt="Gallery" />
        </motion.div>
        
        <motion.div style={{ y: y3 }} className="w-1/3 flex flex-col gap-3 md:gap-6 h-[180%] -mt-[10%]">
          <img src={images[4]} className="w-full h-[35%] object-cover hover-trigger" alt="Gallery" />
          <img src={images[5]} className="w-full h-[35%] object-cover hover-trigger" alt="Gallery" />
          <img src={images[8]} className="w-full h-[30%] object-cover hover-trigger" alt="Gallery" />
        </motion.div>

      </div>
    </section>
  );
}