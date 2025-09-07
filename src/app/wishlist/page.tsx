import React from 'react'
import getUserCart from '../service/cart';
import { Icarts, ProductElement } from '../types/Carts';
import Onecart from './Onecart';
import { Cartcontext } from '../context/Cartcontext';
import { getUserWishlist } from '../service/Wishlist';
import { Datum } from '../types/Wishlist';

export default async function page() {

    const {data} = await getUserWishlist();

 

  return (
    <>
        <div className='bg-gray-100 rounded-lg p-8 w-[85%] mt-20 mx-auto font-semibold'>
        <div className='flex justify-between w-full'>
          <div className='space-y-8.5'>
            <h1 className='text-2xl'>My Wish List</h1>
          </div>
          <div className='space-y-5 flex flex-col items-end'>
          </div>
          </div>
          {data?.map((pro:Datum)=><Onecart key={pro._id} pro={pro} />)}
          </div>
    </>
  )
}
