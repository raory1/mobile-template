/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary': '#7A4CF0',
        'secondary': '#97d378',
        'accent': '#39affe',
        'sucess': '#6BBF59',
        'error': '#E5484D',
        'background': '#FFFAFC',
        'text': '#140006',
      },
    },
  },
  plugins: [],
}