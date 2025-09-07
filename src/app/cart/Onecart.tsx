"use client"
import React, { useContext } from 'react'
import { ProductElement } from '../types/Carts'
import Image from 'next/image'
import { AiFillDelete } from 'react-icons/ai'
import { toast } from 'sonner'
import { deleteUserCart, updateUserCart } from '../service/cart'
import { Cartcontext } from '../context/Cartcontext'

export default function Onecart({pro}:{pro:ProductElement}) {
  const data = useContext(Cartcontext);
  
  function deletecart(){
    console.log(pro?.product?.id);
    deleteUserCart(pro?.product?.id);
    data?.fetchCart();
    toast.success("Deleted Successfully");
  }
  function updatecart(count:string){
    updateUserCart(pro?.product?._id , count);
    data?.fetchCart();
    toast.success("update Successfully");
  }
  return (
    <>
    <div className='flex justify-between items-center border-b border-gray-300 pb-5 mt-10 flex-col gap-5 md:flex-row'>
        <div className='md:w-[100px]'><Image src={pro?.product?.imageCover} alt={pro?.product?.title} width={900} height={300} className='w-[100%]' /> </div>
      <div className='flex justify-between items-center w-full flex-row'>
        <div className='flex items-center flex-col gap-2'>
        <div className='space-y-2'>
          <h2 className='text-lg'>{pro?.product?.title.split(" ").slice(0, 3).join(" ")}</h2>
          <p>{pro?.price} EGP</p>
          <span className='flex items-center text-red-600 text-sm cursor-pointer' onClick={() => { deletecart() }}><AiFillDelete size="20" color="red" />Remove</span>
        </div>
      </div>
      <div className='space-x-4'>
        <button className='bg-transparent border border-green-400 px-3 py-1.5 rounded-lg cursor-pointer' onClick={()=>{updatecart('1')}}>+</button>
        <span>{pro?.count}</span>
        <button className='bg-transparent border border-green-400 px-3.5 py-1.5 rounded-lg cursor-pointer' onClick={()=>{updatecart('-1')}}>-</button>
      </div>
      </div>
    </div>
      
    </>
  )
}
