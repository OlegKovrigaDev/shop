'use client'
import { FilterAccordionList, ProductCardList } from '@/components/parts'
import { PageLayout } from '@/components/sections'
import { useCategoryPageData, useProductPageData } from '@/hooks'
import { CategoryPageProps } from '@/types'

export default function CategoryPage({
	params,
	searchParams,
}: CategoryPageProps) {
	const { id } = params
	const categoryId = searchParams.categoryId

	const { categoryDetails, items, loading, error } = useCategoryPageData(id)
	const { product } = useProductPageData(id)
	return (
		<div className='mb-16'>
			<PageLayout
				loading={loading}
				error={error}
				right={<FilterAccordionList />}
				left={<ProductCardList items={items} id={id} />}
				className='flex-row-reverse'
				product={product}
				categoryId={categoryId}
			/>
		</div>
	)
}
