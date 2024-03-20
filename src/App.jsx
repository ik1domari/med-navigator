import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import Functional from "./components/Functional/Functional";
import Advantages from "./components/Advantages/Advantages";
import Development from "./components/Development/Development";
import Science from "./components/Science/Science";
import Stages from "./components/Stages/Stages";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA";
import ContactModal from "./components/ContactModal";

export const AppContext = createContext({});
function App() {
	const [openModal, setOpenModal] = useState(false);
	return (
		<AppContext.Provider value={{ setOpenModal }}>
			{openModal && <ContactModal />}
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
					<div className='main__btn__container'>
						<CTA />
					</div>
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
					<Science />
					<Stages />
					<Partners />
					<Footer />
				</section>
			</main>
		</AppContext.Provider>
	);
}

export default App;
