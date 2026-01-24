import Link from "next/link";

interface ProgramCardProps {
  name: string;
  description: string;
  link: string;
  icon?: string;
}

export default function ProgramCard({ name, description, link, icon }: ProgramCardProps) {
  return (
    <Link 
      href={link}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gold/20 hover:border-gold group"
    >
      {icon && (
        <div className="text-5xl mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-display font-bold text-black mb-3 group-hover:text-gold transition-colors">
        {name}
      </h3>
      <p className="text-black/70 mb-4 leading-relaxed">{description}</p>
      <span className="text-gold font-bold group-hover:text-red transition-colors inline-flex items-center">
        Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </Link>
  );
}

