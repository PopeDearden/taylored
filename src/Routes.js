import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Highlight from './components/Highlight'
export default (
  <Switch>
    <Route path='/test' component = {Highlight} />
  </Switch>
)