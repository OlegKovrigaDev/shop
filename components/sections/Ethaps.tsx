import { ethapsData } from '@/constants'

export const Ethaps = () => (
	<ul className='flex gap-8 counter'>
		{ethapsData.map(({ id, title, text }) => (
			<li
				key={id}
				className='flex flex-col flex-1 p-[44px] relative before:text-[128px] before:font-extrabold before:text-[#d81c1b]/40 before:absolute before:top-0 before:left-0'
			>
				<h3 className='font-bold text-xl'>{title}</h3>
				<p className='text-[#47464B]'>{text}</p>
			</li>
		))}
	</ul>
)
