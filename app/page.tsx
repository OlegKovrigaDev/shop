import { Hero } from '@/components/elements/Hero'
import { SectionEl } from '@/components/elements/parts/SectionEl'

export default function Home() {
	return (
		<div>
			<Hero />
			<SectionEl title='Нові товари'></SectionEl>
			<SectionEl title='ХІТ продажу'></SectionEl>
			<SectionEl title='Етапи покупки'></SectionEl>
			<SectionEl title='Популярні категорії'></SectionEl>
			<SectionEl title='Також вас може зацікавити'></SectionEl>
			<SectionEl title='Чому нас обирають'></SectionEl>
		</div>
	)
}
