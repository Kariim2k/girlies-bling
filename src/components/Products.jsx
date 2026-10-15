import { motion } from "motion/react";
import { products, formatPrice } from "../data";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addItem } = useCart();
  return (
    <section id="shop" className="px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 text-center">
          Featured Pieces
        </h2>
        <p className="mt-2 text-center text-stone-600">
          Add your favourites to the cart and order on WhatsApp in one go.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-sm md:text-base text-stone-900">
                {item.name}
              </h3>
              <p className="text-amber-700 font-medium">
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
      </div>
    </section>
  );
}
