import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { brand, navLinks } from "../data";
import { useCart } from "../context/CartContext";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, setCartOpen } = useCart();

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo + clickable brand name */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            {brand.logo ? (
              <img src={brand.logo} alt="" className="h-8 w-8 object-contain" />
            ) : (
              <span
                aria-hidden
                className="h-8 w-8 rounded-full border border-dashed border-stone-300"
              />
            )}
            <span className="font-serif text-xl text-stone-900">
              {brand.name}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-stone-600 transition hover:text-amber-700"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4 text-stone-800">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="hover:text-amber-700"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Cart"
              onClick={() => setCartOpen(true)}
              className="relative hover:text-amber-700"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <motion.span
                  key={count}
                  initial={{ scale: 1.6 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-700 text-[10px] text-white"
                >
                  {count}
                </motion.span>
              )}
            </button>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <ul className="border-t border-stone-200 bg-white px-6 py-4 md:hidden">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-stone-700"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
