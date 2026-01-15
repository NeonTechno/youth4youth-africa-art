import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Youth4Youth Africa Art",
  description: "Learn about Youth4Youth Africa Art—a youth-led nonprofit empowering African youth through art, creativity, and community engagement.",
};

export default function About() {
  const teamMembers = [
    {
      name: "Emmanuel Osei",
      role: "Co-Founder & Director",
      location: "Kampala, Uganda",
      quote: "Art is where I find my voice. It's where I discovered that my story matters, and that I can use creativity to change my community.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    },
    {
      name: "Fatou Sall",
      role: "Program Coordinator",
      location: "Dakar, Senegal",
      quote: "When I write, I root in tradition. Poetry connects me to my ancestors while giving me the power to shape tomorrow.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    },
    {
      name: "Amina Hassan",
      role: "Community Engagement Lead",
      location: "Nairobi, Kenya",
      quote: "Every workshop, every exhibition, every conversation—we're building bridges. Art is our common language.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
  ];

  const impactStats = [
    { number: "12", label: "Workshops in 2025" },
    { number: "50+", label: "Youth Artists Mentored" },
    { number: "3", label: "Exhibitions Across Africa" },
    { number: "1,000+", label: "Lives Touched" },
  ];

  return (
    <>
      <Hero
        title="Our Story, Our Heart"
        subtitle="A youth-led movement born from the belief that art transforms lives and communities"
      />

      {/* Who We Are */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none text-neutralDark/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Youth4Youth Africa Art began with a simple belief: <strong className="text-primary">Africa's future is in the hands of its youth, and art is the language they know best.</strong>
              </p>
              <p>
                Founded in 2020 by young artists who dared to share their truths, we are a youth-led nonprofit 
                rooted in African soil, reaching across continents. We started as a small group of friends—painters, 
                poets, dancers, digital artists—who refused to wait for permission to create change.
              </p>
              <p>
                What began as local workshops in Kampala has grown into a movement spanning East, West, and Southern 
                Africa. We've learned that when you give young people the tools, the platform, and the community, 
                they don't just create art—they create transformation.
              </p>
              <p>
                Today, Youth4Youth Africa Art is more than an organization. We're a family of creators, storytellers, 
                and changemakers. We're the mural that speaks truth to power. The poem that heals. The dance that 
                unites. The digital art that reimagines the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
              How We Work
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-display font-bold text-primary mb-3">We Listen First</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  Before we design programs, we listen. We sit with communities, hear their stories, understand 
                  their needs. Our work is not imposed—it's co-created with the youth we serve.
                </p>
              </div>
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-display font-bold text-accent mb-3">We Guide, Not Dictate</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  We provide mentorship, resources, and platforms—but we trust young artists to find their own 
                  voices. Our role is to remove barriers, not to shape the message.
                </p>
              </div>
              <div className="border-l-4 border-green pl-6">
                <h3 className="text-2xl font-display font-bold text-green mb-3">We Build Community</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  Art thrives in community. We create spaces—physical and digital—where young artists can connect, 
                  collaborate, and support each other. Together, we're stronger.
                </p>
              </div>
              <div className="border-l-4 border-indigo pl-6">
                <h3 className="text-2xl font-display font-bold text-indigo mb-3">We Partner Widely</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  We work with communities, elders, funders, other NGOs, and institutions. Change requires 
                  collaboration, and we're committed to building bridges across sectors and generations.
                </p>
              </div>
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-display font-bold text-gold mb-3">We Give Access</h3>
                <p className="text-neutralDark/80 leading-relaxed">
                  Materials. Mentors. Platforms. Stories. We believe that talent is everywhere, but opportunity 
                  is not. We work to level the playing field, ensuring that every young artist has a chance to shine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Youth Voices Leading
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Meet some of the young leaders driving our movement forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center border border-neutralDark/10">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-neutralDark/60 mb-4">{member.location}</p>
                <p className="text-neutralDark/80 italic">"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Numbers tell part of the story. The real impact is in the lives changed, voices amplified, and communities transformed.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-neutralDark/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutralDark/80 mb-8">
              But impact isn't just about numbers. It's about Aisha, whose murals sparked conversations about 
              gender-based violence. It's about Emmanuel, whose poetry gave voice to his community's struggles. 
              It's about Fatou, whose dance brought healing to a divided town. It's about every young artist 
              who discovered their power through creativity.
            </p>
            <p className="text-lg text-neutralDark/80">
              We're grateful to our partners—funders, communities, institutions, and individuals—who believe 
              in the power of youth-led change. Together, we're building a future where art is recognized as 
              a force for transformation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-indigo text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            Whether you're an artist, a supporter, a partner, or someone who believes in the power of youth 
            and art—there's a place for you here.
          </p>
          <Link href="/get-involved" className="btn-secondary">
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}

