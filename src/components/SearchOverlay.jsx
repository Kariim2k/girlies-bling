import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { products, formatPrice } from "../data";
import { useCart } from "../context/CartContext";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const { addItem } = useCart();

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 px-4 pt-20"
      onClick={handleClose}
    >
      <div
        className="mx-auto max-w-xl rounded-xl bg-white p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-stone-200 pb-3">
          <Search size={20} className="text-stone-500" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search jewellery..."
            className="flex-1 bg-transparent text-stone-900 outline-none"
          />
          <button aria-label="Close search" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto pt-3">
          {query.trim() && results.length === 0 && (
            <p className="py-6 text-center text-sm text-stone-500">
              No pieces found for “{query}”.
            </p>
          )}
          <ul className="space-y-3">
            {results.map((p) => (
              <li key={p.id} className="flex items-center gap-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-14 w-14 rounded-lg bg-stone-100 object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm text-stone-900">{p.name}</p>
                  <p className="text-sm text-amber-700">
                    {formatPrice(p.price)}
                  </p>
                </div>
                <button
                  onClick={() => {
                    addItem(p);
                    handleClose();
                  }}
                  className="rounded-full border border-stone-900 px-4 py-1.5 text-sm hover:bg-stone-900 hover:text-white transition"
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
