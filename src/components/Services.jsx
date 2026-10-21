import { motion } from "motion/react";
import { Gem, Gift, Truck, Wrench, Palette } from "lucide-react";
import { services } from "../data";

const icons = {
  gem: Gem,
  gift: Gift,
  truck: Truck,
  wrench: Wrench,
  palette: Palette,
};

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl text-stone-900 md:text-4xl">
          Our Services
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-stone-600">
          More than just jewellery. Here's how we can help.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon] || Gem;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="rounded-xl border border-stone-200 bg-stone-50 p-6 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-serif text-lg text-stone-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{s.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
