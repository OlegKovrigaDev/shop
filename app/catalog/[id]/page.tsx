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
		<div className='mb-[75px]'>
			<CrumbsLink categories={categories} items={items} />
			<div className='flex flex-col gap-8 md:flex-row md:justify-between'>
				<div className='flex flex-col gap-2 max-w-[280px] sm:min-w-[280px]'>
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
					<FilterAccordion title='Filter' />
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
