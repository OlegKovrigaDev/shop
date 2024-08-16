import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { THoverMenu } from '@/types'
import { FC, ReactNode } from 'react'

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
