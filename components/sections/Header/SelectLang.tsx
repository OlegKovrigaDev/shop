import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export const SelectLang = () => {
	return (
		<>
			<Select defaultValue='ua'>
				<SelectTrigger className='w-auto border-none font-medium text-lg md:text-2xl bg-transparent'>
					<div className='flex flex-col'>
						<SelectValue placeholder='UA' />
						<span className='md:block hidden text-xs font-normal -mt-2'>
							Мова
						</span>
					</div>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='ua'>UA</SelectItem>
						<SelectItem value='ru'>RU</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	)
}
