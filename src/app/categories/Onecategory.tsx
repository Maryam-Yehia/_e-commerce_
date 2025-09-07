import React from 'react'
import Image from 'next/image'
import { Icategories } from '../types/ctegories'

export default function Onecategory({data}:{data:Icategories}) {
  return (
    <>
    <div className='border p-5 rounded-lg  hover:inset-ring-3 hover:inset-ring-green-300/50 hover:scale-105 duration-1000 cursor-pointer text-center  '>
        <Image src={data?.image} alt={data?.name} width={350} height={200} className='img-fluid range-lg h-[300px]'/>
        <h2>{data?.name}</h2>
    </div>
    </>
  )
}
