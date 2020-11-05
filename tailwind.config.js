module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      'sans': ["sans-serif", 'Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
