import { TLayout } from '@/types'
import { FC } from 'react'
import { Ad } from '../parts/Ad'
import { Footer } from './Footer'
import { Header } from './Header/Header'

export const Layout: FC<TLayout> = ({ children }) => {
	return (
		<>
			<Ad />
			<Header />
			<main className='container'>{children}</main>
			<Footer />
		</>
	)
}

