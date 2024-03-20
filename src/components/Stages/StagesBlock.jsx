import React from "react";
import first from "../../img/stages/1.svg";

export default function StagesBlock() {
	return (
		<div className='stages__block'>
			<img className='stages__block__img' src={first} alt='1' />
			<div className='stages__block__number'>1</div>
			<div className='stages__block__line'></div>
			<div className='stages__block__text'>
				Изучение организационной структуры
			</div>
		</div>
	);
}
