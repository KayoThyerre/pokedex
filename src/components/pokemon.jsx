import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";
import typeColors from "./typeColors";

const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
    const { pokemon } = props;

    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name);
    };

    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";
    
    const primaryType = pokemon.types[0].type.name;
    const cardStyle = {
        background: typeColors[primaryType],
    };

    return (
        <div className="pokemon-card" style={cardStyle}>
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={pokemon.name} className="pokemon-img" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <p>#{pokemon.id}</p>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type" style={cardStyle}>
                        {pokemon.types.map((type, index) => {
                            return (
                                <div
                                key={index} 
                                className="pokemon-type-text"
                                >
                                    {type.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>{heart}</button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;