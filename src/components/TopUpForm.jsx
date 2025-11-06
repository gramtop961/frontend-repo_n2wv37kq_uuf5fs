import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function TopUpForm({ game, onSubmit }) {
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [product, setProduct] = useState(null);
  const [method, setMethod] = useState("QRIS");

  const products = useMemo(() => game?.products ?? [], [game]);

  useEffect(() => {
    setProduct(products[0] || null);
  }, [products]);

  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="p-4 border-b flex items-center gap-3">
          <img src={game.image} alt={game.name} className="h-10 w-10 rounded" />
          <div>
            <h3 className="font-semibold">Top Up {game.name}</h3>
            <p className="text-sm text-gray-500">Masukkan data akun dan pilih nominal</p>
          </div>
          <button className="ml-auto text-gray-500 hover:text-gray-900" onClick={() => onSubmit(null)}>
            ✕
          </button>
        </div>

        <div className="p-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="text-sm font-medium">User ID</label>
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Contoh: 123456789"
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {game.requireServer && (
              <div>
                <label className="text-sm font-medium">Server ID</label>
                <input
                  value={serverId}
                  onChange={(e) => setServerId(e.target.value)}
                  placeholder="Contoh: 1234"
                  className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium">Nominal</label>
              <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setProduct(p)}
                    className={`relative rounded-lg border px-3 py-3 text-left hover:border-indigo-500 ${
                      product?.id === p.id ? "ring-2 ring-indigo-500 border-indigo-500" : ""
                    }`}
                  >
                    <div className="font-medium">{p.name}</div>
                    <div className="text-sm text-gray-600">Rp {p.price.toLocaleString()}</div>
                    {product?.id === p.id && (
                      <span className="absolute top-2 right-2 text-indigo-600">
                        <Check size={18} />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              <div className="text-sm text-gray-500">Pembayaran</div>
              <div className="mt-1 relative">
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-full appearance-none rounded-lg border px-3 py-2 pr-8"
                >
                  <option>QRIS</option>
                  <option>GoPay</option>
                  <option>OVO</option>
                  <option>Dana</option>
                  <option>Transfer Bank</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              </div>
            </div>

            <div className="border rounded-lg p-3 bg-gray-50">
              <div className="text-sm text-gray-500">Ringkasan</div>
              <div className="mt-2 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Produk</span>
                  <span>{product?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Harga</span>
                  <span>Rp {product?.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>Rp {product?.price.toLocaleString()}</span>
                </div>
              </div>
              <button
                disabled={!userId || (game.requireServer && !serverId) || !product}
                onClick={() => onSubmit({ userId, serverId, product, method })}
                className="mt-3 w-full rounded-lg bg-indigo-600 text-white py-2 hover:bg-indigo-700 disabled:opacity-50"
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
