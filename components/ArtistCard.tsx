import Link from "next/link";
import Image from "next/image";

interface ArtistCardProps {
  name: string;
  location: string;
  artform: string;
  quote: string;
  image?: string;
  link?: string;
}

export default function ArtistCard({ name, location, artform, quote, image, link }: ArtistCardProps) {
  const content = (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutralDark/10">
      {image && (
        <div className="relative w-full h-64 bg-gradient-to-br from-primary to-accent">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-display font-bold text-primary">{name}</h3>
          <span className="text-sm text-neutralDark/60">{location}</span>
        </div>
        <p className="text-sm text-accent font-semibold mb-4">{artform}</p>
        <p className="text-neutralDark/80 italic">"{quote}"</p>
      </div>
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
}

