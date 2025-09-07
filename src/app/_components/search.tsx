import { Input } from '@/components/ui/input'
import React from 'react'

export default function Search() {
  return (
    <>
        <div className="max-w-lg mx-auto my-3">
            <Input type="search" className="p-3 rounded-lg py-5.5" placeholder="Search for products..."  />
        </div>
    </>
  )
}
