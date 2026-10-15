import { brand } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-xl bg-stone-100">
          <img
            src="/about.jpg"
            alt={`The story behind ${brand.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-700">
            Our story
          </p>
          <h2 className="mt-3 font-serif text-3xl text-stone-900 md:text-4xl">
            About {brand.name}
          </h2>
          <p className="mt-4 text-stone-600">
            Write two or three honest sentences here: who the vendor is, how
            they started, and what makes the pieces special. Real details beat
            generic copy every time.
          </p>
          <p className="mt-3 text-stone-600">
            Add a line about quality, sourcing, or delivery to build trust.
          </p>
        </div>
      </div>
    </section>
  );
}
