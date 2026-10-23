import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fundo: "#151517",
        painel: "#1c1c1f",
        linha: "#2e2e33",
        ouro: "#c8a45c",
        texto: "#ecebe6",
        suave: "#a3a29c",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
