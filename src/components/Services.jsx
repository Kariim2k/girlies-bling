import { motion } from "motion/react";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="bg-stone-900 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        {/* Heading */}
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            What we offer
          </p>
          <h2 className="mt-4 font-serif text-4xl text-white md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-sm text-stone-400">
            More than just jewellery. Here's how we can help.
          </p>
        </div>

        {/* Numbered list */}
        <ul className="divide-y divide-stone-700 border-y border-stone-700">
          {services.map((s, i) => (
            <motion.li
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6 py-8"
            >
              <span className="font-serif text-lg text-amber-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-white">{s.title}</h3>
                <p className="mt-2 text-stone-400">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
