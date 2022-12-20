import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import HeaderContainer from './pokedex/HeaderContainer'

const ProtecterRoute = () => {

    const trainer = useSelector(state => state.trainer)

    if (trainer) {
        return (
            <>
                <HeaderContainer />
                <Outlet />
            </>
        )
    } else {
        return <Navigate to="/" />
    }
}

export default ProtecterRoute