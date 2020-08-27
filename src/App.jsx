import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Welcome from './view/Welcome';
import ChiefChef from './view/ChiefChef';
import Waiter from './view/Waiter';
import Error from './view/Error';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/mozo">
          <Waiter />
        </Route>
        <Route path="/jefecocina" component={ChiefChef} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
