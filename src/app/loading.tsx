import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <>
        {/* {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton key={index} height={500} width={290} className='text-amber-700'  />
        ))} */}
        <div className='flex justify-center items-center'>
        <ClipLoader color="#36d7b7" size={150} className='m-auto mt-20' />

        </div>
    </>
  )
}
