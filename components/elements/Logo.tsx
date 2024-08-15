import Link from 'next/link'

export const Logo = () => {
	return (
		<Link href='/'>
			<img src='/logo.svg' alt='Logo' className='max-w-[196px]' />
		</Link>
	)
}
