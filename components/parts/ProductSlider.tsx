import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { TProductSlider } from '@/types'
import { FC } from 'react'
import { ProductCard } from './ProductCard'

export const ProductSlider: FC<TProductSlider> = ({ arr }) => {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className='w-full relative'
		>
			<CarouselContent>
				{arr.map(item => (
					<CarouselItem key={item.id} className='p-0 md:basis-1/2 lg:basis-1/4'>
						<div className='flex justify-center'>
							<ProductCard {...item} />
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className='absolute left-[2px]' />
			<CarouselNext className='absolute right-2' />
		</Carousel>
	)
}
