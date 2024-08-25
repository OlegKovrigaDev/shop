'use client'
import { ModalPage } from '@/components/parts/ModalPage'
import { TopListProps } from '@/types'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export const TopList = ({ className }: TopListProps) => {
	return (
		<div className={className}>
			<ul className='flex items-center gap-5'>
				<li className='flex items-center'>
					<Link
						href='/contacts'
						className='w-[71px] flex flex-col items-center'
					>
						<Phone />
						<span className='text-xs'>Контакти</span>
					</Link>
				</li>

				<li className='flex items-center'>
					<ModalPage />
				</li>
			</ul>
		</div>
	)
}
