import { TLayout } from '@/types'
import { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header/Header'

export const Layout: FC<TLayout> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='container'>{children}</main>
			<Footer />
		</>
	)
}
