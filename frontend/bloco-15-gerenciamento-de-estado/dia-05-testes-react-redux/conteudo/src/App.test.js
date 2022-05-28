import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './renderWithRedux'

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('A página deve ter um botão e um texto 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});