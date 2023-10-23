import Image from 'next/image'
import Content from '../components/HomeContents'

export default async function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <div className='background fixed'></div>
      <Content />
    </main>
  )
}
