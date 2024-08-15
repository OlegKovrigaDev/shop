import { FC, ReactNode } from 'react'

type TTitle = {
	children: ReactNode
}

export const Title: FC<TTitle> = ({ children }) => (
	<h2 className='font-semibold text-[40px] text-[#100C1F] mb-10'>{children}</h2>
)
