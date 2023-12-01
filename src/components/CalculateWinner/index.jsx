import React from 'react';
import Squirtle from '../../images/squirtle.png';
import Char from '../../images/Charmander.png';
import Bulba from '../../images/bulbasaur.png';

import './calc.css';
const CalculateWinner = ({ bulbasaurVote, charmanderVote, squirtleVote }) => {
  const pokemons = [
    { name: 'Bulbasaur', voteCount: bulbasaurVote },
    { name: 'Charmander', voteCount: charmanderVote },
    { name: 'Squirtle', voteCount: squirtleVote },
  ];

  if (pokemons.every((pokemon) => pokemon.voteCount === 0)) {
    return <h2>Start voting!</h2>;
  }

  const topVotes = Math.max(...pokemons.map((pokemon) => pokemon.voteCount));
  const winners = pokemons.filter((pokemon) => pokemon.voteCount === topVotes);

  return (
    <>
      {winners.length === 1 ? (
        <>
          <h2>
            {winners[0].name} is in the lead with {topVotes} votes!
          </h2>
          <img
            className='pokemon'
            src={
              winners[0].name === 'Bulbasaur'
                ? Bulba
                : winners[0].name === 'Charmander'
                ? Char
                : winners[0].name === 'Squirtle'
                ? Squirtle
                : null
            }
            alt='Winner Pokemon'
          />
        </>
      ) : (
        <>
          <h2>
            It's a tie between{' '}
            {winners.map((pokemon) => pokemon.name).join(' and ')} with{' '}
            {topVotes} votes each!
          </h2>
          {/* Wanted to the images between the text but cant due to tests failind so hade to separete images to its own map method */}
          {winners.map((pokemon, index) => (
            <React.Fragment key={index}>
              <img
                className='pokemon'
                src={
                  pokemon.name === 'Bulbasaur'
                    ? Bulba
                    : pokemon.name === 'Charmander'
                    ? Char
                    : pokemon.name === 'Squirtle'
                    ? Squirtle
                    : null
                }
                alt={pokemon.name}
              />
            </React.Fragment>
          ))}{' '}
        </>
      )}
    </>
  );
};

export default CalculateWinner;
