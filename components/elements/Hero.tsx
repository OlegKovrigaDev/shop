import { HeroSideBar, Item } from './HeroSideBar'

const list: Item[] = [
	{ id: 1, icon: 'layout-dashboard', text: '1' },
	{ id: 2, icon: 'layout-dashboard', text: '1' },
	{ id: 3, icon: 'layout-dashboard', text: '1' },
	{ id: 4, icon: 'layout-dashboard', text: '1' },
	{ id: 5, icon: 'layout-dashboard', text: '1' },
	{ id: 6, icon: 'layout-dashboard', text: '1' },
	{ id: 7, icon: 'layout-dashboard', text: '1' },
	{ id: 8, icon: 'layout-dashboard', text: '1' },
	{ id: 9, icon: 'layout-dashboard', text: '1' },
	{ id: 10, icon: 'layout-dashboard', text: '1' },
]

export const Hero = () => {
	return (
		<div>
			<HeroSideBar items={list} />
		</div>
	)
}
