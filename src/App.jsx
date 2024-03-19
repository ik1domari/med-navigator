import Header from "./components/Header/Header";
import Functional from "./components/Functional/Functional";
import Advantages from "./components/Advantages/Advantages";
import Development from "./components/Development/Development";
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
					<Functional />
					<Advantages />
					<Development />
				</section>
			</main>
		</>
	);
}

export default App;
