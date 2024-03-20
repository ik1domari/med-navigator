import React from "react";

export default function FunctionalCard({ index }) {
	return index % 2 !== 0 ? (
		<div className='functional__card'>
			<div className='functional__card__image__frame'>
				<img
					className='functional__card__image'
					src='/functional/1.png'
					alt='Основное меню'
				/>
			</div>
			<div className='functional__card__text'>
				<h3 className='functional__card__text__heading'>
					<span className='functional__card__text__braces'>//</span> Основное
					меню
				</h3>
				<div className='functional__card__text__content'>
					"Для пациентов доступна основная информация о поликлинике в этих
					разделах"
				</div>
			</div>
		</div>
	) : (
		<div className='functional__card'>
			<div className='functional__card__text'>
				<h3 className='functional__card__text__heading'>
					<span className='functional__card__text__braces'>//</span> Основное
					меню
				</h3>
				<div className='functional__card__text__content'>
					"Для пациентов доступна основная информация о поликлинике в этих
					разделах"
				</div>
			</div>
			<div className='functional__card__image__frame'>
				<img
					className='functional__card__image'
					src='/functional/1.png'
					alt='Основное меню'
				/>
			</div>
		</div>
	);
}
