import { PageLayoutProps } from '@/types'

export const PageLayout = ({
	className,
	loading,
	error,
	left,
	right,
}: PageLayoutProps) => {
	return (
		<div className={`flex justify-between ${className}`}>
			{loading && <>Loading...</>}
			{error && <>Error: {error}</>}
			<div className='w-[905px] flex flex-col gap-6'>{left}</div>
			<div className='w-[305px] flex flex-col gap-6'>{right}</div>
		</div>
	)
}
