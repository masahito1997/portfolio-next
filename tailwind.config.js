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
      },
      backgroundImage: {
        'progress-gradient': "linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)"
      },
      backgroundSize: {
        'progress': '1rem 1rem'
      }
    },
    fontFamily: {
      'header': ['Dancing Script', '"Noto Sans JP"', 'sans-serif'],
      'body': ['"M PLUS Rounded 1c", "Kosugi Maru", Roboto, Arial, sans-serif']
    }
  },
  plugins: [],
}

