import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ArtistCard from "@/components/ArtistCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artists & Youth Voices | Youth4Youth Africa",
  description: "Meet the young African artists and voices shaping our movement. Discover their stories, their art, and their impact.",
};

export default function Artists() {
  const featuredArtists = [
    {
      name: "Aisha Mwangi",
      location: "Nairobi, Kenya",
      artform: "Graffiti & Mural Art",
      quote: "My graffiti murals turned vacant walls into powerful calls against gender-based violence. Art speaks when words fail.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      link: "/artists/aisha-mwangi",
    },
    {
      name: "Emmanuel Okonkwo",
      location: "Lagos, Nigeria",
      artform: "Spoken Word Poetry",
      quote: "When I perform, I'm not just reciting words—I'm channeling the voices of my ancestors and the dreams of my generation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      link: "/artists/emmanuel-okonkwo",
    },
    {
      name: "Fatou Diallo",
      location: "Dakar, Senegal",
      artform: "Traditional & Contemporary Dance",
      quote: "Dance is my language. Through movement, I tell stories of resistance, joy, and the unbreakable spirit of African women.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop",
      link: "/artists/fatou-diallo",
    },
    {
      name: "Kwame Asante",
      location: "Accra, Ghana",
      artform: "Digital Art & Animation",
      quote: "I use digital tools to reimagine African futures. My animations blend traditional stories with sci-fi visions of what's possible.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      link: "/artists/kwame-asante",
    },
    {
      name: "Zara Hassan",
      location: "Kampala, Uganda",
      artform: "Photography & Visual Storytelling",
      quote: "My camera captures moments that history books miss. I document the everyday beauty, struggle, and resilience of African youth.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      link: "/artists/zara-hassan",
    },
    {
      name: "Thabo Mthembu",
      location: "Johannesburg, South Africa",
      artform: "Poetry & Performance",
      quote: "Poetry is my weapon and my healing. I write to confront, to comfort, to connect. Every verse is a bridge between hearts.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      link: "/artists/thabo-mthembu",
    },
  ];

  const artistQuotes = [
    {
      quote: "Art gave me a voice when I felt voiceless. Now I use it to amplify others.",
      author: "Kemi Adeyemi",
      location: "Lagos, Nigeria",
    },
    {
      quote: "Through Youth4Youth, I found my community. We're not just artists—we're family.",
      author: "Amara Diallo",
      location: "Dakar, Senegal",
    },
    {
      quote: "Every piece I create is a love letter to my ancestors and a promise to future generations.",
      author: "David Ochieng",
      location: "Nairobi, Kenya",
    },
  ];

  return (
    <>
      <Hero
        title="Voices Rising"
        subtitle="Meet the young artists shaping Africa's creative future"
      />

      {/* Featured Artists */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Featured Artists
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              These are the voices, the visions, the changemakers. Each artist brings their unique 
              perspective, their story, their power to our movement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArtists.map((artist) => (
              <ArtistCard key={artist.name} {...artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Voices in Their Words */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Voices in Their Words
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Real quotes from real artists about what art means to them
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artistQuotes.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 border-l-4 border-primary"
              >
                <p className="text-xl text-neutralDark/90 italic mb-6 leading-relaxed">
                  "{item.quote}"
                </p>
                <div>
                  <p className="font-semibold text-primary">{item.author}</p>
                  <p className="text-sm text-neutralDark/60">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Voice */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 border border-neutralDark/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Share Your Voice
              </h2>
              <p className="text-lg text-neutralDark/80 leading-relaxed">
                Are you a young African artist? Do you have a story to tell, art to share, a voice 
                that needs to be heard? We want to feature you.
              </p>
            </div>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  Open Call for Artists
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  We're always looking for new voices to amplify. Whether you're a visual artist, 
                  poet, performer, digital creator, or work in any other medium—we want to hear from you.
                </p>
                <ul className="space-y-2 text-neutralDark/80">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>All art forms welcome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Open to African youth aged 16-30</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>No prior exhibition or publication required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span>Selected artists featured on our website and social media</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <Link href="/contact" className="btn-primary">
                Submit Your Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Poetry Excerpts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Poetry & Spoken Word
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Excerpts from our poets and spoken word artists
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-neutralLight rounded-lg p-8 border-l-4 border-accent">
              <p className="text-lg text-neutralDark/90 italic leading-relaxed mb-4">
                "I am the child of the soil<br />
                Who speaks in colors the world cannot ignore<br />
                My brush is my tongue<br />
                My canvas, the walls of my city<br />
                I paint until justice is not a dream<br />
                But a mural on every street"
              </p>
              <p className="font-semibold text-primary">— Aisha Mwangi, "Mural of Justice"</p>
            </div>
            <div className="bg-neutralLight rounded-lg p-8 border-l-4 border-green">
              <p className="text-lg text-neutralDark/90 italic leading-relaxed mb-4">
                "In the rhythm of my feet<br />
                I carry the stories of my grandmother<br />
                In the sway of my hips<br />
                I honor the strength of my mother<br />
                In the leap of my body<br />
                I claim the future of my daughter"
              </p>
              <p className="font-semibold text-primary">— Fatou Diallo, "Dance of Generations"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-indigo to-primary text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join Our Community of Artists
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            Whether you're just starting your artistic journey or you're ready to take your work 
            to the next level, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="btn-secondary">
              Get Involved
            </Link>
            <Link href="/gallery" className="btn-outline border-neutralLight text-neutralLight hover:bg-neutralLight hover:text-primary">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

