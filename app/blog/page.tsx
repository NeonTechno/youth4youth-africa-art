import type { Metadata } from "next";
import Hero from "@/components/Hero";
import BlogPostPreview from "@/components/BlogPostPreview";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories & Blog | Youth4Youth Africa Art",
  description: "Read stories of transformation, courage, and hope from African youth artists and our community.",
};

export default function Blog() {
  const blogPosts = [
    {
      title: "How Dance Helped Heal Our Town",
      excerpt: "In a small community torn by conflict, young dancers found a way to bridge divides and create spaces for dialogue and healing. This is the story of how movement became medicine.",
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
    {
      title: "The Mural That Started a Movement",
      excerpt: "One wall, one artist, one message. How a single mural in Nairobi sparked conversations about gender-based violence and inspired a city-wide art campaign.",
      author: "Aisha Mwangi",
      date: "April 22, 2025",
      category: "Art & Activism",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      slug: "mural-started-movement",
    },
    {
      title: "Digital Art in the Age of Connection",
      excerpt: "How young African digital artists are using technology to preserve traditions, tell contemporary stories, and build global communities—all from their laptops.",
      author: "Kwame Asante",
      date: "April 10, 2025",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      slug: "digital-art-connection",
    },
    {
      title: "Poetry as Resistance: Voices from the Margins",
      excerpt: "Young poets across Africa are using spoken word to challenge injustice, demand change, and create spaces where their voices cannot be ignored.",
      author: "Thabo Mthembu",
      date: "March 28, 2025",
      category: "Poetry",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
      slug: "poetry-as-resistance",
    },
    {
      title: "Building Bridges: Art Across Generations",
      excerpt: "How our Canvas of Cultures program connects young artists with traditional artisans, creating dialogue between past and present, elders and youth.",
      author: "Amara Diallo",
      date: "March 15, 2025",
      category: "Community",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      slug: "building-bridges-generations",
    },
  ];

  const categories = ["All", "Social Justice", "Cultural Identity", "Art & Activism", "Digital Art", "Poetry", "Community"];

  return (
    <>
      <Hero
        title="Stories That Move"
        subtitle="Real stories of transformation, courage, and hope from our community"
      />

      {/* Blog Posts */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Latest Stories
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Stories from our artists, our programs, and our communities
            </p>
          </div>
          
          {/* Category Filter (optional, can be made interactive later) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-neutralDark/70 border border-neutralDark/20"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostPreview key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Submit a Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Share Your Story
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
              Have a story to tell? We're always looking for new voices to feature. Whether it's 
              about your artistic journey, a community project, or how art has transformed your life—we want to hear it.
            </p>
            <Link href="/contact" className="btn-primary">
              Submit Your Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

