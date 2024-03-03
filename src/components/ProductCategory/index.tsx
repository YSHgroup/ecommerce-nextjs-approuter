import React from 'react'
import { productByCategoryType } from '@/types'
import ProductCard from './ProductCard'
const ProductContainer: React.FC<{
  productByCategory: productByCategoryType
}> = ({ productByCategory }) => {
  return (
    <div className=''>
      <h2 className='p-2 bg-cyan-500 w-fit text-2xl uppercase'>{productByCategory.category}</h2>
      <div className='flex flex-wrap justify-evenly p-2 border-t-2 border-cyan-300 '>
        {productByCategory.product.map((productDetails: any, i: number) => (
          <ProductCard product={productDetails} key={i} />
        ))}
      </div>
    </div>
  )
}

export default ProductContainer
