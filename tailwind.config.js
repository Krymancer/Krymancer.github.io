/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    fontFamily: {
      primary: 'Cascadia Code',
    },
    extend: {
      colors: {
        background: {
          light: '#eff1f5',
          dark: '#1e1e2e',
        },
        text: {
          light: '#545454',
          dark: '#c6d0f5',
        },
        lightText: {
          light: '#545454',
          dark: '#A1A8C9',
        },
        green: {
          default: '#A6D189',
          hover: '#0FA958',
        },
        blue: {
          default: '#99D1DB',
          hover: '#036C96',
        },
        purple: {
          default: '#7287FD',
          hover: '#8839EF',
        },
        border: {
          light: '#BCC0CC',
          dark: '#43465A',
        },
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1000px',
      xl: '1200px',
    },
    boxShadow: {
      defaultButton: '0px 2px 0px #8839EF',
      githubButton: '0px 2px 0px #0FA958',
      linkedinButton: '0px 2px 0px #036C96',
    },
  },
  plugins: [],
};
