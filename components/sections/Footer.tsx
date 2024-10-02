import { footer } from '@/constants'
import Link from 'next/link'
import { Logo } from '../parts/Logo'

export const Footer = () => {
	return (
		<footer className='bg-accent text-gray'>
			<div className='container pt-8 pb-[58px] flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left'>
				<Logo />
				{footer.map((column, index) => (
					<div key={index} className='mb-6 md:mb-0'>
						<p className='font-semibold text-2xl mb-1'>{column.title}</p>

						{column.schedule && (
							<div className='flex flex-col lg:flex-row flex-wrap justify-between md:w-96'>
								{column.schedule.map(({ id, field, text, link }) => (
									<>
										<p className=''>{field}</p>
										<p key={id} className='mb-1 max-w-44'>
											{link ? <Link href={link}>{text}</Link> : <>{text}</>}
										</p>
									</>
								))}
							</div>
						)}
						{column.socials && (
							<ul className='text-base md:text-sm'>
								<li>
									<div className='mt-4 flex justify-center md:justify-start gap-4'>
										{column.socials.map(({ id, icon: Icon, link }) => (
											<Link key={id} href={link}>
												<div className='size-8 bg-white flex items-center justify-center rounded-lg'>
													<Icon size={24} />
												</div>
											</Link>
										))}
									</div>
								</li>
							</ul>
						)}
						{column.items && (
							<ul className='flex flex-col gap-1'>
								{column.items.map(({ id, text, link }) => (
									<li key={id}>
										<Link href={link}>{text}</Link>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</footer>
	)
}
