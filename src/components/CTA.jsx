import React from "react";
import { AppContext } from "../App";

export default function CTA() {
	const { setOpenModal } = React.useContext(AppContext);
	return (
		<button className='main__btn' onClick={() => setOpenModal(true)}>
			<div>
				ЗАКАЗАТЬ РАЗРАБОТКУ
				<svg
					width='18'
					height='18'
					viewBox='0 0 11 11'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M6.5 1.00012H10V4.50012M10 6.86862V9.25012C10 9.44903 9.92098 9.6398 9.78033 9.78045C9.63968 9.9211 9.44891 10.0001 9.25 10.0001H1.75C1.55109 10.0001 1.36032 9.9211 1.21967 9.78045C1.07902 9.6398 1 9.44903 1 9.25012V1.75012C1 1.55121 1.07902 1.36044 1.21967 1.21979C1.36032 1.07914 1.55109 1.00012 1.75 1.00012H4M5.95 5.05012L9.775 1.22512'
						stroke='#F8F8F8'
						strokeWidth='0.8'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</div>
		</button>
	);
}
