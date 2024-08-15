import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { LogoEl } from '../parts/LogoEl'

const footer = [
	{
		id: 2,
		phones: [
			{ id: 1, text: '+380666719366', link: '+380666719366' },
			{ id: 2, text: '+380976719366', link: '+380976719366' },
			{ id: 3, text: '+380506719366', link: '+380506719366' },
		],
		socials: [
			{ id: 1, icon: FaFacebook, link: '/' },
			{ id: 2, icon: FaInstagram, link: '/' },
			{ id: 3, icon: FaTiktok, link: '/' },
			{ id: 4, icon: FaYoutube, link: '/' },
		],
	},
]

export const Footer = () => {
	return (
		<footer className='bg-[#47464B] text-white'>
			<div className='container pt-8 pb-[58px] flex justify-between'>
				<LogoEl />
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
						{footer[0].phones.map(({ id, text, link }) => (
							<li>
								<Link className='text-sm' href={`tel:${link}`}>
									{text}
								</Link>
							</li>
						))}
						<li>
							<div className='mt-4 flex gap-6'>
								{footer[0].socials.map(({ id, icon: Icon, link }) => (
									<Link key={id} href={link}>
										<Icon size={24} />
									</Link>
								))}
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
