import Header from "./components/Header/Header";
import Functional from "./components/Functional/Functional";
import Advantages from "./components/Advantages/Advantages";
function App() {
	return (
		<>
			<Header />
			<main className='main'>
				<section className='main__background'>
					<h1 className='main__heading'>
						<strong>Наш чат-бот</strong>
						<span className='main__heading__transparent'>
							{" "}
							служит медицинским ассистентом для ваших пациентов.
						</span>
					</h1>
					<button className='main__btn'>
						<div>
							ЗАКАЗАТЬ РАЗРАБОТКУ
							<svg
								width='18'
								height='18'
								viewBox='0 0 11 11'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6.5 1.00012H10V4.50012M10 6.86862V9.25012C10 9.44903 9.92098 9.6398 9.78033 9.78045C9.63968 9.9211 9.44891 10.0001 9.25 10.0001H1.75C1.55109 10.0001 1.36032 9.9211 1.21967 9.78045C1.07902 9.6398 1 9.44903 1 9.25012V1.75012C1 1.55121 1.07902 1.36044 1.21967 1.21979C1.36032 1.07914 1.55109 1.00012 1.75 1.00012H4M5.95 5.05012L9.775 1.22512'
									stroke='#F8F8F8'
									strokeWidth='0.8'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</button>
				</section>
				<div className='main__hand' />
				<section className='content'>
					<div className='content__head'>
						<h2 id='about' className='content__heading'>
							О ПРОДУКТЕ
						</h2>
						<div className='content__head__line' />
						<div className='content__head__copyright'>&copy; 2024</div>
					</div>
					<div className='content__quote'>
						<blockquote>
							"Наш продукт, разработанный практикующими врачами и научными
							сотрудниками, объединяет клинический опыт и передовые научные
							идеи, предлагая инновационное решение исключительно для
							медицинских организаций."
						</blockquote>
						<div className='content__quote__text'>
							Мы строим диалог - <br />
							"Думай, как пациент, отвечай, как медицинский сотрудник"
						</div>
					</div>
					<div className='content__functional'>
						<div className='content__functional__head'>
							<h2 id='functional' className='content__heading'>
								ФУНКЦИОНАЛ В ЧАТ-БОТЕ
								<svg
									viewBox='0 0 25 25'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M1 1L21 20M21 20V1M21 20H1'
										stroke='#EFEFEF'
										strokeWidth='2'
									/>
								</svg>
							</h2>
							<div className='content__note'>
								<div className='content__note__text'>ИНСТРУКЦИЯ</div>
								<div className='content__note__img'>
									<svg
										width='69'
										height='61'
										viewBox='0 0 69 61'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M68.4483 0.645472C68.2279 0.458835 67.9597 0.334808 67.6725 0.286812C67.3854 0.238816 67.0903 0.268679 66.8192 0.37317L2.08326 25.1964C1.42334 25.4474 0.864553 25.9018 0.491137 26.4911C0.117722 27.0804 -0.0500915 27.7726 0.0129913 28.4635C0.0760741 29.1544 0.366634 29.8064 0.840878 30.3214C1.31512 30.8363 1.94735 31.1863 2.64227 31.3185L20.4474 34.7427V54.098C20.4473 54.8468 20.6756 55.5786 21.1031 56.1993C21.5305 56.82 22.1376 57.3014 22.8463 57.5816C23.3024 57.7608 23.7891 57.8533 24.2805 57.8539C24.7949 57.8527 25.3038 57.7501 25.7768 57.5523C26.2499 57.3544 26.6774 57.0653 27.034 56.7021L35.9781 47.6253L49.7137 59.4282C50.41 60.0299 51.3056 60.3636 52.234 60.3672C52.6395 60.3656 53.0424 60.3033 53.4287 60.1825C54.061 59.9864 54.6298 59.6311 55.0783 59.1522C55.5267 58.6732 55.839 58.0874 55.9841 57.4532L68.9594 2.17912C69.0244 1.90211 69.0112 1.61299 68.9211 1.34279C68.8311 1.0726 68.6676 0.831529 68.4483 0.645472ZM2.55922 28.2387C2.54048 28.0873 2.57529 27.9342 2.65783 27.8049C2.74038 27.6756 2.86567 27.578 3.01281 27.5282L58.8015 6.13532L21.428 32.3796L3.13739 28.8616C2.98236 28.8393 2.84 28.7651 2.73457 28.6515C2.62914 28.5379 2.56717 28.392 2.55922 28.2387ZM25.1973 54.9618C25.0207 55.1401 24.7939 55.2629 24.5458 55.3145C24.2977 55.3661 24.0395 55.3442 23.8042 55.2515C23.5689 55.1589 23.367 54.9997 23.2243 54.7943C23.0816 54.5889 23.0045 54.3465 23.0028 54.098V36.4766L34.0488 45.9602L25.1973 54.9618ZM53.4925 56.8836C53.4431 57.0961 53.3379 57.2924 53.1874 57.4528C53.0368 57.6133 52.8461 57.7325 52.6341 57.7986C52.4221 57.8646 52.1961 57.8753 51.9786 57.8296C51.7611 57.7839 51.5595 57.6833 51.3939 57.5378L23.779 33.8099L65.8482 4.2699L53.4925 56.8836Z'
											fill='black'
										/>
									</svg>
								</div>
							</div>
						</div>
						<Functional />
					</div>
					<Advantages />
				</section>
			</main>
		</>
	);
}

export default App;
