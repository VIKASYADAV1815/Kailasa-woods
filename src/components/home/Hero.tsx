"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-kw-forest">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="/hero.jpg"
          alt="Luxury Farm Stay"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-kw-offwhite/80 uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm lg:text-base mb-6 max-w-[80vw]"
        >
          A Farm to Table Luxury Farm Stay
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-kw-offwhite tracking-tight mb-8 drop-shadow-lg"
        >
          Kailasa Woods
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-8 py-3 bg-kw-offwhite text-kw-forest uppercase tracking-widest text-sm hover:bg-kw-beige transition-colors duration-300 shadow-xl"
          >
            Discover
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-kw-offwhite/60 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-16 bg-kw-offwhite/30 overflow-hidden relative">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 w-full h-full bg-kw-offwhite"
          />
        </div>
      </motion.div>
    </section>
  );
}
