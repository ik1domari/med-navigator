import React from "react";

export default function Header() {
	return (
		<header className='header'>
			<h1 className='header__logo'>МЕДИЦИНСКИЙ НАВИГАТОР</h1>
			<nav className='header__nav'>
				<a href='#' className='header__navlink'>
					О ПРОДУКТЕ
				</a>
				<a href='#' className='header__navlink'>
					ФУНКЦИИ БОТА
				</a>
				<a href='#' className='header__navlink'>
					ЦЕНА
				</a>
			</nav>
			<a href='#' className='header__link'>
				КОНТАКТЫ
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
			</a>
		</header>
	);
}
