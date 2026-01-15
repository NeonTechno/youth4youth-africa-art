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
        primary: "#FFC107",       // Yellow/Gold (from logo)
        accent: "#FFC107",       // Yellow/Gold
        green: "#FFC107",        // Yellow/Gold (replacing green)
        indigo: "#FFC107",        // Yellow/Gold (replacing indigo)
        gold: "#FFC107",         // Yellow/Gold
        neutralLight: "#FFFFFF", // White
        neutralDark: "#333333",  // Charcoal (for text)
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

