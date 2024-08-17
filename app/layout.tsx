import { Layout } from '@/components/sections/Layout'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.scss'

const fontSans = FontSans({
	subsets: ['latin'],
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
					`flex flex-col min-h-screen font-sans antialiased bg-[#f8f8f8] ${fontSans.variable}`
				)}
			>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
