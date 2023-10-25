'use client'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

const Pagination = ({ pageInfo }: { pageInfo: Record<string, number> }) => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()
	const activeBtn =
		'mx-4 bg-sky-700/80 text-white p-4 w-16 hover:bg-sky-500 rounded'
	const disabledBtn =
		'mx-4 bg-cyan-900 opacity-70 text-gray-300 p-4 w-16 hover:cursor-not-allowed rounded'
	const totalPage = pageInfo.total / pageInfo.limit
	const page = Math.ceil(pageInfo.skip / pageInfo.limit) + 1

	const setPaginationParams = (newPage: number) => {
		const params = new URLSearchParams(searchParams)
		const obtainedCategoryParam = params.get('category')
		params.set(
			'category',
			obtainedCategoryParam !== null ? obtainedCategoryParam : ''
		)
		params.set('skip', ((newPage - 1) * pageInfo.limit).toString())
		router.push(pathname + '?' + params.toString())
	}

	return (
		<div className='m-6 h-12 text-center'>
			<button
				className={page > 1 ? activeBtn : disabledBtn}
				onClick={() => setPaginationParams(1)}
				disabled={!(page > 1)}
			>
				{'<<'}
			</button>
			<button
				className={page > 1 ? activeBtn : disabledBtn}
				onClick={() => setPaginationParams(page - 1)}
				disabled={!(page > 1)}
			>
				{'<'}
			</button>
			<span className='text-lg'>
				{page} / {totalPage}
			</span>
			<button
				className={page < totalPage ? activeBtn : disabledBtn}
				onClick={() => setPaginationParams(page + 1)}
				disabled={!(page < totalPage)}
			>
				{'>'}
			</button>
			<button
				className={page < totalPage ? activeBtn : disabledBtn}
				onClick={() => setPaginationParams(totalPage)}
				disabled={!(page < totalPage)}
			>
				{'>>'}
			</button>
		</div>
	)
}

export default Pagination
