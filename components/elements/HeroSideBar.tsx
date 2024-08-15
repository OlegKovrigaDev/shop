import { FC } from 'react'
import { Icon } from './Icon'

export type Item = {
	id: number
	icon: 'layout-dashboard'
	text: string
}

type HeroSideBarProps = {
	items: Item[]
}
export const HeroSideBar: FC<HeroSideBarProps> = ({ items }) => {
	return (
		<ul>
			{items.map(({ id, icon, text }) => (
				<li key={id}>
					<Icon name={icon} />
					<span>{text}</span>
				</li>
			))}
		</ul>
	)
}
