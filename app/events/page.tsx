import type { Metadata } from "next";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Workshops | Youth4Youth Africa Art",
  description: "Join us for workshops, exhibitions, performances, and celebrations. Create, learn, and connect with African youth artists.",
};

export default function Events() {
  const upcomingEvents = [
    {
      title: "Summer Peace Jam",
      date: "July 10, 2025",
      location: "Lagos, Nigeria",
      description: "A day of music, poetry, and visual art celebrating peace and unity across African communities. Featuring performances, workshops, and a community mural project.",
      link: "/events/summer-peace-jam",
      type: "upcoming" as const,
    },
    {
      title: "Culture Walk",
      date: "August 22, 2025",
      location: "Accra, Ghana",
      description: "An immersive journey through African heritage, featuring traditional crafts, contemporary art, and live performances. Walk with us through history and innovation.",
      link: "/events/culture-walk",
      type: "upcoming" as const,
    },
    {
      title: "Digital Arts Lab",
      date: "September 5, 2025",
      location: "Online",
      description: "Virtual workshop series on digital storytelling, graphic design, and multimedia art creation. Open to youth across the continent.",
      link: "/events/digital-arts-lab",
      type: "upcoming" as const,
    },
    {
      title: "Voices Unchained Festival",
      date: "October 15-17, 2025",
      location: "Nairobi, Kenya",
      description: "Three days of spoken word, poetry slams, and storytelling. The biggest gathering of young African poets and spoken word artists.",
      link: "/events/voices-unchained-festival",
      type: "upcoming" as const,
    },
  ];

  const pastEvents = [
    {
      title: "Heritage Art Exhibition",
      date: "March 20, 2025",
      location: "Dakar, Senegal",
      description: "Showcasing the work of 20 young artists who explored traditional techniques through contemporary expression.",
      type: "past" as const,
    },
    {
      title: "Youth Mural Project",
      date: "February 14, 2025",
      location: "Kampala, Uganda",
      description: "Community mural project bringing together 30 young artists to transform a public space with messages of hope and unity.",
      type: "past" as const,
    },
    {
      title: "Digital Storytelling Workshop",
      date: "January 8, 2025",
      location: "Online",
      description: "Intensive 3-day workshop on digital art creation, video production, and online portfolio development.",
      type: "past" as const,
    },
  ];

  return (
    <>
      <Hero
        title="Create, Learn, Connect"
        subtitle="Join us for workshops, exhibitions, performances, and celebrations"
      />

      {/* Upcoming Events */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Mark your calendar and join us for these upcoming gatherings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Past Highlights
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              A look back at some of our recent events and their impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 border border-neutralDark/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Host an Event With Us
              </h2>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                Are you a community organization, school, or individual interested in hosting a 
                Youth4Youth workshop or event? We'd love to partner with you.
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-accent mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Workshop Partnerships</h3>
                  <p className="text-neutralDark/80">
                    We bring our programs to your community, providing materials, facilitators, and expertise.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Event Collaboration</h3>
                  <p className="text-neutralDark/80">
                    Partner with us to organize exhibitions, performances, or cultural celebrations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent mr-3 text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Custom Programs</h3>
                  <p className="text-neutralDark/80">
                    We can design programs tailored to your community's specific needs and interests.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-primary to-indigo text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            Never miss an event. Subscribe to our newsletter for updates on workshops, exhibitions, 
            and opportunities.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-neutralDark focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
            <button type="submit" className="btn-secondary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

