/** @format */

'use client'
import { useEffect, useState } from 'react'

const PaymentMethod = () => {
	const [isSelected, select] = useState(1)
	return (
		<>
			<h2 className='text-lg font-bold w-full text-start'>Payment Method</h2>
			<div className='rounded border w-full my-2 border-slate-400'>
				<div
					onClick={() => select(1)}
					className='border-b p-2 cursor-pointer flex items-center border-slate-400'
				>
					<span
						className={`block bg-white w-4 h-4 shadow-inner shadow-gray-500 mr-2 rounded-full ${
							isSelected === 1 ? 'border-sky-600 border-4' : ''
						}`}
					></span>
					Credit card
				</div>
				<div
					onClick={() => select(2)}
					className='border-b p-2 cursor-pointer flex items-center'
				>
					<span
						className={`block bg-white w-4 h-4 shadow-inner shadow-gray-500 mr-2 rounded-full ${
							isSelected === 2 ? 'border-sky-600 border-4' : ''
						}`}
					></span>
					Cash on Delivery (COD)
				</div>
			</div>
		</>
	)
}

export default PaymentMethod
