import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    const pokemonsData = [];
    for (let i = 1; i <= 150; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      pokemonsData.push(pokemon);
    }
    setPokemons(pokemonsData);
  };
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>SolarPunk Pokemon</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
  
  
}

export default App;