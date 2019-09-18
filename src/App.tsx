import React, { useState } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import AuthContext from './AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import SignIn from './components/signIn/SignIn';

const App: React.FC = () => {
  const [
    isAuthorized,
    setIsAuthorized,
  ] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        authorize: () => setIsAuthorized(true),
      }}
    >
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
    </AuthContext.Provider>
  );
};

export default App;
