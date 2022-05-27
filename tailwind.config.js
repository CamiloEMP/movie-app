module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto Flex', 'apple-system', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#3d07a6',
        'brand-secondary': '#fafafa',
      },
    },
  },
  plugins: [],
}
