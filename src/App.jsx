import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameCard from "./components/GameCard";
import TopUpForm from "./components/TopUpForm";

const GAMES = [
  {
    id: "mlbb",
    name: "Mobile Legends",
    category: "MOBA",
    rating: 4.9,
    startPrice: 3000,
    requireServer: true,
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1600&auto=format&fit=crop",
    products: [
      { id: "d11", name: "11 Diamonds", price: 3000 },
      { id: "d86", name: "86 Diamonds", price: 22000 },
      { id: "d172", name: "172 Diamonds", price: 42000 },
      { id: "d257", name: "257 Diamonds", price: 62000 },
    ],
  },
  {
    id: "ff",
    name: "Free Fire",
    category: "Battle Royale",
    rating: 4.8,
    startPrice: 2500,
    requireServer: false,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
    products: [
      { id: "d50", name: "50 Diamonds", price: 8000 },
      { id: "d140", name: "140 Diamonds", price: 20000 },
      { id: "d355", name: "355 Diamonds", price: 50000 },
    ],
  },
  {
    id: "gi",
    name: "Genshin Impact",
    category: "RPG",
    rating: 4.9,
    startPrice: 15000,
    requireServer: true,
    image:
      "https://images.unsplash.com/photo-1627856014754-21df26f9c34c?q=80&w=1600&auto=format&fit=crop",
    products: [
      { id: "bp", name: "Blessing Welkin", price: 75000 },
      { id: "g300", name: "300 Genesis Crystals", price: 75000 },
      { id: "g980", name: "980 Genesis Crystals", price: 229000 },
    ],
  },
  {
    id: "valo",
    name: "Valorant",
    category: "FPS",
    rating: 4.7,
    startPrice: 10000,
    requireServer: false,
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1600&auto=format&fit=crop",
    products: [
      { id: "vp125", name: "125 VP", price: 16000 },
      { id: "vp420", name: "420 VP", price: 48000 },
      { id: "vp700", name: "700 VP", price: 76000 },
    ],
  },
];

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const popular = useMemo(() => GAMES.slice(0, 4), []);

  const handleSubmit = (payload) => {
    if (!payload) {
      setSelectedGame(null);
      return;
    }
    // Simulate success checkout
    alert(
      `Pesanan diterima!\nGame: ${selectedGame.name}\nUser ID: ${payload.userId}${selectedGame.requireServer ? ` (${payload.serverId})` : ""}\nProduk: ${payload.product.name}\nPembayaran: ${payload.method}\nTotal: Rp ${payload.product.price.toLocaleString()}`
    );
    setCartCount((c) => c + 1);
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Navbar cartCount={cartCount} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Hero />

        <section className="space-y-3">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Game Populer</h2>
              <p className="text-gray-600 text-sm">Pilih game lalu isi User ID untuk top up instan</p>
            </div>
            <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">Lihat semua</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popular.map((g) => (
              <GameCard key={g.id} game={g} onSelect={setSelectedGame} />
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Kenapa pilih kami?</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>Proses cepat, rata-rata kurang dari 1 menit</li>
              <li>Harga kompetitif dan transparan</li>
              <li>Metode pembayaran lengkap</li>
              <li>Dukungan pelanggan responsif</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Cara order</h3>
            <ol className="mt-3 space-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>Pilih game dan nominal</li>
              <li>Masukkan User ID dan server bila diperlukan</li>
              <li>Pilih metode pembayaran dan bayar</li>
              <li>Saldo masuk otomatis ke akun Anda</li>
            </ol>
          </div>
          <div className="rounded-2xl border p-5 bg-white">
            <h3 className="font-semibold">Aman & Resmi</h3>
            <p className="mt-3 text-sm text-gray-600">
              Semua transaksi dilakukan melalui jalur resmi penerbit game dan terenkripsi dengan baik.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vouchify — Semua hak cipta dilindungi.
      </footer>

      {selectedGame && (
        <TopUpForm game={selectedGame} onSubmit={handleSubmit} />
      )}
    </div>
  );
}
