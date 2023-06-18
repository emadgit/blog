import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-chakra-patch)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
