// my-next/components/HeroVisual.tsx
export default function HeroVisual() {
  return (
    <div className="rounded-3xl bg-white shadow-lg p-6 flex flex-col items-center">
      <div className="text-center text-slate-500 mb-4">音域：A3 〜 E5</div>
      <svg className="w-full h-32 mb-4" viewBox="0 0 400 100">
        <path
          d="M0,50 C50,40 100,60 150,50 C200,40 250,60 300,50 C350,40 400,50"
          stroke="#38BDF8"
          strokeWidth="3"
          fill="transparent"
        />
        <path
          d="M0,55 C50,45 100,65 150,55 C200,45 250,65 300,55 C350,45 400,55"
          stroke="#7DD3FC"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
      <div className="text-center text-green-600 font-medium">安定しています</div>
    </div>
  );
}
