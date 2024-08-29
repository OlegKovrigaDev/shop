import { fetchCategoryId, fetchCategoryItems } from '@/api'
import { ProductSlider } from '@/components/parts'
import { CrumbsLink } from '@/components/parts/CrumbsLink'
import { FilterAccordion } from '@/components/parts/FilterAccordion'
import { Section } from '@/components/sections'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { products } from '@/constants'
import { CategoryPageProps, TItems } from '@/types'
import { Check } from 'lucide-react'
import Link from 'next/link'

const product = async ({ params }: CategoryPageProps) => {
	const { id } = params
	let items: TItems[] = []

	let categories = await fetchCategoryId(id)
	items = await fetchCategoryItems(id)
	return (
		<>
			<CrumbsLink categories={categories} items={items} />
			<div className='flex justify-between'>
				<div className='w-[800px] flex flex-col gap-6'>
					<FilterAccordion
						title='Вибір опції'
						className='bg-white p-0 text-2xl'
					>
						<div className='flex flex-col gap-2'>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
								hic, aperiam odit voluptatibus voluptas necessitatibus vero
								facilis, placeat sint harum earum fuga nihil ipsa sequi id est
								doloribus omnis molestias.
							</p>
						</div>
					</FilterAccordion>
					<FilterAccordion title='Опис' className='bg-white p-0 text-2xl'>
						<div className='flex flex-col gap-4'>
							<p>
								Двоярусне ліжко "Аляска" від MebiGrand - це сучасне та зручне
								рішення для родин, які цінують комфорт і стиль. Ліжко має два
								яруси, що дозволяє оптимально використовувати простір у кімнаті.
							</p>
							<p>
								"Поляріс" виконане в сучасному стилі, який легко впишеться в
								будь-який інтер'єр, будь то дитяча кімната або гостьова.
								Виготовлене з високоякісних матеріалів, таких як масив дерева,
								ліжко забезпечує надійність і довговічність. Міцні сходи
								дозволяють легко підійматися на верхній ярус, а захисні борти
								забезпечують безпеку під час сну.
							</p>
							<p>
								<div className='font-bold'>Додаткові опції включають:</div>
								Комплект висувних ящиків під нижнім ярусом, які забезпечують
								додатковий простір для зберігання одягу, іграшок та інших речей,
								допомагаючи зберігати порядок у кімнаті. Знімна захисна огорожа
								для нижнього ярусу, що запобігає випадковим падінням під час
								сну. Ламелі з кроком 30 мм, що надають більш тверду підтримку
								для матраца, ідеальну для тих, хто потребує ортопедичної
								підтримки. Ламелі з кроком 45 мм створюють більш м'яку та
								еластичну основу, підходячи для тих, хто надає перевагу м'якшій
								поверхні для сну. Двоярусне ліжко "Поляріс" - це поєднання
								функціональності, комфорту та естетики, яке стане чудовим
								доповненням до вашого дому.
							</p>
						</div>
					</FilterAccordion>
				</div>
				<div className='w-[385px] flex flex-col gap-6'>
					<FilterAccordion title='Варіанти товару'>
						<div className='flex flex-col gap-2 text-xs w-full'>
							{[
								{ id: 1, type: 'Односпальні', count: 24 },
								{ id: 2, type: 'Односпальні', count: 24 },
								{ id: 3, type: 'Односпальні', count: 24 },
								{ id: 4, type: 'Односпальні', count: 24 },
								{ id: 5, type: 'Односпальні', count: 24 },
							].map(({ id, type, count }) => {
								return (
									<div key={id} className='flex justify-between text-[16px]'>
										<span className='flex gap-2 items-center'>
											<Checkbox id='variants' className='border-2 rounded' />
											<Label htmlFor='variants'>{type}</Label>
										</span>
										<span>[{count}]</span>
									</div>
								)
							})}

							<Link href='/' className='text-[#4E3A9F] mt-4'>
								Згорнути
							</Link>
							<div className='flex justify-between gap-4 mt-6'>
								<Button className='px-18 py-2 bg-[#D81C1B] hover:bg-[#D81C1B]/80 flex-1'>
									Купити
								</Button>
								<Button className='px-18 py-2 bg-transparent border-2 border-[#D81C1B] text-[#D81C1B] hover:bg-black/10 flex-1'>
									Купити в 1 клік
								</Button>
							</div>
						</div>
					</FilterAccordion>
					<FilterAccordion title='Наявність в магазинах'>
						<div className='flex flex-col gap-2 text-xs w-full'>
							{[
								{ id: 1, location: 'Одеса', actual: true },
								{ id: 2, location: 'Одеса', actual: true },
								{ id: 3, location: 'Одеса', actual: false },
							].map(({ id, location, actual }) => (
								<div key={id} className='flex justify-between text-[16px]'>
									<span>{location}</span>
									{actual && <Check color='#3C9F3A' />}
								</div>
							))}
							<Link href='/' className='text-[#4E3A9F] mt-4'>
								Дізнатися всі умови
							</Link>
						</div>
					</FilterAccordion>
					<FilterAccordion title='Доставка'>
						<div className='flex flex-col gap-2 text-xs'>
							<div className='flex justify-between text-[16px]'>
								<span>Самовивіз зі складу</span>
								<span className='text-[#3C9F3A]'>Безкоштовно</span>
							</div>
							<p>
								Безкоштовне самовивезення можливе за наявності товару на цьому
								складі. Якщо товар знаходиться на віддаленому складі або
								необхідно переміщення з іншого магазину, вартість погоджується з
								менеджером
							</p>
							<p>
								При самовивезенні з магазину, винесення та навантаження
								здійснюється самотужки
							</p>
							<div className='flex justify-between text-[16px]'>
								<span>Доставка по Києву</span>
								<span>599 грн</span>
							</div>
							<div className='flex justify-between text-[16px]'>
								<span>По Україні від:</span>
								<span>599 грн</span>
							</div>
						</div>
					</FilterAccordion>
					<FilterAccordion title='Оплата'>
						<div className='flex flex-col gap-2 text-xs'>
							<p>
								Готівкою або через термінал у магазині, безготівковий
								розрахунок, карткою, розстрочка, оплата частинами, Whitepay
								crypto
							</p>
							<Link href='/' className='text-[#4E3A9F]'>
								Дізнатися всі умови
							</Link>
						</div>
					</FilterAccordion>
					<FilterAccordion title='Гарантія та повернення'>
						<div className='flex flex-col gap-2 text-xs'>
							<p>
								Гарантія від виробника до 2 років до 24 місяців з моменту
								покупки. Гарантійний термін починається з доставки виробу
								клієнту додому. 14 днів з наступного дня після доставки виробу
								додому ви маєте право обміняти або повернути куплений товар.
							</p>
							<Link href='/' className='text-[#4E3A9F]'>
								Дізнатися всі умови
							</Link>
						</div>
					</FilterAccordion>
				</div>
			</div>
			<Section title='Переглянуті товари' className='mb-[75px]'>
				<ProductSlider arr={products}></ProductSlider>
			</Section>
		</>
	)
}

export default product
