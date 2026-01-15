import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MY AFRICA | Youth4Youth Africa",
  description: "Explore African literature and stories that celebrate our continent's rich heritage, diverse cultures, and powerful narratives.",
};

export default function MyAfrica() {
  const featuredBooks = [
    {
      title: "Voices of the Continent",
      author: "Various Authors",
      description: "A collection of stories, poems, and essays from young African writers across the continent, exploring themes of identity, belonging, and hope.",
      category: "Anthology",
    },
    {
      title: "Tales from the Motherland",
      author: "Amina Hassan",
      description: "Contemporary stories that weave together traditional African folklore with modern narratives, creating a bridge between past and present.",
      category: "Fiction",
    },
    {
      title: "The Youth Chronicles",
      author: "Youth4Youth Contributors",
      description: "Real stories from African youth about their experiences, dreams, challenges, and triumphs across different countries and communities.",
      category: "Non-Fiction",
    },
  ];

  const literatureCategories = [
    {
      name: "Contemporary Fiction",
      description: "Modern stories by African authors exploring contemporary issues and experiences.",
      count: "50+",
    },
    {
      name: "Poetry & Spoken Word",
      description: "Powerful verses and spoken word pieces that capture the essence of African youth voices.",
      count: "100+",
    },
    {
      name: "Historical Narratives",
      description: "Stories that preserve and celebrate African history, traditions, and cultural heritage.",
      count: "30+",
    },
    {
      name: "Social Commentary",
      description: "Essays and articles addressing social issues, justice, and the path forward for Africa.",
      count: "40+",
    },
  ];

  return (
    <>
      <Hero
        title="MY AFRICA"
        subtitle="Celebrating African literature, stories, and voices that shape our continent"
      />

      {/* Introduction */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Stories That Define Us
            </h2>
            <p className="text-lg text-neutralDark/80 leading-relaxed mb-6">
              MY AFRICA is our platform dedicated to celebrating African literature in all its forms. 
              From contemporary fiction to traditional folktales, from poetry to social commentary—we 
              showcase the stories that shape our continent, written by African youth, for African youth, 
              and for the world.
            </p>
            <p className="text-lg text-neutralDark/80 leading-relaxed">
              Literature is more than words on a page. It's a mirror that reflects our reality, a window 
              that opens to new perspectives, and a bridge that connects generations. Through MY AFRICA, 
              we honor the power of storytelling to preserve culture, inspire change, and build understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Literature */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Featured Literature
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Discover powerful stories and voices from across the continent
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <div
                key={index}
                className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary text-neutralLight text-sm font-semibold rounded-full">
                    {book.category}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  {book.title}
                </h3>
                <p className="text-accent font-semibold mb-3">{book.author}</p>
                <p className="text-neutralDark/80 leading-relaxed">{book.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Literature Categories */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Find literature that speaks to you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {literatureCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-neutralDark/10 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-primary">
                    {category.name}
                  </h3>
                  <span className="text-3xl font-display font-bold text-accent">
                    {category.count}
                  </span>
                </div>
                <p className="text-neutralDark/80 leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Work */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Share Your Story
            </h2>
            <p className="text-lg text-neutralDark/80 mb-8 leading-relaxed">
              Are you an African writer, poet, or storyteller? We're always looking for new voices 
              to feature in MY AFRICA. Whether you write fiction, poetry, essays, or non-fiction—we 
              want to hear from you.
            </p>
            <Link href="/contact" className="btn-primary">
              Submit Your Work
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-accent text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Stories Connect Us All
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            Through literature, we preserve our past, understand our present, and imagine our future. 
            Join us in celebrating the power of African stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-secondary">
              Read Articles
            </Link>
            <Link href="/get-involved" className="btn-outline border-neutralLight text-neutralLight hover:bg-neutralLight hover:text-primary">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

