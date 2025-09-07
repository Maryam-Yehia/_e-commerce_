"use client"
import { getSpecficProducts } from '@/app/service/products';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { Ispecproducts } from '@/app/types/products.types';
import { FaHeart } from 'react-icons/fa';
import { addUserWishlist } from '@/app/service/Wishlist';
import { toast } from 'sonner';
import { addUserCart } from '@/app/service/cart';
import { Cartcontext } from '@/app/context/Cartcontext';
import { wishlistcontext } from '@/app/context/WishlistContext';

export default function ProductDetailsPage() {
    const {id}:{id:string} = useParams();
    const[data,setdata]=useState<Ispecproducts>();   

    const fetchData = async () => {
        const pro = await getSpecficProducts(id);
        setdata(pro);
    };
    useEffect(() => {
        fetchData();
    }, [])

      const [active, setActive] = useState(false);


    // const 

          const {carts ,fetchCart} = useContext(Cartcontext);
          const {wishlist ,fetchwishlist} = useContext(wishlistcontext);
    

    async function addtofav(){
      if(data?.id)
        {await addUserWishlist(data?._id);
      setActive(!active);
      fetchwishlist();
      toast.success("Add successfully");}
    }

    async function addtocart(){
      if (data?._id) {
       const res = await addUserCart(data._id);
      console.log(res);
      fetchCart();
      
      toast.success("Add successfully");
      }
      
    }


  return (
    <>
    <div className='flex justify-center items-center gap-4 '>
       <div>
         {data?.imageCover && (
            <Image src={data?.imageCover} alt={data?.title} width={500} height={100} className='w-full'/>
        )}
        
       </div>
        <div className='space-y-2'>
            <h1 className='font-bold text-xl'>{data?.title}</h1>
            <p>{data?.description}</p>
            <button className='bg-green-600 py-1.5 rounded-md grow text-white cursor-pointer w-full ' onClick={()=>{addtocart()}}>+ Add</button>
        </div>
        <div >
            <FaHeart size={30}  onClick={() => addtofav()} className={`${active ? " text-red-500 cursor-pointer" : " text-gray-400 cursor-pointer"}`} />
        </div>
    </div>
      
    </>
  )
}
