import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youth4Youth Africa | By Youth, For Youth, For One Africa",
  description: "A youth-led African initiative empowering youth through storytelling, peacebuilding, cultural identity, and social change.",
  keywords: "African youth, empowerment, peacebuilding, cultural identity, social change, youth voices",
  authors: [{ name: "Youth4Youth Africa" }],
  openGraph: {
    title: "Youth4Youth Africa",
    description: "By Youth, For Youth, For One Africa",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth4Youth Africa",
    description: "By Youth, For Youth, For One Africa",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FFC107",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

