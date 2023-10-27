/** @format */

'use client'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { ProductCardType } from '@/types'

import ProductCard from './ProductCard'
import { useRouter } from 'next/navigation'
import { calTotalPrice } from '@/functions/calTotalPrice'
const Bill = () => {
  const router = useRouter()
	const dispatch = useDispatch()
	const { productsInCart } = useSelector((state: any) => state.shop)
	// console.log('shop-->', productsInCart)
  const priceList = productsInCart.map((item: ProductCardType) => ({price: item.info['price'], quantity: item.quantity}))
  // console.log('price list-->', priceList)
	return (
		<div className='h-full  p-2 overflow-auto'>
			<div className='flex flex-wrap'>
				{productsInCart.map((product: ProductCardType, i: number) => (
					<ProductCard key={i} ware={product} />
				))}
			</div>
      <p className='px-4 text-slate-700'>
        Total Price is $ {calTotalPrice(priceList)}
      </p>
			<div className='flex justify-center'>
        <button className='w-1/2 rounded bg-slate-400 hover:bg-pink-600 py-3 m-2' onClick={()=> router.push('/')}>Cancel</button>
        <button className='w-1/2 rounded bg-cyan-600 hover:bg-pink-600 py-3 m-2'>Complete Order</button>
      </div>
		</div>
	)
}

export default Bill
