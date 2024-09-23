'use client'
import {
	CrumbsLink,
	FilterAccordionList,
	ProductCardList,
} from '@/components/parts'
import { PageLayout } from '@/components/sections'
import { useCategoryPageData } from '@/hooks'
import { CategoryPageProps } from '@/types'

export default function CategoryPage({ params }: CategoryPageProps) {
	const { id } = params

	const { categoryDetails, items, loading, error } = useCategoryPageData(id)

	return (
		<div className='mb-16'>
			{categoryDetails && (
				<CrumbsLink
					category={categoryDetails.name}
					isProductPage={false}
					title=''
					items={[]}
				/>
			)}
			<PageLayout
				loading={loading}
				error={error}
				right={<FilterAccordionList />}
				left={<ProductCardList items={items} id={id} />}
				className='flex-row-reverse'
			/>
		</div>
	)
}
