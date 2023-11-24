import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserInput from '.';

describe('A input field which will render the name you have inputted', () => {
  test('renders input field and submit button', () => {
    render(<UserInput />);
    const userInput = screen.getByPlaceholderText('Enter your name');
    expect(userInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('updates input value on change', () => {
    render(<UserInput />);
    const userInput = screen.getByPlaceholderText('Enter your name');

    fireEvent.change(userInput, { target: { value: 'Jimothy' } });
    expect(userInput.value).toBe('Jimothy');
  });

  test('submits form with input value', () => {
    let submittedName = '';
    const onSubmit = (name) => {
      submittedName = name;
    };

    render(<UserInput onSubmit={onSubmit} />);
    const userInput = screen.getByPlaceholderText('Enter your name');
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(userInput, { target: { value: 'Timo Calzone' } });
    fireEvent.click(submitButton);

    expect(submittedName).toBe('Timo Calzone');
  });

  test('submits form with empty name', () => {
    let submittedName = '';
    const onSubmit = (name) => {
      submittedName = name;
    };

    render(<UserInput onSubmit={onSubmit} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitButton);

    expect(submittedName).toBe('');
  });
});
