export const Advantages = () => {
	return (
		<ul className='flex flex-wrap gap-8 justify-evenly'>
			{[
				{
					id: 1,
					title: 'Широкий асортимент',
					text: "Ми пропонуємо великий вибір меблів для будь-яких кімнат та стилів інтер'єру.",
					icon: '/Advantages/Assortement.svg',
				},
				{
					id: 2,
					title: 'Індивідуальний підхід',
					text: 'Ми завжди готові врахувати ваші побажання та створити меблі на замовлення.',
					icon: '/Advantages/Individual.svg',
				},
				{
					id: 3,
					title: 'Гарантія якості',
					text: 'Ми завжди готові врахувати ваші побажання та створити меблі на замовлення.',
					icon: '/Advantages/Garanty.svg',
				},
				{
					id: 4,
					title: 'Доступність',
					text: 'Ми прагнемо пропонувати конкурентоспроможні ціни без шкоди для якості.',
					icon: '/Advantages/Availability.svg',
				},
				{
					id: 5,
					title: 'Професійна консультація',
					text: 'Наші експерти завжди готові надати кваліфіковану допомогу у виборі меблів, які ідеально підходять саме вам.',
					icon: '/Advantages/Professional.svg',
				},
			].map(({ id, title, text, icon }) => (
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
