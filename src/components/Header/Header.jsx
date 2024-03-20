import React from "react";
import BurgerMenu from "./BurgerMenu";
import HeaderLink from "./HeaderLink";
import { AppContext } from "../../App";

export default function Header() {
	const [burgerOpen, setBurgerOpen] = React.useState(false);
	const { setOpenModal } = React.useContext(AppContext);
	const links = [
		{
			title: "О ПРОДУКТЕ",
			dest: "#about",
			className: "header__navlink",
		},
		{
			title: "ФУНКЦИИ БОТА",
			dest: "#functional",
			className: "header__navlink",
		},
		{
			title: "ЦЕНА",
			dest: "#price",
			className: "header__navlink",
		},
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
							key={element.title}
						/>
					);
				})}
			</nav>
			<button className='header__link' onClick={() => setOpenModal(true)}>
				Контакты
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
			</button>
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
