/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xxs':'320px',
      'xs':'480px',
      '3xl':'1700px',
      ...defaultTheme.screens,
      
    },
    extend: {
      fontFamily: {
        'allura': ['Allura', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        // 'portfolio': "url('images/stars.jpeg')",
        // 'portfolio-screen':"url(images/stars.jpeg)",
        'portfolio-cloud':"url(images/cloud.jpg)",
        'myImage':"url(images/linked_in.jpg)"
      },
      
    },
  },
  plugins: [],
}

