import { RootState } from '@/lib/store'
import { TCategory } from '@/types'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from './useActions'

export const useCategoryPageData = (id: string) => {
	const { categoryById, categoryItemsById } = useActions()
	const { categoryDetails, items, loading, error } = useSelector(
		(state: RootState) => state.categories
	)

	const [data, setData] = useState({
		categoryDetails: null as TCategory | null,
		items: [],
		loading: false,
		error: null,
	})

	useEffect(() => {
		categoryById(id)
		categoryItemsById(id)
	}, [id, categoryById, categoryItemsById])

	useEffect(() => {
		setData({
			categoryDetails,
			items,
			loading,
			error,
		})
	}, [categoryDetails, items, loading, error])

	return data
}
