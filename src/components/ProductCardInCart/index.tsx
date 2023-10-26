/** @format */

'use client'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import Image from 'next/image'
import { putProduct } from '@/redux/slices/shoppingCartSlice';


const ProductCardInCart = ({
	individualInfo,
}: {
	individualInfo: Record<string, number | string | string[]>
}) => {
  const dispatch = useDispatch()
  const {productsInCart} = useSelector((state: RootState)=> state.shop)
  const productToDisplay = productsInCart.find(ware => ware.id === individualInfo.id)
  const [quantityToPut, setQuantity] = useState(!!productToDisplay ? productToDisplay.quantity : 1)
  const confirmPut = () => {
    dispatch(putProduct({id: individualInfo.id ,quantity: quantityToPut, info: individualInfo}))
  }

	return (
		<div className='flex w-full h-fit bg-white text-gray-600 rounded overflow-hidden border-gray-300 border shadow-md'>
			<Image
      className='object-fit'
				src={individualInfo.thumbnail as string}
				alt={individualInfo.thumbnail as string}
				width={300}
				height={300}
			/>
			<div className='flex-grow px-6 py-3 '>
				<div className='columns-4 text-start'>
					<h2 className='text-xl text-sky-800 font-semibold font-mono'>
						{individualInfo.title}
					</h2>
					<h3>{individualInfo.brand}</h3>
				</div>
				<p className='w-11/12 overflow-hidden py-2'>{individualInfo.description}</p>
				<div className='columns-4 '>
					<h3>
						<span className='pl-0 p-2 line-through opacity-75'>${individualInfo.price}</span>
						<span className='pl-0 p-2'>
							$
							{(Number(individualInfo.price) - Number(individualInfo.price) *
								(Number(individualInfo.discountPercentage) / 100)).toFixed(1)}
						</span>
					</h3>
					<h3><span className='text-sky-600'>Stock: </span>{individualInfo.stock}</h3>
				</div>
        <div className='h-content h-fit text-ml mt-2 pt-2 font-medium border-t columns-4'>
          <div className='p-4'> </div><div className='p-4'> </div>
						<label htmlFor='count'>Quantity: </label>
						<input
							className='w-16 rounded outline-none border-b-2 m-2'
							type='number'
							name='count'
							id='count'
							size={3}
              value={quantityToPut}
              onChange={(event) => setQuantity(Number(event.target.value))}
              max={Number(individualInfo.stock)}
              min={1}
						/>
            <button className='block py-1 rounded transition-colors duration-150 hover:bg-cyan-400 p-2 bg-rose-400 text-white' onClick={() => confirmPut()}>Add to Cart</button>
					</div>
			</div>
		</div>
	)
}

export default ProductCardInCart
