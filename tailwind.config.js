module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'apple-system', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#3d07a6',
        'brand-secondary': '#fafafa',
        'modal-background': '#111111bd',
      },
    },
  },
  plugins: [],
}
