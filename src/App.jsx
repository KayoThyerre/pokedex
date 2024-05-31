import React, { useEffect, useState } from 'react';
import { gethPokemonData, gethPokemons } from './components/api.jsx';
import Navbar from './components/navbar.jsx';
import Pokedex from './components/pokedex.jsx';
import Searchbar from './components/serchbar.jsx';


const App = () => {
  
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await gethPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await gethPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])
  
  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} page={page} totalPages={totalPages} setPage={setPage}/>
    </>
  );
}

export default App;
