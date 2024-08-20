import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export const FilterAccordion = ({ title }) => {
	return (
		<div className='bg-white w-full p-4 rounded-[4px]'>
			<Accordion type='single' collapsible>
				<AccordionItem value='item-1' className='border-transparent'>
					<AccordionTrigger className='bg-[#C6C6C7] px-4 py-2'>
						{title}
					</AccordionTrigger>
					<AccordionContent className='flex max-w-[248px] mt-6'>
						Yes. It adheres to the WAI-ARIA design pattern.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}
