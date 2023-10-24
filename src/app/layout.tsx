import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import SideBar from '@/components/SideBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
  auth,
}: {
  children: React.ReactNode
  auth: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <SideBar/>
        {children}
        {auth}
      </body>
    </html>
  )
}
