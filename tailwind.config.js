/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Microsoft YaHei",
          "sans-serif"
        ],
        serif: ["Cormorant Garamond", "Georgia", "Noto Serif SC", "serif"]
      },
      colors: {
        paper: "#f7f4ee",
        ink: "#20201f",
        muted: "#76716a",
        line: "#ded7cb",
        clay: "#b15f4c",
        moss: "#76845f",
        ocean: "#486b7d",
        plum: "#725a72"
      },
      boxShadow: {
        soft: "0 28px 80px rgba(32, 32, 31, 0.10)"
      }
    }
  },
  plugins: []
};
