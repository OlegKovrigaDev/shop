import { TSection } from '@/types'
import { Title } from '../parts/Title'

export const Section = ({ title, children, className }:TSection) => (
	<section className={`mt-[56px] md:mt-[72px]  ${className}`}>
		<Title>{title}</Title>
		{children}
	</section>
)
