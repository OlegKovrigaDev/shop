import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Headset } from 'lucide-react'

export const ContactSelect = () => {
	return (
		<>
			<Select defaultValue='phone1'>
				<SelectTrigger className='w-auto border-none text-lg md:text-2xl bg-transparent'>
					<div className='flex flex-col items-end'>
						<div className='flex gap-1 items-center'>
							<Headset />
							<SelectValue placeholder='095-12-77-643' />
						</div>
						<span className='md:block hidden text-xs -mt-2'>
							Контактні телефони
						</span>
					</div>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='phone1'>095-12-77-643</SelectItem>
						<SelectItem value='phone2'>095-12-77-543</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</>
	)
}
