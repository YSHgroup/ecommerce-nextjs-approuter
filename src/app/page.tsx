import Image from 'next/image'
import Content from '../components/HomeContents'
export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between'>
      <div className='background h-screen w-full '></div>
              <Image src={"https://i.dummyjson.com/data/products/1/1.jpg"} fill className="object-cover" alt="alt" />
      <Content/>
    </main>
  )
}
