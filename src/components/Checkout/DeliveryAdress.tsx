/** @format */

'use client'
import { useEffect, useState } from 'react'

const DeliveryAdress = () => {
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
				>
					{countries.map((country: any) => (
						<option key={country.name.common} value={country.name.common}>
							{country.name.common}
						</option>
					))}
				</select>
				<div className='flex justify-between'>
					<input
						className='mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
						type='text'
						placeholder='First Name'
					/>
					<input
						className='ml-2 mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
						type='text'
						placeholder='Last Name'
					/>
				</div>
				<div>
					<input
						className='rounded mt-1 p-2 w-full outline-none border-transparent border focus:border-sky-500'
						type='text'
						placeholder='Address'
					/>
					<div className='flex justify-between'>
						<input
							className='mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
							type='text'
							placeholder='City'
						/>
						<input
							className='ml-2 mt-1 rounded p-2 w-2/5 outline-none border-transparent border focus:border-sky-500'
							type='text'
							placeholder='State'
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default DeliveryAdress