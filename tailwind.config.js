module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    //require('@tailwindcss/typography'),
  ],
  daisyui:{
    temes:[
      {
        'mytheme': {
          'primary': '#570df8',
          'primary-focus': '#4506cb',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#00acc1',
          'accent-focus': '#009db0',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#3e4252',
          'base-200': '#313640',
          'base-300': '#d1d5db',
          'base-content': '#e7edf4',
          'info': '#2094f3',
          'success': '#4ba64f',
          'warning': '#fd960e',
          'error': '#e8403d',
        },
      },
    ]
  },
}

//primary azul #570df8
//azul focus #4506cb