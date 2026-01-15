import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youth4Youth Africa Art | Art that Speaks. Youth that Leads.",
  description: "A youth-led African initiative using art for empowerment, storytelling, peacebuilding, cultural identity, and social change.",
  keywords: "African youth, art, empowerment, peacebuilding, cultural identity, social change, youth voices, creative expression",
  authors: [{ name: "Youth4Youth Africa Art" }],
  openGraph: {
    title: "Youth4Youth Africa Art",
    description: "Art that Speaks. Youth that Leads.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth4Youth Africa Art",
    description: "Art that Speaks. Youth that Leads.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#A83926",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

