/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    listStyleType: {
      none: 'none',
      square: 'square',
      roman: 'upper-roman',
    },
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
      //body: 'Roboto',
      //body: 'Cormorant Garamond',
      display: 'Archivo Black',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    extend: {
      content: {
        about: 'url("../public/assets/img/outline-text/about.svg")',
        portfolio: 'url("../public/assets/img/outline-text/portfolio.svg")',
        services: 'url("../public/assets/img/outline-text/services.svg")',
        testimonials:
          'url("../public/assets/img/outline-text/testimonials.svg")',
        contact: 'url("../public/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
