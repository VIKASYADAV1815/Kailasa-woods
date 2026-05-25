import type { Metadata } from "next";
import "./globals.css";

import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/navbar/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Kailasa Woods | Luxury Farm Stay in Mussoorie",
  description: "A farm to table luxury Farm Stay in the Foothills of Mussoorie. Experience slow living, earthy luxury, and boutique hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-kw-offwhite text-kw-forest min-h-screen flex flex-col font-sans selection:bg-kw-sage selection:text-kw-offwhite md:cursor-none relative">
        {/* Global Grain Overlay (Hero style) */}
        <div 
          className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.15] mix-blend-overlay"
          style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }}
        />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}