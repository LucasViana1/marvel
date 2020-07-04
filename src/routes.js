import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Access from './pages/Access';
import Home from './pages/Home';
import Character from './pages/Character';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Access} />
      <Route path="/home" component={Home} />
      <Route path="/character" component={Character} />
    </Switch>
  );
};
export default Routes;
