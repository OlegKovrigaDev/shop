import Link from 'next/link'
import { FC } from 'react'

type CartPopupProps = {
	text: string
}

export const CartPopup: FC<CartPopupProps> = ({ text }) => {
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
