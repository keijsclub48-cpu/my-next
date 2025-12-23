import Image from "next/image";
import FVImage from "../public/fv_image.png"; // 生成AI画像を置く

export default function Home() {
  return (
    <main className="bg-[#e0e7ff] text-gray-900 font-sans">
      {/* ファーストビュー */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16">
        {/* 左コピー */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
            声や音程を、<br />
            もっと「感覚」ではなく「安心」に。
          </h1>
          <p className="text-lg md:text-xl mb-6">
            歌・発声・楽器練習のためのやさしい音程チェックツール
          </p>
          <a
            href="https://mms.voca-nical.com"
            className="inline-block bg-teal-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-500 transition"
          >
            今すぐ測ってみる
          </a>
        </div>
        {/* 右画像 */}
        <div className="md:w-1/2">
          <Image
            src={FVImage}
            alt="Voca-nical ファーストビュー"
            className="rounded-xl shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* 共感・課題 */}
      <section className="px-6 md:px-24 py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">こんなことで困っていませんか？</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>音程が合っているか分からない</li>
          <li>チューナーは数字や針が難しい</li>
          <li>練習の成果が実感しにくい</li>
          <li>誰かに聞いてもらうのは気が引ける</li>
        </ul>
        <p className="mt-4 text-lg">
          Voca-nical は、ひとりで落ち着いて確認できる音楽練習ツールです。
        </p>
      </section>

      {/* できること */}
      <section className="px-6 md:px-24 py-12 bg-[#f0f4ff]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Voca-nicalでできること</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="font-semibold text-xl mb-2">今の音程が分かる</h3>
            <p>声や音を出すだけで、今の高さを画面で確認できます。</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-semibold text-xl mb-2">安定しているかが分かる</h3>
            <p>揺れやブレも見えて、練習の安心感を得られます。</p>
          </div>
          <div>
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-semibold text-xl mb-2">練習の目安がつく</h3>
            <p>今日の成果がひと目でわかり、効率的に練習できます。</p>
          </div>
        </div>
      </section>

      {/* 使い方 */}
      <section className="px-6 md:px-24 py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">使い方は簡単3ステップ</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>マイクを許可する</li>
          <li>声や音を出す</li>
          <li>画面を見る</li>
        </ol>
        <p className="mt-4">操作はこれだけ。面倒な設定や音楽理論は不要です。</p>
      </section>

      {/* こんな方におすすめ */}
      <section className="px-6 md:px-24 py-12 bg-[#f0f4ff]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">こんな方におすすめ</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>歌うことが好きな方</li>
          <li>ボーカル練習中の方</li>
          <li>合唱・コーラス参加者</li>
          <li>楽器の音程確認をしたい方</li>
          <li>レッスン以外の自主練習を充実させたい方</li>
        </ul>
      </section>

      {/* 運営・代表 */}
      <section className="px-6 md:px-24 py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">このサービスについて</h2>
        <p className="text-lg mb-4">
          Voca-nical は、音楽に関わる現場経験と Web開発の知見をもとに制作されています。
        </p>
        <p className="text-lg mb-2">
          「音程や声の状態を、もっと安心して確認できる環境があれば」という思いから、このサービスを立ち上げました。
        </p>
        <a href="/about" className="text-teal-500 underline hover:text-teal-600">
          代表プロフィールを見る
        </a>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-24 py-12 bg-[#f0f4ff]">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">よくある質問</h2>
        <dl className="space-y-4 text-lg">
          <dt className="font-semibold">Q. 無料ですか？</dt>
          <dd>基本機能は無料でご利用いただけます。</dd>

          <dt className="font-semibold">Q. 登録は必要ですか？</dt>
          <dd>登録なしですぐに使えます。</dd>

          <dt className="font-semibold">Q. スマホでも使えますか？</dt>
          <dd>スマホ・PCどちらでも利用できます。</dd>

          <dt className="font-semibold">Q. 楽器でも使えますか？</dt>
          <dd>はい。声以外の音にも対応しています。</dd>
        </dl>
      </section>

      {/* 最終CTA */}
      <section className="px-6 md:px-24 py-16 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          まずは、今の声・音をそっと確認してみませんか？
        </h2>
        <a
          href="https://mms.voca-nical.com"
          className="inline-block bg-teal-400 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-teal-500 transition"
        >
          無料で測ってみる
        </a>
      </section>
    </main>
  );
}
