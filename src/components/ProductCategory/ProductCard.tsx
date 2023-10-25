'use client'
import React from 'react'
import FrontFace from './FrontFace'
import BackFace from './BackFace'
import { useRouter } from 'next/navigation'
const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter()
  return (
    <div
      className='flip-card w-96 h-[28rem] rounded m-4 overflow-hidden'
      style={{ boxShadow: '1px 1px 2px white', border: '1px solid white', perspective: '30rem' }}
      onClick={() => router.push('shopping/'+product.id)}
    >
      <div className='rotate-card relative w-full h-full'>
      <FrontFace product={product} />
      <BackFace product={product} />
      </div>
    </div>
  )
}

export default ProductCard
