"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navLinks = [
  { name: "The Stay", href: "#stay" },
  { name: "Experience", href: "#experience" },
  { name: "Amenities", href: "#amenities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-kw-offwhite/90 backdrop-blur-md py-4 shadow-sm text-kw-forest"
          : "bg-transparent py-6 text-kw-offwhite"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="z-50 relative group">
          <h1 className="font-serif text-2xl md:text-3xl tracking-widest uppercase">
            KAILASA WOODS
          </h1>
          <div className={cn("h-[1px] w-0 transition-all duration-300 group-hover:w-full", isScrolled ? "bg-kw-forest" : "bg-kw-offwhite")} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest font-medium opacity-80 hover:opacity-100 relative group overflow-hidden transition-opacity"
            >
              {link.name}
              <span className={cn("absolute bottom-0 left-0 w-full h-[1px] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100", isScrolled ? "bg-kw-forest" : "bg-kw-offwhite")} />
            </Link>
          ))}
          <button className={cn(
            "px-6 py-2 border uppercase tracking-widest text-sm transition-colors duration-300",
            isScrolled 
              ? "border-kw-forest text-kw-forest hover:bg-kw-forest hover:text-kw-offwhite" 
              : "border-kw-offwhite text-kw-offwhite hover:bg-kw-offwhite hover:text-kw-forest"
          )}>
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} className={isScrolled ? "text-kw-forest" : "text-kw-forest"} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-kw-offwhite flex flex-col items-center justify-center z-40"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-serif text-4xl text-kw-forest hover:text-kw-sage transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-8 px-8 py-3 bg-kw-forest text-kw-offwhite uppercase tracking-widest text-sm"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
