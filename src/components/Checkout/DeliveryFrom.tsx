/** @format */
'use client'

import DeliveryAddress from './DeliveryAdress'
import PaymentMethod from './PaymentMethod'
const DeliveryForm = () => {

	return (
		<>
			<address className='flex flex-col py-2 px-8 overflow-auto text-gray-700 justify-center items-center'>
				<div className='w-full p-3'>
					<h2 >Contact</h2>
					<input
						className='mt-1 rounded p-2 w-full outline-none border-transparent border focus:border-sky-500'
						type='text'
						placeholder='Email or Phone number'
					/>
				</div>
				<div className='w-full p-3'>
					<DeliveryAddress />
				</div>
			</address>
			<section className='flex flex-col py-2 px-8 overflow-auto text-gray-700 justify-center items-center'>
				<PaymentMethod />
			</section>
		</>
	)
}

export default DeliveryForm
