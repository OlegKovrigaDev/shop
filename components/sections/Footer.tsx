import { footerData } from '@/constants'
import Link from 'next/link'
import { Logo } from '../parts/Logo'

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
