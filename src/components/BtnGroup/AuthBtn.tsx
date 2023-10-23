'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const AuthBtn = ({
  bgColor,
  text,
  type,
  children,
  tColor
}: {
  bgColor: React.ReactNode
  text: string
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
  tColor?: string
}) => {
  const router = useRouter()
  return (
    <button
      className={`${bgColor} rounded bg-lime-200 from-lime-500 bg-gradient-to-b p-2 cursor-pointer w-1/3 min-w-max flex justify-center `}
      type={type}
      onClick={() => text === 'Cancel' ? router.back(): ''}
      style={{color: tColor}}
    >
      {children&& <span className='mr-2 align-bottom'>{children}</span>}
      <p>{text}</p>
    </button>
  )
}

export default AuthBtn
