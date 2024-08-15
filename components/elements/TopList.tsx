'use client'

import { Phone, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { HoverMenu } from '../elements/HoverMenu'
import { CartPopup } from './CartPopup'

export const TopList = () => {
	return (
		<ul className='flex items-center gap-5'>
			{[
				{
					id: 1,
					link: '/',
					text: 'Контакти',
					type: 'contact',
					hover: false,
				},
				{
					id: 2,
					link: '/',
					text: 'Кошик',
					type: 'cart',
					hover: true,
				},
			].map(({ id, link, text, type, hover }) => (
				<li key={id}>
					{hover ? (
						<HoverMenu
							icon={type === 'cart' ? ShoppingCart : Phone}
							link={link}
							text={text}
						>
							{type === 'cart' && <CartPopup text={text} />}
						</HoverMenu>
					) : (
						<>
							<Link href={link} className='w-[71px] flex flex-col items-center'>
								{type === 'cart' ? <ShoppingCart /> : <Phone />}
								<span className='text-xs'>{text}</span>
							</Link>
						</>
					)}
				</li>
			))}
		</ul>
	)
}
