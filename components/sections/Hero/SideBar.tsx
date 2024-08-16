import { TSideBar } from '@/types'
import Link from 'next/link'
import { FC } from 'react'

export const SideBar: FC<TSideBar> = ({ items }) => {
	return (
		<ul className='w-full max-w-72 font-medium flex flex-col gap-4'>
			{items.map(({ id, text }) => (
				<li key={id}>
					<Link href='/'>{text}</Link>
				</li>
			))}
		</ul>
	)
}
