/** @format */

import HomeCarousel from '../components/HomeContents/HomeCarousel'
import HomeContainer from '../components/HomeContents'
import { getData } from '@/functions/getData'
import SideBar from '@/components/SideBar'
import { searchParamsType } from '@/types'
import { analyseSearchParams } from '../functions/analyseSearchParams'

export default async function Home(searchParam: searchParamsType) {
	const { searchParams } = searchParam

	const categoriesRes = (await getData(
		'https://dummyjson.com/products/categories'
	)) as string[]

	const { products } = await getData(
		`https://dummyjson.com/products/${analyseSearchParams(
			searchParams,
			'category'
		)}?limit=${analyseSearchParams(
			searchParams,
			'limit'
		)}&skip=${analyseSearchParams(searchParams, 'skip')}`
	)

	return (
		<main className='flex flex-col items-center '>
			<div className='background h-screen w-full fixed -z-10' />
			<SideBar categories={categoriesRes} />
			<HomeCarousel thmbImages={products} />
			<HomeContainer products={products} />
		</main>
	)
}
