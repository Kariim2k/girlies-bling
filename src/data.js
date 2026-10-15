export const brand = {
  name: "Girlies_Bling",
  logo: "", // e.g. '/logo.png' once you have it, put the file in /public
  whatsapp: "2348150286791",
  tiktok: "https://tiktok.com/@girlies_bling?_r=1&_t=ZS-9AO6lcDxopx",
  location: "Lagos, Nigeria",
};
export const heroImages = ["/hero/1.png", "/hero/2.jpeg", "/hero/3.jpeg"];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Collections", href: "#collections" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const formatPrice = (n) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);

export const products = [
  {
    id: 1,
    name: "Gold Hoop Earrings",
    price: 15000,
    image: "/products/hoops.jpg",
  },
  {
    id: 2,
    name: "Beaded Necklace",
    price: 21999,
    image: "/products/necklace.jpg",
  },
  {
    id: 3,
    name: "Chunky Bracelet",
    price: 16999,
    image: "/products/chunky bracelet.jpeg",
  },
  {
    id: 4,
    name: "Zirconia Proposal Ring",
    price: 25000,
    image: "/products/zirconia ring.jpeg",
  },
];

export const orderLink = (item) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    item
      ? `Hi, I'd like to order the ${item}.`
      : `Hi, I'd like to see your jewellery.`,
  )}`;

export const collections = [
  { id: 1, name: "Earrings", image: "/collections/earrings.jpg" },
  { id: 2, name: "Necklaces", image: "/collections/necklaces.jpg" },
  { id: 3, name: "Rings", image: "/collections/rings.jpg" },
  { id: 4, name: "Bracelets", image: "/collections/bracelets.jpg" },
];
