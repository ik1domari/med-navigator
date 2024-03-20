import React from "react";

export default function AdvantageItem({ index, text }) {
	return (
		<div className='advantage'>
			<div className='advantage__number'>{index}</div>
			<div className='advantage__text'>
				<div className='advantage__text__text'>{text}</div>
			</div>
		</div>
	);
}
