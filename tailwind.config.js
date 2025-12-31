/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'electric-pink': '#FF3D81',
                'acid-yellow': '#F5FF00',
                'sky-blue': '#4CC9F0',
            },
            fontFamily: {
                'space': ['"Space Grotesk"', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            borderWidth: {
                '3': '3px',
                '5': '5px',
            },
            boxShadow: {
                'brutal': '6px 6px 0px 0px rgba(0, 0, 0, 1)',
                'brutal-sm': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
                'brutal-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
                'brutal-pink': '6px 6px 0px 0px #FF3D81',
                'brutal-yellow': '6px 6px 0px 0px #F5FF00',
                'brutal-blue': '6px 6px 0px 0px #4CC9F0',
                'brutal-light': '6px 6px 0px 0px rgba(255, 255, 255, 1)',
                'brutal-light-sm': '4px 4px 0px 0px rgba(255, 255, 255, 1)',
                'brutal-light-lg': '8px 8px 0px 0px rgba(255, 255, 255, 1)',
            },
        },
    },
    plugins: [],
}
