/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.jsx","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        custom:["roboto","sans.serif"]
      }
    },
    screens: {
      'mobile': {'min': '200px', 'max': '500px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'sm':  {'min': '500', 'max': '767'},
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
  }
}

