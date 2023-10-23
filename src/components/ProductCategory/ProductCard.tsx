import React from 'react'
import Image from "next/image"

const ProductCard = ({product}: {product: any}) => {
    return (
        <div className='relative w-80 h-96 rounded m-4'>
          <div >
            <Image className="object-content" src={product.thumbnail} alt={product.thumbnail} fill />
          </div>
            <div>

            </div>
        </div>
    )
}

export default ProductCard