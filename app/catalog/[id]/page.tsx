import { fetchCategoryId, fetchCategoryItems } from '@/api/index'
import { CrumbsLink } from '@/components/parts/CrumbsLink'
import { FilterAccordion } from '@/components/parts/FilterAccordion'
import { ProductCard } from '@/components/parts/ProductCard'
import { CategoryPageProps, TItems } from '@/types'

const CategoryPage = async ({ params }: CategoryPageProps) => {
	const { id } = params
	let items: TItems[] = []

	let categories = await fetchCategoryId(id)
	items = await fetchCategoryItems(id)

	return (
		<>
			<CrumbsLink categories={categories} items={items} />
			<div className='flex justify-between gap-8'>
				<div className='flex flex-col gap-2 min-w-[280px]'>
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
				</div>
				<div className='flex flex-1 gap-y-8 justify-between flex-wrap md:basis-1/2 lg:basis-1/3 max-w-[904px]'>
					{items.map(
						({
							offerId,
							params: { GoodName, RetailPrice, RetailPriceWithDiscount },
						}) => (
							<ProductCard
								key={offerId}
								img='/slide1-min.jpg'
								title={GoodName}
								oldPrice={RetailPriceWithDiscount}
								newPrice={RetailPrice}
							/>
						)
					)}
				</div>
			</div>
		</>
	)
}

export default CategoryPage
