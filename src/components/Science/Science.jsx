import React from "react";
import ScienceBlock from "./ScienceBlock";
import cup from "../../img/cup.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import rightArr from "../../img/right.svg";
import leftArr from "../../img/left.svg";

export default function Science() {
	return (
		<section className='science'>
			<div className='content__functional__head'>
				<h2 id='science' className='content__heading'>
					Научный задел
				</h2>
				<div className='content__head__line' />
				<div className='content__note'>
					<div className='content__note__text'>Преимущества</div>
				</div>
			</div>

			{document.documentElement.clientWidth >= 676 ? (
				<div className='science__blocks'>
					<ScienceBlock
						number='13+'
						text='Более 13 научных работ и регистраций ЭВМ'
					/>
					<ScienceBlock
						number='3+'
						text='Свыше трех лет исследований в области информирования пациентов'
					/>
					<ScienceBlock
						image={cup}
						text='Победители грантов, акселераторов и научных конференций'
					/>
				</div>
			) : (
				<Carousel
					className='science__blocks'
					infiniteLoop
					swipeable
					emulateTouch
					showThumbs={false}
					showIndicators={false}
					showStatus={false}
					renderArrowPrev={(clickHandler, hasPrev) =>
						hasPrev && (
							<button
								className='development__slider__arrow --science --left'
								onClick={clickHandler}
							>
								<img src={leftArr} alt='leftArr' />
							</button>
						)
					}
					renderArrowNext={(clickHandler, hasNext) =>
						hasNext && (
							<button
								className='development__slider__arrow --science --right'
								onClick={clickHandler}
							>
								<img src={rightArr} alt='rightArr' />
							</button>
						)
					}
				>
					<ScienceBlock
						number='13+'
						text='Более 13 научных работ и регистраций ЭВМ'
					/>
					<ScienceBlock
						number='3+'
						text='Свыше трех лет исследований в области информирования пациентов'
					/>
					<ScienceBlock
						image={cup}
						text='Победители грантов, акселераторов и научных конференций'
					/>
				</Carousel>
			)}
		</section>
	);
}
