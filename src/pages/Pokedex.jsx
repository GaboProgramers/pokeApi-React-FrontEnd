import axios from "axios";
import React, { useEffect, useState } from "react";
// React redux
import { useSelector } from "react-redux";
// React router
import { useNavigate } from "react-router-dom";
/* import DarkMode from "../components/pokedex/DarkMode"; */

// Components
import HeaderContainer from "../components/pokedex/HeaderContainer";
import Pagination from "../components/pokedex/Pagination";
import PokeCard from "../components/pokedex/PokeCard";

// Styles Css
import "./styles/pokedex.css";

const Pokedex = () => {
    const { trainer } = useSelector((state) => state);
    const [pokemones, setPokemones] = useState();
    const [types, setTypes] = useState();
    const [typeSelect, setTypeSelect] = useState("All pokemons");

    const navigate = useNavigate();

    const getAllData = () => {
        const URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000";
        axios
            .get(URL)
            .then((res) => setPokemones(res.data.results))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (typeSelect !== "All pokemons") {
            axios
                .get(typeSelect)
                .then((res) =>
                    setPokemones(res.data.pokemon.map((event) => event.pokemon))
                )
                .catch((err) => console.log(err));
        } else {
            getAllData();
        }
    }, [typeSelect]);

    useEffect(() => {
        const URL = "https://pokeapi.co/api/v2/type";
        axios
            .get(URL)
            .then((res) => setTypes(res.data.results))
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const input = e.target.search.value.trim().toLowerCase();
        navigate(`/pokedex/${input}`);
        e.target.search.value = "";
    };

    const handleChange = (e) => {
        setTypeSelect(e.target.value);
        setPage(1);
    };

    // ? Logica de paginacion
    const [page, setPage] = useState(1);
    const [pokePerPage, setPokePerPage] = useState(8);
    const initialPoke = (page - 1) * pokePerPage;
    const FinalPoke = page * pokePerPage;
    const maxPages = pokemones && Math.ceil(pokemones.length / pokePerPage);

    // Renderizado JSX
    return (
        <div className="pokedex__container">
            {/* <DarkMode /> */}
            <h2 className="pokedex__title">
                <span className="trainer__name">Welcome {trainer}</span>, here you can
                find your favorite pokemon.{" "}
            </h2>
            <div className="filter__container">
                <form className="filter__form" onSubmit={handleSubmit}>
                    <input className="filter__input" id="search" type="text" placeholder="name pokemon" />
                    <button className="filter__btn">Search</button>
                </form>
                <div className="select__container">
                    <i className='bx bx-chevron-down arrow'></i>
                    <select className="filter__select" onChange={handleChange}>
                        <option value="All pokemons">All pokemons</option>
                        {types?.map((type) => (
                            <option key={type.url} value={type.url}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="pagination__container">
                <Pagination page={page} maxPages={maxPages} setPage={setPage} />
            </div>
            <div className="poke__container">
                {
                    pokemones?.slice(initialPoke, FinalPoke).map((poke) => (
                        <PokeCard key={poke.url} url={poke.url} />
                    ))
                }
            </div>
            <div className="pagination__container">
                <Pagination page={page} maxPages={maxPages} setPage={setPage} />
            </div>
        </div>
    );
};

export default Pokedex;
