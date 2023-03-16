import React from "react"
import { Link } from "react-router-dom"
import wednesdayImg from '../../../../assets/images/wednesday.png'
import playIcon from '../../../../assets/images/play.svg'
import infoIcon from '../../../../assets/images/info-circle.svg'
import { ButtonGlobalComponent } from "@/global-components/ButtonGlobalComponent/ButtonGlobalComponent"
import './MovieDetails.scss'

export const MovieDetails: React.FC = () => {

    return (
        <section className="movie-details">
            <div className="movie-details__top">
                <div className="movie-details__top-10">
                    <div className="movie-details__high">TOP</div>
                    <div className="movie-details__low">10</div>
                </div>
                <div className="movie-details__title">Nr 5 wśród seriali dzisiaj</div>
            </div>
            <img className="movie-details__image" src={wednesdayImg} alt='wednesday'></img>
            <p className="movie-details__description">Makabrycznie bystra i sarkastyczna Wednesday Addams
                prowadzi śledztwo w sprawie serii zabójstw, przysparzając sobie
                nowych przyjaciół i wrogów w Akademii Nevermore.</p>
            <div className="movie-details__buttons">
                <Link to='#'><ButtonGlobalComponent text="Odtwórz" icon={playIcon} className='play' /> </Link>
                <Link to='#'><ButtonGlobalComponent text="Więcej informacji" icon={infoIcon} className='more-info' /></Link>
            </div>
        </section >
    )
}