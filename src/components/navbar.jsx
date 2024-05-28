import React from "react";
import pokeball from '../imgs/pokeball.png'

const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <img src={pokeball} alt="pokeball" className="pokeball" />
                <img src={logoImg} alt="pokeAPI logo" className="navbar-img" />
            </div>
        </nav>
    );
};

export default Navbar;
