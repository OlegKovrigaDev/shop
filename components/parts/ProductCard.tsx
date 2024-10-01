import { TProductCard } from '@/types'
import { ShoppingCart } from 'lucide-react'
import {
	Badge,
	Button,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui'

export const ProductCard = ({
	img,
	title,
	oldPrice,
	newPrice,
	hit,
	discont,
	newProduct,
	Articul,
}: TProductCard) => {
	return (
		<Card className='flex flex-col justify-between rounded-none h-[425px] w-[235px] hover:shadow-xl  transition-shadow duration-300 relative p-2'>
			<CardHeader className='p-0'>
				<div className='relative'>
					<Badge className='rounded-lg absolute bg-[#F34E69]'>Акція</Badge>
					<Badge className='rounded-lg absolute top-7 bg-[#F9895E]'>Хіт</Badge>
					<Badge className='rounded-lg absolute right-0 bg-[#A670B0]'>
						Відео
					</Badge>
					<div className='w-[217px] h-[217px] bg-accent rounded-lg'>
						{/* <img src={img} alt={title} className='rounded-lg' /> */}
					</div>
				</div>
				<CardTitle className='text-[18px] line-clamp-3 h-20'>{title}</CardTitle>
			</CardHeader>
			<CardContent className='flex justify-between p-0 mb-6'>
				<p className='text-green text-xs font-semibold'>● В наявності</p>
				<p className='text-gray/40 text-xs'>Код товару: {Articul}</p>
			</CardContent>
			<CardFooter className='p-0 flex flex-col items-start'>
				{oldPrice !== newPrice && (
					<p className='line-through font-medium'>{newPrice} грн.</p>
				)}
				<p className='text-red text-[20px] font-bold'>{oldPrice} грн.</p>
				<Button
					variant='ghost'
					size='icon'
					className='absolute right-0 bottom-0 z-50'
				>
					<ShoppingCart />
				</Button>
			</CardFooter>
		</Card>
	)
}
