import React from 'react'
import { Iproducts } from '../types/products.types';
import ProductCard from '../_components/ProductCard';
import { getProducts } from '../service/products';

export default async function Products() {
    const products = await getProducts();
    // console.log(products);
    

  return (
    <>
    {/* <h1>Products</h1> */}
    <div className='flex flex-wrap gap-4 justify-center'>
        {products?.map((p:Iproducts)=>
            <ProductCard key={p?._id} product={p}  />
        )}
        </div>
    </>
  )
}
