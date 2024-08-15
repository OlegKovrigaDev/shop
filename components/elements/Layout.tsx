import { FC, ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='container'>{children}</main>
			<Footer />
		</>
	)
}
