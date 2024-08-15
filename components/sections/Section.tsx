import { FC, ReactNode } from 'react'
import { Title } from '../parts/Title'

type TSection = {
	title: string
	children?: ReactNode
}

export const Section: FC<TSection> = ({ title, children }) => (
	<section className='mt-[72px]'>
		<Title>{title}</Title>
		{children}
	</section>
)
