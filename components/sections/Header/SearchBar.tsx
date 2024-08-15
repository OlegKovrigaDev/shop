import { Search } from 'lucide-react'
import { Input } from '../../ui/input'

export const SearchBar = () => {
	return (
		<div className='flex items-center w-screen relative'>
			<Input
				type='text'
				placeholder='Пошук'
				className='border-none text-black pr-10'
			/>
			<Search className='absolute right-[10px] text-black' />
		</div>
	)
}
