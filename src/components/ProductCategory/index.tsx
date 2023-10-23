import React from 'react'
import {productByCategoryType} from '@/types'

const Product: React.FC<{ product: productByCategoryType }> = ({product }) => {
  // const 
  return (
    <div className=''>
      <h2>{product.category}</h2>
    </div>
  )
}

export default Product
