import { createContext, useContext, useState, useEffect } from "react";
import type { MenuItem } from "../types/menutype";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("restaurant_cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("restaurant_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem, quantity: number) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((ci) => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { item, quantity }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== itemId));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, ci) => sum + ci.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, ci) => sum + Number(ci.item.price) * ci.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
