import { FC, ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header/Header'

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
