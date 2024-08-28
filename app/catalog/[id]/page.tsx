import { fetchCategoryId, fetchCategoryItems } from '@/api/index'
import { CrumbsLink } from '@/components/parts/CrumbsLink'
import { FilterAccordion } from '@/components/parts/FilterAccordion'
import { ProductCard } from '@/components/parts/ProductCard'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { CategoryPageProps, TItems } from '@/types'
import Link from 'next/link'

const CategoryPage = async ({ params }: CategoryPageProps) => {
	const { id } = params
	let items: TItems[] = []

	let categories = await fetchCategoryId(id)
	items = await fetchCategoryItems(id)

	return (
		<div className='mb-[75px]'>
			<CrumbsLink categories={categories} items={items} />
			<div className='flex flex-col gap-8 md:flex-row md:justify-between'>
				<div className='flex flex-col gap-2 max-w-[280px] sm:min-w-[280px]'>
					{[
						{ id: 1 },
						{ id: 2 },
						{ id: 3 },
						{ id: 4 },
						{ id: 5 },
						{ id: 6 },
						{ id: 7 },
					].map(({ id }) => (
						<FilterAccordion key={id} title='Розмір спального місця'>
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

								<Button className='mt-6 px-20 py-2 bg-[#D81C1B] hover:bg-[#D81C1B]/80'>
									Застосувати
								</Button>
							</div>
						</FilterAccordion>
					))}
				</div>
				<div className='flex flex-1 gap-y-8 justify-between flex-wrap max-w-[904px]'>
					{items.map(
						({
							offerId,
							params: { FashionName, RetailPrice, RetailPriceWithDiscount },
						}) => (
							<ProductCard
								key={offerId}
								img='/slide1-min.jpg'
								title={FashionName}
								oldPrice={RetailPriceWithDiscount}
								newPrice={RetailPrice}
							/>
						)
					)}
				</div>
			</div>
		</div>
	)
}

export default CategoryPage
