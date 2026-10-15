import { orderLink } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="bg-stone-900 px-6 py-20 text-center">
      <h2 className="font-serif text-3xl text-white md:text-4xl">
        Get in touch
      </h2>
      <p className="mx-auto mt-3 max-w-md text-stone-300">
        Questions about a piece, sizing, or delivery? Message us and we'll reply
        quickly.
      </p>

      <a
        href={orderLink()}
        className="mt-8 inline-block rounded-full bg-green-500 px-8 py-3 font-medium text-white transition hover:bg-green-600"
      >
        Chat on WhatsApp
      </a>
    </section>
  );
}
