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
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-neutralDark/10 hover:border-primary/50 group"
    >
      {icon && (
        <div className="text-4xl mb-4 text-primary group-hover:text-accent transition-colors">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
        {name}
      </h3>
      <p className="text-neutralDark/80 mb-4">{description}</p>
      <span className="text-accent font-semibold group-hover:text-primary transition-colors inline-flex items-center">
        Learn More <span className="ml-2">→</span>
      </span>
    </Link>
  );
}

