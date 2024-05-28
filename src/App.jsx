import React, { useEffect, useState } from 'react';
import { gethPokemonData, gethPokemons } from './components/api.jsx';
import Navbar from './components/navbar.jsx';
import Pokedex from './components/pokedex.jsx';
import Searchbar from './components/serchbar.jsx';


const App = () => {
  
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await gethPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await gethPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [])
  
  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
    </>
  );
}

export default App;
