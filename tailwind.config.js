/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
 
    boxShadow: {
        'lg': '0 10px 15px -10px #a29dff, 0 4px 6px -4px #a29dff',
      },

     fontFamily: {
        'caramel': ['Caramel', 'cursive']
      },
     screens: {
      'sm': '640',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  
  },
  plugins: [],
}
