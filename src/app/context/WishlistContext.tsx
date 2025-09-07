"use client"
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect } from 'react'
import { Iwishlist } from '../types/Wishlist';
import { getUserWishlist } from '../service/Wishlist';


type wishlistContextType = {
  wishlist: Iwishlist | null;
  fetchwishlist: () => Promise<void>;
}

export const wishlistcontext = createContext<wishlistContextType >({
  wishlist: null,
  fetchwishlist: async () => {}
});

export default function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setwishlist] = React.useState<Iwishlist | null>(null);

  const {data} = useSession();

  const fetchwishlist = async () => {
    try {
      const res = await getUserWishlist();
      setwishlist(res);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    if(data?.user) {
      fetchwishlist();
    }
  }, [data?.user]);

  const value = { fetchwishlist, wishlist };

  return (
    <wishlistcontext.Provider value={value}>
      {children}
    </wishlistcontext.Provider>
  );
}

