import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <header className='flex w-full justify-between px-10 bg-opacity-80 bg-slate-950 h-16 items-center fixed z-20'>
      <span>
        <Image
          src={'https://img.lovepik.com/element/40169/9600.png_860.png'}
          height={50}
          width={50}
          alt='logo'
        />
      </span>
      <ul className='flex h-full w-3/12 justify-around max-w-max overflow-hidden'>
        <Link
          className='hover:border-b-2 transition border-cyan-300 rounded-md px-4 leading-extreme'
          href={'/registry'}
        >
          Registry
        </Link>
        <Link
          className='hover:border-b-2 transition border-cyan-300 rounded-md px-4 leading-[4rem]'
          href={'/login'}
        >
          Login
        </Link>
      </ul>
    </header>
  )
}

export default Header
