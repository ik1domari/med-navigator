import React from "react";
import BurgerMenu from "./BurgerMenu";
import HeaderLink from "./HeaderLink";

export default function Header() {
	const [burgerOpen, setBurgerOpen] = React.useState(false);
	const links = [
		{
			title: "О ПРОДУКТЕ",
			dest: "#about",
			className: "header__navlink",
			isIcon: false,
		},
		{
			title: "ФУНКЦИИ БОТА",
			dest: "#functional",
			className: "header__navlink",
			isIcon: false,
		},
		{ title: "ЦЕНА", dest: "#", className: "header__navlink", isIcon: false },
	];
	return (
		<header className='header'>
			<h1 className='header__logo'>МЕДИЦИНСКИЙ НАВИГАТОР</h1>
			<nav className='header__nav'>
				{links.map((element) => {
					return (
						<HeaderLink
							title={element.title}
							dest={element.dest}
							className={element.className}
							isIcon={element.isIcon}
							key={element.title}
						/>
					);
				})}
			</nav>
			<HeaderLink
				title='КОНТАКТЫ'
				dest='#'
				className='header__link'
				isIcon={true}
			/>
			{!burgerOpen && (
				<button onClick={() => setBurgerOpen(true)} className='header__burger'>
					<svg
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						width='50px'
						height='50px'
						viewBox='0 0 24 24'
						aria-labelledby='hamburgerIconTitle'
						stroke='#fff'
						strokeWidth='1.8'
						strokeLinecap='square'
						strokeLinejoin='miter'
						fill='none'
						color='#fff'
					>
						{" "}
						<title id='hamburgerIconTitle'>Menu</title>{" "}
						<path d='M6 7L18 7M6 12L18 12M6 17L18 17' />{" "}
					</svg>
				</button>
			)}
			{burgerOpen && <BurgerMenu setBurgerOpen={setBurgerOpen} />}
		</header>
	);
}
