/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: "#C9A227",
          "amber-hover": "#B08C1F",
          "amber-light": "#F9F4E8",
          cream: "#FAFAF8",
          charcoal: "#1A1A1A",
          muted: "#666666",
          dark: "#0B0F19",
          border: "#E5E5E0"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"]
      },
      animation: {
        "aurora": "aurora 35s ease infinite alternate",
        "fade-up": "fadeUp 0.4s ease-out forwards"
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg) scale(1)" },
          "50%": { transform: "translate(-45%, -48%) rotate(180deg) scale(1.1)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg) scale(1)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [],
};
