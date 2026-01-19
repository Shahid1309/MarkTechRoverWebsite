import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id' | 'quantity'>) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'mtr-cart-items';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Failed to load cart from storage', err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.error('Failed to save cart to storage', err);
    }
  }, [items]);

  const addItem = (item: Omit<CartItem, 'id' | 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(p => p.name === item.name && p.category === item.category);
      if (existing) {
        return prev.map(p =>
          p.name === item.name && p.category === item.category ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, id: crypto.randomUUID(), quantity: 1 }];
    });
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(item => item.id !== id));

  const increment = (id: string) =>
    setItems(prev => prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));

  const decrement = (id: string) =>
    setItems(prev =>
      prev
        .map(item => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item))
        .filter(item => item.quantity > 0)
    );

  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      increment,
      decrement,
      clear,
      total,
      itemCount,
    }),
    [items, total, itemCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
};
