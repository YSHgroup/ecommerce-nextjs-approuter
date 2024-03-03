/** @format */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import ReduxProvider from '@/provider/ReduxProvider'
import './globals.css'
import Provider from '@/provider/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
	auth,
}: {
	children: React.ReactNode
	auth: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ReduxProvider>
					<Provider>
						<Header />
						{children}
					</Provider>
					{auth}
				</ReduxProvider>
			</body>
		</html>
	)
}
