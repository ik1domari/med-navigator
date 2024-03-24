import React from "react";

export default function DevSlide({ index, text }) {
	return (
		<div className='development__block no-select'>
			<div className='development__block__note--black development__block__note'>
				{index}
			</div>
			<div className='development__block__text'>{text}</div>
		</div>
	);
}
