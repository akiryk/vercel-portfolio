import { link } from "fs";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: "#f2ecd8",
        yellow: "#fff9e2",
        puce: "#928e58",
        gray: "#555",
        darkgray: "#bbb",
        slategray: "#666",
        midgray: "#999",
        link: "#0091c1",
        red: "#c50404",
      },
      fontSize: {
        outlined: "12rem",
      },
      textShadow: {
        DEFAULT: "-1px 1px 0px white",
      },
      fontFamily: {
        caslon: ["adobe-caslon-pro", "serif"],
        sans: ["var(--font-opensans)"],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
