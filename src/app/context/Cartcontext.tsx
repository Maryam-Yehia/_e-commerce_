"use client"
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect } from 'react'
import getUserCart from '../service/cart';
import { Icarts } from '../types/Carts';
// import getUserCart from '../service/cart';

type CartContextType = {
  carts: Icarts | null;
  fetchCart: () => Promise<void>;
}

export const Cartcontext = createContext<CartContextType  >({
  carts: null,
  fetchCart: async () => {}
});

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [carts, setCart] = React.useState<Icarts | null>(null);

  const {data} = useSession();

  const fetchCart = async () => {
    try {
      const res = await getUserCart();
      setCart(res);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    if(data?.user) {
      fetchCart();
    }
  }, [data?.user]);

  const value = { fetchCart, carts };

  return (
    <Cartcontext.Provider value={value}>
      {children}
    </Cartcontext.Provider>
  );
}

