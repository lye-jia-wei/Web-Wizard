const defaultTheme = require("tailwindcss/defaultTheme");
const themer = require("@tailus/themer");

module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "media",
  safelist: ["isToggled"],
  theme: {
    fontFamily: {
      sans: ["Geist", "Inter", ...defaultTheme.fontFamily.sans],
      mono: ["GeistMono", "fira-code", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        grid: "grid 15s linear infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      keyframes: {
        loop: {
          to: {
            "offset-distance": "100%",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    themer({
      palette: {
        extend: "nature",
      },
      radius: "smoothest",
      background: "light",
      border: "light",
      padding: "large",
      components: {
        button: {
          rounded: "2xl",
        },
      },
    }),
  ],
};
