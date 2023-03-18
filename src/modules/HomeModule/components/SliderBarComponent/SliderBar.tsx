import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"
import arrowIcon from '../../../../assets/images/arrow-down.svg'
import './SliderBar.scss'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

interface SliderBarProps {
    movieIcons: string[];
    category: string,
    width: string,
    height: string,
    showPosition: boolean,
    loop: boolean
}

export const SliderBar: React.FC<SliderBarProps> = ({ movieIcons, category, width, height, showPosition, loop }) => {

    return (
        <section className='slider-bar'>
            <div className='slider-bar__info'>
                <h2 className='slider-bar__category'>{category}</h2>
                {showPosition || <Link to='#'><span className='slider-bar__see-more'>Zobacz wszystkie <img src={arrowIcon} alt="arrow" className='slider-bar__arrow' /></span></Link>}
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={8}
                loop={loop}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                className='slider-bar__swiper'
            >
                {movieIcons.map((icon, i) => {
                    if (!showPosition) {
                        return (
                            <SwiperSlide key={i} style={{ width: width, height: height }} className='slider-bar__slide'><img src={icon} className='slider-bar__image' /></SwiperSlide>
                        )
                    } else {
                        return (
                            <SwiperSlide key={i} style={{ width: width, height: height }} className='slider-bar__slide'>
                                <div className="slider-bar__position">{i + 1}</div>
                                <img src={icon} style={{ margin: '0px 45px 0px 0px' }} className='slider-bar__image' />
                            </SwiperSlide>
                        )
                    }

                })}
                <div className="slider-bar__navigation next"><img src={arrowIcon} /></div>
                <div className="slider-bar__navigation prev"><img src={arrowIcon} /></div>
            </Swiper>
        </section >
    )
}