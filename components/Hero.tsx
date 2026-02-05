import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Logo from "@/app/gallery/photo_2026-01-15 21.07.30.jpeg";
import HeroBackground from "@/app/gallery/photo_2026-02-05 02.54.00.jpeg";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: StaticImageData | string;
  showStats?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink = "/get-involved", 
  backgroundImage,
  showStats = true
}: HeroProps) {
  const heroImage: StaticImageData | string = backgroundImage || HeroBackground;

  const stats = [
    { number: "35,000+", label: "People Reached" },
    { number: "40+", label: "Schools" },
    { number: "50+", label: "Communities" },
    { number: "4", label: "Countries" },
    { number: "100+", label: "Volunteers" },
  ];

  return (
    <section 
      className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Youth engaging in advocacy and education activities"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Professional overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom animate-fade-in px-4 py-16">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src={Logo}
            alt="Youth4Youth Africa logo"
            className="h-20 w-auto md:h-24"
            priority
          />
        </div>
        
        {title && (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white drop-shadow-2xl leading-tight">
            {title}
          </h1>
        )}
        
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 text-white/95 drop-shadow-lg font-medium leading-relaxed">
            {subtitle}
          </p>
        )}
        
        {ctaText && (
          <Link 
            href={ctaLink} 
            className="btn-primary text-lg md:text-xl px-10 py-5 inline-block shadow-2xl bg-yellow text-black hover:bg-yellowAlt transition-all"
          >
            {ctaText}
          </Link>
        )}

        {/* Impact Statistics Bar */}
        {showStats && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-display font-bold text-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-darkGrey font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}

