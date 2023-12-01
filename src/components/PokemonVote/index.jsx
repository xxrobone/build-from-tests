import React, { useState } from 'react';
import CalculateWinner from '../CalculateWinner';
import PokemonInput from '../PokemonInput';

const PokemonVote = ({ name }) => {
  const initialPokemonData = {
    Bulbasaur: { voteCount: 0, changedName: '' },
    Charmander: { voteCount: 0, changedName: '' },
    Squirtle: { voteCount: 0, changedName: '' },
  };

  const [pokemonData, setPokemonData] = useState(initialPokemonData);

  const handleNameChange = (pokemonName, newName) => {
    setPokemonData((prevData) => ({
      ...prevData,
      [pokemonName]: { ...prevData[pokemonName], changedName: newName },
    }));
  };
<q></q>

  return (
    <div>
      {name && <p data-testid='user-input-display' className='name'>Welcome {name}!</p>}
      <CalculateWinner
        bulbasaurVote={pokemonData.Bulbasaur.voteCount}
        charmanderVote={pokemonData.Charmander.voteCount}
        squirtleVote={pokemonData.Squirtle.voteCount}
      />
      <div className='wrapper'>
        {Object.entries(pokemonData).map(([pokemonName, pokemon], index) => (
          <div key={index} className='vote-container'>
            <h3>{pokemonName}</h3>
            <PokemonInput
              data-testid={`${pokemonName.toLowerCase()}-input`}
              pokemonName={pokemonName}
              onNameChange={(newName) => handleNameChange(pokemonName, newName)}
            />
            <button
              className='vote'
              data-testid={`${pokemonName.toLowerCase()}-vote`}
              onClick={() =>
                setPokemonData((prevData) => ({
                  ...prevData,
                  [pokemonName]: { ...prevData[pokemonName], voteCount: prevData[pokemonName].voteCount + 1 },
                }))
              }
            >
              Vote {pokemon.changedName || pokemonName}
            </button>
            <p data-testid='paragraph'>{pokemon.voteCount} votes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonVote;
