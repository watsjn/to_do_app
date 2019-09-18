import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignInRoute from './SignInRoute';

const MainRouter: React.FC = () => (
  <Switch>
    <Route
      path="/signin"
      exact
      component={SignInRoute}
    />
    <PrivateRoute
      path="/"
      exact
      component={() => <p>DashBoard</p>}
    />
  </Switch>
);

export default MainRouter;
