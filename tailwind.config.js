/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      height: {
        '18': '74px',
      },
      width:{
        "custom-width": '1904px',
      },
      backgroundColor:{
        'custom-color':'#F6F6F6'
      },colors:{
        'custom-text-color':"#3F3631"
      },
      margin:{
        'custom-margin':"100px"
      }
    }
  },
  plugins: [],
}

