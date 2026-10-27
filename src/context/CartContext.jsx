import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (product, photoIndex = 0) => {
    const photos = [product.image, ...(product.gallery || [])];
    const hasOptions = photos.length > 1;
    const lineId = hasOptions ? `${product.id}-${photoIndex}` : product.id;

    setItems((prev) => {
      const found = prev.find((i) => i.id === lineId);
      if (found) {
        return prev.map((i) =>
          i.id === lineId ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      return [
        ...prev,
        {
          id: lineId,
          name: product.name,
          price: product.price,
          image: photos[photoIndex],
          option: hasOptions ? photoIndex + 1 : null,
          qty: 1,
        },
      ];
    });
  };

  const changeQty = (id, delta) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i,
      ),
    );

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        cartOpen,
        setCartOpen,
        addItem,
        changeQty,
        removeItem,
        count,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
