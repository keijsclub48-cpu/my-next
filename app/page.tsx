import RepresentativeProfile from "@/components/RepresentativeProfile";
import Image from "next/image";
import firstViewImg from "../public/fv_image.png"; // ファーストビュー画像

export default function Home() {
  return (
    <main className="bg-bg-main text-text-main">

      {/* =================== ファーストビュー =================== */}
      <section id="top" className="bg-[#e0e7ff] flex flex-col-reverse md:flex-row items-center px-6 md:px-24 py-16 md:py-32 gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-primary">
            音楽と技術で未来の表現をつなぐ
          </h1>
          <p className="text-lg md:text-xl mb-6">
            VOCA-NICAL studioは、演奏や声の感覚を次世代へ継承する
            リアルタイム解析・可視化技術を提供します。
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <a
              href="#representative"
              className="bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#b28c3c] transition"
            >
              代表紹介を見る
            </a>
            <a
              href="/signup"
              className="bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#173153] transition"
            >
              無料で体験する
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src={firstViewImg}
            alt="ファーストビュー"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
      </section>

      {/* =================== 共感・課題 =================== */}
      <section className="px-6 md:px-24 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-brand-primary border-b-4 border-brand-primary pb-2">
          こんな悩みありませんか？
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-text-main">
          <li>練習の成果を可視化できない</li>
          <li>音程や表現の安定度を客観的に評価したい</li>
          <li>感覚に頼った演奏の継承方法が分からない</li>
        </ul>
      </section>

      {/* =================== できること =================== */}
      <section className="px-6 md:px-24 py-16 bg-[#f0f4ff] text-center">
        <h2 className="text-3xl font-bold mb-12 text-brand-primary border-b-4 border-brand-primary pb-2 inline-block">
          VOCA-NICALでできること
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🎵</span>
            <h3 className="text-xl font-semibold mb-2">音程チェック</h3>
            <p>リアルタイムで音程を解析し、演奏の安定度を確認できます。</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">📊</span>
            <h3 className="text-xl font-semibold mb-2">演奏分析</h3>
            <p>リズムやフレージングの統計を可視化し、改善点を把握できます。</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">✅</span>
            <h3 className="text-xl font-semibold mb-2">練習プラン</h3>
            <p>解析結果をもとに、効率的な練習目標を提示します。</p>
          </div>
        </div>
      </section>

      {/* =================== 使い方 =================== */}
      <section className="px-6 md:px-24 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-12 text-brand-primary border-b-4 border-brand-primary pb-2 inline-block">
          使い方は簡単3ステップ
        </h2>
        <ol className="space-y-8 text-lg text-text-main">
          <li>
            <span className="font-semibold">Step 1:</span> アプリを起動して演奏・歌声を録音
          </li>
          <li>
            <span className="font-semibold">Step 2:</span> 音程・リズム・表現をリアルタイム解析
          </li>
          <li>
            <span className="font-semibold">Step 3:</span> 結果をもとに練習目標を確認
          </li>
        </ol>
      </section>

      {/* =================== 代表紹介（折りたたみ版） =================== */}
      <RepresentativeProfile />

      {/* =================== FAQ =================== */}
      <section className="px-6 md:px-24 py-16 bg-[#f0f4ff]">
        <h2 className="text-3xl font-bold mb-8 text-brand-primary border-b-4 border-brand-primary pb-2 inline-block">
          よくある質問
        </h2>
        <div className="space-y-6 text-text-main text-lg">
          <div>
            <p className="font-semibold">Q: アプリは無料ですか？</p>
            <p>A: 基本機能は無料でご利用いただけます。プレミアム機能も検討中です。</p>
          </div>
          <div>
            <p className="font-semibold">Q: iOS / Android 両方対応ですか？</p>
            <p>A: はい、ブラウザ版でスマホ・タブレットで利用可能です。</p>
          </div>
          <div>
            <p className="font-semibold">Q: 音声解析はどのくらい正確ですか？</p>
            <p>A: 最新AIモデルを使用しており、プロ演奏レベルにも対応しています。</p>
          </div>
        </div>
      </section>

      {/* =================== 最終CTA =================== */}
      <section className="px-6 md:px-24 py-16 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-primary">
          今すぐ VOCA-NICAL を体験
        </h2>
        <p className="text-lg mb-8">
          あなたの演奏・歌声をリアルタイムで解析し、練習の成果を可視化します。
        </p>
        <a
          href="/signup"
          className="inline-block bg-brand-accent text-white font-semibold py-4 px-8 rounded-lg shadow hover:bg-[#b28c3c] transition"
        >
          無料で体験する
        </a>
      </section>
    </main>
  );
}
