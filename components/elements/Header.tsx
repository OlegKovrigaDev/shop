'use client'
import { Menu } from './Menu'
import { LogoEl } from './parts/LogoEl'
import { SearchBar } from './SearchBar'
import { SelectEl } from './SelectEl'
import { TopList } from './TopList'

export const Header = () => {
	return (
		<header className='bg-[#D81C1B] text-white'>
			<div className='container py-6 flex items-center gap-7'>
				<LogoEl />
				<SelectEl
					items={[
						{ value: 'ua', text: 'UA' },
						{ value: 'ru', text: 'RU' },
					]}
				/>
				<Menu text='Каталог'>Каталог</Menu>
				<SearchBar />
				<TopList />
			</div>
		</header>
	)
}
