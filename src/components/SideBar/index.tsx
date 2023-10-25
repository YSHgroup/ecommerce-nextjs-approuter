'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

const SideBar = ({categories}: {categories: string[]}) => {
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()

	const createQueryString = useCallback((name: string, value: string) => {
		const params = new URLSearchParams(searchParams)
		params.set(name, value)
		return params.toString() 
	},[searchParams])

	const selCategory = (category: string) => {
		if(category === '') {
      router.push(pathname + '?' + createQueryString('category', ''))
    }
    router.push(pathname + '?' + createQueryString('category', category)) 
	}

  return (
    <nav className='side-bar max-h-80 overflow-auto cursor-pointer rounded-md shadow-sm shadow-slate-300 bg-gradient-to-b from-sky-800 fixed z-10 top-40 left-1'>
				<h1 className="visual-text flex justify-center items-center w-32 h-10 ">Categories</h1>
        <div className='side-nav p-2 bg-transparent hidden'>
          <span className="block p-2 rounded hover:shadow-md hover:bg-cyan-600" onClick={() => selCategory('')} >All</span>
					{
						categories.map((item, i) => <span key={i} className="block p-2 rounded hover:shadow-lg hover:bg-cyan-600" onClick={() => selCategory(item)} >{item}</span>)
					}
        </div>
    </nav>
  )
}

export default SideBar
