import { TLayout } from '@/types'
import { Ad } from '../parts/Ad'
import { Footer } from './Footer'
import { Header } from './Header/Header'

export const Layout = ({ children }: TLayout) => {
	return (
		<>
			<Ad />
			<Header />
			<main className='container flex-auto'>{children}</main>
			<Footer />
		</>
	)
}
