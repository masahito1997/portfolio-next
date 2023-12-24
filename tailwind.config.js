/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // TODO: App Router置換完了後に消す

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1a202c',
      }
    },
    fontFamily: {
      'header': ['Dancing Script', '"Noto Sans JP"', 'sans-serif']
    }
  },
  plugins: [],
}

