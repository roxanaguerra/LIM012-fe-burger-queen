import React from 'react';
import {
  BrowserRouter as Router, Route} from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Welcome from '../../view/Welcome';

describe('App', () => {
  const appWelcome = (
    <Router>
      <Route path="/">
        <Welcome />
      </Route>
    </Router>
  );
  test('renders App component welcome', () => {
    render(appWelcome);

    screen.debug();
  });

  test('renders button Mesero', () => {
    const { getByText } = render(appWelcome);
    const buttonElement = getByText('Mesero');
    expect(buttonElement).toBeInTheDocument();
    // fireEvent.click(buttonElement);
  });

  test('renders button Jefe de Cocina', () => {
    const { getByText } = render(appWelcome);
    const buttonElement = getByText('Jefe de Cocina');
    expect(buttonElement).toBeInTheDocument();
  });
});

// describe('Home', () => {
//   test('renders component button HOME', async () => {
//     render(<App />);
//     const button = await screen.findByRole('button', { name: /btn btn-welcome/i });
//     fireEvent.click(button);

//     const title = await screen.findByText('ORDEN DE PEDIDO');
//     expect(title).toBeVisible();
//   });
// });
