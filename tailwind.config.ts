import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        "baykar-brown": "#78350F",
        "baykar-black": "#0F172A",
        "baykar-light-brown": "#8C4C00",
        "baykar-yellow": "#FDE68A",
        "baykar-red": "#8C0000",
        "baykar-light-yellow": "#FEF3C7",
        "baykar-washed-yellow": "#FEFBED",
        "baykar-orange": "#FBBF24",
        "baykar-light-blue": "#E2E8F0",
        "baykar-light-gray": "#475569",
      },
      screens: {
        mobile: "392px",
        desktop: "1024px",
        "desktop-lg": "1440px",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "1440px",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, var(--tw-gradient-stops))",
        "gradient-hero-desktop":
          "linear-gradient(150deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
