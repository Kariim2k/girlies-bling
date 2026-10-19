import { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { products, collections, formatPrice, slugify } from "../data";
import { useCart } from "../context/CartContext";
import ProductModal from "../components/ProductModal";

export default function Shop() {
  const { category } = useParams();
  const { addItem } = useCart();
  const [selected, setSelected] = useState(null);

  const current = category
    ? collections.find((c) => slugify(c.name) === category)
    : null;

  const visible = category
    ? products.filter((p) => slugify(p.category || "") === category)
    : products;

  const tabs = [
    { label: "All", to: "/shop" },
    ...collections.map((c) => ({
      label: c.name,
      to: `/shop/${slugify(c.name)}`,
    })),
  ];

  if (category && !current) {
    return (
      <section className="px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-stone-900">
          Category not found
        </h1>
        <Link to="/shop" className="mt-4 inline-block text-amber-700 underline">
          View all pieces
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center font-serif text-3xl text-stone-900 md:text-4xl">
          {current ? current.name : "All Pieces"}
        </h1>

        {/* Category tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end
              className={({ isActive }) =>
                `rounded-full border px-4 py-1.5 text-sm transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-300 text-stone-700 hover:border-stone-900"
                }`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-16 text-center text-stone-500">
            No pieces here yet. Check back soon.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {visible.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className="group"
              >
                <button
                  onClick={() => setSelected(item)}
                  aria-label={`View ${item.name}`}
                  className="relative block aspect-square w-full overflow-hidden rounded-xl bg-stone-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {item.gallery?.length > 0 && (
                    <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white">
                      {item.gallery.length + 1} photos
                    </span>
                  )}
                </button>
                <h3 className="mt-3 text-sm text-stone-900 md:text-base">
                  {item.name}
                </h3>
                <p className="font-medium text-amber-700">
                  {formatPrice(item.price)}
                </p>
                <button
                  onClick={() => addItem(item)}
                  className="mt-2 w-full rounded-full border border-stone-900 py-2 text-center text-sm text-stone-900 transition hover:bg-stone-900 hover:text-white"
                >
                  Add to cart
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <ProductModal
          key={selected.id}
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
