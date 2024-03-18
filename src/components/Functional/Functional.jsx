import React from "react";
import FunctionalCard from "./FunctionalCard";

export default function Functional() {
	return (
		<div className='content__functional__cards'>
			<FunctionalCard index={1} />
			<FunctionalCard index={2} />
			<FunctionalCard index={3} />
			<button className='functional__btn'>
				СМОТРЕТЬ ДАЛЕЕ
				<svg
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					aria-labelledby='arrowRightIconTitle'
					stroke='#efefef'
					strokeWidth='2'
					strokeLinecap='square'
					strokeLinejoin='miter'
					fill='none'
					color='#efefef'
				>
					{" "}
					<path d='M15 18l6-6-6-6' /> <path d='M3 12h17' />{" "}
					<path strokeLinecap='round' d='M21 12h-1' />{" "}
				</svg>
			</button>
		</div>
	);
}
