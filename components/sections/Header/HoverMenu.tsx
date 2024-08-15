import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { LucideIcon } from 'lucide-react'
import { FC, ReactNode } from 'react'

type THoverMenu = {
	icon: LucideIcon
	link: string
	text: string
	children: ReactNode
}

export const HoverMenu: FC<THoverMenu> = ({
	icon: Icon,
	link,
	text,
	children,
}) => {
	return (
		<HoverCard>
			<HoverCardTrigger
				href={link}
				className='w-[71px] flex flex-col items-center'
			>
				<Icon />
				<span className='text-xs'>{text}</span>
			</HoverCardTrigger>
			<HoverCardContent>{children}</HoverCardContent>
		</HoverCard>
	)
}
