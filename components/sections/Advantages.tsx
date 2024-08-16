import { advantagesData } from '@/constants'

export const Advantages = () => {
	return (
		<ul className='flex flex-wrap gap-8 justify-evenly'>
			{advantagesData.map(({ id, title, text, icon }) => (
				<li key={id} className='flex gap-1 w-[384px]'>
					<img src={icon} className='text-[#D81C1B]' width={100} />
					<div className='flex flex-col gap-1'>
						<h3 className='font-bold text-xl'>{title}</h3>
						<p className='text-[#47464B]'>{text}</p>
					</div>
				</li>
			))}
		</ul>
	)
}
