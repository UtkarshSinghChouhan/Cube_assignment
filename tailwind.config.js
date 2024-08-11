/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      exs: '320px',
      xxs: '370px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1537px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#eeeeee',
        },
        'fs-bg-gray': '#eeeeee',
        'fs-bg-dark': '#8685ef',
        'fs-bg-hover': '#faf7ff',
        'fs-bg-selected': '#d3d0e3',
        'fs-dark-black': '#19154E',



        // Dark Theme
        'fs-darktheme-text' : '#B0B3B8', 

        'fs-darktheme-text-header' : '#ffffff',

        'fs-darktheme-bg-dark' : '#18191B',
        'fs-darktheme-bg' : '#242526',
        'fs-darktheme-bg-light' : '#3B3B3D',
        'fs-darktheme-bg-extra-light' : '#4e4f50',    //hover-state

        'fs-darktheme-border' : '#383B3B',
        'fs-darktheme-border-light' : '#575b5b',
      },

      boxShadow:{
        'darkTheme-shadow' : '0 0 8px 0 rgba(255, 255, 255, 0.05)',  //for tooltip, pop-overs
      },

      gridTemplateColumns: {
        'fs-image': 'repeat(auto-fill, 15.75rem)',
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    

    },
  },
  plugins: [],
  darkMode: 'class',
}
