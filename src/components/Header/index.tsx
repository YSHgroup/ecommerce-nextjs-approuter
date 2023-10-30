/** @format */
'use client'
import Link from 'next/link'
import Image from 'next/image'
import cart from '../../../public/shopping-cart-svgrepo-com.svg'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { delAuth } from '@/redux/slices/authSlice'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header = () => {
	const { data: session } = useSession();

	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const howManyInCart = useSelector(
		(state: any) => state.shop.productsInCart
	).length
	const checkout = () => {
		router.push('/check-out')
	}

	// const signIn = () => {
	// 	router.push('/api/auth/signin')
	// }
	const handleSignOut = async () => {
		await signOut()
	}
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
		<header className='flex w-full justify-between px-10 bg-opacity-80 bg-slate-950 h-16 items-center fixed z-10'>
			<span>
				<Image
					src={'https://img.lovepik.com/element/40169/9600.png_860.png'}
					height={50}
					width={50}
					alt='logo'
				/>
			</span>
			<div className='flex h-full overflow-hidden w-3/5 min-w-max items-center max-w-max'>
				{pathname !== '/check-out' && (
					<button
						className='p-2 mx-4 rounded border-r shadow-sm shadow-slate-200 cursor-pointer hover:bg-sky-700/80'
						onClick={checkout}
					>
						Check Out
					</button>
				)}
				{pathname !== '/shopping/cart' && (
					<div
						className='relative p-2 cursor-pointer shadow-neutral-400 hover:drop-shadow hover:animate-pulse text-teal-200'
						onClick={() => router.push('/shopping/cart')}
					>
						<span className='absolute flex w-5 h-5 justify-center items-center rounded-[100%] bg-blue-800 text-white text-xs top-1 right-2'>
							{howManyInCart - 1}
						</span>
						<Image src={cart} height={50} width={50} alt='cart' />
					</div>
				)}
			</div>
			{
				session && session.user ?
				<button
        onClick={() => handleSignOut()}
      >
        {session.user.name} Sign Out
      </button>:
			 <button
			 onClick={() => signIn()}
		 >
			 SignIn
		 </button>
			}
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
