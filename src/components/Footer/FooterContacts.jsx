import React from "react";

export default function FooterContacts({ isInFooter }) {
	return (
		<div className='footer__container'>
			{isInFooter && (
				<>
					{" "}
					<a
						href='https://github.com/mikrocosmos'
						target='_blank'
						className='footer__btn'
					>
						dev
					</a>
					<button
						className='footer__btn'
						onClick={() => window.scrollTo(scrollX, 0)}
					>
						Вернуться
						<svg
							width='25'
							height='25'
							viewBox='0 0 25 25'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 23L24 1M24 1V23M24 1H1'
								stroke='#F4F4F4'
								stroke-width='2'
							/>
						</svg>
					</button>
				</>
			)}
			<a href='tel:+7 (912) 996 88-34' className='footer__btn'>
				+7 (912) 996 88-34
			</a>
			<a href='mailto:smilyanin@mail.ru' className='footer__btn'>
				smilyanin@mail.ru
			</a>
			<a href='https://t.me/smilyanin' target='_blank' className='footer__btn'>
				{/* Telegram */}
				<svg
					className='footer__btn__social'
					width='34'
					height='30'
					viewBox='0 0 34 30'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M34 0L0 12.5L9.71429 17.5L24.2857 7.5L14.5714 20L29.1429 30L34 0Z'
						fill='white'
					/>
				</svg>
			</a>
			<a
				href='https://vk.com/id40931989'
				target='_blank'
				className='footer__btn'
			>
				{/* VK */}
				<svg
					className='footer__btn__social'
					width='32'
					height='19'
					viewBox='0 0 32 19'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M30.7141 18.9985H27.2104C25.8853 18.9985 25.4861 17.9258 23.1108 15.5503C21.035 13.5508 20.1583 13.3022 19.6332 13.3022C18.9069 13.3022 18.7089 13.5017 18.7089 14.5007V17.6496C18.7089 18.5013 18.4325 19 16.2061 19C14.0463 18.855 11.9518 18.1992 10.0952 17.0866C8.23861 15.9741 6.67304 14.4366 5.52744 12.6009C2.8073 9.21718 0.914649 5.24582 0 1.00262C0 0.477797 0.199602 0.00208211 1.20068 0.00208211H4.70139C5.60114 0.00208211 5.92511 0.402604 6.27825 1.32795C7.97794 6.32756 10.8783 10.6765 12.056 10.6765C12.5074 10.6765 12.7039 10.477 12.7039 9.35219V4.20219C12.555 1.85277 11.3067 1.65481 11.3067 0.80466C11.3225 0.580369 11.4251 0.371066 11.5928 0.221208C11.7606 0.071349 11.9801 -0.00725849 12.2049 0.00208211H17.7078C18.4601 0.00208211 18.7089 0.376516 18.7089 1.27577V8.22735C18.7089 8.97775 19.0313 9.22635 19.2585 9.22635C19.7099 9.22635 20.0569 8.97775 20.8845 8.15216C22.6584 5.98993 24.1077 3.58095 25.1867 1.00108C25.2971 0.691337 25.5059 0.426197 25.7812 0.246104C26.0565 0.0660117 26.3831 -0.0191475 26.7114 0.00361656H30.2136C31.2638 0.00361656 31.4864 0.528438 31.2638 1.27731C29.99 4.12917 28.4139 6.83627 26.5624 9.35219C26.1847 9.92765 26.0342 10.2269 26.5624 10.9021C26.9094 11.4269 28.1377 12.452 28.9623 13.4265C30.1629 14.6234 31.1594 16.0076 31.9133 17.5237C32.2142 18.4997 31.7137 18.9985 30.7141 18.9985Z'
						fill='white'
					/>
				</svg>
			</a>
		</div>
	);
}
