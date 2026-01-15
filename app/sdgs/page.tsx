import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STORIES FOR A BETTER WORLD (SDGs) | Youth4Youth Africa",
  description: "Stories and initiatives aligned with the UN Sustainable Development Goals, showcasing how African youth are creating positive change.",
};

export default function SDGs() {
  const sdgGoals = [
    {
      number: "1",
      title: "No Poverty",
      description: "Stories of youth-led initiatives addressing poverty through education, entrepreneurship, and community support.",
      color: "bg-red-600",
    },
    {
      number: "2",
      title: "Zero Hunger",
      description: "Youth initiatives promoting food security, sustainable agriculture, and nutrition programs across African communities.",
      color: "bg-yellow-500",
    },
    {
      number: "3",
      title: "Good Health and Well-being",
      description: "Stories highlighting health awareness campaigns, mental health support, and wellness programs led by young people.",
      color: "bg-green-600",
    },
    {
      number: "4",
      title: "Quality Education",
      description: "Educational initiatives, mentorship programs, and learning opportunities created by and for African youth.",
      color: "bg-red-500",
    },
    {
      number: "5",
      title: "Gender Equality",
      description: "Stories of young women and men working to break down barriers and promote equal opportunities for all.",
      color: "bg-orange-500",
    },
    {
      number: "6",
      title: "Clean Water and Sanitation",
      description: "Youth-led projects ensuring access to clean water and proper sanitation in communities across Africa.",
      color: "bg-blue-500",
    },
    {
      number: "13",
      title: "Climate Action",
      description: "Environmental initiatives, sustainability projects, and climate awareness campaigns driven by African youth.",
      color: "bg-green-700",
    },
    {
      number: "16",
      title: "Peace, Justice and Strong Institutions",
      description: "Stories of youth promoting peace, justice, and building stronger communities and institutions.",
      color: "bg-blue-700",
    },
    {
      number: "17",
      title: "Partnerships for the Goals",
      description: "Collaborative efforts and partnerships that amplify impact and work towards achieving the SDGs together.",
      color: "bg-indigo-600",
    },
  ];

  const featuredStories = [
    {
      title: "Education for All: A Youth-Led Movement",
      sdg: "SDG 4: Quality Education",
      description: "How young volunteers are bringing education to remote communities, one student at a time.",
      author: "Sarah Kariuki",
      date: "May 2025",
    },
    {
      title: "Green Futures: Youth Climate Action",
      sdg: "SDG 13: Climate Action",
      description: "African youth leading tree-planting initiatives and environmental awareness campaigns across the continent.",
      author: "Kwame Asante",
      date: "April 2025",
    },
    {
      title: "Breaking Barriers: Gender Equality in Action",
      sdg: "SDG 5: Gender Equality",
      description: "Stories of young women and men working together to create equal opportunities in education and leadership.",
      author: "Amina Hassan",
      date: "March 2025",
    },
  ];

  return (
    <>
      <Hero
        title="STORIES FOR A BETTER WORLD (SDGs)"
        subtitle="How African youth are contributing to the UN Sustainable Development Goals"
      />

      {/* Introduction */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Youth Leading Change
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              The United Nations Sustainable Development Goals (SDGs) represent a global blueprint for 
              a better, more sustainable future. At Youth4Youth Africa, we believe that African youth are 
              not just beneficiaries of these goals—they are active agents of change, working every day 
              to make these goals a reality in their communities.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              This section showcases stories, initiatives, and projects led by African youth that align with 
              the SDGs. From education and health to climate action and gender equality, these stories 
              demonstrate the power of youth-led change and inspire others to take action.
            </p>
          </div>
        </div>
      </section>

      {/* Featured SDG Stories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Featured Stories
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Real stories of youth-led initiatives making a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <div
                key={index}
                className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary text-neutralLight text-sm font-semibold rounded-full">
                    {story.sdg}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  {story.title}
                </h3>
                <p className="text-neutralDark/80 leading-relaxed mb-4">{story.description}</p>
                <div className="text-sm text-neutralDark/60">
                  <p className="font-semibold">{story.author}</p>
                  <p>{story.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals Grid */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Explore how we're contributing to the Sustainable Development Goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgGoals.map((goal) => (
              <div
                key={goal.number}
                className="bg-white rounded-lg p-6 border border-neutralDark/10 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 ${goal.color} text-neutralLight rounded-full flex items-center justify-center text-2xl font-bold mr-4`}>
                    {goal.number}
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary">
                    {goal.title}
                  </h3>
                </div>
                <p className="text-neutralDark/80 leading-relaxed text-sm">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Share Your SDG Story
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
              Are you working on a project that aligns with the Sustainable Development Goals? 
              We want to hear your story! Share how you're making a difference in your community, 
              and inspire others to take action.
            </p>
            <Link href="/contact" className="btn-primary">
              Submit Your Story
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Together, We Build a Better World
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            The Sustainable Development Goals are not just targets—they're a call to action. 
            African youth are answering that call every day, in communities across the continent. 
            Join us in celebrating and supporting these efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved" className="btn-secondary">
              Get Involved
            </Link>
            <Link href="/blog" className="btn-outline border-neutralLight text-neutralLight hover:bg-neutralLight hover:text-primary">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

