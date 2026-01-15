"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GalleryContent() {
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

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="section-padding bg-neutralLight">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeFilter === category.id
                  ? "bg-primary text-neutralLight"
                  : "bg-white text-neutralDark hover:bg-primary/10 border border-neutralDark/20"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`/gallery/${item.id}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutralDark/10"
            >
              <div className="relative w-full h-64 bg-gradient-to-br from-primary to-accent">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-accent font-semibold mb-2">{item.artist}</p>
                <p className="text-neutralDark/70 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

