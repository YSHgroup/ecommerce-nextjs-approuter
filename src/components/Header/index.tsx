/** @format */
'use client'
import Link from 'next/link'
import Image from 'next/image'
import cart from '../../../public/shopping-cart-svgrepo-com.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delAuth } from '@/redux/slices/authSlice'
import { useRouter } from 'next/navigation'
const Header = () => {
	const router = useRouter()
	// const dispatch = useDispatch()
	// const loginState = useSelector((state: any) => state.auth.authInfo)
	// interface FullName {
	// 	firstName: string
	// 	lastName: string
	// }
	// const [fullName, setFullName] = useState<FullName>()
	// const logout = () => {
	//   dispatch(delAuth())
	//   router.refresh()
	// }
	// useEffect(() => {
	// 	if (JSON.parse(loginState)) {
	// 		setFullName({
	// 			firstName: JSON.parse(loginState).firstName,
	// 			lastName: JSON.parse(loginState).lastName,
	// 		})
	// 	}
	// }, [loginState])
	return (
		<header className='flex w-full justify-between px-10 bg-opacity-80 bg-slate-950 h-16 items-center fixed z-20'>
			<span>
				<Image
					src={'https://img.lovepik.com/element/40169/9600.png_860.png'}
					height={50}
					width={50}
					alt='logo'
				/>
			</span>
			<div className='flex h-full overflow-hidden w-3/5 min-w-max items-center max-w-max'>
				<div className='py-8 duration-150 cursor-pointer shadow-neutral-400 hover:drop-shadow hover:animate-bounce text-teal-200' 
         onClick={() => router.push('/shopping/cart')}>
					<Image src={cart} height={50} width={50} alt='cart' />
				</div>
			</div>
			{/* {loginState ? (
				<div className='flex h-full w-3/5 min-w-max items-center max-w-max'>
					<div className=' text-teal-200'>
						Welcom{' '}
						<span className='whitespace-nowrap text-emerald-100'>
							{fullName?.firstName + ' ' + fullName?.lastName}
						</span>
					</div>
					<div></div>
					<div
						className='pl-6 hover:scale-110 duration-150 cursor-pointer'
						onClick={() => logout()}
					>
						Logout
					</div>
				</div>
			) : (
				<ul className='flex h-full w-3/12 justify-around max-w-max overflow-hidden'>
					<Link
						className='hover:border-b-2 transition border-cyan-300 rounded-md px-4 leading-extreme'
						href={'/registry'}
					>
						Registry
					</Link>
					<Link
						className='hover:border-b-2 transition border-cyan-300 rounded-md px-4 leading-[4rem]'
						href={'/login'}
					>
						Login
					</Link>
				</ul>
			)} */}
		</header>
	)
}

export default Header
