/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}', // Include Shadcn UI components
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: '#121212',
          100: '#f4f4f5',
        },
        cyan: {
          300: '#67e8f9',
        },
      },
    },
  },
  plugins: [],
}
