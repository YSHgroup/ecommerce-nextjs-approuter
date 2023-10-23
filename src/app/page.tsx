import Image from 'next/image'
import HomeCarousel from '../components/HomeContents/HomeCarousel'
import HomeContainer from '../components/HomeContents'
import { getData } from '@/functions/getData'

export default async function Home() {
  const { products } = await getData('https://dummyjson.com/products?limit=10')

  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <div className='background fixed'></div>
      <HomeCarousel thmbImages = {products} />
      <HomeContainer products={products}/>
    </main>
  )
}
