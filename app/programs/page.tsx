import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs & Initiatives | Youth4Youth Africa Art",
  description: "Explore our programs: Creative Echoes, Voices Unchained, Canvas of Cultures, and Digital Generation—empowering African youth through art.",
};

export default function Programs() {
  const programs = [
    {
      name: "Creative Echoes",
      description: "Our flagship mentorship program connects emerging artists with established mentors across all art forms. Through workshops, one-on-one guidance, and exhibition opportunities, we help young creatives develop their skills, find their voice, and build sustainable careers in the arts. Creative Echoes has launched the careers of over 30 young artists who now exhibit internationally and mentor the next generation.",
      link: "/programs#creative-echoes",
      icon: "🎨",
      details: [
        "6-month mentorship cycles with industry professionals",
        "Monthly workshops on technique, business, and storytelling",
        "Annual group exhibitions in major African cities",
        "Access to materials, studio space, and digital tools",
        "Networking events with galleries, collectors, and media",
      ],
    },
    {
      name: "Voices Unchained",
      description: "Spoken word and poetry training programs that empower youth to tell their stories, confront injustice, and celebrate their heritage through words. We believe that poetry is a tool of resistance and healing. Voices Unchained has created safe spaces for over 200 young poets to perform, publish, and connect with audiences across the continent.",
      link: "/programs#voices-unchained",
      icon: "📝",
      details: [
        "Weekly poetry workshops in local languages and English",
        "Open mic nights and slam competitions",
        "Publishing opportunities in our digital magazine",
        "Collaboration with schools and community centers",
        "Annual Voices Unchained Festival featuring top performers",
      ],
    },
    {
      name: "Canvas of Cultures",
      description: "Projects that revive heritage and tradition through visual arts. We explore how traditional techniques—from mud cloth to beadwork, from pottery to textile design—meet contemporary expression. Canvas of Cultures bridges generations, preserving knowledge while encouraging innovation. Over 15 communities have participated in our heritage art projects.",
      link: "/programs#canvas-of-cultures",
      icon: "🖼️",
      details: [
        "Master classes with traditional artisans and contemporary artists",
        "Community-based projects celebrating local heritage",
        "Documentation of traditional techniques and stories",
        "Exhibitions showcasing the evolution of African art forms",
        "Partnerships with museums and cultural institutions",
      ],
    },
    {
      name: "Digital Generation",
      description: "Digital art, design, and performance tools that uplift. We equip youth with skills for the digital age—from graphic design to video production, from digital painting to virtual reality experiences—while preserving cultural narratives. Digital Generation has trained over 100 young creators in digital tools and platforms.",
      link: "/programs#digital-generation",
      icon: "💻",
      details: [
        "Intensive digital skills bootcamps",
        "Access to design software, cameras, and equipment",
        "Online portfolio development and marketing training",
        "Collaboration with tech companies and digital platforms",
        "Virtual exhibitions and online performance spaces",
      ],
    },
  ];

  const impactMetrics = [
    { number: "50+", label: "Youth Artists Mentored Annually" },
    { number: "12", label: "Workshops & Events Per Year" },
    { number: "15+", label: "Communities Reached" },
    { number: "200+", label: "Poets & Performers Supported" },
  ];

  return (
    <>
      <Hero
        title="Programs Forged in Creativity"
        subtitle="Four pathways to empowerment, expression, and change"
      />

      {/* Programs Overview */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Our Programs
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Each program is designed to meet young artists where they are, providing the tools, 
              community, and platform they need to thrive. We believe in holistic support—not just 
              teaching technique, but building confidence, community, and careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.name}
                id={program.name.toLowerCase().replace(/\s+/g, "-")}
                className="bg-white rounded-lg shadow-lg p-8 border border-neutralDark/10"
              >
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">{program.icon}</div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-3">
                      {program.name}
                    </h3>
                    <p className="text-neutralDark/80 leading-relaxed mb-4">
                      {program.description}
                    </p>
                  </div>
                </div>
                <div className="border-t border-neutralDark/10 pt-4">
                  <h4 className="font-semibold text-primary mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-neutralDark/80">
                        <span className="text-accent mr-2">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Real numbers, real lives changed
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {metric.number}
                </div>
                <div className="text-neutralDark/70 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
              Whether you're a painter, poet, dancer, digital artist, or someone just discovering 
              your creative voice—we have a program for you. Our programs are open to African youth 
              aged 16-30, regardless of prior experience or formal training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved" className="btn-primary">
                Join a Program
              </Link>
              <Link href="/contact" className="btn-outline">
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Voices from Our Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10">
              <p className="text-neutralDark/80 italic mb-4">
                "Creative Echoes didn't just teach me to paint—it taught me that my story matters. 
                My mentor believed in me when I didn't believe in myself."
              </p>
              <p className="font-semibold text-primary">— Kemi Adeyemi, Visual Artist</p>
            </div>
            <div className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10">
              <p className="text-neutralDark/80 italic mb-4">
                "Through Voices Unchained, I found my voice and my community. Now I perform at 
                festivals across Africa, and I mentor other young poets."
              </p>
              <p className="font-semibold text-primary">— Thabo Mthembu, Poet</p>
            </div>
            <div className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10">
              <p className="text-neutralDark/80 italic mb-4">
                "Canvas of Cultures connected me with my grandmother's craft traditions. I'm now 
                creating contemporary pieces that honor our heritage while speaking to today."
              </p>
              <p className="font-semibold text-primary">— Amara Diallo, Textile Artist</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

