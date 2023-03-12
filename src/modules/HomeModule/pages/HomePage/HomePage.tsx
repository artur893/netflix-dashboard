import React, { useState } from "react";
import "./HomePage.scss";
import mainImg from '../../../../assets/images/main.jpg'
import { Header } from '../../components/HeaderComponent/Header'
import { MovieDetails } from '../../components/MovieDetailsComponent/MovieDetails'

interface IProps {
  msg: string;
}

export const HomePage: React.FC<IProps> = ({ msg }) => {

  return (
    <div className="home-page">
      <div className="home-page__content">
        <img className="home-page__main-img" src={mainImg} alt="wednesday movie" />
        <Header />
        <MovieDetails />
      </div>
    </div>
  );
};
