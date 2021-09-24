import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route component={ Login } path="/" exact />
      <Route component={ Wallet } path="/carteira" />
    </Switch>
  );
}

export default App;
