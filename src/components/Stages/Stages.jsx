import React from "react";
import StagesBlock from "./StagesBlock";
import CTA from "../CTA";

export default function Stages() {
	return (
		<section className='stages'>
			<div className='content__head'>
				<h2 id='stages' className='content__heading'>
					Этапы разработки
				</h2>
				<div className='content__head__line' />
				<div className='content__note'>
					<div className='content__note__text'>Прокрути</div>
				</div>
			</div>
			<div className='stages__blocks'>
				<StagesBlock
					index={1}
					title='Изучение организационной структуры'
					image='/stages/1.svg'
				/>
				<StagesBlock
					index={2}
					title='Сбор данных о функционировании медицинской организации.'
					image='/stages/2.svg'
				/>
				<StagesBlock
					index={3}
					title='Создание первоначального образца чат-бота.'
					image='/stages/3.svg'
				/>
				<StagesBlock
					index={4}
					title='Проведение испытаний разработанного продукта.'
					image='/stages/4.svg'
				/>
				<StagesBlock
					index={5}
					title='Официальный запуск чат-бота в эксплуатацию'
					image='/stages/5.svg'
				/>
			</div>
			<CTA />
		</section>
	);
}
