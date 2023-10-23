import Image from 'next/image'
import Modal from '@/components/Modal'
import AuthInput from '@/components/InputElement/AuthInput'
import AuthBtn from '@/components/BtnGroup/AuthBtn'
import cancel from '../../../../public/cancel-close.svg'
import confirm from '../../../../public/confirm.svg'
const Login = () => {
  return (
    <Modal>
      <div className='flex flex-col border-4 border-teal-500 rounded-lg bg-gradient-to-b from-sky-800 bg-sky-400 w-[50%] h-[50vh] min-h-[18rem] max-w-xl'>
        <h1 className=' text-4xl p-2 pt-8 border-b-2 border-teal-400'>Login</h1>
        <form action='' className='flex flex-col h-full justify-around p-4'>
          <AuthInput
            label='Email: '
            name='email'
            type='email'
            isAutoFocus={true}
            isRequired = {true}
          />
          <AuthInput
            label='Password: '
            name='password'
            type='password'
            isRequired={true}
          />
          <div className='flex justify-around'>
            <AuthBtn text='Cancel' type='button' tColor='#b11bcfb5' bgColor={'shadow-concave'}><Image src={cancel} color='red' alt='confirm-svg' width={20} height={20} /></AuthBtn>
            <AuthBtn text='Confirm' type='submit' tColor='#0344adcc' bgColor={'shadow-convex'}><Image src={confirm} alt='confirm-svg' width={20} height={20} /></AuthBtn>
          </div>
        </form>          
        </div>
    </Modal>
  )
}

export default Login
