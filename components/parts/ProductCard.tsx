import { ShoppingCart } from 'lucide-react'
import { FC } from 'react'

export type TProductCard = {
	id: number
	img: string
	title: string
	oldPrice?: number
	newPrice: number
	hit?: boolean
	discont?: boolean
	newProduct?: boolean
}

export const ProductCard: FC<TProductCard> = ({
	img,
	title,
	oldPrice,
	newPrice,
	hit,
	discont,
	newProduct,
}) => {
	return (
		<div className='bg-white rounded-md min-h-[444px] flex flex-col justify-between relative'>
			<img src={img} alt={title} className='w-full object-cover' />
			<div className='absolute left-4 top-4 flex gap-2 flex-col'>
				{[
					{ id: 1, text: 'ХІТ', color: '4E3A9F', condition: hit },
					{ id: 2, text: 'ЗНИЖКА', color: 'D81C1B', condition: discont },
					{ id: 3, text: 'НОВИНКА', color: '3C9F3A', condition: newProduct },
				]
					.filter(type => type.condition)
					.map(({ id, text, color }) => (
						<span
							key={id}
							className={`bg-[#${color}] px-4 py-1 text-white text-xs font-semibold w-fit`}
						>
							{text}
						</span>
					))}
			</div>
			<div className='p-4 pb-2 h-[156px] flex flex-col'>
				<h4 className='font-semibold text-[18px]'>{title}</h4>
				<div className='flex justify-between flex-1 items-end'>
					<div>
						{oldPrice && (
							<p className='text-[#4E3A9F] text-xs font-semibold line-through'>
								{oldPrice} грн.
							</p>
						)}
						<h3 className='text-[#D81C1B] text-[20px] font-bold'>
							{newPrice} грн.
						</h3>
					</div>
					<ShoppingCart />
				</div>
			</div>
		</div>
	)
}
