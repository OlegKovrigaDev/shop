import Link from 'next/link'

export const Logo = () => (
	<Link href='/'>
		<img src='/logo.svg' alt='Logo' className='md:max-w-[196px]' />
	</Link>
)
