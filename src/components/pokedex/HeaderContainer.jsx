import React from 'react'
import './style/headerContainer.css'
import img from '/Home/pokedex.png'

const HeaderContainer = () => {
    return (
        <header className='pokedex__header'>
            <div className="header__img">
                <img src={img} alt="" />
            </div>
            <div className="line__red"></div>
            <div className="line__black"></div>
            <div className="header__img-pokebola">
                <img src="/Home/pokebola.png" alt="" />
            </div>
        </header>
    )
}

export default HeaderContainer