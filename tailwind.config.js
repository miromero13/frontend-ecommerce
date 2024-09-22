/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        danger: '#f44250',
        success: '#6bd968',
        warning: '#fecc1b',
        process: '#3992ff',
        // button action
        // light mode
        'light-text-primary': '#1c1b1f',
        'light-text-secondary': '#787579',
        'light-bg-primary': '#ffffff',
        'light-bg-secondary': '#fcf9ff',
        'light-border': '#79747e8c',
        'light-action': '#6750a4',
        'light-action-hover': '#553a9a',
        // dark mode
        'dark-text-primary': '#eaddff',
        'dark-text-secondary': '#d0bcff',
        'dark-bg-primary': '#2a2830',
        'dark-bg-secondary': '#26242a',
        'dark-border': '#b8c0cc33',
        'dark-action': '#4f378b',
        'dark-action-hover': '#876dc7',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}