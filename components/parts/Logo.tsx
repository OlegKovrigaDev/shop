import Link from 'next/link'

export const Logo = () => (
	<Link href='/'>
		<img src='/logo.svg' alt='Logo' className='w-64 h-12' />
	</Link>
)
