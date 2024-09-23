import { RootState } from '@/lib/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from './useActions'

export const useProductPageData = (id: string) => {
	const { getProductByOfferId } = useActions()
	const { product, loading, error } = useSelector(
		(state: RootState) => state.product
	)

	const [data, setData] = useState({
		product: null,
		loading: false,
		error: null,
	})

	useEffect(() => {
		getProductByOfferId(id)
	}, [id, getProductByOfferId])

	useEffect(() => {
		setData({
			product,
			loading,
			error,
		})
	}, [product, loading, error])

	return data
}
