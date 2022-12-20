import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DarkMode from '../components/pokedex/DarkMode'
import FooterContainer from '../components/pokedex/FooterContainer'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

// styles css
import './styles/home.css'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setTrainerGlobal(event.target.name.value.trim()))
        event.target.name.value = ""
        navigate('/pokedex')
    }

    return (
        <div className='home__container'>
            <main className='main__container'>
                <div className="home__img">
                    <img src="./Home/pokedex.png" alt="" />
                </div>
                <div className="home__main">
                    <h1 className='main__title'>¡Hi Trainer!</h1>
                    <p className='main__sub-title'>give me your name to start</p>
                </div>
                <div className="home__form">
                    <form className='form' onSubmit={handleSubmit}>
                        <input className='form__input' id='name' type="text" placeholder='Name Trainer' />
                        <button className='form__btn'>Start</button>
                    </form>
                </div>
                <FooterContainer />
            </main>
        </div>

    )
}

export default Home