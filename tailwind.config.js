/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["VT323", "monospace"],
        retro: ['"Press Start 2P"', "cursive"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      colors: {
        "vhs-orange": "#ff6600",
        "vhs-purple": "#9933ff",
        "vhs-blue": "#3366ff",
        "vhs-pink": "#ff33cc",
        "vhs-green": "#33cc66",
      },
    },
  },
  plugins: [],
};
