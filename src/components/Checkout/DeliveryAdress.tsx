/** @format */

'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAddressInfo } from '@/redux/slices/billSlice'

const DeliveryAdress = () => {
	const dispatch = useDispatch()
	const addressInfo = useSelector((state: any) => state.bill.addressInfo)
	const [countries, setCountries] = useState<any>([])
	useEffect(() => {
		fetch(
			'https://restcountries.com/v3.1/independent?status=true&fields=name,cca2'
		)
			.then((response) => response.json())
			.then((data) => setCountries(data))
			.catch((error) => console.error(error))
	}, [])
	return (
		<>
			<h2>Delivery</h2>
			<div>
				<select
					className='mt-1 rounded p-2 w-full outline-none border-transparent border focus:border-sky-500'
					name='coutries'
					id=''
					defaultValue={'United States'}
					onChange={(e: ChangeEvent<HTMLSelectElement>) =>
						dispatch(
							setAddressInfo({ ...addressInfo, country: e.target.value })
						)
					}
				>
					{countries.map((country: any) => (
						<option key={country.name.common} selected={!!(country.name.common === addressInfo.country)} value={country.name.common}>
							{country.name.common}
						</option>
					))}
				</select>
				<div className='flex justify-between'>
					<input
						className='mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
						type='text'
						placeholder='First Name'
						value={addressInfo.firstName}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							dispatch(
								setAddressInfo({ ...addressInfo, firstName: e.target.value })
							)
						}
						required
					/>
					<input
						className='ml-2 mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
						type='text'
						placeholder='Last Name'
						value={addressInfo.lastName}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							dispatch(
								setAddressInfo({ ...addressInfo, lastName: e.target.value })
							)
						}
						required
					/>
				</div>
				<div>
					<input
						className='rounded mt-1 p-2 w-full outline-none border-transparent border focus:border-sky-500'
						type='text'
						placeholder='Address'
						value={addressInfo.address}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							dispatch(
								setAddressInfo({ ...addressInfo, address: e.target.value })
							)
						}
						required
					/>
					<div className='flex justify-between'>
						<input
							className='mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
							type='text'
							placeholder='City'
							value={addressInfo.city}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								dispatch(
									setAddressInfo({ ...addressInfo, city: e.target.value })
								)
							}
							required
						/>
						<input
							className='ml-2 mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
							type='text'
							placeholder='State'
							value={addressInfo.state}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								dispatch(
									setAddressInfo({ ...addressInfo, state: e.target.value })
								)
							}
							required
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default DeliveryAdress
