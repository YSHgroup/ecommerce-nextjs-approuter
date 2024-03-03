/** @format */

'use client'

import { useRouter } from 'next/navigation'

const ConfirmBill = () => {
	const router = useRouter()
	return (
		<div className='flex justify-center text-gray-700'>
			<button
				className='w-28 bg-transparent border-b p-2 rounded m-2 hover:shadow-md italic font-sans'
				onClick={() => router.back()}
			>
				Cancel
			</button>
			<button className='w-28 bg-transparent border-b p-2 rounded m-2 hover:shadow-md italic font-sans'>
				Confirm
			</button>
		</div>
	)
}

export default ConfirmBill
