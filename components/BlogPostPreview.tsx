import Link from "next/link";
import Image from "next/image";

interface BlogPostPreviewProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  slug: string;
}

export default function BlogPostPreview({ 
  title, 
  excerpt, 
  author, 
  date, 
  category, 
  image, 
  slug 
}: BlogPostPreviewProps) {
  return (
    <Link href={`/blog/${slug}`} className="block group">
      <article className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden border-2 border-gold/20 hover:border-gold">
        {image && (
          <div className="relative w-full h-48 bg-gradient-to-br from-gold/20 via-red/20 to-green/20 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-red/10 text-red text-xs font-bold rounded-full">
              {category}
            </span>
            <span className="text-sm text-black/60 font-medium">{date}</span>
          </div>
          <h3 className="text-xl font-display font-bold text-black mb-2 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-black/70 mb-4 line-clamp-3 leading-relaxed">{excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-black/60 font-medium">By {author}</span>
            <span className="text-gold font-bold group-hover:text-red transition-colors inline-flex items-center">
              Read More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

