import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { formatPrice } from "../data";
import { useCart } from "../context/CartContext";

export default function ProductModal({ product, onClose }) {
  const photos = [product.image, ...(product.gallery || [])];
  const [index, setIndex] = useState(0);
  const { addItem } = useCart();

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-1.5 shadow"
        >
          <X size={18} />
        </button>

        {/* Gallery */}
        <div>
          <div className="relative aspect-square overflow-hidden bg-stone-100">
            <motion.img
              key={index}
              src={photos[index]}
              alt={`${product.name} photo ${index + 1}`}
              draggable={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) next();
                else if (info.offset.x > 50) prev();
              }}
              className="h-full w-full cursor-grab object-cover"
            />

            {photos.length > 1 && (
              <>
                <button
                  aria-label="Previous photo"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  aria-label="Next photo"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow"
                >
                  <ChevronRight size={20} />
                </button>
                <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                  {index + 1} / {photos.length}
                </span>
              </>
            )}
          </div>

          {photos.length > 1 && (
            <div className="flex gap-2 overflow-x-auto p-3">
              {photos.map((src, i) => (
                <button
                  key={src}
                  aria-label={`Show photo ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                    i === index
                      ? "border-amber-700"
                      : "border-transparent opacity-70"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center p-6">
          {product.category && (
            <p className="text-xs uppercase tracking-[0.25em] text-amber-700">
              {product.category}
            </p>
          )}
          <h3 className="mt-2 font-serif text-2xl text-stone-900">
            {product.name}
          </h3>
          <p className="mt-2 text-lg font-medium text-stone-900">
            {formatPrice(product.price)}
          </p>
          <button
            onClick={() => {
              addItem(product);
              onClose();
            }}
            className="mt-6 rounded-full bg-stone-900 py-3 text-white transition hover:bg-amber-700"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
