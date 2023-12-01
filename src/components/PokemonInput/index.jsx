import React, { useState } from 'react';

const PokemonInput = ({ onNameChange, pokemonName }) => {
  const [localPokemonName, setLocalPokemonName] = useState('');

  const handleInputChange = (event) => {
    setLocalPokemonName(event.target.value);
  };

  const handleButtonClick = () => {
    if (localPokemonName.trim() !== '') {
      onNameChange(localPokemonName);
      setLocalPokemonName('');
    }
  };

  return (
    <div>
      <input
        type='text'
        value={localPokemonName}
        onChange={handleInputChange}
        placeholder='Enter new name'
        data-testid={`pokemon-input-${pokemonName}`}
      />
      <button className='btn' onClick={handleButtonClick}>Change Name</button>
    </div>
  );
};

export default PokemonInput;
