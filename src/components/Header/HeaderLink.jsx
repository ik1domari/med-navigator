import React from "react";

export default function HeaderLink({ title, dest, className }) {
	return (
		<a href={dest} className={className}>
			{title}
		</a>
	);
}
