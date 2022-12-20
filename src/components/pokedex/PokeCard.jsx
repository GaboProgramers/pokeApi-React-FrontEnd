import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Styles Css
import './style/pokeCard.css'

const PokeCard = ({ url }) => {

    const [pokeInfo, setPokeInfo] = useState()
    const navigate = useNavigate()

    const getDataPokemon = () => {
        axios.get(url)
            .then(res => setPokeInfo(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDataPokemon()
    }, [])

    const handleClick = () => {
        navigate(`/pokedex/${pokeInfo.id}`)
    }

    return (
        <div className={`card__content ${pokeInfo?.types[0].type.name}`}>
            <article className='poke__card' onClick={handleClick}>
                <header className={`card__header ${pokeInfo?.types[0].type.name}`}>
                    <div className="card">
                        <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt={pokeInfo?.name} />
                    </div>
                </header>
                <section className='card__info'>
                    <div className="info__container">
                        <h3 className='info__title'>{pokeInfo?.name}</h3>
                        <ul className='info__items'>
                            {
                                pokeInfo?.types.map(type => (
                                    <li
                                        className='info__item'
                                        key={type.type.name}>
                                        {type.type.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
                <footer className='card__stat'>
                    <ul className='stats__items'>
                        {
                            pokeInfo?.stats.map(stat => (
                                <li
                                    className='stats__item'
                                    key={stat.stat.name}>
                                    <span>{stat.stat.name}</span>
                                    <span>{stat.base_stat}</span>
                                </li>
                            ))
                        }
                    </ul>
                </footer>
            </article>
        </div>
    )
}

export default PokeCard