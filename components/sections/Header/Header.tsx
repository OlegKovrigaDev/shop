'use client'
import { useState } from 'react'
import { Logo } from '../../parts/Logo'
import { Menu } from './Menu'
import { SearchBar } from './SearchBar'
import { SelectLang } from './SelectLang'
import { TopList } from './TopList'

export const Header = () => {
	const [isSearchVisible, setIsSearchVisible] = useState(false)

	return (
		<header className='bg-accent sticky top-0 z-10'>
			<div className='container flex py-4 items-center justify-between md:hidden relative'>
				{!isSearchVisible && (
					<>
						<Logo />
						<SelectLang
							items={[
								{ value: 'ua', text: 'UA' },
								{ value: 'ru', text: 'RU' },
							]}
						/>
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

			<div className='container py-6 items-center gap-7 hidden md:flex'>
				<Logo />
				<SelectLang
					items={[
						{ value: 'ua', text: 'UA' },
						{ value: 'ru', text: 'RU' },
					]}
				/>
				<Menu title='Каталог' />
				<SearchBar onSearchToggle={() => {}} />
				<TopList />
			</div>
		</header>
	)
}
