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
import ImageModal from "./components/ImageModal";
import OrderModal from "./components/OrderModal";

export const AppContext = createContext({});

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openImage, setOpenImage] = useState({ open: false, image: "" });
  const [openOrder, setOpenOrder] = useState(false);
  const year = new Date().getFullYear();
  if (openModal || openImage.open || openOrder) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <AppContext.Provider
      value={{
        setOpenModal,
        setOpenImage,
        openModal,
        openImage,
        openOrder,
        setOpenOrder,
      }}
    >
      {openModal && <ContactModal />}
      {openImage.open && <ImageModal image={openImage.image} />}
      {openOrder && <OrderModal />}
      <Header />
      <main className="main">
        <section className="main__background"></section>
        <h1 className="main__heading">
          <strong>Наш чат-бот</strong>{" "}
          <span className="main__heading__transparent">
            служит медицинским ассистентом для ваших пациентов
          </span>
        </h1>
        <div className="main__btn__container">
          <CTA />
          <a
            href="https://t.me/SemGptPedBot"
            className="main__btn"
            target="_blank"
          >
            <div>ПРИМЕР ПРОДУКТА</div>
          </a>
        </div>
        <div className="main__hand" />
        <section className="content">
          <div className="content__head">
            <h2 id="about" className="content__heading">
              О ПРОДУКТЕ
            </h2>
            <div className="content__head__line" />
            <div className="content__head__copyright">&copy; {year}</div>
          </div>
          <div className="content__quote">
            <blockquote>
              &quot;Наш продукт, разработанный практикующими врачами и научными
              сотрудниками, объединяет клинический опыт и передовые научные
              идеи, предлагая инновационное решение исключительно для
              медицинских организаций.&quot;
            </blockquote>
            <div className="content__quote__text">
              Мы строим диалог - <br />
              &quot;Думай, как пациент, отвечай, как медицинский сотрудник&quot;
            </div>
            <div className="content__quote__partner">
              <img
                className="content__quote__partner__img"
                src="/partners/fsi.webp"
                alt="logo"
              />
              <span className="content__quote__partner__text">
                Проект создан при поддержке Федерального государственного
                бюджетного учреждения Фонд содействия развитию малых форм
                предприятий в научно-технической сфере в рамках программы
                &quot;Студенческий стартап&quot; федерального проекта
                &quot;Платформа университетского технологического
                предпринимательства&quot;
              </span>
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
