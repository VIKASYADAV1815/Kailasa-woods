import { staysData } from "@/data/stays";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StayBookingWrapper from "@/components/stay/StayBookingWrapper";

export function generateStaticParams() {
  return staysData.map((stay) => ({
    slug: stay.id,
  }));
}

export default async function StayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const stay = staysData.find((s) => s.id === resolvedParams.slug);

  if (!stay) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-kw-offwhite text-kw-forest">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={stay.heroImage} 
            alt={stay.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <span className="text-kw-offwhite/80 uppercase tracking-widest text-sm mb-4 block">
            {stay.details}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-kw-offwhite drop-shadow-lg">
            {stay.title}
          </h1>
        </div>
        
        <Link 
          href="/#experience" 
          className="absolute top-32 left-6 md:left-12 z-20 flex items-center gap-2 text-kw-offwhite hover:text-kw-sage transition-colors uppercase tracking-widest text-xs font-medium"
        >
          <ArrowLeft size={16} />
          Back to Stays
        </Link>
      </section>

      {/* Description Section */}
      <section className="py-24 px-6 md:px-12 bg-kw-beige">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 text-kw-forest">
            Experience the essence of <br className="hidden md:block" />
            <span className="italic text-kw-sage">{stay.title}</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-kw-forest/80 mb-16">
            {stay.fullDescription}
          </p>
          
          <div className="border-t border-b border-kw-forest/10 py-12 mb-12 text-left">
            <h3 className="text-sm uppercase tracking-widest text-kw-sage mb-8 font-medium text-center">Room Amenities</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
              {stay.amenities.map((amenity, idx) => (
                <li key={idx} className="flex items-center gap-3 text-kw-forest/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-kw-sage shrink-0" />
                  <span className="text-sm md:text-base">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          <StayBookingWrapper stayTitle={stay.title} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12 bg-kw-stone">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-kw-forest">Gallery</h2>
            <p className="text-kw-forest/70 uppercase tracking-widest text-xs">Glimpses of your stay</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {stay.gallery.map((imgSrc, index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden group rounded-sm ${index === 0 ? 'md:col-span-2 md:row-span-2 h-[50vh] md:h-[80vh]' : 'h-[40vh]'}`}
              >
                <img 
                  src={imgSrc} 
                  alt={`${stay.title} gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
