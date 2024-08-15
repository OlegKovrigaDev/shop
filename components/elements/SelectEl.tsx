import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { FC } from 'react'

type Item = {
	value: string
	text: string
}
interface SelectElProps {
	placeholder?: string
	items: Item[]
}

export const SelectEl: FC<SelectElProps> = ({ placeholder, items }) => {
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
