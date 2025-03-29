/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        9999: "9999", // Custom z-index
      },

      colors: {
        // The final color palette:
        primary: "#1B3A57", // Deep Blue → Trust, Communication
        secondary: "#5E3A9A", // Royal Purple → Intelligence, Strategy
        accent: "#FFD700", // Gold → Success, Innovation
        darkBg: "#121212", // Charcoal Gray → Stability, Security
        textLight: "#EAEAEA", // White/Silver → Clarity, Simplicity
        textDark: "#121212", // Charcoal Gray → Stability, Security

        // Additional utility colors if needed:
        "accent-hover": "#ffdf4d", // Slightly lighter gold for hover
        "purple-hover": "#7144b2", // Lighter purple for hover
        "blue-hover": "#264b6c", // Lighter shade of primary for hover
      },

      // Example gradient usage (for hero backgrounds):
      backgroundImage: {
        // Subtle gradient from primary to darkBg, or from purple to blue
        "hero-gradient": "linear-gradient(135deg, #1B3A57 0%, #5E3A9A 100%)",
        "about-gradient":
          "linear-gradient(135deg, #1B3A57 0%, #5E3A9A 60%, #FFD700 100%)",
      },

      // If you need transitions or animations
      transitionProperty: {
        size: "width, height",
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
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 0px #FFD700" },
          "50%": { boxShadow: "0 0 10px #FFD700" },
          "100%": { boxShadow: "0 0 0px #FFD700" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        glow: "glow 1.5s ease-in-out infinite",
        rotate: "rotate 12s linear infinite",
        gradient: "animatedgradient 4s ease infinite alternate",
        beat: "beat 1s infinite alternate",
        // rotate: "rotate 12s linear infinite",
        // flicker: "flicker 1s infinite",
      },

      backgroundSize: {
        "300%": "300%",
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
        ],
      },
    },
  },
  plugins: [],
};
