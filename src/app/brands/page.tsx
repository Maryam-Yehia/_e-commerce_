import React from 'react'
import { gatAllBrand } from '../service/Brand'
import Onebrand from './Onebrand';
import { Ibrands } from '../types/Brands';
import { Card } from '@/components/ui/card';

export default async function page() {
  const {data} = await gatAllBrand();
  console.log(data);
  return (
    <>
      <h1 className='text-center text-green-500 py-10 font-semibold text-4xl'>All Brands</h1>
    <div className='flex flex-wrap justify-center gap-5 container mx-auto '>
      {data.map((brand:Ibrands) => (
        <Onebrand data={brand} key={brand._id} />
      ))}
    </div>
    </>
  )
}
