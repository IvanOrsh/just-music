import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      backgroundImage: {
        artistOverlay: "url(/assets/hero/artist-overlay.png)",
        newsletter: "url(/assets/newsletter/bg.png)",
      },
      fontFamily: {
        alexBrush: ["var(--font-alexBrush)"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#06062A",
        secondary: "#151538",
        tertiary: "#242445",
        accent: {
          DEFAULT: "#7f1cfc",
          hover: "#6519c6",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
