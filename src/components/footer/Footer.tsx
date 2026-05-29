"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#16291d] text-kw-offwhite pt-24 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl mb-6">Kailasa Woods</h2>
            <p className="text-kw-offwhite/70 max-w-md mb-8">
              A farm to table luxury Farm Stay in the Foothills of Mussoorie, Bharatwala, Bisht Gaon.
              Looking forward to host you soon, cause hosting for us is pleasure, building relations and extending our Kailasa family.
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-sm text-kw-sage mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-kw-offwhite/80 hover:text-kw-offwhite transition-colors relative group inline-block">
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-px bg-kw-offwhite transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link href="/stay" className="text-kw-offwhite/80 hover:text-kw-offwhite transition-colors relative group inline-block">
                  The Stay
                  <span className="absolute bottom-0 left-0 w-full h-px bg-kw-offwhite transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-kw-offwhite/80 hover:text-kw-offwhite transition-colors relative group inline-block">
                  Gallery
                  <span className="absolute bottom-0 left-0 w-full h-px bg-kw-offwhite transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-kw-offwhite/80 hover:text-kw-offwhite transition-colors relative group inline-block">
                  Contact Us
                  <span className="absolute bottom-0 left-0 w-full h-px bg-kw-offwhite transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-sm text-kw-sage mb-6">Contact</h3>
            <ul className="space-y-4 text-kw-offwhite/80">
              <li>
                <a href="https://maps.app.goo.gl/zytAeMaRPJ1ZDJqu5" target="_blank" rel="noopener noreferrer" className="hover:text-kw-offwhite transition-colors">
                  Kailasa Woods, Mulberry Farms,<br />
                  Bharatwala, Bisht Gaon<br />
                  Dehradun, Uttarakhand<br />
                  248003
                </a>
              </li>
              <li>
                <a href="mailto:kailasawoodsfarmstay@gmail.com" className="hover:text-kw-offwhite transition-colors">kailasawoodsfarmstay@gmail.com</a>
              </li>
              <li>
                <a href="tel:+918954848480" className="hover:text-kw-offwhite transition-colors">+91 8954848480</a>
              </li>
              <li>
                <a href="tel:+919639999919" className="hover:text-kw-offwhite transition-colors">+91 9639999919</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Large Footer Reveal */}
        <div className="border-t border-kw-offwhite/20 pt-12 flex flex-col items-center relative overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 0.15, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[10vw] leading-none tracking-tight uppercase text-kw-offwhite text-center select-none w-full wrap-break-word px-4"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
            }}
          >
            KAILASA WOODS
          </motion.h1>
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-kw-offwhite/50 tracking-widest uppercase mt-12 pb-6 px-2">
            <p>&copy; {new Date().getFullYear()} Kailasa Woods.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://www.instagram.com/kailasawoods?igsh=ZThoN2FsZWd4cnBz" target="_blank" rel="noopener noreferrer" className="hover:text-kw-offwhite transition-colors">Instagram</a>
              <a href="#" className="hover:text-kw-offwhite transition-colors">Facebook</a>
            </div>
            <p className="mt-4 md:mt-0">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
