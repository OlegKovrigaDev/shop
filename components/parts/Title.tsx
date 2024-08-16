import { TTitle } from '@/types'
import { FC } from 'react'

export const Title: FC<TTitle> = ({ children }) => (
	<h2 className='font-semibold text-[40px] text-[#100C1F] mb-10'>{children}</h2>
)
