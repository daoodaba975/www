import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    colors: {
      snow: "#EBF2FA",
      silver: "#D2D7DF",
      celtic: "#0953BC",
      pacific: "#053270",
      eigengrau: "#16161D",
      night: "#101113",
      gayvin: "#2c2c2c",
      lico: "#dfe5ec",
    },
    extend: {
      keyframes: {
        starScale: {
          "from, to": {
            transform: "rotate(0) scale(0)",
            opacity: "0",
          },

          "50%": {
            transform: "rotate(180deg) scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        starScale: "starScale 800ms ease infinite",
        slowspin: "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
