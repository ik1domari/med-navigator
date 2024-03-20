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
				<StagesBlock />
				<StagesBlock />
				<StagesBlock />
				<StagesBlock />
				<StagesBlock />
			</div>
			<CTA />
		</section>
	);
}
