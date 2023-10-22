import Image from 'next/image'
import Header from '../components/Header'
export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between'>
      <Header />
    </main>
  )
}
