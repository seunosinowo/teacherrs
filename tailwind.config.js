/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#f49c30',
                secondary: '#4a90e2'
              },
        },
    },
    plugins: [],
  };