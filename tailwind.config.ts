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
      celtic: "#016ED1",
      pacific: "#85C4FE",
      emerald: "#49D49D",
      mint: "#9CE8C9",
      raisin: "#25262B",
      night: "#101113",
    },
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
export default config;
