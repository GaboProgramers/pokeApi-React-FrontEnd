import React, { useState } from 'react'

// Style css
import './style/pagination.css'

const Pagination = ({ page, maxPages, setPage }) => {

    const pagesPerBlock = 6 // paginas por bloque
    const currentBlock = Math.ceil(page / pagesPerBlock) // bloque actual
    const maxBlock = Math.ceil(maxPages / pagesPerBlock) // maximo de bloques

    const arrPages = []
    const initialPages = (currentBlock - 1) * pagesPerBlock + 1
    const finalPages = maxBlock === currentBlock ? maxPages : currentBlock * pagesPerBlock
    for (let i = initialPages; i <= finalPages; i++) {
        arrPages.push(i)
    }

    const handlePages = number => {
        setPage(number)
    }

    const handlePrevious = () => {
        if (page - 1 > 0) {
            setPage(page - 1)
        }
    }
    // Logica para no superar el maximo de paginas
    const handleNext = () => {
        if (page + 1 <= maxPages) {
            setPage(page + 1)
        }
    }

    return (
        <div className='set__paginate'>
            <ul className='paginate__list'>
                <li className='paginate__previous items' onClick={handlePrevious}><i className='bx bx-chevrons-left' ></i></li>
                {
                    arrPages.map(e => (
                        <li className={`paginate__item items ${page === e && 'page__active'}`} onClick={() => handlePages(e)} key={e}>{e}</li>
                    ))
                }
                <li className='paginate__next items' onClick={handleNext}><i className='bx bx-chevrons-right'></i></li>
            </ul>
        </div>
    )
}

export default Pagination