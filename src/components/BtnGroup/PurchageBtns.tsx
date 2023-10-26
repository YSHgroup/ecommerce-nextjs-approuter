/** @format */

'use client'
import { useRouter } from "next/navigation"

const PurchageBtns = () => {
  const router = useRouter()
	return (
		<>
			<button className='py-4 px-4 m-4 w-36 rounded-md transition-all duration-200 hover:bg-rose-600 bg-gray-700'
          onClick={() => router.back()}
        >
				Back
			</button>
			<button className='py-4 px-4 m-4 w-36 rounded-md transition-all duration-200 hover:bg-rose-500 bg-gray-800'>
				My Cart
			</button>
			<button className='py-4 px-4 m-4 w-36 rounded-md transition-all duration-200 hover:bg-rose-500 bg-sky-600'>
				Buy It Now
			</button>
		</>
	)
}

export default PurchageBtns
