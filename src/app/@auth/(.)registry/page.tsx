/** @format */
'use client'
import Image from 'next/image'
import Modal from '@/components/Modal'
import AuthInput from '@/components/InputElement/AuthInput'
import AuthBtn from '@/components/BtnGroup/AuthBtn'
import cancel from '../../../../public/cancel-close.svg'
import confirm from '../../../../public/confirm.svg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { validator } from '@/lib/validator'

const Registry = () => {
	// const router = useRouter()
	const [passErr, setPassErr] = useState(false)
	// const [errorStatus, setErrorStatus] = 
	const [newUser, setNewUser] = useState({
		email: '',
		username: '',
		password: '',
		confirm: '',
	})
	const submitUser = async () => {
		console.log('user-->', newUser)
		const error = validator(newUser)
    console.log('valid--err', error)
		if (newUser.password !== newUser.confirm) {
			setPassErr(true)
			return
		}
		const registryRes = await fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify({
				newUser,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		console.log('registry-res-->', registryRes)
		try {
			const resInfo = await registryRes.json()
			console.log('resInfo-->', resInfo)
			
		} catch (error) {
			console.log('mongo-error-->', error)
			throw 'mongo--' + error
		}
	}
	const PasswordErr = () => {
		return (
			<div className='absolute top-4 right-1/4  rounded w-80 p-2 h-max bg-red-700 text-white'>
				<p>Confirm password is not matched.</p>
			</div>
		)
	}
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setPassErr(false)
		}, 1500)
		return () => clearTimeout(timeOut)
	}, [passErr])
	return (
		<Modal>
			<div className='flex flex-col border-4 border-teal-500 rounded-lg bg-gradient-to-b from-sky-800 bg-sky-400 w-[50%] h-[50vh] min-h-[18rem] max-w-xl'>
				<h1 className=' text-4xl p-2 pt-8 border-b-2 border-teal-400'>
					Registry
				</h1>
				<form action='' className='flex flex-col h-full justify-around p-4'>
					<AuthInput
						label='Email: '
						name='email'
						type='email'
						margin='m-1'
						isAutoFocus={true}
						isRequired={true}
						value={newUser.email}
						setInput={(e: string) => setNewUser({ ...newUser, email: e })}
					/>
					<AuthInput
						label='Name: '
						name='name'
						type='text'
						margin='m-1'
						isRequired
						value={newUser.username}
						setInput={(e: string) => setNewUser({ ...newUser, username: e })}
					/>
					<AuthInput
						label='Password: '
						name='password'
						type='password'
						margin='m-1'
						value={newUser.password}
						setInput={(e: string) => setNewUser({ ...newUser, password: e })}
						isRequired
					/>
					<AuthInput
						label='Confirm Password: '
						name='repassword'
						type='password'
						margin='m-1'
						value={newUser.confirm}
						setInput={(e: string) => setNewUser({ ...newUser, confirm: e })}
						isRequired
					/>
					<div className='flex justify-around'>
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
						<AuthBtn
							text='Confirm'
							type='button'
							tColor='#0344adcc'
							bgColor={'shadow-convex'}
							submit={submitUser}
						>
							<Image src={confirm} alt='confirm-svg' width={20} height={20} />
						</AuthBtn>
					</div>
				</form>
			</div>
			{passErr ? <PasswordErr /> : ''}
		</Modal>
	)
}

export default Registry
