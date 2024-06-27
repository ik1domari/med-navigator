import React from "react";

export default function DevBlock({ isBlack, isIcon, text }) {
	const noteClass = "development__block__note";
	const noteClassBlack = " development__block__note--black";
	return (
		<div className='development__block'>
			<div className={isBlack ? noteClass + noteClassBlack : noteClass}>
				{isIcon ? (
					<svg
						width='46'
						height='76'
						viewBox='0 0 46 76'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M2 45.2L26.5 2V30.8H44L19.5 74V45.2H2Z'
							stroke='#F8F8F8'
							strokeWidth='3'
							strokeLinejoin='round'
						/>
					</svg>
				) : (
					"!"
				)}
			</div>
			<div className='development__block__text'>{text}</div>
		</div>
	);
}
