import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        'baykar-brown': '#78350F',
        'baykar-black': '#0F172A',
        'baykar-yellow': '#8C4C00',
        'baykar-red': '#8C0000',
        'baykar-light-yellow': '#FEF3C7',
        'baykar-washed-yellow': '#FEFBED',
        'baykar-orange': '#FBBF24',
      },
      screens: {
        mobile: '392px',
        desktop: '1024px',
        'desktop-lg': '1440px',
      },
      container: {
        center: true,
        screens: {
          DEFAULT: '1440px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
