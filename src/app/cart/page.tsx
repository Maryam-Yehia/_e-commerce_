"use client"
import React, { useContext } from 'react'
import { clearUserCart } from '../service/cart';
import Onecart from './Onecart';
import { ProductElement } from '../types/Carts';
import { Cartcontext } from '../context/Cartcontext';
import { toast } from 'sonner';
import Link from 'next/link';

export default function CartPage() {
    const {carts ,fetchCart} = useContext(Cartcontext);


  const products = carts?.data?.products;
    // const data = useContext(Cartcontext);

  function clear(){
    clearUserCart();
    fetchCart();
    toast.success("Cart cleared successfully!");
  }
  return (
    <>
      <div className='bg-gray-100 rounded-lg p-8 w-[85%] mt-20 mx-auto font-semibold'>
        <div className='flex justify-between w-full'>
          <div className='space-y-8.5'>
            <h1 className='text-2xl'>Cart Shop</h1>
            <p className='text-xl'>total price: <span className='text-green-400'>{carts?.data?.totalCartPrice}</span></p>
          </div>
          <div className='space-y-5 flex flex-col items-end'>
            <Link href={`/cart/checkout/${carts?.cartId}`} className='bg-blue-600 text-white p-3.5 py-2.5 rounded-lg cursor-pointer'>Check out</Link>
            <p className='text-xl'>total number of items: <span className='text-green-400'>{carts?.numOfCartItems}</span></p>
          </div>
        </div>
          {products?.map((pro:ProductElement)=><Onecart key={pro._id} pro={pro} />)}
          <button className='block bg-transparent border border-green-400 p-3.5 py-2.5 rounded-lg mx-auto my-5 cursor-pointer' onClick={clear}>Clear your cart</button>
        </div>
    </>
  )
}

