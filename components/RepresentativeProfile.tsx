"use client";

import { useState } from "react";
import Image from "next/image";
import ProfileImg from "../public/profile_mochida.png";

interface RepresentativeProfileProps {
  imageWidth?: number;
  imageHeight?: number;
}

export default function RepresentativeProfile({
  imageWidth = 280,
  imageHeight = 280,
}: RepresentativeProfileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <button
        className="text-xl font-semibold mb-6 border-b border-white pb-1"
        onClick={() => setOpen(!open)}
      >
        代表者紹介 {open ? "▲" : "▼"}
      </button>

      {open && (
        <div className="flex flex-wrap gap-8 text-white">
          <div className="flex-shrink-0">
            <Image
              src={ProfileImg}
              alt="代表者 持田恵作"
              width={imageWidth}
              height={imageHeight}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-[260px]">
            <h3 className="text-2xl font-bold mb-2">持田 恵作</h3>
            <p className="mb-4">
              VOCA-NICAL studio 代表<br />
              ジャズ・トランペット奏者／エンジニア／起業家
            </p>
            <p>
              音楽・工学・人工知能を横断しながら、「人の感覚を技術として未来へ残す」ことをテーマに活動。
            </p>
            {/* 以下、必要に応じてセクション追加 */}
          </div>
        </div>
      )}
    </div>
  );
}
