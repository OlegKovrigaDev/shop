'use client'
import { useState } from 'react'
import { Logo } from '../../parts/Logo'
import { Menu } from './Menu'
import { SearchBar } from './SearchBar'
import { SelectLang } from './SelectLang'
import { TopList } from './TopList'

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
						<TopList />
						<Menu title='Каталог' />
					</>
				)}
			</div>
		</div>
	)
}

const DesktopTop = () => (
	<div className='container py-6 items-center gap-7 hidden md:flex'>
		<Logo />
		<SelectLang />
		<Menu title='Каталог' />
		<SearchBar onSearchToggle={() => {}} />
		<TopList />
	</div>
)

export const Header = () => (
	<header className='bg-accent sticky top-0 z-10'>
		<DesktopTop />
		<MobileTop />
	</header>
)
