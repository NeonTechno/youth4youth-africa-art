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
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-gold/20 hover:border-gold group">
      {image && (
        <div className="relative w-full h-64 bg-gradient-to-br from-gold/20 via-red/20 to-green/20 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-display font-bold text-black group-hover:text-gold transition-colors">{name}</h3>
          <span className="text-sm text-black/60 font-medium">{location}</span>
        </div>
        <p className="text-sm text-red font-bold mb-4">{artform}</p>
        <p className="text-black/80 italic leading-relaxed">"{quote}"</p>
      </div>
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
}

