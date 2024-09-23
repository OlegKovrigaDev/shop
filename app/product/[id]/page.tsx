'use client'

import { CrumbsLink, FilterAccordion } from '@/components/parts'
import { PageLayout } from '@/components/sections'
import { useProductPageData } from '@/hooks'
import { ProductPageProps } from '@/types'

export default function ProductPage({
	params,
	searchParams,
}: ProductPageProps) {
	const { id } = params
	const categoryId = searchParams.categoryId

	const { product, loading, error } = useProductPageData(id)

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
			<PageLayout
				loading={loading}
				error={error}
				right={
					<>
						<FilterAccordion title='Варіанти товару'></FilterAccordion>
						<FilterAccordion title='Наявність в магазинах'></FilterAccordion>
						<FilterAccordion title='Доставка'></FilterAccordion>
						<FilterAccordion title='Оплата'></FilterAccordion>
						<FilterAccordion title='Гарантія та повернення'></FilterAccordion>
					</>
				}
				left={<>Left</>}
			/>
		</>
	)
}
