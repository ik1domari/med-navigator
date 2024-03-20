import React from "react";
import ScienceBlock from "./ScienceBlock";
import cup from "../../img/cup.svg";

export default function Science() {
	return (
		<section className='science'>
			<div className='content__functional__head'>
				<h2 id='science' className='content__heading'>
					Научный задел
				</h2>
				<div className='content__head__line' />
				<div className='content__note'>
					<div className='content__note__text'>ПРЕИМУЩЕСТВА</div>
				</div>
			</div>
			<div className='science__blocks'>
				<ScienceBlock
					number='13+'
					text='Более 13 научных работ и регистраций ЭВМ'
				/>
				<ScienceBlock
					number='3+'
					text='Свыше трех лет исследований в области информирования пациентов'
				/>
				<ScienceBlock
					image={cup}
					text='Победители грантов, акселераторов и научных конференций'
				/>
			</div>
		</section>
	);
}
