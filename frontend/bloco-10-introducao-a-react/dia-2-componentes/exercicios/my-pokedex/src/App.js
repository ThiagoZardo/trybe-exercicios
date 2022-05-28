import React from 'react';
import './App.css';
import pokemons from './data';
//Import do json criado com os pokemons e seus dados.
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={ pokemons }/>
    </div>
  );

}

export default App;
