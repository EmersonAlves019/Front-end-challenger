import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
