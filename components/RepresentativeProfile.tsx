"use client"; // ← 必須

import { useState } from "react";
import Image from "next/image";
import ProfileImg from "../public/profile_mochida.png";

export default function RepresentativeProfile() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-6 md:px-24 py-16 bg-bg-main">
      <button
        onClick={() => setOpen(!open)}
        className="bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-[#b28c3c] transition mb-6"
      >
        {open ? "閉じる" : "代表紹介を見る"}
      </button>

      {open && (
        <div className="flex flex-col md:flex-row gap-12">
          {/* 画像 */}
          <div className="flex-shrink-0 w-full md:w-72">
            <Image
              src={ProfileImg}
              alt="代表取締役 持田恵作"
              className="rounded-xl shadow-lg"
              width={280}
              height={280}
            />
          </div>

          {/* テキスト */}
          <div className="flex-1 min-w-[260px]">
            <div className="text-2xl md:text-3xl font-bold text-brand-primary mb-1">
              持田 恵作
            </div>
            <div className="text-sm md:text-base text-text-sub mb-4">
              Keisaku Mochida
            </div>
            <div className="font-semibold text-brand-secondary mb-6 text-base md:text-lg">
              VOCA-NICAL studio 代表<br />
              ジャズ・トランペット奏者／エンジニア／起業家
            </div>

            <p className="mb-6 text-text-main">
              音楽・工学・人工知能という異なる分野を横断しながら、
              「人の感覚を、継承可能な技術として未来へ残す」ことをテーマに活動。
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-primary relative pl-5 mb-2">
                  音楽と探究の原点
                  <span className="absolute left-0 top-1 w-1.5 h-5 bg-brand-accent"></span>
                </h3>
                <p className="text-text-main mb-2">
                  学生時代より国内外一流ミュージシャンの演奏を生で体験…
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-primary relative pl-5 mb-2">
                  工学・AI・ビジネス
                  <span className="absolute left-0 top-1 w-1.5 h-5 bg-brand-accent"></span>
                </h3>
                <p className="text-text-main mb-2">
                  東京工業大学・大学院で精密機械工学を専攻…
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-primary relative pl-5 mb-2">
                  現在の取り組み
                  <span className="absolute left-0 top-1 w-1.5 h-5 bg-brand-accent"></span>
                </h3>
                <p className="text-text-main">
                  VOCA-NICAL studio代表として、音声・演奏を対象としたリアルタイム解析…
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-bg-light border-l-4 border-brand-accent italic text-brand-primary">
              Preserving improvisation does not mean freezing it.<br />
              Structure and visualization exist to expand freedom, not to limit it.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
