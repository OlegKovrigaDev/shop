import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { ChevronDown, Headset } from 'lucide-react'
import Link from 'next/link'

export const ContactSelect = () => {
	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger className='flex items-center justify-between gap-1'>
					<Headset />
					<div>
						<p className='text-xl mb-1 font-medium'>095-12-77-643</p>
						<p className='md:block hidden text-xs font-normal -mt-2'>
							Контактні телефони
						</p>
					</div>
					<ChevronDown size={16} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className='rounded-2xl bg-white p-4'>
					{/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Link href='tel:+380951277643'>095-12-77-643</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	)
}
