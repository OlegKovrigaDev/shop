import { FC, ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from './Footer'

type TLayout = {
	children: ReactNode
}

export const Layout: FC<TLayout> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='container'>{children}</main>
			<Footer />
		</>
	)
}
