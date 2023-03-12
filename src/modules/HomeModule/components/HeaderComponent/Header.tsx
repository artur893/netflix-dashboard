import React from "react"
import netflixLogo from '../../../../assets/images/netflix-logo.png'
import './Header.scss'

export const Header: React.FC = () => {

    return (
        <header className="home-page__header"><img src={netflixLogo} alt="logo netflix" /></header>
    )
}