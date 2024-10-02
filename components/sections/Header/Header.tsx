'use client'
import { ModalPage } from '@/components/parts/ModalPage'
import { useState } from 'react'
import { Logo } from '../../parts/Logo'
import { ContactButton } from './ContactButton'
import { Menu } from './Menu'
import { SearchBar } from './SearchBar'
import { SelectLang } from './SelectLang'
import { ContactSelect } from './ContactSelect'

const MobileTop = () => {
	const [isSearchVisible, setIsSearchVisible] = useState(false)
	return (
		<div className='container py-4 items-center justify-between flex md:hidden relative'>
			{!isSearchVisible && (
				<>
					<Logo />
					<SelectLang />
				</>
			)}
			<div className='flex items-center gap-2 ml-auto w-full'>
				<SearchBar onSearchToggle={setIsSearchVisible} />
				{!isSearchVisible && (
					<>
						<ModalPage />
						<Menu title='Каталог' />
					</>
				)}
			</div>
		</div>
	)
}

const DesktopTop = () => (
	<div className='container py-6 items-center gap-7 hidden md:flex justify-between'>
		<div className='flex gap-7'>
			<Logo />
			<Menu title='Каталог' />
			<ContactButton />
		</div>
		<SearchBar onSearchToggle={() => {}} />
		<div className='flex gap-7'>
			<ContactSelect />
			<SelectLang />
			<ModalPage />
		</div>
	</div>
)

export const Header = () => (
	<header className='bg-accent sticky top-0 z-10'>
		<DesktopTop />
		<MobileTop />
	</header>
)
