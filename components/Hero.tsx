import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink = "/", 
  backgroundImage,
  overlay = true 
}: HeroProps) {
  // Default to an African youth-focused hero image if none provided
  const defaultImage = "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop&q=80";
  const heroImage = backgroundImage || defaultImage;

  return (
    <section 
      className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Warm, energetic gradient overlay - lighter and more vibrant */}
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-red/30 via-green/20 to-blue/30"></div>
        )}
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 kente-pattern opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom animate-fade-in px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 text-white drop-shadow-2xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl mx-auto mb-10 text-white/95 drop-shadow-lg font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <Link 
            href={ctaLink} 
            className="btn-primary text-lg md:text-xl px-10 py-5 inline-block shadow-2xl hover:shadow-gold/50"
          >
            {ctaText}
          </Link>
        )}
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

