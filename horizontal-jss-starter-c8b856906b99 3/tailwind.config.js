const themes = require('./src/theme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: themes.default.default,
      themes: themes.default.themes,
    }),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        marquee1: 'marquee1 99s linear infinite',
        marquee2: 'marquee2 96s linear infinite',
        marquee3: 'marquee3 98s linear infinite',
        marquee4: 'marquee4 95s linear infinite',
        marquee5: 'marquee5 97s linear infinite',
        marquee6: 'marquee6 95s linear infinite',
      },
      keyframes: {
        marquee1: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        marquee3: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee4: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        marquee5: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        marquee6: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
    },
  },
};
