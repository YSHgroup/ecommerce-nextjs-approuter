/** @format */

'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '@/components/Modal'
import AuthInput from '@/components/InputElement/AuthInput'
import AuthBtn from '@/components/BtnGroup/AuthBtn'
import cancel from '../../../../public/cancel-close.svg'
import confirm from '../../../../public/confirm.svg'
import { setAuth } from '@/redux/slices/authSlice'
import { useRouter } from 'next/navigation'
const Login = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const handleSubmit = async () => {
		try {
			const authData = await fetch(`https://dummyjson.com/auth/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					username: 'kminchelle',
					password: '0lelplR',
				}),
			})
			const authUser = await authData.json()
			dispatch(
				setAuth(
					JSON.stringify({
						id: authUser.id,
						email: authUser.email,
						username: authUser.username,
						firstName: authUser.firstName,
						lastName: authUser.lastName,
						gender: authUser.gender,
						token: authUser.token,
					})
				)
			)
			router.push('/')
		} catch (error) {
			alert(error)
		}
	}

  return (
		<Modal>
			<div className='flex flex-col border-4 border-teal-500 rounded-lg bg-gradient-to-b from-sky-800 bg-sky-400 w-[50%] h-[50vh] min-h-[18rem] max-w-xl'>
				<h1 className=' text-4xl p-2 pt-8 border-b-2 border-teal-400'>Login</h1>
				<form className='flex flex-col h-full justify-around p-4'>
					<AuthInput
						label='User Name: '
						name='username'
						type='text'
						margin='m-4'
						isAutoFocus={true}
						isRequired={true}
						value='kminchelle'
					/>
					<AuthInput
						label='Password: '
						name='password'
						type='password'
						value='0lelplR'
						margin='m-4'
						isRequired={true}
					/>
					<div className='flex justify-around'>
						<div>
							<AuthBtn
								text='Cancel'
								type='button'
								tColor='#b11bcfb5'
								bgColor={'shadow-concave'}
							>
								<Image
									src={cancel}
									color='red'
									alt='confirm-svg'
									width={20}
									height={20}
								/>
							</AuthBtn>
						</div>
						<div onClick={() => handleSubmit()}>
							<AuthBtn
								text='Confirm'
								type='button'
								tColor='#0344adcc'
								bgColor={'shadow-convex'}
							>
								<Image src={confirm} alt='confirm-svg' width={20} height={20} />
							</AuthBtn>
						</div>
					</div>
				</form>
			</div>
		</Modal>
	)
}

export default Login
