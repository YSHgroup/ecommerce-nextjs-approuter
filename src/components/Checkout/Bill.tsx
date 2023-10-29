/** @format */

'use client'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { ProductCardType } from '@/types'

import ProductCard from './ProductCard'
import { useRouter } from 'next/navigation'
import { calTotalPrice } from '@/functions/calTotalPrice'
import { setTotalPrice } from '@/redux/slices/billSlice'
const Bill = () => {
	const isGoodsInCart = !isNaN(
		useSelector((state: any) => state.shop.productsInCart[1]?.id)
	)
	const router = useRouter()
	const dispatch = useDispatch()
	const { productsInCart } = useSelector((state: any) => state.shop)
	const [orderErrModal, setModal] = useState(false)
	const modal = (
		<div className='absolute top-2 left-2 rounded border bg-red-500 w-56 p-4'>
			Cart is emptied
		</div>
	)
	const priceList = productsInCart.map((item: ProductCardType) => ({
		price: item.info['price'],
		quantity: item.quantity,
	}))
	const completeOrder = () => {
		if (!isGoodsInCart) {
			setModal(true)
			return
		}
		router.push('/check-out/bill')
	}
	useEffect(() => {
		const timeout = setTimeout(() => {
			setModal(false)
		}, 1500)
		return () => clearTimeout(timeout)
	}, [orderErrModal])
	console.log('modal-->', orderErrModal);
	
	dispatch(setTotalPrice(calTotalPrice(priceList)))
	return (
		<div className='relative h-full  p-2 overflow-auto'>
			<div className='flex flex-wrap'>
				{productsInCart.map((product: ProductCardType, i: number) => (
					<ProductCard key={i} ware={product} />
				))}
			</div>
			<p className='px-4 text-slate-700'>
				Total Price is $ {calTotalPrice(priceList)}
			</p>
			<div className='flex justify-center'>
				<button
					className='w-1/2 rounded bg-slate-400 hover:bg-pink-600 py-3 m-2'
					onClick={() => router.push('/')}
				>
					Cancel
				</button>
				<button
					className='w-1/2 rounded bg-cyan-600 hover:bg-pink-600 py-3 m-2'
					onClick={completeOrder}
				>
					Complete Order
				</button>
			</div>
				{orderErrModal ? modal : ''}
		</div>
	)
}

export default Bill
