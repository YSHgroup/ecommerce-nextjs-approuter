'use client'
import { useRouter } from 'next/navigation'
import Modal from '@/app/Modal'
 
const Login = () => {
  const router = useRouter()
  return (
    // <Modal>
    <div className=' bg-sky-500 w-32 h-32'>
      {/* <span onClick={() => router.back()}>Close modal</span> */}
      <h1>Login</h1>
      ...
    </div>
    // </Modal>
  )
}

export default Login;