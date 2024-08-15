import { HeroSideBar, Item } from './HeroSideBar'
import { HeroSlider } from './HeroSlider'

const list: Item[] = [
	{ id: 1, text: 'Кухонні меблі' },
	{ id: 2, text: 'Меблі у вітальню' },
	{ id: 3, text: 'Меблі у спальню' },
	{ id: 4, text: 'Меблі для передпокою' },
	{ id: 5, text: 'Офісні меблі' },
	{ id: 6, text: 'Шафи' },
	{ id: 7, text: 'М’які  меблі' },
	{ id: 8, text: 'Ліжка' },
	{ id: 9, text: 'Матраци' },
	{ id: 10, text: 'Комоди й тумби' },
]

export const Hero = () => {
	return (
		<section className='mt-8 flex justify-between'>
			<HeroSideBar items={list} />
			<HeroSlider />
		</section>
	)
}
