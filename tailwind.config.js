export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
extend: {
  keyframes: {
    fadeInBg: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    fadeInHeader: {
      '0%': { opacity: 0, transform: 'translateY(-20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    fadeInBg: 'fadeInBg 2s ease-in-out forwards',
    fadeInHeader: 'fadeInHeader 1.2s ease-out forwards',
  },
}
  },
  plugins: [],
}
