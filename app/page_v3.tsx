"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen font-sans">

      {/* 背景画像（淡いパステル＋ジャズ風オーバーレイ） */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/A_digital_illustration_in_soft_pastel_colors_featu.png"
          alt="抽象的背景"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="absolute inset-0 -z-5 w-full h-full bg-black/10"></div>

      {/* ファーストビュー */}
      <section className="px-6 md:px-24 py-16 md:py-32 relative z-10 text-white text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          あなたの声や演奏を、もっと自由に楽しむ
        </h1>
        <p className="text-lg md:text-xl mb-6">
          VOCA-NICAL studioは、練習の成果を見える化し、表現の成長をサポートします。
        </p>

        {/* ボタン */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
          <a
            href="https://cms.voca-nical.com/?p=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-accent/80 transition text-center"
          >
            VOCA-NICAL studioのブログ
          </a>

          <a
            href="/signup"
            className="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-primarySoft transition text-center"
          >
            まずは体験
          </a>
        </div>
      </section>

      {/* 共感・課題 */}
      <section className="px-6 md:px-24 py-16 relative z-10 text-white">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-white pb-2 inline-block">
          こんなお悩み、ありませんか？
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>練習しても成果が見えにくい</li>
          <li>音程やリズムの安定が自分では分からない</li>
          <li>感覚だけに頼った練習の効果が分からない</li>
        </ul>
      </section>

      {/* アプリ画面 */}
      <section className="flex justify-center py-16 relative z-10">
        <Image
          src="/mockup_phone.png"
          alt="アプリ画面イメージ"
          width={300}
          height={600}
          className="rounded-xl shadow-2xl"
        />
      </section>

      {/* VOCA-NICALでできること */}
      <section className="px-6 md:px-24 py-16 text-center relative z-10 text-white">
        <h2 className="text-3xl font-bold mb-12 border-b-4 border-white pb-2 inline-block">
          VOCA-NICALでできること
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🎵</span>
            <h3 className="text-xl font-semibold mb-2">音程やリズムを確認</h3>
            <p>リアルタイムで解析し、演奏の安定度を見える化します。</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">📊</span>
            <h3 className="text-xl font-semibold mb-2">表現を見える化</h3>
            <p>演奏や歌声の特徴を表示し、改善のヒントに。</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">✅</span>
            <h3 className="text-xl font-semibold mb-2">無理なく練習</h3>
            <p>解析結果をもとに、次の目標を提案します。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-24 py-16 relative z-10 text-white">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-white pb-2 inline-block">
          よくある質問
        </h2>
        <div className="space-y-6 text-lg">
          <div>
            <p className="font-semibold">Q: アプリは無料ですか？</p>
            <p>A: 基本機能は無料で体験できます。</p>
          </div>
          <div>
            <p className="font-semibold">Q: スマホでも使えますか？</p>
            <p>A: はい、ブラウザ版でiOS/Android両方対応です。</p>
          </div>
          <div>
            <p className="font-semibold">Q: 音声解析の精度は？</p>
            <p>A: プロ演奏レベルにも対応できるAI解析を採用しています。</p>
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="px-6 md:px-24 py-16 text-center relative z-10 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          まずは VOCA-NICAL を体験
        </h2>
        <p className="text-lg mb-8">
          あなたの演奏や歌声を解析し、練習の成果を見える化します。
        </p>
        <a
          href="/signup"
          className="inline-block bg-accent text-white font-semibold py-4 px-8 rounded-lg shadow hover:bg-accent/80 transition"
        >
          無理なく体験してみる
        </a>
      </section>

    </main>
  );
}
