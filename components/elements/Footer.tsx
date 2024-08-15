import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { Logo } from './Logo'

export const Footer = () => {
	return (
		<footer className='bg-[#47464B] text-white'>
			<div className='container pt-8 pb-[58px] flex justify-between'>
				<Logo />
				<ul className='text-2xl flex flex-col gap-1'>
					<li>
						<Link href='/'>Доставка і Оплата</Link>
					</li>
					<li>
						<Link href='/'>Про нас</Link>
					</li>
					<li>
						<Link href='/'>Акції</Link>
					</li>
				</ul>
				<div>
					<p className='text-2xl mb-1'>Зв’язатись з нами</p>
					<ul>
						<li>
							<Link className='text-sm' href='tel:+380666719366'>
								+380666719366
							</Link>
						</li>
						<li>
							<Link className='text-sm' href='tel:+380976719366'>
								+380976719366
							</Link>
						</li>
						<li>
							<Link className='text-sm' href='tel:+380506719366'>
								+380506719366
							</Link>
						</li>
						<li>
							<div className='mt-4 flex gap-6'>
								<Link href='/'>
									<FaFacebook size={24} />
								</Link>
								<Link href='/'>
									<FaInstagram size={24} />
								</Link>
								<Link href='/'>
									<FaTiktok size={24} />
								</Link>
								<Link href='/'>
									<FaYoutube size={24} />
								</Link>
							</div>
						</li>
					</ul>
				</div>
				<div>
					<p className='text-2xl mb-1'>Розклад</p>
					<p className='text-sm mb-1'>Будні: 09:00 - 19:00</p>
					<p className='text-sm'>Вихідні: 09:00 - 19:00</p>
				</div>
			</div>
		</footer>
	)
}
