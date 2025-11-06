import { Star, Plus } from "lucide-react";

export default function GameCard({ game, onSelect }) {
  return (
    <div className="group rounded-2xl border bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] bg-gray-100">
        <img
          src={game.image}
          alt={game.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight">{game.name}</h3>
            <p className="text-sm text-gray-500">{game.category}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{game.rating}</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-600">Mulai dari <span className="font-semibold text-gray-900">Rp {game.startPrice.toLocaleString()}</span></div>
          <button
            onClick={() => onSelect(game)}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-3 py-2 hover:bg-indigo-700"
          >
            <Plus size={16} /> Beli
          </button>
        </div>
      </div>
    </div>
  );
}
