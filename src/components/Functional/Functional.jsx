import React from "react";
import FunctionalCard from "./FunctionalCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Functional() {
	return (
		<section className='content__functional'>
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
			<div className='content__functional__cards'>
				<Carousel
					infiniteLoop
					showThumbs={false}
					showIndicators={false}
					showStatus={false}
					swipeable
					emulateTouch
					renderArrowNext={(clickHandler, hasNext) =>
						hasNext && (
							<button onClick={clickHandler} className='functional__btn'>
								Смотреть далее
								<svg
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									aria-labelledby='arrowRightIconTitle'
									stroke='#efefef'
									strokeWidth='2'
									strokeLinecap='square'
									strokeLinejoin='miter'
									fill='none'
									color='#efefef'
								>
									{" "}
									<path d='M15 18l6-6-6-6' /> <path d='M3 12h17' />{" "}
									<path strokeLinecap='round' d='M21 12h-1' />{" "}
								</svg>
							</button>
						)
					}
					renderArrowPrev={() => <></>}
				>
					<>
						<FunctionalCard
							index={1}
							title='Основное меню'
							description='Для пациентов доступна основная информация о поликлинике в этих разделах'
							image='/functional/1.webp'
							thumbs='/functional/1.webp'
						/>
						<FunctionalCard
							index={2}
							title='Расписание подразделений'
							description='Пример получения информации о работе "Доврачебного кабинета"'
							image='/functional/2.gif'
							thumbs='/functional/2.webp'
						/>
						<FunctionalCard
							index={3}
							title='Получение документов'
							description='Эта функция предлагает пользователям чат-бота краткие и понятные пошаговые инструкции для получения медицинских справок или карт.'
							image='/functional/3.gif'
							thumbs='/functional/3.webp'
						/>
					</>
					<>
						<FunctionalCard
							index={4}
							title='Подписка на врача'
							description='Эта функция позволяет пользователям быстро получать информацию о графике работы их участкового врача.'
							image='/functional/4.webp'
							thumbs='/functional/4.webp'
						/>
						<FunctionalCard
							index={5}
							title='Узнать, кто ваш врач'
							description='Поиск участкового врача по адресу для быстрого определения и подписки на обновления.'
							image='/functional/5.gif'
							thumbs='/functional/5.webp'
						/>
						<FunctionalCard
							index={6}
							title='Рассылка уведомлений'
							description='Чат-бот отправляет сообщения подписчикам участкового врача для информирования о новостях, изменениях и предложениях.'
							image='/functional/6.webp'
							thumbs='/functional/6.webp'
						/>
					</>
					<>
						<FunctionalCard
							index={7}
							title='Форма обратной связи'
							description='Пользователи чат-бота могут направлять свои жалобы и предложения непосредственно оператору поликлиники'
							image='/functional/7.webp'
							thumbs='/functional/7.webp'
						/>
						<FunctionalCard
							index={8}
							title='Запись или вызов врача'
							description='Функция предлагает удобные варианты записи на приём к врачу или вызова врача на дом.'
							image='/functional/8.webp'
							thumbs='/functional/8.webp'
						/>
						<FunctionalCard
							index={9}
							title='Раздел профилактик'
							description='Этот раздел чат-бота предоставляет лёгкую и достоверную информацию о профилактике заболеваний на основе клинических рекомендаций.'
							image='/functional/9.gif'
							thumbs='/functional/9.webp'
						/>
					</>
				</Carousel>
			</div>
		</section>
	);
}
