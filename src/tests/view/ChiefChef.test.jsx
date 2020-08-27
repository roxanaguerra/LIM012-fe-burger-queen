import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ChiefChef from '../../view/ChiefChef';

describe('ChiefChef', () => {
  const appChiefChef = (
    <Router>
      <Route path="/">
        <ChiefChef />
      </Route>
    </Router>
  );
  test('renders Header component ', () => {
    render(appChiefChef);
    expect(screen.getByText('JEFE DE COCINA')).toBeInTheDocument();
  });
});
