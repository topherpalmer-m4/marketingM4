module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006fee",
        "base-default": "#d1d5db", // Placeholder
        "base-default-100": "#f3f4f6", // Placeholder
        "layout-foreground": "#1f2937", // Placeholder
        "base-primary": "#006fee", // From Dropdown
        "base-default-foreground": "#192138", // From option-a
      },
      spacing: {
        unit: "16px", // Placeholder for --primitives-units-unit-4
      },
      fontFamily: {
        text: ["Inter", "sans-serif"],
      },
      fontSize: {
        text: "14px",
      },
      lineHeight: {
        text: "20px",
      },
      letterSpacing: {
        text: "0.1px",
      },
      fontWeight: {
        text: "400",
      },
    },
  },
  plugins: [require("@heroui/theme")],
};