import Image from 'next/image'
import HomeCarousel from '../components/HomeContents/HomeCarousel'
import HomeContainer from '../components/HomeContents'
import { getData } from '@/functions/getData'

export default async function Home() {
  const { products } = await getData('https://dummyjson.com/products?limit=10')

  return (
    <main className='flex flex-col items-center '>
      <div className='background h-screen w-full fixed -z-10'></div>
      <HomeCarousel thmbImages = {products} />
      <HomeContainer products={products}/>
    </main>
  )
}
