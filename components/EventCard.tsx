import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  link?: string;
  type?: "upcoming" | "past";
}

export default function EventCard({ title, date, location, description, link, type = "upcoming" }: EventCardProps) {
  const content = (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-neutralDark/10">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-display font-bold text-primary mb-2">{title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-neutralDark/70">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </span>
          </div>
        </div>
        {type === "upcoming" && (
          <span className="px-3 py-1 bg-green text-white text-xs font-semibold rounded-full">
            Upcoming
          </span>
        )}
      </div>
      <p className="text-neutralDark/80 mb-4">{description}</p>
      {link && (
        <Link href={link} className="text-accent font-semibold hover:text-primary transition-colors inline-flex items-center">
          {type === "upcoming" ? "Register Now" : "View Details"} <span className="ml-2">→</span>
        </Link>
      )}
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return content;
}

