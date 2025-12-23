/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#6b5b95',   // 落ち着いた紫
        brandSecondary: '#feb236', // 柔らかい黄色
        brandAccent: '#d64161',    // 優しいアクセントピンク
        baseBg: '#fffaf0',         // アイボリーホワイト
        baseText: '#333333',
        baseSubText: '#666666',
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
};
