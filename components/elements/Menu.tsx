import { FC, ReactNode } from 'react'
import { Button } from '../ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet'
import { Icon } from './Icon'
import { Logo } from './Logo'

type MenuProps = {
	icon: 'menu' | 'layout-dashboard'
	text: string
	children: ReactNode
}

export const Menu: FC<MenuProps> = ({ icon, text, children }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='flex flex-col w-[71px] h-[48px] hover:bg-transparent hover:text-white'
				>
					<Icon name={icon} />
					<span className='text-xs'>{text}</span>
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'} className='w-screen'>
				<SheetHeader>
					<SheetTitle>
						<Logo />
					</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	)
}
