module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "4rem"
      }
    },
    extend: {}
  },
  plugins: [],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ]
};
