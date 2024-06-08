import React from "react";
import Pokemon from "./pokemon";
import Pagination from "./pagination";

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    
    const onPreviousClickHandler = () => {
        console.log("voltar")
        if (page > 0) {
            setPage(page-1)
        }
    }

    const onNextClickHandler = () => {
        console.log("avançar")
        if (page+1 !== totalPages) {
            setPage(page + 1)
        }
    }

    return (
        <div className="pokedex-body">
            <div className="pokedex-header">
                <h2>Pokedex</h2>
                <Pagination 
                    page={page+1}
                    totalPages={totalPages}
                    onPreviousClick={onPreviousClickHandler}
                    onNextClick={onNextClickHandler}
                />
            </div>
            {loading ? (
                <div>Carregando, já, já aparece 😁😁..</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                        );
                    })}
                </div>
            )}
        </div>
    )
}


export default Pokedex;