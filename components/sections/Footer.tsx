import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { Logo } from '../parts/Logo'

const footerData = [
	{
		items: [
			{ id: 1, text: 'Доставка і Оплата', link: '/' },
			{ id: 2, text: 'Про нас', link: '/' },
			{ id: 3, text: 'Акції', link: '/' },
		],
	},
	{
		title: 'Зв’язатись з нами',
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
	{
		title: 'Розклад',
		schedule: [
			{ id: 1, text: 'Будні: 09:00 - 19:00' },
			{ id: 2, text: 'Вихідні: 09:00 - 19:00' },
		],
	},
]

export const Footer = () => {
	return (
		<footer className='bg-[#47464B] text-white'>
			<div className='container pt-8 pb-[58px] flex justify-between'>
				<Logo />
				{footerData.map((column, index) => (
					<div key={index}>
						<p className='text-2xl mb-1'>{column.title}</p>

						{column.items && (
							<ul className='text-2xl flex flex-col gap-1'>
								{column.items.map(({ id, text, link }) => (
									<li key={id}>
										<Link href={link}>{text}</Link>
									</li>
								))}
							</ul>
						)}
						{column.phones && (
							<ul>
								{column.phones.map(({ id, text, link }) => (
									<li key={id}>
										<Link className='text-sm' href={`tel:${link}`}>
											{text}
										</Link>
									</li>
								))}
								<li>
									<div className='mt-4 flex gap-6'>
										{column.socials.map(({ id, icon: Icon, link }) => (
											<Link key={id} href={link}>
												<Icon size={24} />
											</Link>
										))}
									</div>
								</li>
							</ul>
						)}
						{column.schedule && (
							<div>
								{column.schedule.map(({ id, text }) => (
									<p key={id} className='text-sm mb-1'>
										{text}
									</p>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		</footer>
	)
}
