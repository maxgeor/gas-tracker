const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        md: '31rem'
      },
      fontSize: {
        xxs: ["0.625rem", "1rem"],
      },
      colors: {
        stone: colors.stone,
        gray: {
          350: "#a2adba",
          400: "#868f9f",
        },
        rose: colors.rose,
      },
      borderColor: {
        gray: {
          600: "#3E4A5A",
          900: "#1A2233",
        }
      },
      backgroundColor: {
        gray: {
          750: "#273242",
        }
      },
    },
  },
  plugins: [],
}
