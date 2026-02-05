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
        // Primary brand colors
        yellow: "#FFD700",         // Bold, hopeful yellow - CTAs, highlights
        yellowAlt: "#FBCB0A",      // Alternative yellow tone
        white: "#FFFFFF",          // Pure white - backgrounds
        black: "#000000",          // Black - text, structure
        darkGrey: "#2E2E2E",      // Dark grey - text, navigation
        
        // Semantic color mappings for backward compatibility
        gold: "#FFD700",           // Yellow for primary actions
        primary: "#FFD700",        // Yellow for primary actions
        accent: "#FFD700",         // Yellow for accents
        neutralLight: "#FFFFFF",   // White backgrounds
        neutralDark: "#2E2E2E",   // Dark grey for text
      },
      fontFamily: {
        display: ['var(--font-display)', 'Poppins', 'Montserrat', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'subtle-gradient': 'linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

