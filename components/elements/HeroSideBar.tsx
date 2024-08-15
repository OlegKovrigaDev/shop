import Link from 'next/link'
import { FC } from 'react'

export type Item = {
	id: number
	text: string
}

type HeroSideBarProps = {
	items: Item[]
}
export const HeroSideBar: FC<HeroSideBarProps> = ({ items }) => {
	return (
		<ul className='w-full max-w-72 font-medium flex flex-col gap-2'>
			{items.map(({ id, text }) => (
				<li key={id}>
					<Link href='/'>{text}</Link>
				</li>
			))}
		</ul>
	)
}
