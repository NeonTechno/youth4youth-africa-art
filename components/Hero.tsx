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
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section 
      className={`relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center text-center text-neutralLight ${
        backgroundImage ? 'bg-cover bg-center bg-no-repeat' : 'bg-gradient-to-br from-primary via-indigo to-green'
      }`}
      style={backgroundStyle}
    >
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-neutralDark/70 via-neutralDark/50 to-neutralDark/70"></div>
      )}
      <div className="relative z-10 container-custom animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-8 text-neutralLight/95">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <Link href={ctaLink} className="btn-primary text-lg px-8 py-4 inline-block">
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}

