import { Input } from '../ui/input'
import { Icon } from './Icon'

export const SearchBar = () => {
	return (
		<div className='flex items-center w-screen relative'>
			<Input
				type='text'
				placeholder='Пошук'
				className='border-none text-black pr-10'
			/>
			<Icon name='search' className='absolute right-[10px] text-black' />
		</div>
	)
}
