import { LayoutDashboard } from 'lucide-react'
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
import { LogoEl } from './parts/LogoEl'

type MenuProps = {
	text: string
	children: ReactNode
}

export const Menu: FC<MenuProps> = ({ text, children }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='flex flex-col w-[71px] h-[48px] hover:bg-transparent hover:text-white'
				>
					<LayoutDashboard />
					<span className='text-xs'>{text}</span>
				</Button>
			</SheetTrigger>
			<SheetContent side={'left'} className='w-screen'>
				<SheetHeader>
					<SheetTitle>
						<LogoEl />
					</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	)
}
