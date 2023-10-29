/** @format */
'use client'
import { useSelector } from 'react-redux'
import ConfirmBill from '@/components/BtnGroup/ConfirmBill'
import Modal from '@/components/Modal'

const BillModal = () => {
	const billInfo = useSelector(((state: any )=> state.bill))
	console.log('bill-->', billInfo);
	
	return (
		<Modal>
			<div className='fixed rounded w-2/3 py-5 text-slate-500 text-sm  max-w-2xl h-4/5 bg-orange-50'>
				<h1 className='text-[2rem] text-slate-700 font-mono p-4 border-b'>Bill</h1>
				<section className='columns-2 text-start p-8 border-b'>
					<div>
						<p>Email: {billInfo.contact}</p>
						<p>Full Name: {billInfo.addressInfo.firstName && ' ' && billInfo.addressInfo.lastName}</p>
					</div>
					<div>
						<p>Address: {billInfo.addressInfo.address}</p>
						<p>City/State: Austin, TX</p>
					</div>
				</section>
				<p className='text-lg text-slate-700 font-serif p-4'>
					Payment Method is {billInfo.PaymentMethod}
				</p>
				<p className='text-base text-text-slate-700 font-serif'>
					You will pay ${billInfo.totalPrice}
				</p>
				<label htmlFor='signature' className='block my-2'>
					Signature:
					<input
						className='m-2 rounded p-2 border-b border-b-sky-500 bg-transparent'
						type='text'
						name='name'
						id='signature'
					/>
				</label>
				<div className='text-center'>
					<ConfirmBill />
				</div>
			</div>
		</Modal>
	)
}

export default BillModal
