import { FC, ReactNode } from 'react'
import { Title } from '../parts/Title'

type TSection = {
	title: string
	children?: ReactNode
	className?: string
}

export const Section: FC<TSection> = ({ title, children, className }) => (
	<section className={`mt-[72px] ${className}`}>
		<Title>{title}</Title>
		{children}
	</section>
)
