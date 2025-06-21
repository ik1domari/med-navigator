import React from "react";

export default function StagesBlock({ image, title, index }) {
	return (
		<div className='stages__block'>
			<img className='stages__block__img' src={image} alt={title} />
			<div className='stages__block__number'>{index}</div>
			<div className='stages__block__line'></div>
			<div className='stages__block__text'>{title}</div>
		</div>
	);
}
