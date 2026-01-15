import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate & Support | Youth4Youth Africa Art",
  description: "Support African youth artists. Your donation helps provide materials, mentorship, platforms, and opportunities for young creatives.",
};

export default function Donate() {
  const donationImpact = [
    {
      amount: "$25",
      impact: "Provides art supplies for one workshop participant",
      icon: "🎨",
    },
    {
      amount: "$50",
      impact: "Covers transportation for a young artist to attend an event",
      icon: "🚌",
    },
    {
      amount: "$100",
      impact: "Funds one month of mentorship for an emerging artist",
      icon: "👥",
    },
    {
      amount: "$250",
      impact: "Supports a community mural project",
      icon: "🖼️",
    },
    {
      amount: "$500",
      impact: "Enables a full workshop series in a community",
      icon: "📚",
    },
  ];

  const waysToGive = [
    {
      title: "One-Time Donation",
      description: "Make a single contribution to support our programs. Every amount makes a difference.",
      action: "Donate Now",
    },
    {
      title: "Monthly Support",
      description: "Become a monthly donor and provide sustained support for young artists throughout the year.",
      action: "Set Up Monthly Giving",
    },
    {
      title: "In-Kind Donations",
      description: "Donate art supplies, equipment, or services. Contact us to discuss what you can contribute.",
      action: "Contact Us",
    },
    {
      title: "Sponsor an Artist",
      description: "Directly support a specific artist's development, covering materials, training, or exhibition costs.",
      action: "Learn More",
    },
  ];

  return (
    <>
      <Hero
        title="Art Needs Support. We Need You."
        subtitle="Your gift helps youth tell their stories, preserve culture, build peace, and create change"
      />

      {/* Why Donate */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Why Your Support Matters
              </h2>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-neutralDark/10">
              <div className="space-y-6 text-lg text-neutralDark/80">
                <p>
                  Every young artist has talent. But not every young artist has access to the tools, 
                  mentors, and platforms they need to thrive. Your donation bridges that gap.
                </p>
                <p>
                  When you give to Youth4Youth Africa Art, you're not just funding programs—you're 
                  investing in futures. You're saying yes to a young poet who needs a stage. Yes to 
                  a painter who needs brushes. Yes to a dancer who needs space. Yes to a digital 
                  artist who needs software.
                </p>
                <p>
                  You're saying yes to stories that need to be told. To voices that need to be heard. 
                  To art that needs to be created.
                </p>
                <p className="font-semibold text-primary text-xl mt-6">
                  Every contribution—no matter the size—amplifies a voice that deserves to be heard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Donations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Your Donation's Impact
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              See how your contribution directly supports young artists
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {donationImpact.map((item, index) => (
              <div
                key={index}
                className="bg-neutralLight rounded-lg p-6 text-center border border-neutralDark/10 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-2xl font-display font-bold text-primary mb-2">
                  {item.amount}
                </div>
                <p className="text-sm text-neutralDark/80">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Ways to Give
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Choose the giving option that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waysToGive.map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-neutralDark/10 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  {way.title}
                </h3>
                <p className="text-neutralDark/80 mb-4">{way.description}</p>
                <Link
                  href={way.action === "Contact Us" ? "/contact" : "#"}
                  className="text-accent font-semibold hover:text-primary transition-colors inline-flex items-center"
                >
                  {way.action} <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg shadow-lg p-8 md:p-12 border border-primary/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  Make a Donation
                </h2>
                <p className="text-lg text-neutralDark/80">
                  Your support makes our work possible
                </p>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-semibold text-neutralDark mb-2">
                    Donation Amount
                  </label>
                  <div className="grid grid-cols-4 gap-3 mb-3">
                    {[25, 50, 100, 250].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="px-4 py-2 bg-white border-2 border-primary/30 rounded-lg font-semibold text-primary hover:bg-primary hover:text-neutralLight transition-colors"
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    id="amount"
                    placeholder="Or enter custom amount"
                    className="w-full px-4 py-3 border-2 border-neutralDark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    min="1"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutralDark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border-2 border-neutralDark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutralDark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-neutralDark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="monthly"
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="monthly" className="text-sm text-neutralDark/80">
                    Make this a monthly donation
                  </label>
                </div>
                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Donate Now
                </button>
                <p className="text-xs text-neutralDark/60 text-center">
                  Your donation is secure and tax-deductible. We'll send you a receipt for your records.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutralLight">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Thank You
            </h2>
            <p className="text-lg text-neutralDark/70 max-w-2xl mx-auto">
              Messages from artists whose lives have been changed by your support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-neutralDark/10">
              <p className="text-neutralDark/80 italic mb-4">
                "The mentorship program funded by donors gave me the confidence to pursue art as a career. 
                I'm now exhibiting my work internationally."
              </p>
              <p className="font-semibold text-primary">— Kemi Adeyemi, Visual Artist</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-neutralDark/10">
              <p className="text-neutralDark/80 italic mb-4">
                "Thanks to the workshop supplies provided by supporters, I learned digital art skills 
                that changed my life. I now work as a graphic designer."
              </p>
              <p className="font-semibold text-primary">— David Ochieng, Digital Artist</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-neutralDark/10">
              <p className="text-neutralDark/80 italic mb-4">
                "The community mural project funded by donors brought our neighborhood together. 
                Art truly has the power to heal."
              </p>
              <p className="font-semibold text-primary">— Community Member, Kampala</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary to-indigo text-neutralLight">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Questions About Donating?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-neutralLight/95">
            We're here to help. Contact us if you have questions about donations, 
            want to discuss a major gift, or are interested in corporate partnerships.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

