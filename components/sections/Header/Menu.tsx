import { LayoutDashboard } from 'lucide-react'
import { FC, ReactNode } from 'react'
import { Logo } from '../../parts/Logo'
import { Button } from '../../ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../../ui/sheet'

type TMenu = {
	text: string
	children: ReactNode
}

export const Menu: FC<TMenu> = ({ text, children }) => {
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
						<Logo />
					</SheetTitle>
					<SheetDescription></SheetDescription>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	)
}
