import React from "react";
import HeaderLink from "./HeaderLink";
import { AppContext } from "../../App";

export default function BurgerMenu({ setBurgerOpen }) {
	const { setOpenModal } = React.useContext(AppContext);
	return (
		<aside className='burger'>
			<div className='burger__content'>
				<button
					onClick={() => {
						setBurgerOpen(false);
					}}
					className='burger__close'
				>
					<svg
						width='18'
						height='6'
						viewBox='0 0 18 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M18 3L13 0.113249V5.88675L18 3ZM0 3.5H13.5V2.5H0V3.5Z'
							fill='white'
						/>
					</svg>
				</button>
				<ul className='burger__list'>
					<li>
						<HeaderLink
							title='О ПРОДУКТЕ'
							dest='#about'
							className='burger__list__link'
						/>
					</li>
					<li>
						<HeaderLink
							title='ФУНКЦИИ БОТА'
							dest='#functional'
							className='burger__list__link'
						/>
					</li>
					<li>
						<HeaderLink
							title='ЦЕНА'
							dest='#price'
							className='burger__list__link'
						/>
					</li>
				</ul>
				<button className='burger__link' onClick={() => setOpenModal(true)}>
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
			</div>
		</aside>
	);
}
