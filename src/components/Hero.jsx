import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[320px] md:h-[420px] rounded-3xl overflow-hidden">
        <Spline scene="https://prod.spline.design/8YBfayHBc7Y9gMn5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center text-center px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
          Top Up Voucher Game Instan & Resmi
        </h1>
        <p className="mt-2 max-w-2xl text-sm md:text-base text-gray-600">
          Isi ulang game favorit seperti MLBB, Free Fire, Genshin Impact, dan lainnya. Pembayaran aman, proses seketika.
        </p>
      </div>
    </section>
  );
}
