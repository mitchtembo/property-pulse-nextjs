import { Poppins, Roboto_Condensed } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', Roboto_Condensed, 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
        
      }
    },
  },
  plugins: [],
};
