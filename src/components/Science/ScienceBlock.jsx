import React from "react";

export default function ScienceBlock({ number, text, image }) {
	const [active, setActive] = React.useState(false);
	return active ? (
		<div className='science__block --active' onClick={() => setActive(!active)}>
			{text}
		</div>
	) : (
		<div className='science__block' onClick={() => setActive(!active)}>
			{number || <img src={image} alt={text}></img>}
		</div>
	);
}
