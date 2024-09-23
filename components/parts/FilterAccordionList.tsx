import Link from 'next/link'
import { Button, Checkbox, Label } from '../ui'
import { FilterAccordion } from './FilterAccordion'

export const FilterAccordionList = () => (
	<div className='flex flex-col gap-2 max-w-[305px] sm:min-w-[305px]'>
		{[
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
			{ id: 7 },
		].map(({ id }) => (
			<FilterAccordion key={id} title='Розмір спального місця'>
				<div className='flex flex-col gap-2 text-xs w-full'>
					{[
						{ id: 1, type: 'Односпальні', count: 24 },
						{ id: 2, type: 'Односпальні', count: 24 },
						{ id: 3, type: 'Односпальні', count: 24 },
						{ id: 4, type: 'Односпальні', count: 24 },
						{ id: 5, type: 'Односпальні', count: 24 },
					].map(({ id, type, count }) => (
						<div key={id} className='flex justify-between text-[16px]'>
							<span className='flex gap-2 items-center'>
								<Checkbox id={`variant-${id}`} className='border-2 rounded' />
								<Label htmlFor={`variant-${id}`}>{type}</Label>
							</span>
							<span>[{count}]</span>
						</div>
					))}

					<Link href='/' className='text-[#4E3A9F] mt-4'>
						Згорнути
					</Link>

					<Button className='mt-6 px-20 py-2 bg-[#D81C1B] hover:bg-[#D81C1B]/80'>
						Застосувати
					</Button>
				</div>
			</FilterAccordion>
		))}
	</div>
)
