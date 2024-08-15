'use client'

import Link from 'next/link'
import { HoverMenu } from '../elements/HoverMenu'
import { CartPopup } from './CartPopup'
import { Icon } from './Icon'

export const TopList = () => {
	return (
		<ul className='flex items-center gap-5'>
			{[
				{
					id: 1,
					icon: 'phone',
					link: '/',
					text: 'Контакти',
					type: 'contact',
					hover: false,
				},
				{
					id: 2,
					icon: 'shopping-cart',
					link: '/',
					text: 'Кошик',
					type: 'cart',
					hover: true,
				},
			].map(({ id, icon, link, text, type, hover }) => (
				<li key={id}>
					{hover ? (
						<HoverMenu icon={icon} link={link} text={text}>
							{type === 'cart' && <CartPopup text={text} />}
						</HoverMenu>
					) : (
						<>
							<Link href={link} className='w-[71px] flex flex-col items-center'>
								<Icon name={icon} />
								<span className='text-xs'>{text}</span>
							</Link>
						</>
					)}
				</li>
			))}
		</ul>
	)
}
