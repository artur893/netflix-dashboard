import React, { useState } from "react";
import "./HomePage.scss";
import mainImg from '../../../../assets/images/main.jpg'
import Movie1 from '../../../../assets/images/Movie1.png'
import Movie2 from '../../../../assets/images/Movie2.png'
import Movie3 from '../../../../assets/images/Movie3.png'
import Movie4 from '../../../../assets/images/Movie4.png'
import Movie5 from '../../../../assets/images/Movie5.png'
import Movie6 from '../../../../assets/images/Movie6.png'
import { Header } from '../../components/HeaderComponent/Header'
import { MovieDetails } from '../../components/MovieDetailsComponent/MovieDetails'
import { SliderBar } from '../../components/SliderBarComponent/SliderBar'

interface IProps {
  msg: string;
}

export const HomePage: React.FC<IProps> = ({ msg }) => {

  const movieIcons = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6]

  return (
    <div className="home-page">
      <div className="home-page__content">
        <img className="home-page__main-img" src={mainImg} alt="wednesday movie" />
        <Header />
        <MovieDetails />
        <SliderBar movieIcons={movieIcons} category='Docenione przez krytyków' />
        <SliderBar movieIcons={movieIcons} category='Popularne teraz' />
        <SliderBar movieIcons={movieIcons} category='Obejrzyj ponownie' />
      </div>
    </div>
  );
};
