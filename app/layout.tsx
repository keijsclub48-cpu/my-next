import '../globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Voca-nical',
  description: 'あなたの声の調子をやさしく確認できます',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
