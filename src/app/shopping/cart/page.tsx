/** @format */

'use client'
import ProductCardInCart from '@/components/ProductCardInCart'
import PurchageBtns from '@/components/BtnGroup/PurchageBtns'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
	const productsInCart = useSelector((state: any) => state.shop.productsInCart)
	console.log(
		'auth-->',
		useSelector((state: any) => state)
	)
	return (
		<div className='w-screen min-h-screen p-16 bg-cyan-100'>
			<div className='container m-auto flex flex-col pt-4'>
				{productsInCart
					? productsInCart.map(
							(
								individual: Record<
									string,
									number | string | Record<string, number | string | string[]>
								>,
								i: number
							) => (
								<ProductCardInCart
									key={i}
									individualInfo={
										individual.info as Record<
											string,
											number | string | string[]
										>
									}
								/>
							)
					  )
					: ''}

				<div className=' self-end my-2'>
					<PurchageBtns myCart />
				</div>
			</div>
		</div>
	)
}

export default Cart
