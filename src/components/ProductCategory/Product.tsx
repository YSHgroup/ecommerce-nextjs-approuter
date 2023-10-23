import React from 'react'
import Card from './Card'

const Product = ({product}: {product: any}) => {
    return (
        <div className=''>
          <Card item = {product} />
        </div>
    )
}

export default Product