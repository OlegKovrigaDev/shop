import { ethapsData } from '@/constants'

export const Ethaps = () => (
	<ul className='flex flex-col md:flex-row gap-8 counter'>
		{ethapsData.map(({ id, title, text }) => (
			<li
				key={id}
				className='flex flex-col flex-1 before:text-red/40 before:sm:-left-40'
			>
				<h3 className='font-bold text-lg sm:text-xl'>{title}</h3>
				<p className='text-gray'>{text}</p>
			</li>
		))}
	</ul>
)
