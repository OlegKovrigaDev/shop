export const Ethaps = () => (
	<ul className='flex gap-8 counter'>
		{[
			{
				id: 1,
				title: 'Вибір',
				text: 'У нашому магазині Ви можете знайти будь-які товари для дому або можете скористатись допомогою наших менеджерів',
			},
			{
				id: 2,
				title: 'Узгодження з менеджером',
				text: 'Наші менеджери з радістю підкажуть  варіанти доставки і оплати саме для вас',
			},
			{
				id: 3,
				title: 'Відправка',
				text: 'Після узгодження деталей з доставки і оплати наші працівники відправляють товар  в умовлений час',
			},
		].map(({ id, title, text }) => (
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
