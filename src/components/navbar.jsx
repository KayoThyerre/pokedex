import React, {useContext} from "react";
import pokeball from '../imgs/pokeball.png'
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext)
    const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
    return (
        <nav>
            <div className="container">
                <img src={pokeball} alt="pokeball" className="pokeball" />
                <img src={logoImg} alt="pokeAPI logo" className="navbar-img" />
            </div>
            <div>Favoritos {favoritePokemons.length} ❤️</div>
        </nav>
    );
};

export default Navbar;
