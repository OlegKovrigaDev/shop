import { Layout } from '@/components/sections/Layout'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Montserrat as FontSans } from 'next/font/google'
import './globals.scss'
import StoreProvider from './StoreProvider'

const fontSans = FontSans({
	subsets: ['latin', 'cyrillic'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Tera',
	description: 'Shop',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk'>
			<body
				className={cn(
					`flex flex-col min-h-screen antialiased bg-[#f8f8f8] ${fontSans.variable} relative`
				)}
			>
				<StoreProvider>
					<Layout>{children}</Layout>
				</StoreProvider>
			</body>
		</html>
	)
}
