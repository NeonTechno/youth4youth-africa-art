import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved | Youth4Youth Africa Art",
  description: "Join us as a member, volunteer, or partner. Your talent, your power, our movement.",
};

export default function GetInvolved() {
  return (
    <>
      <Hero
        title="Your Talent. Your Power. Our Movement."
        subtitle="There are many ways to be part of Youth4Youth Africa Art"
      />

      {/* Join Us */}
      <section id="join" className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Join Us
              </h2>
              <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
                Become part of our community of young African artists and changemakers
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-neutralDark/10">
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    Who Can Join?
                  </h3>
                  <p className="text-neutralDark/80 mb-4">
                    We welcome African youth aged 16-30 who are passionate about art, creativity, 
                    and social change. You don't need formal training or prior experience—just 
                    the desire to create, learn, and grow.
                  </p>
                  <ul className="space-y-2 text-neutralDark/80">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>All art forms welcome (visual, performance, digital, poetry, and more)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Open to artists at all skill levels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>No membership fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Access to workshops, mentorship, and exhibition opportunities</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    How to Join
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-neutralLight rounded-full flex items-center justify-center font-bold mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Fill Out Our Form</h4>
                        <p className="text-neutralDark/80">
                          Tell us about yourself, your art, and what you hope to gain from being part of our community.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-neutralLight rounded-full flex items-center justify-center font-bold mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Attend an Orientation</h4>
                        <p className="text-neutralDark/80">
                          Join us for a virtual or in-person orientation to learn about our programs and meet other members.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary text-neutralLight rounded-full flex items-center justify-center font-bold mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Start Creating</h4>
                        <p className="text-neutralDark/80">
                          Begin participating in workshops, connect with mentors, and share your work with the community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/contact" className="btn-primary">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Volunteer
              </h2>
              <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
                Give your time, skills, and passion to support young artists
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10">
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  Workshop Facilitator
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Lead workshops in your area of expertise—whether it's painting, poetry, digital art, or any other medium.
                </p>
                <ul className="space-y-2 text-sm text-neutralDark/70">
                  <li>• 2-4 hours per workshop</li>
                  <li>• Flexible scheduling</li>
                  <li>• Training provided</li>
                </ul>
              </div>
              <div className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10">
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  Mentor
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Provide one-on-one guidance to emerging artists, helping them develop their skills and navigate their careers.
                </p>
                <ul className="space-y-2 text-sm text-neutralDark/70">
                  <li>• 1-2 hours per month</li>
                  <li>• Virtual or in-person</li>
                  <li>• Long-term commitment</li>
                </ul>
              </div>
              <div className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10">
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  Event Support
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Help organize and run events—from exhibitions to performances to community gatherings.
                </p>
                <ul className="space-y-2 text-sm text-neutralDark/70">
                  <li>• Event-based commitment</li>
                  <li>• Various roles available</li>
                  <li>• Great for groups</li>
                </ul>
              </div>
              <div className="bg-neutralLight rounded-lg p-6 border border-neutralDark/10">
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  Digital Support
                </h3>
                <p className="text-neutralDark/80 mb-4">
                  Help with social media, website maintenance, graphic design, video editing, or other digital needs.
                </p>
                <ul className="space-y-2 text-sm text-neutralDark/70">
                  <li>• Remote-friendly</li>
                  <li>• Flexible hours</li>
                  <li>• Skill-based</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="btn-outline">
                Volunteer Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Partner With Us
              </h2>
              <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
                Organizations, institutions, and funders—let's create change together
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-neutralDark/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    For NGOs & Community Organizations
                  </h3>
                  <p className="text-neutralDark/80 mb-4">
                    Partner with us to bring art programs to your community. We provide expertise, 
                    materials, and facilitators—you provide the space and community connection.
                  </p>
                  <ul className="space-y-2 text-neutralDark/80">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Co-designed programs tailored to your community's needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Access to our network of artists and facilitators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Joint fundraising and resource sharing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    For Funders & Donors
                  </h3>
                  <p className="text-neutralDark/80 mb-4">
                    Your support directly impacts young artists' lives. We offer various partnership 
                    levels and can customize programs to align with your funding priorities.
                  </p>
                  <ul className="space-y-2 text-neutralDark/80">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Transparent reporting on impact and outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Opportunities to engage directly with artists and programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Recognition and visibility for your support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    For Educational Institutions
                  </h3>
                  <p className="text-neutralDark/80 mb-4">
                    Bring our programs to your school or university. We offer workshops, residencies, 
                    and curriculum support that complement formal education.
                  </p>
                  <ul className="space-y-2 text-neutralDark/80">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Workshops and masterclasses for students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Artist residencies and guest lectures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>Internship and mentorship opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/contact" className="btn-primary">
                  Discuss Partnership
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-green to-indigo text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join the Family
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            Whether you're an artist, a supporter, a volunteer, or a partner—there's a place for you 
            in our movement. Together, we're creating a future where every young African artist can thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Get Started
            </Link>
            <Link href="/donate" className="btn-outline border-neutralLight text-neutralLight hover:bg-neutralLight hover:text-primary">
              Support Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

