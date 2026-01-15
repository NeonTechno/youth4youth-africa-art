import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery & Showcase | Youth4Youth Africa",
  description: "Explore our collection of visual art, performance, digital art, and poetry created by African youth artists.",
};

export default function Gallery() {
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

