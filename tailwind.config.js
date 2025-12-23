/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        // ブランドカラー
        'brand-primary': '#1f3a5f',    // メイン（知性・信頼）
        'brand-secondary': '#6b8fb3',  // サブ（柔らかさ）
        'brand-accent': '#c9a24d',     // アクセント（音楽・品格）

        // ベースカラー
        'bg-main': '#ffffff',
        'bg-light': '#f4f6f8',
        'text-main': '#222222',
        'text-sub': '#666666',

        // 既存カラー（トップページでの補助）
        'primary': '#38BDF8',
        'primarySoft': '#7DD3FC',
        'accent': '#A7F3D0',
        'baseBg': '#F9FAFB',
        'baseText': '#334155'
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'Inter', 'sans-serif']
      },
      spacing: {
        '128': '32rem', // カスタム余白例
      },
      borderRadius: {
        'xl': '1rem',
      }
    },
  },
  plugins: [],
};

export default tailwindConfig;
