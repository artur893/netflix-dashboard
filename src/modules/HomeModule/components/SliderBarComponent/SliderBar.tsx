import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"
import arrowIcon from '../../../../assets/images/arrow-down.svg'
import './SliderBar.scss'
import "swiper/css";

interface SliderBarProps {
    movieIcons: string[];
    category: string
}

export const SliderBar: React.FC<SliderBarProps> = ({ movieIcons, category }) => {

    return (
        <section className='slider-bar'>
            <div className='slider-bar__info'>
                <h2 className='slider-bar__category'>{category}</h2>
                <span className='slider-bar__see-more'>Zobacz wszystkie <img src={arrowIcon} alt="arrow" className='slider-bar__arrow' /></span>
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={8}
                loop={true}
                className='slider-bar__swiper'
            >
                {movieIcons.map((icon, i) => (
                    <SwiperSlide key={i} style={{ width: '256px' }} className='slider-bar__slide'><img src={icon} className='slider-bar__image' /></SwiperSlide>
                ))}
                {movieIcons.map((icon, i) => (
                    <SwiperSlide key={i} style={{ width: '256px' }} className='slider-bar__slide'><img src={icon} className='slider-bar__image' /></SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}