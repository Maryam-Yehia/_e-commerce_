"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import CartProvider from './app/context/Cartcontext'

export default function Providers({ children }:{children: ReactNode}) {
  return (
    <>
    <SessionProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </SessionProvider>

      
    </>
  )
}
