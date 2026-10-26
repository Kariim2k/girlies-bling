import { brand } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
        <div className="aspect-[4/5] overflow-hidden rounded-xl bg-stone-100">
          <img
            src="/about/about.png"
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
            Girlies_Bling was born from a love for jewellery that adds a little
            extra magic to the way a woman expresses herself. We handpick pieces
            that balance feminine charm with understated luxury, bringing
            together styles that feel beautiful, versatile, and worth reaching
            for again and again.
          </p>
          <p className="mt-3 text-stone-600">
            At Girlies_Bling, every piece is thoughtfully selected with an eye
            for quality, detail, and lasting appeal. We want you to shop with
            confidence, knowing that each order is handled with care and
            delivered with the same attention to detail that went into choosing
            your jewellery.
          </p>
        </div>
      </div>
    </section>
  );
}
