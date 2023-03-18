import React, { useState } from "react";
import "./HomePage.scss";
import mainImg from '../../../../assets/images/main.jpg'
import Movie1 from '../../../../assets/images/Movie1.png'
import Movie2 from '../../../../assets/images/Movie2.png'
import Movie3 from '../../../../assets/images/Movie3.png'
import Movie4 from '../../../../assets/images/Movie4.png'
import Movie5 from '../../../../assets/images/Movie5.png'
import Movie6 from '../../../../assets/images/Movie6.png'
import Top1 from '../../../../assets/images/Top1.png'
import Top2 from '../../../../assets/images/Top2.png'
import Top3 from '../../../../assets/images/Top3.png'
import Top4 from '../../../../assets/images/Top4.png'
import Top5 from '../../../../assets/images/Top5.png'
import Top6 from '../../../../assets/images/Top6.png'
import { Header } from '../../components/HeaderComponent/Header'
import { MovieDetails } from '../../components/MovieDetailsComponent/MovieDetails'
import { SliderBar } from '../../components/SliderBarComponent/SliderBar'

interface IProps {
  msg: string;
}

export const HomePage: React.FC<IProps> = ({ msg }) => {

  const movieIcons = [Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie1, Movie2, Movie3, Movie4, Movie5, Movie6]
  const movieIcons2 = [Movie4, Movie3, Movie6, Movie5, Movie2, Movie1, Movie4, Movie3, Movie6, Movie5, Movie2, Movie1]
  const movieIcons3 = [Movie4, Movie5, Movie1, Movie2, Movie3, Movie6, Movie4, Movie5, Movie1, Movie2, Movie3, Movie6]
  const topIcons = [Top1, Top2, Top3, Top4, Top5, Top6, Top2, Top1, Top3, Top4]
  const topIcons2 = [Top3, Top4, Top2, Top1, Top5, Top6, Top3, Top4, Top2, Top1]

  return (
    <div className="home-page">
      <div className="home-page__content">
        <img className="home-page__main-img" src={mainImg} alt="wednesday movie" />
        <Header />
        <MovieDetails />
        <SliderBar movieIcons={movieIcons} category='Docenione przez krytyków' width='256px' height='164px' showPosition={false} loop={true} />
        <SliderBar movieIcons={movieIcons2} category='Popularne teraz' width='256px' height='164px' showPosition={false} loop={true} />
        <SliderBar movieIcons={movieIcons3} category='Obejrzyj ponownie' width='256px' height='164px' showPosition={false} loop={true} />
        <SliderBar movieIcons={topIcons} category='Top 10 seriali w Polsce dzisiaj' width='auto' height='224px' showPosition={true} loop={false} />
        <SliderBar movieIcons={topIcons2} category='Top 10 seriali w Polsce dzisiaj' width='auto' height='224px' showPosition={true} loop={false} />
      </div>
    </div>
  );
};
