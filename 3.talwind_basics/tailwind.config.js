/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'test-sandal':'#FFC107'
      }
    },
    // screens:{
    //   sm:'200px',
    //   md:'500px',
    //   lg:'600px'
    // }
  },

  darkMode:'selector',
  plugins: [],
}

