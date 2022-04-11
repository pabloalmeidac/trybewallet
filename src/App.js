import React from 'react';
import { Switch, Route } from 'react-router';
import { Router } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Router basename="https://pabloalmeidac.github.io/trybewallet.github.io/">
      <Switch>
        <Route component={ Login } path="/" exact />
        <Route component={ Wallet } path="/carteira" />
      </Switch>
    </Router>
  );
}

export default App;
