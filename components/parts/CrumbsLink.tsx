'use client'
import { TCrumbs } from '@/types'
import Link from 'next/link'
import React from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '../ui/breadcrumb'

export const CrumbsLink: React.FC<TCrumbs> = ({ categories, items }) => {
	return (
		<Breadcrumb className='py-7'>
			<BreadcrumbList className='text-lg'>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href='/'>Головна</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>
						<BreadcrumbLink asChild>
							<Link href={`/Category/${categories.id}`}>
								{categories.category.name}
							</Link>
						</BreadcrumbLink>
					</BreadcrumbPage>
					{/* <BreadcrumbSeparator /> */}
				</BreadcrumbItem>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href={`/Category/${categories.id}`}>
							{items[1].params.FashionName}
						</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
