import React, { useState } from 'react';

const UserInput = ({ onSubmit }) => {
  const [currentName, setCurrentName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setCurrentName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(currentName);
    setSubmitted(true);
    console.log('Is submitted', submitted);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nameInput'>Enter your name:</label>
        <input
          id='nameInput'
          type='text'
          value={currentName}
          onChange={handleChange}
          placeholder='Enter your name'
        />
        <button type='submit' className='vote'>Submit</button>
      </form>
      {submitted ? <p>Chosen name: {currentName}</p> : ''}
    </>
  );
};

export default UserInput;
