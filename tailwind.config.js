/* tailwind.config.js */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#38BDF8',
                primarySoft: '#7DD3FC',
                accent: '#A7F3D0',
                baseBg: '#F9FAFB',
                baseText: '#334155'
            },
            fontFamily: {
                sans: ['Noto Sans JP', 'Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
};