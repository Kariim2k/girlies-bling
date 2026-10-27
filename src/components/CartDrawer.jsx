import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { brand, formatPrice } from "../data";

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, changeQty, removeItem, total } =
    useCart();

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  const checkoutLink = () => {
    const lines = items.map(
      (i) =>
        `• ${i.qty} x ${i.name}${
          i.option && <p className="text-xs text-stone-500">Photo {i.option}</p>
        } (${formatPrice(i.price * i.qty)})`,
    );
    const message = `Hi, I'd like to order:\n${lines.join("\n")}\n\nTotal: ${formatPrice(total)}`;
    return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
  };

  return (
    <AnimatePresence>
      {cartOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[60] bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCartOpen(false)}
        />
      )}
      {cartOpen && (
        <motion.aside
          key="drawer"
          className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-sm flex-col bg-white shadow-xl"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">
            <h2 className="font-serif text-xl text-stone-900">Your Cart</h2>
            <button aria-label="Close cart" onClick={() => setCartOpen(false)}>
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {items.length === 0 ? (
              <p className="mt-10 text-center text-stone-500">
                Your cart is empty.
              </p>
            ) : (
              <ul className="space-y-5">
                {items.map((i) => (
                  <li key={i.id} className="flex gap-3">
                    <img
                      src={i.image}
                      alt={i.name}
                      className="h-20 w-20 rounded-lg bg-stone-100 object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-stone-900">{i.name}</p>
                      <p className="text-sm font-medium text-amber-700">
                        {formatPrice(i.price)}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => changeQty(i.id, -1)}
                          disabled={i.qty === 1}
                          className="rounded-full border border-stone-300 p-1 disabled:opacity-40"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm">{i.qty}</span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => changeQty(i.id, 1)}
                          className="rounded-full border border-stone-300 p-1"
                        >
                          <Plus size={14} />
                        </button>
                        <button
                          onClick={() => removeItem(i.id)}
                          className="ml-auto text-xs text-stone-500 underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-stone-200 px-5 py-4">
              <div className="flex justify-between font-medium text-stone-900">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <a
                href={checkoutLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-full bg-green-500 py-3 text-center font-medium text-white transition hover:bg-green-600"
              >
                Order on WhatsApp
              </a>
            </div>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
