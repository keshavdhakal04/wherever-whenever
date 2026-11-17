/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F5F0",
        charcoal: "#242421",
        stone: "#85837D", // lines and large type only
        "stone-text": "#66645E", // small text (passes AA on ivory)
        sand: "#E9E5DC",
        bronze: "#8C6D43",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
