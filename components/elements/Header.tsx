'use client'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { SearchBar } from './SearchBar'
import { SelectEl } from './SelectEl'
import { TopList } from './TopList'

export const Header = () => {
	return (
		<header className='bg-[#D81C1B] text-white'>
			<div className='container py-6 flex items-center gap-7'>
				<Logo />
				<SelectEl
					items={[
						{ value: 'ua', text: 'UA' },
						{ value: 'ru', text: 'RU' },
					]}
				/>
				<Menu icon='layout-dashboard' text='Каталог'>
					Каталог
				</Menu>
				<SearchBar />
				<TopList />
				{/* <Menu icon='menu'>Menu</Menu> */}
			</div>
		</header>
	)
}
