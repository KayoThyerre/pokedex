import React from "react";
import Pokemon from "./pokemon";

const Pokedex = (props) => {
    const { pokemons, loading } = props;
    console.log("pokemons", pokemons)

    return (
        <div>
            <div className="pokedex-header">
                <h2>Pokedex</h2>
                <div>Paginação:</div>
            </div>
            {loading ? (
                <div>Carregando, já, já aparece 😁😁..</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (<Pokemon key={index} pokemon={pokemon}/>
                        )
                    })}
                </div>
            )}
        </div>
    )
}


export default Pokedex;