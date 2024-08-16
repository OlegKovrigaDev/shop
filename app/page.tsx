import { Categories } from '@/components/parts/Categories'
import { ProductSlider } from '@/components/parts/ProductSlider'
import { Advantages } from '@/components/sections/Advantages'
import { Ethaps } from '@/components/sections/Ethaps'
import { Hero } from '@/components/sections/Hero/Hero'
import { Section } from '@/components/sections/Section'

const products = [
	{
		id: 1,
		img: '/slide1-min.jpg',
		title: 'Двоярусне ліжко "Аляска" від MebiGrand',
		oldPrice: 90000,
		newPrice: 10000,
		hit: true,
		discont: true,
		newProduct: false,
	},
	{
		id: 2,
		img: '/slide2-min.jpg',
		title: 'Двоспальне ліжко «Прованс»',
		newPrice: 20000,
		hit: true,
		discont: false,
		newProduct: true,
	},
	{
		id: 3,
		img: '/slide3-min.jpg',
		title: 'Елегантне та стильне ліжко "Верона" від фабрики UMa Ursa Major',
		oldPrice: 29000,
		newPrice: 30000,
		hit: false,
		discont: true,
		newProduct: true,
	},
	{
		id: 4,
		img: '/slide4-min.jpg',
		title: 'Елегантне та стильне ліжко "Монро"',
		oldPrice: 39000,
		newPrice: 40000,
	},
	{
		id: 5,
		img: '/slide1-min.jpg',
		title: 'Двоярусне ліжко "Аляска" від MebiGrand2',
		oldPrice: 49000,
		newPrice: 50000,
	},
	{
		id: 6,
		img: '/slide2-min.jpg',
		title: 'Двоспальне ліжко «Прованс»2',
		oldPrice: 59000,
		newPrice: 60000,
	},
	{
		id: 7,
		img: '/slide3-min.jpg',
		title: 'Елегантне та стильне ліжко "Верона" від фабрики UMa Ursa Major2',
		oldPrice: 69000,
		newPrice: 70000,
	},
	{
		id: 8,
		img: '/slide4-min.jpg',
		title: 'Елегантне та стильне ліжко "Монро"2',
		oldPrice: 79000,
		newPrice: 80000,
	},
]

export default function Home() {
	return (
		<div>
			<Hero />
			<Section title='Нові товари'>
				<ProductSlider arr={products}></ProductSlider>
			</Section>
			<Section title='ХІТ продажу'>
				<ProductSlider arr={products}></ProductSlider>
			</Section>
			<Section title='Етапи покупки'>
				<Ethaps />
			</Section>
			<Section title='Популярні категорії'>
				<Categories />
			</Section>
			<Section title='Також вас може зацікавити'>
				<ProductSlider arr={products}></ProductSlider>
			</Section>
			<Section title='Чому нас обирають' className='mb-[72px]'>
				<Advantages />
			</Section>
		</div>
	)
}
