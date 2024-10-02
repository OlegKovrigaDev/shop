import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { TProductSlider } from '@/types'
import { ProductCard } from './ProductCard'

export const ProductSlider = ({ arr }: TProductSlider) => {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className='w-full relative'
		>
			<CarouselContent>
				{arr.map(item => (
					<CarouselItem
						key={item.id}
						className='basis-1/2 md:basis-1/3 xl:basis-1/5'
					>
						<ProductCard {...item} />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className='absolute left-1' />
			<CarouselNext className='absolute right-3' />
		</Carousel>
	)
}
