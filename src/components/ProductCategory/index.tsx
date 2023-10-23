import React from 'react'
import { productByCategoryType } from '@/types'
import Product from './Product'
const ProductContainer: React.FC<{
  productByCategory: productByCategoryType
}> = ({ productByCategory }) => {
  return (
    <div className=''>
      <h2 className='p-2 bg-cyan-500 w-fit text-2xl'>{productByCategory.category}</h2>
      <div className='p-2 border-t-2 border-cyan-300'>
        {productByCategory.product.map((productDetails: any, i: number) => (
          <Product product={productDetails} key={i} />
        ))}
      </div>
      
    </div>
  )
}

export default ProductContainer