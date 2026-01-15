"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/mission-vision", label: "Mission & Vision" },
    { href: "/programs", label: "Programs" },
    { href: "/artists", label: "Artists & Voices" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "ARTICLES" },
    { href: "/my-africa", label: "MY AFRICA" },
    { href: "/sdgs", label: "STORIES FOR A BETTER WORLD (SDGs)" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-neutralDark text-neutralLight sticky top-0 z-50 shadow-lg">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-display font-bold text-accent hover:text-gold transition-colors">
            Youth4Youth Africa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="btn-secondary ml-4"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutralLight/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-accent transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="btn-secondary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

