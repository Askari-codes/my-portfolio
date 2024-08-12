/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'allura': ['Allura', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        // 'portfolio': "url('images/stars.jpeg')",
        // 'portfolio-screen':"url(images/stars.jpeg)",
        'portfolio-cloud':"url(images/cloud.jpg)"
      }
    },
  },
  plugins: [],
}

