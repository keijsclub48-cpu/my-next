// my-next/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
      <div className="text-xl font-semibold text-slate-700">Voca-nical</div>
      <Link
        href="https://app.voca-nical.com"
        className="rounded-full bg-primary px-4 py-2 text-white text-sm shadow hover:bg-primarySoft transition"
      >
        声の高さを調べる
      </Link>
    </header>
  );
}