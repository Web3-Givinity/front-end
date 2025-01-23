import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f2f9fd',
          100: '#e3f2fb',
          200: '#c1e5f6',
          300: '#8ad0ef',
          400: '#5abee6',
          500: '#25a0d2',
          600: '#1780b2',
          700: '#146790',
          800: '#145778',
          900: '#164964',
          950: '#0f2f42'
        },
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(0deg, rgba(90, 190, 230, 1) 0%, rgba(255, 255, 255, 0) 100%);',
        'card-gradient-hover': 'linear-gradient(0deg, rgba(90, 190, 230, 0.94) 40%, rgba(255, 255, 255, 0) 100%);',
        'contact': 'linear-gradient(270deg, rgba(90, 190, 230, 0.85) 0%, rgba(255, 255, 255, 1) 100%);'
      }
    },
  },
  plugins: [],
} satisfies Config;
