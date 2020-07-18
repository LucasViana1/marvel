// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Access from './pages/Access';
import Home from './pages/Home';
import Character from './pages/Character';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Access} />
      <Route path="/home" component={Home} />
      <Route path="/character/:characterId" component={Character} />
      <Redirect to="/" />
    </Switch>
  );
};
export default Routes;
