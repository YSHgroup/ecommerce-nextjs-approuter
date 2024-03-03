'use client'
import React from 'react'
import FrontFace from './FrontFace'
import BackFace from './BackFace'
const ProductCard = ({ product }: { product: any }) => {
  
  return (
    <div
      className='flip-card w-80 h-[24rem] rounded m-4 overflow-hidden'
      style={{ boxShadow: '1px 1px 2px white', border: '1px solid white', perspective: '30rem' }}
    >
      <div className='rotate-card relative w-full h-full'>
      <FrontFace product={product} />
      <BackFace product={product} />
      </div>
    </div>
  )
}

export default ProductCard
