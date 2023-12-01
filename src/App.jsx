import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserInput from './components/UserInput';
import PokemonVote from './components/PokemonVote';

import IMG from './images/logo.png';

function App() {
  const [name, setName] = useState('');

  const handleSubmit = (name) => {
    setName(name);
    console.log(name);
  };
  return (
    <div className='App'>
      <Header />
      <img className='logo' src={IMG} alt='pokemon showdown' />
      <UserInput onSubmit={handleSubmit} />
      <PokemonVote name={name} />
      <Footer />
    </div>
  );
}

export default App;
