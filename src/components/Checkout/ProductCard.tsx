/** @format */
'use client'
import { ProductCardType } from '@/types'
import { useDispatch } from 'react-redux'
import { delProductInCart } from '@/redux/slices/shoppingCartSlice'
const ProductCard = ({ ware }: { ware: ProductCardType }) => {
	const dispatch = useDispatch()
	if (isNaN(ware.id)) return
  // console.log('product-->', ware)
	return (
		<div className='relative w-full m-4 p-2 text-base text-gray-700 bg-slate-100 rounded border-slate-300 border shadow-slate-400 shadow-sm'>
			<dl className='flex'>
				<dt className='text-lg text-cyan-600'>{ware.info.title}</dt>
				<dd className='ml-2'>
					<h4>{ware.info.brand}</h4>
					<h4>
						<span>Quantity: </span>
						{ware.quantity}
					</h4>
					<h4>
						<span>Price: </span>
						{ware.info.price}
					</h4>
				</dd>
			</dl>
			<button
				className='absolute block rounded bg-slate-200 hover:rotate-[135deg] duration-200 cursor-pointer select-none -right-1 -top-1 w-6 h-6 text-center leading-[21px] border-slate-400 border'
				onClick={() => dispatch(delProductInCart(ware.id))}
			>
				+
			</button>
		</div>
	)
}

export default ProductCard
