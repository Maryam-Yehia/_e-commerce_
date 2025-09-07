'use client'
import React from 'react'

export default function Error({ error }:{error: Error}) {
  return (
    <div>
      <h1>Error: {error.message}</h1>
    </div>
  )
}
