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
    colors: {
      tan: "#f2ecd8",
      puce: "#928e58",
      white: "rgb(255,255,255)",
      gray: "#555",
      lightGray: "#888",
      link: "#0091c1",
    },
    extend: {
      textShadow: {
        DEFAULT: "-1px 1px 0px white",
      },
      // fontFamily: {
      //   caslon: ["adobe-caslon-pro", "serif"],
      //   sans: ["var(--font-opensans)"],
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
