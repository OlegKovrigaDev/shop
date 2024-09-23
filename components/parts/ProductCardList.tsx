import Link from 'next/link'
import { ProductCard } from './ProductCard'

export const ProductCardList = ({ items, id }) => (
	<div className='flex flex-1 gap-y-8 justify-between flex-wrap max-w-[905px]'>
		{items.map(
			({
				offerId,
				params: { ModelName, RetailPrice, RetailPriceWithDiscount, Articul },
			}) => (
				<Link
					key={offerId}
					href={`/product/${offerId}?categoryId=${id}`}
					passHref
				>
					<ProductCard
						img='/slide1-min.jpg'
						title={ModelName}
						oldPrice={RetailPriceWithDiscount}
						newPrice={RetailPrice}
						Articul={Articul}
						offerId={offerId}
					/>
				</Link>
			)
		)}
	</div>
)
