import React from "react";

export default function DevBlock({ isBlack }) {
	const noteClass = "development__block__note";
	const noteClassBlack = " development__block__note--black";
	return (
		<div className='development__block'>
			<div className={isBlack ? noteClass + noteClassBlack : noteClass}>!</div>
			<div className='development__block__text'>
				Однако, для обеспечения непрерывной поддержки и развития чат-бота, мы
				заключаем договор на годовое обслуживание с ежемесячной оплатой от 25
				тыс. руб. Это обеспечит Вас:
			</div>
		</div>
	);
}
