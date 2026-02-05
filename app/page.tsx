import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Youth4Youth Africa",
  description: "By Youth, For Youth, For One Africa. A youth network uniting Africa's young people and empowering them through advocacy, education, and opportunities to drive change across the continent.",
};

export default function Home() {
  const programs = [
    {
      name: "Education Access & Innovation",
      description: "Bridging opportunity gaps through innovative educational programs and digital learning solutions.",
      programs: ["Class2Go", "Unfold Africa"],
      icon: "📚",
    },
    {
      name: "Climate Action & Environmental Education",
      description: "Empowering youth to lead climate action and environmental stewardship in their communities.",
      programs: ["Little Green Voices", "The Almajiri Climate Story"],
      icon: "🌱",
    },
    {
      name: "Gender Equality & Women's Empowerment",
      description: "Advocating for gender equality and creating opportunities for women and girls across Africa.",
      programs: ["Below Her Tray", "Café Féministe"],
      icon: "⚖️",
    },
    {
      name: "Peacebuilding & Youth Leadership",
      description: "Building peace through youth leadership, dialogue, and community engagement initiatives.",
      programs: ["Youth Leadership Programs", "Peacebuilding Workshops"],
      icon: "🤝",
    },
  ];

  const publications = [
    {
      title: "Weekly Articles",
      subtitle: "Voices for Change",
      description: "Regular thought leadership articles and insights from youth advocates across the continent.",
      link: "/blog",
    },
    {
      title: "Stories for a Better World",
      subtitle: "SDGs Series",
      description: "Inspiring stories aligned with the United Nations Sustainable Development Goals.",
      example: "Tari and the Market Full of Hope (SDG 1)",
      link: "/sdgs",
    },
    {
      title: "MY AFRICA Series",
      subtitle: "Reclaiming our past to redefine our future",
      description: "A powerful series exploring African identity, history, and the future we're building together.",
      link: "/my-africa",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="By Youth, For Youth, For One Africa"
        subtitle="A youth network uniting Africa's young people and empowering them through advocacy, education, and opportunities to drive change across the continent."
        ctaText="Join the Network"
        ctaLink="/get-involved"
        showStats={true}
      />

      {/* Mission & Vision Snapshot */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-yellow/10 rounded-lg p-8 border-l-4 border-yellow">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-darkGrey leading-relaxed">
                To bridge opportunity gaps through education, climate action, advocacy, and innovation led by young people.
              </p>
            </div>
            <div className="bg-darkGrey/5 rounded-lg p-8 border-l-4 border-darkGrey">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-4">
                Our Vision
            </h2>
              <p className="text-lg text-darkGrey leading-relaxed">
                An Africa where young people are recognized as decision-makers of today, not just leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Programs & Pillars */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-black mb-4">
              What We Do
            </h2>
            <p className="text-lg text-darkGrey/70 max-w-2xl mx-auto">
              Four pillars of empowerment driving change across Africa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border-2 border-darkGrey/10 rounded-lg p-8 hover:border-yellow transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="text-4xl mr-4">{program.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-black mb-3">
                      {program.name}
                    </h3>
                    <p className="text-darkGrey/80 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="border-t border-darkGrey/10 pt-4">
                      <p className="text-sm font-semibold text-darkGrey mb-2">Programs:</p>
                      <ul className="space-y-1">
                        {program.programs.map((prog, idx) => (
                          <li key={idx} className="text-darkGrey/70 flex items-center">
                            <span className="text-yellow mr-2">•</span>
                            {prog}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/programs" className="btn-outline border-2 border-yellow text-yellow hover:bg-yellow hover:text-black">
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Publications & Thought Leadership */}
      <section className="section-padding bg-darkGrey/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-black mb-4">
              Our Publications
            </h2>
            <p className="text-lg text-darkGrey/70 max-w-2xl mx-auto font-medium">
              Storytelling for Change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border-2 border-darkGrey/10 hover:border-yellow transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-display font-bold text-black mb-2">
                  {pub.title}
                </h3>
                {pub.subtitle && (
                  <p className="text-yellow font-semibold mb-4">{pub.subtitle}</p>
                )}
                <p className="text-darkGrey/80 leading-relaxed mb-4">
                  {pub.description}
                </p>
                {pub.example && (
                  <p className="text-sm text-darkGrey/60 italic mb-4">
                    Example: "{pub.example}"
                  </p>
                )}
                <Link
                  href={pub.link}
                  className="text-yellow font-semibold hover:underline inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </Link>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="section-padding bg-yellow">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-black mb-6">
                Our Philosophy
            </h2>
              <blockquote className="text-lg md:text-xl text-darkGrey leading-relaxed italic">
                "We don't believe in charity, we believe in capacity.
                <br />
                We don't wait for opportunities, we create them.
                <br />
                We don't speak for young people — we amplify their voices."
              </blockquote>
          </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-darkGrey text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            We are a generation that believes Africa's time is now.
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            Join us in building an Africa where young people lead change, create opportunities, and shape the future.
          </p>
          <Link
            href="/get-involved"
            className="btn-primary bg-yellow text-black hover:bg-yellowAlt text-lg md:text-xl px-10 py-5 inline-block"
          >
            Join the Network
            </Link>
        </div>
      </section>
    </>
  );
}
