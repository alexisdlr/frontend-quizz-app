import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "xs": "300px",
        "2xl": "1440px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-blue": "#ABC1E1",
        purple: "#A729F5",
        "dark-blue": "#313E51",
        slate: "#3B4D66",
        "gray-navy": "#626C7F",
        green: "#26D782",
        white: "#F4F6FA",
        red: "#EE5454",
      },
    },
  },
  plugins: [],
};
export default config;
