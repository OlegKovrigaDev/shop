import { TSection } from '@/types'
import { FC } from 'react'
import { Title } from '../parts/Title'

export const Section: FC<TSection> = ({ title, children, className }) => (
	<section className={`mt-[72px] ${className}`}>
		<Title>{title}</Title>
		{children}
	</section>
)
