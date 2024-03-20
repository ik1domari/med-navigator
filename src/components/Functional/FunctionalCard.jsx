import React from "react";

export default function FunctionalCard({ index, title, description, image }) {
	return index % 2 !== 0 ? (
		<div className='functional__card'>
			<div className='functional__card__image__frame'>
				<img className='functional__card__image' src={image} alt={title} />
			</div>
			<div className='functional__card__text'>
				<h3 className='functional__card__text__heading'>
					<span className='functional__card__text__braces'>//</span> {title}
				</h3>
				<div className='functional__card__text__content'>{description}</div>
			</div>
		</div>
	) : (
		<div className='functional__card'>
			<div className='functional__card__text'>
				<h3 className='functional__card__text__heading'>
					<span className='functional__card__text__braces'>//</span> {title}
				</h3>
				<div className='functional__card__text__content'>{description}</div>
			</div>
			<div className='functional__card__image__frame'>
				<img className='functional__card__image' src={image} alt={title} />
			</div>
		</div>
	);
}
