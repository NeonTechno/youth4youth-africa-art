import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkGrey text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold text-yellow mb-4">Youth4Youth Africa</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              By Youth, For Youth, For One Africa
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              A youth network uniting Africa's young people and empowering them through advocacy, education, and opportunities to drive change across the continent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-yellow transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission-vision" className="hover:text-yellow transition-colors duration-300">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-yellow transition-colors duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow transition-colors duration-300">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Publications & Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow">Publications</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-yellow transition-colors duration-300">
                  Weekly Articles
                </Link>
              </li>
              <li>
                <Link href="/sdgs" className="hover:text-yellow transition-colors duration-300">
                  Stories for a Better World (SDGs)
                </Link>
              </li>
              <li>
                <Link href="/my-africa" className="hover:text-yellow transition-colors duration-300">
                  MY AFRICA Series
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-yellow transition-colors duration-300 font-bold">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-yellow">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-yellow transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:youth4youthafrica@gmail.com" className="hover:text-yellow transition-colors duration-300">
                  youth4youthafrica@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-white/90 font-semibold mb-2">
                We are a generation that believes Africa's time is now. Join us.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow/30 pt-8 mt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} Youth4Youth Africa. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/contact" className="hover:text-yellow transition-colors duration-300">
              Privacy Policy
            </Link>
            {" | "}
            <Link href="/contact" className="hover:text-yellow transition-colors duration-300">
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

