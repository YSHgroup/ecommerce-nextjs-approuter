import Image from 'next/image'
import Content from '../components/HomeContents'

export default async function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between'>
      <div className='background h-screen w-full '></div>
      <Content />
    </main>
  )
}
