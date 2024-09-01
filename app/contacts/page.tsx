'use client'

import { FilterAccordion } from '@/components/parts/FilterAccordion'
import { contactsData, maps } from '@/constants'
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6'

const contacts = () => {
	const [activeAccordion, setActiveAccordion] = useState(0)

	return (
		<div className='pt-10 pb-20 flex flex-col items-center xl:items-start xl:flex-row xl:justify-between'>
			<div className='flex flex-col max-w-[592px] sm:min-w-[592px] bg-white'>
				{contactsData.map(({ id, title, phone, type, email, icons }) => (
					<FilterAccordion
						key={id}
						title={title}
						onToggle={() => setActiveAccordion(id)}
					>
						<div className='flex flex-col gap-2 w-full'>
							<div key={id} className='flex justify-between text-[18px]'>
								<div className='flex flex-col gap-4'>
									<Link href={`tel:${phone}`} className='flex gap-2'>
										<Phone size={24} />
										{phone}
									</Link>
									{type === 'email' && (
										<Link href={`mailto:${email}`} className='flex gap-2'>
											<Mail size={24} />
											{email}
										</Link>
									)}
									{type === 'social' && (
										<Link
											key={`social-link-${id}`}
											href='/'
											className='flex gap-6'
										>
											{icons.map((icon, index) => (
												<span key={`icon-${index}`}>
													{icon === FaFacebook && <FaFacebook size={24} />}
													{icon === FaInstagram && <FaInstagram size={24} />}
													{icon === FaTiktok && <FaTiktok size={24} />}
												</span>
											))}
										</Link>
									)}
								</div>
								<div className='flex flex-col gap-4'>
									<p>Графік роботи</p>
									<div className='flex flex-col gap-4 items-end'>
										<p>ПН - СБ 08:00 - 18:00</p>
										<p>ВС 08:00 - 18:00</p>
									</div>
								</div>
							</div>
						</div>
					</FilterAccordion>
				))}
			</div>
			<div className='flex flex-col max-w-[584px] md:min-w-[584px]'>
				{activeAccordion <= 1 && (
					<img src='/cat.jpg' alt='' className='object-contain' />
				)}
				{activeAccordion >= 2 && (
					<>
						<h2 className='font-bold mb-2'>Ми на карті:</h2>
						<p className='mb-4'>{maps[activeAccordion][1]}</p>
						<iframe
							src={maps[activeAccordion][0]}
							height='483'
							loading='lazy'
						></iframe>
					</>
				)}
			</div>
		</div>
	)
}

export default contacts
