import React from "react";
import { AppContext } from "../App";

export default function ImageModal({ image }) {
	const { setOpenImage } = React.useContext(AppContext);
	return (
		<div className='modal' onClick={() => setOpenImage({ open: false })}>
			<div className='modal__content' onClick={(e) => e.stopPropagation()}>
				<svg
					onClick={() => setOpenImage({ open: false })}
					className='modal__close'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					width='48px'
					height='48px'
					viewBox='0 0 24 24'
					aria-labelledby='closeIconTitle'
					stroke='#dedede'
					strokeWidth='1'
					strokeLinecap='square'
					strokeLinejoin='miter'
					fill='none'
					color='#dedede'
				>
					<path d='M6.34314575 6.34314575L17.6568542 17.6568542M6.34314575 17.6568542L17.6568542 6.34314575' />{" "}
				</svg>
				<img src={image} alt='image' className='modal__image' />
			</div>
		</div>
	);
}
