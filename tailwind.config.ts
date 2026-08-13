import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prioridad: {
          alta: "#D85A30",
          media: "#EF9F27",
          baja: "#639922",
        },
      },
    },
  },
  plugins: [],
};

export default config;
