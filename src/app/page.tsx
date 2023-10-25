import HomeCarousel from '../components/HomeContents/HomeCarousel'
import HomeContainer from '../components/HomeContents'
import { getData } from '@/functions/getData'
import SideBar from '@/components/SideBar'

type searchParamsType = Record<string, Record<string, string>>

export default async function Home(searchParam: searchParamsType) {
  const { searchParams } = searchParam
  const limit = 'limit=10'

  const categoriesRes = (await getData(
    'https://dummyjson.com/products/categories'
  )) as string[]
  
  const { products } = await getData(
    `https://dummyjson.com/products/${
      searchParams['category'] !== '' && searchParams['category'] !== undefined
        ? 'category/' + searchParams['category'] + '?'
        : '?'
    }${limit}`
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
