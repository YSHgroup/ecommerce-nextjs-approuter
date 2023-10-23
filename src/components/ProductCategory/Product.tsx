import React from 'react'
import Card from './Card'

const Product = ({product}: {product: any}) => {
    return (
        <div className='m-4'>
          <Card item = {product} />
        </div>
    )
}

export default Product