import React, {useState} from "react";
import { searchPokemon } from "./api.jsx";

const Searchbar = () => {
    const [search, setSearch] = useState("dito");
    const [pokemon, setPokemon] = useState();

    const onChangeHandler = (e) => {
        setSearch (e.target.value);
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        setPokemon(result)
        console.log(result)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search);
    }
   
    

    return (
        <div className="searchbar-container">
            <div className="searchbar"> 
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}/>
            </div>
            <div className="search-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome: {pokemon.name}</div>
                    <div>ID: {pokemon.id}</div>
                    <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} />
                </div>
            ) : null}
        </div>
    )
};

export default Searchbar;