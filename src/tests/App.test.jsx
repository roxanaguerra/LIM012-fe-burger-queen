import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Error from '../App';

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  render(
    <Router history={history}>
      <Route>
        <Error />
      </Route>
    </Router>,
  );

  const h1Element = screen.getByText('error 404');
  const spanElement = screen.getByText('pagina no encontrada');

  expect(h1Element).toBeInTheDocument();
  expect(spanElement).toBeInTheDocument();
});
