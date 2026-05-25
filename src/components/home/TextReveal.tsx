"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextReveal() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"],
  });

  const text = "Welcome to our serene farmstay, where comfort meets character in every corner. Nestled amidst greenery and bathed in natural light, this Cozy Farm Stay Retreat offers a perfect blend of natural charm and modern amenities. The architecture blends nature with spatial grandeur, featuring old world colonial interiors, high ceiling drawing rooms that invite light and air to dance freely through the space. Surrounding the home are beautiful gardens and water bodies, organic grown vegetables and fruit bearing trees, thoughtfully landscaped with love and passion.";
  const words = text.split(" ");

  return (
    <section ref={container} className="py-24 md:py-32 px-4 md:px-6 bg-kw-offwhite flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <p className="font-sans font-normal text-lg md:text-xl lg:text-2xl leading-relaxed flex flex-wrap gap-x-2 md:gap-x-3 gap-y-1 justify-center text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            // Map scroll progress to opacity for each word
            const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
            return (
              <motion.span key={i} style={{ opacity }} className="text-kw-forest">
                {word}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
