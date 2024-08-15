import { FC, ReactNode } from 'react'
import { TitleEl } from './TitleEl'

type TSectionEl = {
	title: string
	children?: ReactNode
}

export const SectionEl: FC<TSectionEl> = ({ title, children }) => (
	<section className='mt-[72px]'>
		<TitleEl>{title}</TitleEl>
		{children}
	</section>
)
