module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      spacing: {
        "max-page-width": "1024px",
      },
      colors: {
        stone: {
          DEFAULT: "#BA9878",
          50: "#F8F5F2",
          100: "#F1EAE4",
          200: "#E3D6C9",
          300: "#D5C1AE",
          400: "#C8AD93",
          500: "#BA9878",
          600: "#A57C55",
          700: "#806042",
          800: "#5B442F",
          900: "#36281C",
        },
      },
    },
  },
  plugins: [],
};
