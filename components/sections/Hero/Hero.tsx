import { SideBar } from './SideBar'
import { Slider } from './Slider'

export const Hero = () => {
	return (
		<section className='mt-8 flex justify-between max-h-[432px]'>
			<div className='overflow-y-scroll min-w-72'>
				<SideBar openSidebar />
			</div>
			<Slider />
		</section>
	)
}
