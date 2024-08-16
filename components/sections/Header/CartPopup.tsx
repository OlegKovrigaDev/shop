import { TCartPopup } from '@/types'
import Link from 'next/link'
import { FC } from 'react'

export const CartPopup: FC<TCartPopup> = ({ text }) => {
	return (
		<div>
			<h3>{text}</h3>
			<ul>
				<li></li>
			</ul>
			<div>
				<div>
					<span>Сума замовлення:</span>
					<span>0 грн</span>
				</div>
				<Link href='/order'>Оформити замовлення</Link>
			</div>
		</div>
	)
}
