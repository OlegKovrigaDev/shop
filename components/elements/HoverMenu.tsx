import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'
import { FC, ReactNode } from 'react'
import { Icon } from './Icon'

type HoverMenuProps = {
	icon: string
	link: string
	text: string
	children: ReactNode
}

export const HoverMenu: FC<HoverMenuProps> = ({
	icon,
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
				<Icon name={icon} />
				<span className='text-xs'>{text}</span>
			</HoverCardTrigger>
			<HoverCardContent>{children}</HoverCardContent>
		</HoverCard>
	)
}
