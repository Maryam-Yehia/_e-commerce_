import React from 'react'
import { Ibrands } from '../types/Brands'
import Image from 'next/image'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger , AlertDialogCancel } from '@/components/ui/alert-dialog'

export default function Onebrand({data}:{data:Ibrands}) {
  return (
    <>
    <AlertDialog>
  <AlertDialogTrigger>
    <div className='border p-5 rounded-lg  hover:inset-ring-3 hover:inset-ring-green-300/50 hover:scale-105 duration-1000 cursor-pointer text-center  '>
        <Image src={data?.image} alt={data?.name} width={263} height={100}/>
        <h2>{data?.name}</h2>
    </div>
  </AlertDialogTrigger>


  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle></AlertDialogTitle>
      <AlertDialogDescription className='flex justify-between items-center border border-y-2 border-x-0 '>
        <div>
            <h2 className='text-4xl text-green-500 font-semibold'>{data?.name}</h2>
            <p>{data?.name}</p>
        </div>
        <Image src={data?.image} alt={data?.name} width={263} height={100}/>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      
    </>
  )
}
