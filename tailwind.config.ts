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
        // primary: "#06062A",
        primary: "#BFC2C5",
        // secondary: "#151538",
        secondary: "#8C7E69",
        // tertiary: "#242445",
        tertiary: "#2C1B02",
        accent: {
          // DEFAULT: "#7f1cfc",
          DEFAULT: "#D7D9E1",
          // hover: "#6519c6",
          hover: "#453C20",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
