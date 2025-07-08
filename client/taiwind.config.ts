import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // use 'content' instead of 'purge'
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [
    // Use dynamic import for ESM/TypeScript configs
    async function () {
      const forms = (await import('@tailwindcss/forms')).default;
      return forms;
    }
  ],
};

export default config;