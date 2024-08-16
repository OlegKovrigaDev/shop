import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ISelectLang } from '@/types'
import { FC } from 'react'

export const SelectLang: FC<ISelectLang> = ({ placeholder, items }) => {
	return (
		<Select defaultValue={items[0].value}>
			<SelectTrigger className='w-auto border-none font-bold text-2xl bg-transparent'>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{items.map(({ value, text }, i) => (
						<SelectItem key={i} value={value}>
							{text}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
