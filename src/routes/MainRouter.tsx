import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SignInRoute from './SignInRoute';
import SignUpRoute from './SignUpRoute';

const MainRouter: React.FC = () => (
  <Switch>
    <Route path="/signin" exact component={SignInRoute} />
    <Route path="/signup" exact component={SignUpRoute} />
    <PrivateRoute
      path="/"
      exact
      component={() => <p>DashBoard</p>}
    />
  </Switch>
);

export default MainRouter;
