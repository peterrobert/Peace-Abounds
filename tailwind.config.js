/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          sage: "#9db5a8",
          cream: "#f5f5dc",
          gold: "#d4af37",
          text: "#2c3e35",
          muted: "#6b7f73",
        },
      },
      fontFamily: {
        serif: ["Lora", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(157, 181, 168, 0.15)",
        "inner-soft": "inset 0 2px 4px 0 rgba(157, 181, 168, 0.06)",
        card: "0 4px 20px -2px rgba(157, 181, 168, 0.1)",
      },
    },
  },
  plugins: [],
};
