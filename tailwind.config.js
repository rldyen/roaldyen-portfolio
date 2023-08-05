/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layered-waves-1': "url('./public/backgrounds/layered-waves-haikei-1.svg')",
        'layered-waves-2': "url('./public/backgrounds/layered-waves-haikei-1.svg')",
        'layered-waves-3': "url('./public/backgrounds/layered-waves-haikei-1.svg')",
        'layered-waves-4': "url('./public/backgrounds/layered-waves-haikei-1.svg')",
        'layered-waves-5': "url('./public/backgrounds/layered-waves-haikei-1.svg')"
      }
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [require("daisyui")],
}
