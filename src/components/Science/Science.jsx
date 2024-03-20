import React from "react";
import ScienceBlock from "./ScienceBlock";

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
				<ScienceBlock />
				<ScienceBlock />
				<ScienceBlock />
			</div>
		</section>
	);
}
