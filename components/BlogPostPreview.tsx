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
      <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutralDark/10">
        {image && (
          <div className="relative w-full h-48 bg-gradient-to-br from-primary to-accent">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {category}
            </span>
            <span className="text-sm text-neutralDark/60">{date}</span>
          </div>
          <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-neutralDark/80 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutralDark/60">By {author}</span>
            <span className="text-accent font-semibold group-hover:text-primary transition-colors inline-flex items-center">
              Read More <span className="ml-2">→</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

