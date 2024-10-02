import { MapPinned } from 'lucide-react'
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '../../ui/hover-card'

export const ContactButton = () => {
	return (
		<HoverCard>
			<HoverCardTrigger className='flex flex-col items-center justify-center'>
				<MapPinned size={24} />
				<span className='hidden md:flex-wrap md:flex text-xs'>Магазини</span>
			</HoverCardTrigger>
			<HoverCardContent className='w-[400px]'>
				<ul className='flex flex-col gap-4'>
					{[
						{
							id: 1,
							text: [
								'м. Балта, Одеська обл.',
								'вул. Любомирська, 163',
								'ПН - СБ 08:00 - 18:00 НД 08:00 - 16:00',
							],
						},
						{
							id: 2,
							text: [
								'м. Подільск, Одеська обл.',
								'вул. Соборна, 194',
								'ПН - СБ 10:00 - 20:00',
							],
						},
						{
							id: 3,
							text: [
								'м. Одеса',
								'вул. Чорноморського козацтва, 1 А',
								'ПН - НД 08:00 - 18:00 НД 08:00 - 16:00',
							],
						},
						{
							id: 4,
							text: [
								'м. Первомайськ, Миколаївська обл.',
								'вул. Одеська, 48 А',
								'ПН - НД 09:00 - 18:00 ',
							],
						},
					].map(({ id, text }) => (
						<li key={id} className='flex items-center gap-4'>
							<MapPinned size={24} />
							<div>
								{text.map((text, i) => (
									<p key={i} className='first:font-semibold'>
										{text}
									</p>
								))}
							</div>
						</li>
					))}
				</ul>
			</HoverCardContent>
		</HoverCard>
	)
}
