import DevBlock from "./DevBlock";
import DevSlide from "./DevSlide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import rightArr from "../../img/right.svg";
import leftArr from "../../img/left.svg";

export default function Development() {
	return (
		<section className='development'>
			<div className='content__functional__head'>
				<h2 id='price' className='content__heading'>
					Разработка чат-бота
					<svg
						width='78'
						height='48'
						viewBox='0 0 78 48'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							x='1'
							y='1'
							width='46'
							height='46'
							stroke='#F1F1F1'
							stroke-width='2'
						/>
						<rect
							x='16'
							y='1'
							width='46'
							height='46'
							stroke='#F1F1F1'
							stroke-width='2'
						/>
						<rect
							x='31'
							y='1'
							width='46'
							height='46'
							stroke='#F1F1F1'
							stroke-width='2'
						/>
						<rect
							x='31'
							y='1'
							width='16'
							height='46'
							fill='#F1F1F1'
							stroke='#F1F1F1'
							stroke-width='2'
						/>
						<rect
							x='1'
							y='1'
							width='46'
							height='46'
							stroke='#F1F1F1'
							stroke-opacity='0.3'
							stroke-width='2'
						/>
						<rect
							x='16'
							y='1'
							width='46'
							height='46'
							stroke='#F1F1F1'
							stroke-opacity='0.3'
							stroke-width='2'
						/>
						<rect
							x='31'
							y='1'
							width='46'
							height='46'
							stroke='#F1F1F1'
							stroke-opacity='0.3'
							stroke-width='2'
						/>
						<rect
							x='30'
							width='18'
							height='48'
							fill='#F1F1F1'
							fill-opacity='0.2'
						/>
						<rect
							x='31'
							y='1'
							width='16'
							height='46'
							stroke='#F1F1F1'
							stroke-opacity='0.3'
							stroke-width='2'
						/>
					</svg>
				</h2>
				<div className='content__note'>
					<div className='content__note__text'>Бесплатно!</div>
					<div className='content__note__img'>
						<svg
							width='57'
							height='57'
							viewBox='0 0 57 57'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 28.5C1 32.1114 1.71131 35.6873 3.09331 39.0238C4.47532 42.3602 6.50095 45.3918 9.05456 47.9454C11.6082 50.499 14.6398 52.5247 17.9762 53.9067C21.3127 55.2887 24.8886 56 28.5 56C32.1114 56 35.6873 55.2887 39.0238 53.9067C42.3602 52.5247 45.3918 50.499 47.9454 47.9454C50.499 45.3918 52.5247 42.3602 53.9067 39.0238C55.2887 35.6873 56 32.1114 56 28.5C56 24.8886 55.2887 21.3127 53.9067 17.9762C52.5247 14.6398 50.499 11.6082 47.9454 9.05456C45.3918 6.50095 42.3602 4.47532 39.0238 3.09331C35.6873 1.71131 32.1114 1 28.5 1C24.8886 1 21.3127 1.71131 17.9762 3.09331C14.6398 4.47532 11.6082 6.50095 9.05456 9.05456C6.50095 11.6082 4.47532 14.6398 3.09331 17.9762C1.71131 21.3127 1 24.8886 1 28.5Z'
								stroke='black'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M10.1641 10.1667L14.7474 14.7501M42.2474 42.2501L46.8307 46.8334'
								stroke='black'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
							<path
								d='M21.9531 33.9999H28.6878M24.198 29.8094V21.8475C24.198 21.4578 24.198 21.263 24.225 21.1016C24.2989 20.6641 24.5195 20.2597 24.8551 19.9465C25.1906 19.6333 25.6239 19.4274 26.0927 19.3584C26.2633 19.3333 26.4743 19.3333 26.8919 19.3333H32.0552C33.5436 19.3333 34.9711 19.8851 36.0236 20.8675C37.0761 21.8498 37.6674 23.1821 37.6674 24.5713C37.6674 25.9606 37.0761 27.2929 36.0236 28.2752C34.9711 29.2576 33.5436 29.8094 32.0552 29.8094H24.198ZM24.198 29.8094V40.2856M24.198 29.8094H21.9531'
								stroke='black'
								stroke-width='1.5'
								stroke-linecap='round'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='development__blocks'>
				<DevBlock
					isBlack={false}
					isIcon={false}
					text='Однако, для обеспечения непрерывной поддержки и развития чат-бота, мы заключаем договор на годовое обслуживание с ежемесячной оплатой от 25 тыс. руб. Это обеспечит Вас:'
				/>
				<Carousel
					className='development__slider'
					infiniteLoop
					swipeable
					emulateTouch
					showThumbs={false}
					showIndicators={false}
					showStatus={false}
					renderArrowPrev={(clickHandler, hasPrev) =>
						hasPrev && (
							<button
								className='development__slider__arrow --left'
								onClick={clickHandler}
							>
								<img src={leftArr} alt='leftArr' />
							</button>
						)
					}
					renderArrowNext={(clickHandler, hasNext) =>
						hasNext && (
							<button
								className='development__slider__arrow --right'
								onClick={clickHandler}
							>
								<img src={rightArr} alt='rightArr' />
							</button>
						)
					}
				>
					<DevSlide
						index={1}
						text='Полной поддержкой: Включает в себя непрерывное техническое обслуживание и обновление функционала, избавляя вас от необходимости держать собственный IT-штат.'
					/>
					<DevSlide
						index={2}
						text='Непрерывному улучшению: Мы регулярно внедряем новые функции, используя лучшие практики и опыт, накопленный в ходе работы с другими организациями.'
					/>
					<DevSlide
						index={3}
						text='Полная ответственность: Мы берем на себя решение всех вопросов, связанных с чат-ботом, включая устранение неполадок и урегулирование споров с пользователями.'
					/>
				</Carousel>
				<DevBlock
					isBlack={true}
					isIcon={true}
					text='В соответствии с данными правилами, наша цель — обеспечить эффективность работы чат-бота в вашей медицинской организации, стремясь к продолжению нашего сотрудничества.'
				/>
			</div>
		</section>
	);
}
