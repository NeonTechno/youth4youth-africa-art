import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import ArtistCard from "@/components/ArtistCard";
import EventCard from "@/components/EventCard";
import BlogPostPreview from "@/components/BlogPostPreview";
import KenteDivider from "@/components/KenteDivider";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Youth4Youth Africa",
  description: "By Youth, For Youth, For One Africa. Empowering African youth to change stories, build peace, reclaim identity, and transform communities.",
};

export default function Home() {
  const programs = [
    {
      name: "Creative Echoes",
      description: "Mentorship and exhibitions across all art forms. We connect emerging artists with established mentors, providing platforms for their voices to be heard.",
      link: "/programs#creative-echoes",
      icon: "🎨",
    },
    {
      name: "Voices Unchained",
      description: "Spoken word and poetry training programs that empower youth to tell their stories, confront injustice, and celebrate their heritage through words.",
      link: "/programs#voices-unchained",
      icon: "📝",
    },
    {
      name: "Canvas of Cultures",
      description: "Projects that revive heritage and tradition through visual arts. We explore how traditional techniques meet contemporary expression.",
      link: "/programs#canvas-of-cultures",
      icon: "🖼️",
    },
    {
      name: "Digital Generation",
      description: "Digital art, design, and performance tools that uplift. We equip youth with skills for the digital age while preserving cultural narratives.",
      link: "/programs#digital-generation",
      icon: "💻",
    },
  ];

  const featuredArtists = [
    {
      name: "Aisha Mwangi",
      location: "Nairobi, Kenya",
      artform: "Graffiti & Mural Art",
      quote: "My graffiti murals turned vacant walls into powerful calls against gender-based violence. Art speaks when words fail.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    },
    {
      name: "Emmanuel Okonkwo",
      location: "Lagos, Nigeria",
      artform: "Spoken Word Poetry",
      quote: "When I perform, I'm not just reciting words—I'm channeling the voices of my ancestors and the dreams of my generation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Fatou Diallo",
      location: "Dakar, Senegal",
      artform: "Traditional & Contemporary Dance",
      quote: "Dance is my language. Through movement, I tell stories of resistance, joy, and the unbreakable spirit of African women.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop",
    },
  ];

  const upcomingEvents = [
    {
      title: "Summer Peace Jam",
      date: "July 10, 2025",
      location: "Lagos, Nigeria",
      description: "A day of music, poetry, and visual art celebrating peace and unity across African communities.",
      link: "/events/summer-peace-jam",
      type: "upcoming" as const,
    },
    {
      title: "Culture Walk",
      date: "August 22, 2025",
      location: "Accra, Ghana",
      description: "An immersive journey through African heritage, featuring traditional crafts, contemporary art, and live performances.",
      link: "/events/culture-walk",
      type: "upcoming" as const,
    },
    {
      title: "Digital Arts Lab",
      date: "September 5, 2025",
      location: "Online",
      description: "Virtual workshop series on digital storytelling, graphic design, and multimedia art creation.",
      link: "/events/digital-arts-lab",
      type: "upcoming" as const,
    },
  ];

  const latestStories = [
    {
      title: "How Dance Helped Heal Our Town",
      excerpt: "In a small community torn by conflict, young dancers found a way to bridge divides and create spaces for dialogue and healing.",
      author: "Sarah Kariuki",
      date: "May 15, 2025",
      category: "Social Justice",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
      slug: "dance-healed-our-town",
    },
    {
      title: "When Clay Teaches Culture: Crafting Identity Through Pottery",
      excerpt: "Traditional pottery workshops are more than art classes—they're lessons in history, identity, and the power of hands that shape both clay and futures.",
      author: "Kwame Asante",
      date: "May 8, 2025",
      category: "Cultural Identity",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      slug: "clay-teaches-culture",
    },
  ];

  return (
    <>
      <Hero
        title="By Youth, For Youth, For One Africa"
        subtitle="Where African youth change stories, build peace, reclaim identity, and transform communities."
        ctaText="Join Our Movement"
        ctaLink="/get-involved"
      />

      {/* Intro Section */}
      <section className="section-padding bg-white kente-pattern">
        <KenteDivider />
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gold mb-6">
              Welcome to Youth4Youth Africa
            </h2>
            <p className="text-lg md:text-xl text-black/80 leading-relaxed">
              By Youth, For Youth, For One Africa. Youth4Youth Africa is where young Africans reclaim stories, rewrite futures, and transform 
              communities. We believe that every voice, every story, every action is a 
              declaration: <strong className="text-red font-bold">We are here. We matter. We create change.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section-padding bg-gradient-to-br from-white via-gold/5 to-green/5">
        <KenteDivider />
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto font-medium">
              Four pillars of empowerment, four pathways to change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.name} {...program} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/programs" className="btn-outline">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="section-padding bg-white">
        <KenteDivider />
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-4">
              Artist Spotlight
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto font-medium">
              Meet the young voices shaping Africa's creative future
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.name} {...artist} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/artists" className="btn-outline">
              Discover More Artists
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-gradient-to-br from-red/5 via-gold/5 to-blue/5">
        <KenteDivider />
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto font-medium">
              Join us for workshops, exhibitions, and celebrations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/events" className="btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Latest Stories
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Real stories of transformation, courage, and hope
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestStories.map((story) => (
              <BlogPostPreview key={story.slug} {...story} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-outline">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Donate */}
      <section className="section-padding bg-kente-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 kente-pattern opacity-20"></div>
        <div className="container-custom text-center relative z-10 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 drop-shadow-lg">
            Support a Young Voice. Fuel a Dream.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-white/95 drop-shadow-md font-medium">
            Your gift helps youth tell their stories, preserve culture, build peace, and create change. 
            Every contribution—no matter the size—amplifies a voice that deserves to be heard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="btn-primary bg-gold text-black hover:bg-gold/90 shadow-2xl">
              Donate Now
            </Link>
            <Link href="/get-involved" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-black shadow-xl">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

