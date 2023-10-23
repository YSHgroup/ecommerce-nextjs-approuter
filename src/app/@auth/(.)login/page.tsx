'use client'
import { useRouter } from 'next/navigation'
import Modal from '@/components/Modal'
import AuthInput from '@/components/InputElement/AuthInput'

const Login = () => {
  const router = useRouter()
  return (
    <Modal>
      <div className=' border-4 border-teal-500 rounded-lg bg-gradient-to-b from-sky-800 bg-sky-400 w-[50%] h-[50vh]'>
        <span onClick={() => router.back()}>Close modal</span>
        <h1 className=' text-4xl p-2 border-b-2 border-teal-400'>Login</h1>
        <form action="" className='p-4'>
        <AuthInput label='Email: ' name='email' type='email' autoFocus = {true} />
        <AuthInput label='Password: ' name='password' type='password' autoFocus = {true} />
        <input className='p-2 cursor-pointer w-40 bg-blue-600 m-2' type="button" value="Cancel" />
        <input className='p-2 cursor-pointer w-40 bg-red-600 m-2' type="submit" value="Confirm" />
        </form>
      </div>
    </Modal>
  )
}

export default Login;