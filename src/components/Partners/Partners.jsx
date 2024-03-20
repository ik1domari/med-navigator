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
				<Partner />
				<Partner />
				<Partner />
			</div>
		</section>
	);
}
