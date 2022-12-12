/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fira: ["Fira code", "monospace"],
        Lobster: ["Lobster", "cursive"],
        Inter: ["Inter", "sans-serif"],
        Abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
}
