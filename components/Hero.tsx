// my-next/components/Hero.tsx
import Link from 'next/link';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold leading-relaxed mb-6">
            あなたの声の調子を、<br />やさしく確認できます
          </h1>
          <p className="text-lg leading-loose mb-8">
            音域・ピッチ・安定性を画面を見ながら、無理なくチェックできるボーカルサポートツールです。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="https://app.voca-nical.com"
              className="text-center rounded-xl bg-primary px-6 py-4 text-white text-lg shadow hover:bg-primarySoft transition"
            >
              声の高さを調べてみる（無料）
            </Link>
            <Link
              href="#about"
              className="text-center rounded-xl border border-slate-300 px-6 py-4 text-lg hover:bg-slate-100 transition"
            >
              はじめての方へ
            </Link>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
