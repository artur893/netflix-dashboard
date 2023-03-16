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
    category: string
}

export const SliderBar: React.FC<SliderBarProps> = ({ movieIcons, category }) => {

    return (
        <section className='slider-bar'>
            <div className='slider-bar__info'>
                <h2 className='slider-bar__category'>{category}</h2>
                <Link to='#'><span className='slider-bar__see-more'>Zobacz wszystkie <img src={arrowIcon} alt="arrow" className='slider-bar__arrow' /></span></Link>
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={8}
                loop={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                className='slider-bar__swiper'
            >
                {movieIcons.map((icon, i) => (
                    <SwiperSlide key={i} style={{ width: '256px' }} className='slider-bar__slide'><img src={icon} className='slider-bar__image' /></SwiperSlide>
                ))}
                {movieIcons.map((icon, i) => (
                    <SwiperSlide key={i} style={{ width: '256px' }} className='slider-bar__slide'><img src={icon} className='slider-bar__image' /></SwiperSlide>
                ))}
                <div className="slider-bar__navigation next"><img src={arrowIcon} /></div>
                <div className="slider-bar__navigation prev"><img src={arrowIcon} /></div>
            </Swiper>
        </section >
    )
}