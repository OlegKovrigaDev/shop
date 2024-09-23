import { PageLayoutProps } from '@/types'
import { CrumbsLink } from '../parts'

export const PageLayout = ({
	className,
	loading,
	error,
	left,
	right,
	categoryId,
	product,
}: PageLayoutProps) => {
	return (
		<>
			<CrumbsLink
				isProductPage={true}
				category={product?.params['Приналежність до категорії']}
				title={product?.params.ModelName}
				items={[]}
				categories={{
					id: categoryId,
					category: { name: product?.params['Приналежність до категорії'] },
				}}
			/>
			<div className={`flex justify-between ${className}`}>
				{loading && <>Loading...</>}
				{error && <>Error: {error}</>}
				<div className='w-[905px] flex flex-col gap-6'>{left}</div>
				<div className='w-[305px] flex flex-col gap-6'>{right}</div>
			</div>
		</>
	)
}
