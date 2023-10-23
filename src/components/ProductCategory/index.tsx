import React from 'react'
import { productByCategoryType } from '@/types'
import Product from './Product'
const ProductContainer: React.FC<{
  productByCategory: productByCategoryType
}> = ({ productByCategory }) => {
  return (
    <div className='p-2'>
      <h2>{productByCategory.category}</h2>
      <div className=''>
        {productByCategory.product.map((productDetails: any, i: number) => (
          <Product product={productDetails} key={i} />
        ))}
      </div>

    </div>
  )
}

export default ProductContainer
