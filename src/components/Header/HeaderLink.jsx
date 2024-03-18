import React from "react";

export default function HeaderLink({ title, dest, className, isIcon }) {
	return (
		<a href={dest} className={className}>
			{title}
			{isIcon && (
				<svg
					width='16'
					height='16'
					viewBox='0 0 22 21'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1 1L21 20M21 20V1M21 20H1'
						stroke='#EFEFEF'
						strokeWidth='2'
					/>
				</svg>
			)}
		</a>
	);
}
