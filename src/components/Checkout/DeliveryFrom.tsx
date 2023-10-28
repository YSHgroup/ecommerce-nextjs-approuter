/** @format */
'use client'
import { useDispatch, useSelector } from 'react-redux'
import { setContact } from '@/redux/slices/billSlice'
import DeliveryAddress from './DeliveryAdress'
import PaymentMethod from './PaymentMethod'
import { ChangeEvent } from 'react'

const DeliveryForm = () => {
	const dispatch = useDispatch()
	return (
		<>
			<address className='flex flex-col py-2 px-8 overflow-auto text-gray-700 justify-center items-center'>
				<div className='w-full p-3'>
					<h2 >Contact</h2>
					<input
						className='mt-1 rounded p-2 w-full outline-none border-transparent border focus:border-sky-500'
						type='text'
						value={useSelector((state: any) => state.bill.contact)}
						onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setContact(e.target.value))}
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
