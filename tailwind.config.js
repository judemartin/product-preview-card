/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f2ebe3",
        gunmetal: "#1C232B",
        aurometal: "#6C7289",
        deepaquamarine: "#3D8168",
        deepaquamarinedark: "#1A4032",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        fraunces: ["Fraunces"],
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
