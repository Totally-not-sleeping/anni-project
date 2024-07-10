/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        loading: 'Loading 2s cubic-bezier(.4,.63,.94,.76) infinite',
        FadeInNormal: "FadeInNormal 3s ease-in-out"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-img": "url('/background-image.png')",
      },
      keyframes: {
        puzzlesFadeIn: {
          "0%": { transform: "translateY(50px)", opacity: "0%" },
          "100%": { transform: "translateY(0px)", opacity: "100%" },
        },
        dotsAnimation: {
          "0%": { opacity: "20%" },
          "50%": { opacity: "100%" },
          "100%": { opacity: "20%" },
        },
        FadeIn: {
          "0%": { opacity: "0%" },
          "30%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        FadeInNormal: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        Loading: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
