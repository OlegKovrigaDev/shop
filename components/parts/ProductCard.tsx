import { TProductCard } from '@/types'
import { ShoppingCart } from 'lucide-react'
import { FC } from 'react'

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
		<div className='bg-white rounded-md max-h-[444px] max-w-[280px] flex flex-col justify-between relative'>
			<img src={img} alt={title} className='w-full object-cover' />
			<div className='absolute left-4 top-4 flex gap-2 flex-col'>
				{[
					{ id: 1, text: 'ХІТ', color: 'bg-[#4E3A9F]', condition: hit },
					{
						id: 2,
						text: 'ЗНИЖКА',
						color: 'bg-[#D81C1B]',
						condition: discont,
					},
					{
						id: 3,
						text: 'НОВИНКА',
						color: 'bg-[#3C9F3A]',
						condition: newProduct,
					},
				]
					.filter(type => type.condition)
					.map(({ id, text, color }) => (
						<span
							key={id}
							className={`${color} px-4 py-1 text-white text-xs font-semibold w-fit`}
						>
							{text}
						</span>
					))}
			</div>
			<div className='p-4 pb-2 h-[156px] flex flex-col'>
				<h4 className='font-semibold text-[18px]'>{title}</h4>
				<div className='flex justify-between flex-1 items-end'>
					<div>
						{oldPrice !== newPrice && (
							<p className='text-[#4E3A9F] text-xs font-semibold line-through'>
								{newPrice} грн.
							</p>
						)}
						<h3 className='text-[#D81C1B] text-[20px] font-bold'>
							{oldPrice} грн.
						</h3>
					</div>
					<ShoppingCart />
				</div>
			</div>
		</div>
	)
}
