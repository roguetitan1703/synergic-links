/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-base": "#000000",
        "light-base": "#ffffff",
        "dark-primary-base": "#0e1019",
        "light-bg": "#eeeeee", // New light background color
        primary: "#1B3A57", // Trust, communication
        secondary: "#5E3A9A", // Intelligence, strategy
        accent: "#FFD700", // Success, innovation
        darkBg: "#121212", // Stability, security
        textLight: "#EAEAEA", // Clarity, simplicity
      },
      fontFamily: {
        sans: ["Roobert", "Inter", "ui-sans-serif", "system-ui"], // Inter for general text
        mono: [
          "Inconsolata",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ], // Inconsolata for monospace
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        beat: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.4)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        // flicker: { // Removed flicker animation as it was commented out in the old config
        //   "0%, 100%": { opacity: "1" },
        //   "10%": { opacity: "0.6" },
        //   "20%": { opacity: "0.8" },
        //   "30%": { opacity: "0.3" },
        //   "40%": { opacity: "0.9" },
        //   "50%": { opacity: "0.5" },
        //   "60%": { opacity: "0.7" },
        //   "70%": { opacity: "0.2" },
        //   "80%": { opacity: "0.85" },
        //   "90%": { opacity: "0.4" },
        // },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 4s ease infinite alternate",
        beat: "beat 1s infinite alternate",
        rotate: "rotate 12s linear infinite",
        // flicker: "flicker 1s infinite", // Removed flicker animation as it was commented out in the old config
      },
    },
  },
  plugins: [],
  safelist: [
    "blur-vignette", // Ensures Tailwind includes this custom utility in production
  ],
};
