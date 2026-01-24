import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kente-inspired palette
        gold: "#F4B400",           // Gold / Mustard Yellow - highlights, buttons, CTAs
        red: "#9E1B32",            // Deep Red - passion, art, movement
        green: "#0B6E4F",          // Emerald Green - growth, youth, Africa
        blue: "#1F3C88",           // Royal Blue - trust, future
        black: "#111111",          // Black - grounding, elegance
        white: "#FAFAFA",          // White / Off-white
        
        // Semantic color mappings for backward compatibility
        primary: "#F4B400",        // Gold for primary actions
        accent: "#9E1B32",        // Red for accents
        neutralLight: "#FAFAFA",  // Off-white backgrounds
        neutralDark: "#111111",   // Black for text
      },
      fontFamily: {
        display: ['var(--font-display)', 'Poppins', 'Montserrat', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'kente-gradient': 'linear-gradient(135deg, #F4B400 0%, #9E1B32 25%, #0B6E4F 50%, #1F3C88 75%, #F4B400 100%)',
        'kente-soft': 'linear-gradient(135deg, rgba(244, 180, 0, 0.1) 0%, rgba(158, 27, 50, 0.1) 25%, rgba(11, 110, 79, 0.1) 50%, rgba(31, 60, 136, 0.1) 75%, rgba(244, 180, 0, 0.1) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

