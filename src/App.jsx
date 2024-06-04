import React, { useEffect, useState } from 'react';
import { gethPokemonData, gethPokemons } from './components/api.jsx';
import Navbar from './components/navbar.jsx';
import Pokedex from './components/pokedex.jsx';
import Searchbar from './components/serchbar.jsx';
import { FavoriteProvider } from './contexts/favoritesContext.jsx';


const favoritesKey = "f"

const App = () => {
  
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const offset = itensPerPage * page;
      const data = await gethPokemons(itensPerPage, offset);
      // console.log("Data:", data);
      const promises = data.results.map(async (pokemon) => {
        return await gethPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      // console.log("Results:", results);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  const loadFavoritePokemons = () =>{
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  }

  useEffect(() => {
    loadFavoritePokemons()
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);      
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  };
  
  return (
    <FavoriteProvider 
      value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}
    >
    <>
      <Navbar />
      <Searchbar />
      <Pokedex 
      pokemons={pokemons} 
      loading={loading} 
      page={page} 
      setPage={setPage}
      totalPages={totalPages} 
      />
    </>
    </FavoriteProvider>
  );
}

export default App;
