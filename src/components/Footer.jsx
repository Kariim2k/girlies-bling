import { brand, navLinks, orderLink } from "../data";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-stone-800 bg-stone-950 px-6 py-14 text-stone-400">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-white">{brand.name}</p>
            <p className="mt-3 max-w-xs text-sm">
              Handpicked jewellery, delivered nationwide.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-stone-300">
              Quick links
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-stone-300">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={orderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={brand.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  TikTok
                </a>
              </li>
              {brand.location && <li>{brand.location}</li>}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-6xl border-t border-stone-800 pt-6 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </footer>
      {/* Floating WhatsApp button */}
      <a
        href={orderLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-green-600"
      >
        Chat on WhatsApp
      </a>
    </>
  );
}
