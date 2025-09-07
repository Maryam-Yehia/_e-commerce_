import React, { Suspense } from 'react'
import Products from './products'
import Search from '../_components/search'
import Loading from '../loading'

export default function page() {
  return (
    <>
      <Search />
      <Suspense fallback={<div className='flex flex-wrap gap-4 justify-center'><Loading /></div>}>
        <Products />
      </Suspense>
    </>
  )
}
