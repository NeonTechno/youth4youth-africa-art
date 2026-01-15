import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mission & Vision | Youth4Youth Africa Art",
  description: "Our mission is to empower African youth through art. Our vision is a continent where every young artist has a stage and art transforms communities.",
};

export default function MissionVision() {
  const values = [
    {
      title: "Courage",
      description: "Standing up, speaking out, creating even when it's hard. We believe that art requires bravery—the courage to be vulnerable, to challenge norms, to demand change.",
      icon: "🦁",
    },
    {
      title: "Authenticity",
      description: "Rooted in our true selves, telling our real stories. We reject the pressure to perform for others. Our art comes from who we are, where we're from, what we've lived.",
      icon: "💎",
    },
    {
      title: "Community",
      description: "Together we rise. Art is not a solo journey—it's a collective act. We build networks, support each other, celebrate together, struggle together, grow together.",
      icon: "🤝",
    },
    {
      title: "Creativity",
      description: "Boundary-breaking, tradition-honoring, future-shaping art. We embrace all forms of expression and encourage innovation while respecting heritage.",
      icon: "✨",
    },
    {
      title: "Hope",
      description: "The art of possibility. Even in the darkest moments, we create. We believe in a better future, and we're building it—one brushstroke, one verse, one movement at a time.",
      icon: "🌟",
    },
  ];

  return (
    <>
      <Hero
        title="Mission & Vision"
        subtitle="What drives us, what we're building toward"
      />

      {/* Mission */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Our Mission
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-primary">
              <p className="text-xl md:text-2xl leading-relaxed text-neutralDark/90 font-medium mb-6">
                We exist to <strong className="text-primary">empower African youth to express, to connect, to heal—with art.</strong>
              </p>
              <div className="space-y-4 text-lg text-neutralDark/80">
                <p>
                  To reclaim narratives that have been stolen, distorted, or silenced. To bridge divides—generational, 
                  cultural, political—through the universal language of creativity.
                </p>
                <p>
                  To confront injustice with the power of story, image, and movement. To celebrate culture in all its 
                  richness, complexity, and beauty.
                </p>
                <p>
                  To build peace not through speeches, but through shared creation. To create spaces where every young 
                  person—regardless of background, gender, ability, or circumstance—can discover their voice and use it 
                  to shape their world.
                </p>
                <p className="font-semibold text-primary mt-6">
                  We believe that art is not a luxury. It's a necessity. It's a tool for survival, for resistance, 
                  for transformation, for joy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Our Vision
              </h2>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg shadow-lg p-8 md:p-12 border-l-4 border-accent">
              <p className="text-xl md:text-2xl leading-relaxed text-neutralDark/90 font-medium mb-6">
                We dream of a continent where <strong className="text-primary">every young artist has a stage.</strong>
              </p>
              <div className="space-y-4 text-lg text-neutralDark/80">
                <p>
                  Where art is recognized as essential infrastructure—as vital as schools, hospitals, and roads. 
                  Where communities invest in creativity because they understand its power to heal, to unite, to transform.
                </p>
                <p>
                  Where heritage is honored and innovation is embraced. Where traditional techniques meet digital tools, 
                  where ancient stories find new forms, where the past and future dance together.
                </p>
                <p>
                  Where art fosters peace—not as a temporary pause, but as a lasting foundation. Where conflicts are 
                  resolved through dialogue, creativity, and shared humanity.
                </p>
                <p>
                  Where justice is not just a concept, but a reality shaped by the voices of those who have been silenced. 
                  Where every story matters, every perspective is valued, every voice is heard.
                </p>
                <p>
                  Where belonging is not conditional. Where young people—especially those on the margins—find community, 
                  purpose, and power through their creative expression.
                </p>
                <p className="font-semibold text-primary mt-6">
                  We envision an Africa where youth don't wait for permission to create change. They create it. 
                  They lead it. They live it—through art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg shadow-md p-6 border border-neutralDark/10 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-neutralDark/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-green to-indigo text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            See Our Work in Action
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            Our mission and vision come alive through our programs, our artists, and our communities. 
            Explore how we're turning these ideals into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="btn-secondary">
              Explore Programs
            </Link>
            <Link href="/artists" className="btn-outline border-neutralLight text-neutralLight hover:bg-neutralLight hover:text-primary">
              Meet Our Artists
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

