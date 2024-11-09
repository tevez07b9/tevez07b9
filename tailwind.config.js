/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-kaisei)"],
        outfit: ["var(--font-outfit)"],
        paytone: ["var(--font-paytone)"],
      },
      colors: {
        textYellow: "rgb(249, 244, 218)",
        "brand-pink": "#f38ba3",
        charcoal: "#231f20",
        yellow: "#fcba28",
        cream: "#f6f1d7",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require("@tailwindcss/typography")],
};
