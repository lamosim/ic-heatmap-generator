module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Lato']
      },
      zIndex: {
      '100':100
      },
      colors: {
        primary: {
          new: '#499557',
          hover: '#41894e',
        },
        secondary: {
          new: '#ff7e00',
          hover: '#ff9028',
        },
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
