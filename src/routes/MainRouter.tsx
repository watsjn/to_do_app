import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignIn from '../components/signIn/SignIn';

const MainRouter: React.FC = () => (
  <Switch>
    <Route
      path="/signin"
      exact
      component={SignIn}
    />
    <PrivateRoute
      path="/"
      exact
      component={() => <p>DashBoard</p>}
    />
  </Switch>
);

export default MainRouter;
