const categories = [
	{ id: 1, name: 'Кухні', image: '/Categories/Cat1.jpg', rowSpan: 2 },
	{ id: 2, name: 'Шафи', image: '/Categories/Cat2.jpg' },
	{ id: 3, name: 'Офісні меблі', image: '/Categories/Cat3.jpg' },
	{ id: 4, name: 'Ліжка', image: '/Categories/Cat2.jpg' },
	{ id: 5, name: 'Дивани', image: '/Categories/Cat1.jpg', rowSpan: 2 },
	{ id: 6, name: 'Комоди і тумби', image: '/Categories/Cat3.jpg' },
]

export const Categories = () => (
	<div className='grid grid-cols-2 gap-4'>
		{categories.map(({ id, name, image, rowSpan }) => (
			<div
				key={id}
				className={`relative col-span-1 ${rowSpan ? 'row-span-2' : ''}`}
			>
				<img src={image} className='w-full' />
				<h3 className='absolute left-4 bottom-4 py-1 px-4 bg-[#f8f8f8] font-bold text-xl text-[#47464B]'>
					{name}
				</h3>
			</div>
		))}
	</div>
)
