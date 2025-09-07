"use client"
import { getSpecficProducts } from '@/app/service/products';
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const {id}:{id:string} = useParams();
    // console.log(id);

    // const data = async()=>{ return await getSpecficProducts(id);}
    // console.log(data);
    
    
  return (
    <>
      
    </>
  )
}
