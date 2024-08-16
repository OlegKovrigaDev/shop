import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type TProductCard = {
	id: number
	img: string
	title: string
	oldPrice?: number
	newPrice: number
	hit?: boolean
	discont?: boolean
	newProduct?: boolean
}

export type TProductSlider = {
	arr: TProductCard[]
}

export type TTitle = {
	children: ReactNode
}

export type TSection = {
	title: string
	children?: ReactNode
	className?: string
}

export type TLayout = {
	children: ReactNode
}

export type TItem = {
	id: number
	text: string
}

export type TSideBar = {
	items: TItem[]
}

export type TCartPopup = {
	text: string
}

export type THoverMenu = {
	icon: LucideIcon
	link: string
	text: string
	children: ReactNode
}

export type TMenu = {
	text: string
	children: ReactNode
}

export type TItemLang = {
	value: string
	text: string
}
export interface ISelectLang {
	placeholder?: string
	items: TItemLang[]
}
