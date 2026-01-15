import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery & Showcase | Youth4Youth Africa Art",
  description: "Explore our collection of visual art, performance, digital art, and poetry created by African youth artists.",
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Art" },
    { id: "visual", label: "Visual Art" },
    { id: "performance", label: "Performance" },
    { id: "digital", label: "Digital Art" },
    { id: "poetry", label: "Poetry" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Mural of Justice",
      artist: "Aisha Mwangi",
      category: "visual",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
      description: "A powerful mural addressing gender-based violence in Nairobi",
    },
    {
      id: 2,
      title: "Ancestral Echoes",
      artist: "Emmanuel Okonkwo",
      category: "poetry",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=600&fit=crop",
      description: "Spoken word performance connecting past and present",
    },
    {
      id: 3,
      title: "Digital Futures",
      artist: "Kwame Asante",
      category: "digital",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop",
      description: "Animated vision of African technological innovation",
    },
    {
      id: 4,
      title: "Dance of Generations",
      artist: "Fatou Diallo",
      category: "performance",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
      description: "Contemporary dance honoring traditional movements",
    },
    {
      id: 5,
      title: "Heritage Reimagined",
      artist: "Amara Diallo",
      category: "visual",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      description: "Traditional textile patterns in modern contexts",
    },
    {
      id: 6,
      title: "Urban Stories",
      artist: "Zara Hassan",
      category: "visual",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=600&fit=crop",
      description: "Photography series documenting youth life in Kampala",
    },
    {
      id: 7,
      title: "Resistance Rhythms",
      artist: "Thabo Mthembu",
      category: "poetry",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=600&fit=crop",
      description: "Poetry collection on social justice and change",
    },
    {
      id: 8,
      title: "Virtual Realities",
      artist: "Kwame Asante",
      category: "digital",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=600&fit=crop",
      description: "VR experience exploring African mythology",
    },
    {
      id: 9,
      title: "Movement of Hope",
      artist: "Fatou Diallo",
      category: "performance",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=600&fit=crop",
      description: "Dance performance celebrating resilience",
    },
  ];

  return (
    <>
      <Hero
        title="See Our Stories"
        subtitle="A showcase of art, expression, and transformation from African youth"
      />
      <GalleryContent />
      
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-indigo text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Want Your Art Featured?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            We're always looking for new voices to showcase. Submit your work to be featured in our gallery.
          </p>
          <Link href="/contact" className="btn-secondary">
            Submit Your Art
          </Link>
        </div>
      </section>
    </>
  );
}

