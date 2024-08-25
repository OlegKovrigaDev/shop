import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'

export const ModalPage = () => {
	const [open, setOpen] = useState(false)

	const onOpenModal = () => setOpen(true)
	const onCloseModal = () => setOpen(false)
	return (
		<div>
			<button onClick={onOpenModal} className='flex flex-col items-center'>
				<ShoppingCart />
				<span className='text-xs'>Кошик</span>
			</button>
			<Modal open={open} onClose={onCloseModal} center>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
					hendrerit risus, sed porttitor quam.
				</p>
			</Modal>
		</div>
	)
}
