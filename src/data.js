export const slugify = (s) => s.toLowerCase().trim().replace(/\s+/g, "-");

export const brand = {
  name: "Girlies_Bling",
  logo: "", // e.g. '/logo.png' once you have it, put the file in /public
  whatsapp: "2348150286791",
  tiktok: "https://tiktok.com/@girlies_bling?_r=1&_t=ZS-9AO6lcDxopx",
  location: "Lagos, Nigeria",
};
export const heroImages = ["/hero/1.png", "/hero/2.jpeg", "/hero/3.jpeg"];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/#collections" },
  { label: "Services", to: "/#services" },
  { label: "About Us", to: "/#about" },
  { label: "Contact", to: "/#contact" },
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
    name: "Stud Earrings",
    price: 7499,
    category: "Earrings",
    image: "/products/earrings/Stud-Earrings.jpeg",
    gallery: [
      "/products/earrings/Stud-Earrings-1.jpeg",
      "/products/earrings/Stud-Earrings-2.jpeg",
    ],
  },
  {
    id: 2,
    name: "Naidu Lady’s Wristwatch",
    price: 29999,
    category: "Wristwatches",
    image: "/products/wristwatches/Naidu-lady’s-wristwatch.jpeg",
    gallery: [
      "/products/wristwatches/Naidu-lady’s-wristwatch-1.jpeg",
      "/products/wristwatches/Naidu-lady’s-wristwatch-2.jpeg",
    ],
  },
  {
    id: 3,
    name: "Chunky Bracelet",
    price: 16999,
    category: "Bracelets",
    image: "/products/bracelets/chunky bracelet.jpeg",
  },
  {
    id: 4,
    name: "Zirconia Proposal Ring",
    price: 25000,
    category: "Rings",
    image: "/products/rings/zirconia ring.jpeg",
  },

  {
    id: 5,
    name: "Casio Wristwatch Set",
    price: 34999,
    category: "Sets",
    image: "/products/sets/Casio-Wristwatch-Set.jpeg",
    gallery: [
      "/products/sets/Casio-Wristwatch-Set-1.jpeg",
      "/products/sets/Casio-Wristwatch-Set-2.jpeg",
    ],
  },
  {
    id: 6,
    name: "Necklace and Earrings Set",
    price: 25000,
    category: "Sets",
    image: "/products/sets/Necklace-and-Earrings-set.jpeg",
    gallery: [
      "/products/sets/Necklace-and-Earrings-set-1.jpeg",
      "/products/sets/Necklace-and-Earrings-set-2.jpeg",
    ],
  },
  {
    id: 7,
    name: "Heart Necklace",
    price: 9599,
    category: "Necklaces",
    image: "/products/necklaces/Heart-Necklace.jpeg",
    gallery: [
      "/products/necklaces/Heart-Necklace-1.jpeg",
      "/products/necklaces/Heart-Necklace-2.jpeg",
    ],
  },
];

export const orderLink = (item) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    item
      ? `Hi, I'd like to order the ${item}.`
      : `Hi, I'd like to see your jewellery.`,
  )}`;

export const collections = [
  { id: 1, name: "Earrings", image: "/collections/Stud-Earrings.jpeg" },
  {
    id: 2,
    name: "Necklaces",
    image: "/collections/Heart-Necklace-2.jpeg",
  },
  { id: 3, name: "Rings", image: "/collections/rings.jpg" },
  {
    id: 4,
    name: "Bracelets",
    image: "/collections/chunky bracelet.jpeg",
  },
  {
    id: 5,
    name: "Sets",
    image: "/collections/Necklace-and-Earrings-set-2.jpeg",
  },
];

export const services = [
  {
    id: 1,
    icon: "palette",
    title: "Custom Pieces",
    text: "Have something in mind? We'll make it to your design, size and budget.",
  },
  {
    id: 2,
    icon: "gift",
    title: "Gift Packaging",
    text: "Orders can arrive beautifully wrapped and ready to give.",
  },
  {
    id: 3,
    icon: "truck",
    title: "Nationwide Delivery",
    text: "Fast, tracked delivery to any state in Nigeria.",
  },
  {
    id: 4,
    icon: "wrench",
    title: "Resizing & Repairs",
    text: "Need a fit adjustment or a fix? Send us a message.",
  },
];
