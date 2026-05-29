"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  stayTitle: string;
};

export default function StayBookingWrapper({ stayTitle }: Props) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center w-full mt-16 mb-8 relative z-20">
        <motion.button 
          onClick={() => setIsPopupOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-kw-forest text-kw-offwhite hover:bg-kw-sage transition-colors duration-300 uppercase tracking-widest text-base font-bold shadow-2xl relative overflow-hidden group"
        >
          <span className="relative z-10">Reserve {stayTitle}</span>
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-kw-offwhite w-full max-w-lg rounded-sm shadow-2xl overflow-hidden z-10"
            >
              <div className="bg-kw-forest text-kw-offwhite p-6 relative">
                <button 
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-4 right-4 text-kw-offwhite/70 hover:text-kw-offwhite transition-colors"
                >
                  <X size={24} />
                </button>
                <h3 className="font-serif text-2xl mb-1">Book Your Stay</h3>
                <p className="text-kw-offwhite/80 text-sm tracking-wide">{stayTitle}</p>
              </div>

              <div className="p-8">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Check-in</label>
                      <input type="date" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Check-out</label>
                      <input type="date" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Email</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest text-kw-forest/70 font-medium">Phone</label>
                      <input type="tel" placeholder="+91 00000 00000" className="w-full bg-transparent border-b border-kw-forest/30 pb-3 pt-1 focus:outline-none focus:border-kw-forest text-kw-forest transition-colors" required />
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 mt-8 bg-kw-forest text-kw-offwhite hover:bg-kw-sage transition-colors duration-300 uppercase tracking-widest text-sm font-bold shadow-lg">
                    Submit Request
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
