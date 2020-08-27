import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Waiter from '../../view/Waiter';

describe('Waiter', () => {
  const appWaiter = (
    <Router>
      <Route path="/">
        <Waiter />
      </Route>
    </Router>
  );
  test('renders Header component ', () => {
    render(appWaiter);
    expect(screen.getByText('ORDEN DE PEDIDO')).toBeInTheDocument();
  });
  test('Should find button "DESAYUNO" in the component', () => {
    render(appWaiter);
    expect(screen.getByText('DESAYUNO')).toBeInTheDocument();
  });

  test('Should find button "HAMBURGUESA" in the component', () => {
    render(appWaiter);
    expect(screen.getByText('HAMBURGUESA')).toBeInTheDocument();
  });

  test('Should find button "ACOMPAÑAMIENTO" in the component', () => {
    render(appWaiter);
    expect(screen.getByText('ACOMPAÑAMIENTO')).toBeInTheDocument();
  });

  test('Should find button "BEBIDAS" in the component', () => {
    render(appWaiter);
    expect(screen.getByText('BEBIDAS')).toBeInTheDocument();
  });
});
