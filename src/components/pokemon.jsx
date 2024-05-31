import React from "react";

const Pokemon = (props) => {

    const { pokemon } = props;
    const onHeartClick = () => {
        console.log("pode favoritar")
    };
    const heart = "❤️";
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