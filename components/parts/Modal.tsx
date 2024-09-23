'use client'

import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export interface ModalProps {
	children?: React.ReactNode
	show: boolean
	onClose: () => void
}

export function Modal({ show, children, onClose }: ModalProps) {
	return (
		<Transition.Root as={Fragment} show={show} appear>
			<Dialog
				as='div'
				className='fixed inset-0 z-50 flex items-center justify-center'
				onClose={onClose}
			>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div
						className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
						aria-hidden='true'
					/>
				</Transition.Child>

				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0 scale-95'
					enterTo='opacity-100 scale-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100 scale-100'
					leaveTo='opacity-0 scale-95'
				>
					<Dialog.Panel className='relative bg-white rounded-lg shadow-xl transform transition-all mx-auto w-full h-full sm:my-10 sm:w-full sm:max-w-2xl sm:h-auto sm:p-28'>
						{children}
					</Dialog.Panel>
				</Transition.Child>
			</Dialog>
		</Transition.Root>
	)
}
