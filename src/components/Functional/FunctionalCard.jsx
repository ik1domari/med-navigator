import React from "react";
import { AppContext } from "../../App";

export default function FunctionalCard({
	index,
	title,
	description,
	image,
	thumbs,
}) {
	const { setOpenImage } = React.useContext(AppContext);
	return index % 2 !== 0 ? (
		<div className='functional__card no-select'>
			<div
				className='functional__card__image__frame'
				onClick={() => setOpenImage({ open: true, image: image })}
			>
				<img className='functional__card__image' src={thumbs} alt={title} />
			</div>
			<div className='functional__card__text'>
				<h3 className='functional__card__text__heading'>
					<span className='functional__card__text__braces'>//</span> {title}
				</h3>
				<div className='functional__card__text__content'>{description}</div>
			</div>
		</div>
	) : (
		<div className='functional__card no-select'>
			<div className='functional__card__text'>
				<h3 className='functional__card__text__heading'>
					<span className='functional__card__text__braces'>//</span> {title}
				</h3>
				<div className='functional__card__text__content'>{description}</div>
			</div>
			<div
				className='functional__card__image__frame'
				onClick={() => setOpenImage({ open: true, image: image })}
			>
				<img className='functional__card__image' src={thumbs} alt={title} />
			</div>
		</div>
	);
}
