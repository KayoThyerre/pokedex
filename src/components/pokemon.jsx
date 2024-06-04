import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {

    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const { pokemon } = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    };
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} className="pokemon-img" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <div className="card-botton">
                    <div className="pokemon-type">
                        <div>{pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                        </div>
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>{heart}</button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;