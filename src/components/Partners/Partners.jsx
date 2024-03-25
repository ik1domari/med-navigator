import React from "react";
import Partner from "./Partner";

export default function Partners() {
	return (
		<section className='partners'>
			<div className='content__functional__head'>
				<h2 id='partners' className='content__heading'>
					Наши партнёры
				</h2>
			</div>
			<div className='partners__cards'>
				<Partner
					title='«Фонд содействия развитию малых форм предприятий в научно-технической сфере»'
					image='/partners/fsi.webp'
				/>
				<Partner
					title='ФГБОУ ВО Тюменский ГМУ
Минздрава России'
					image='/partners/tmu.webp'
				/>
				<Partner
					title='ГАУЗ ТО «Городская поликлиника No 5»'
					image='/partners/sz.webp'
				/>
			</div>
		</section>
	);
}
