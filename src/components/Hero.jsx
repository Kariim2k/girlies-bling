import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { brand, heroImages } from "../data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // preload so the crossfade never shows a blank frame
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    const id = setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-stone-900 px-6"
    >
      <AnimatePresence>
        <motion.img
          key={index}
          src={heroImages[index]}
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-amber-300">
          {brand.name}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-4 text-4xl md:text-6xl font-serif text-white"
        >
          Jewellery made to be noticed
        </motion.h1>
        <p className="mt-4 text-stone-200">
          Handpicked pieces, delivered nationwide. Order in minutes on WhatsApp.
        </p>
        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-8 rounded-full bg-white px-8 py-3 text-stone-900 hover:bg-amber-700 hover:text-white"
        >
          Shop Now
        </motion.a>
      </div>
    </section>
  );
}
