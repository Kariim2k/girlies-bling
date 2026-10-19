import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { collections, slugify } from "../data";

export default function Collections() {
  return (
    <section id="collections" className="bg-stone-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl text-stone-900 md:text-4xl">
          Shop by Collection
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {collections.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <Link
                to={`/shop/${slugify(c.name)}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-stone-200"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 font-serif text-xl text-white">
                  {c.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
