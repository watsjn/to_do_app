import React from 'react';
import AuthContext from '../AuthContext';
import {
  Route,
  Redirect,
} from 'react-router-dom';

interface privateRoutesProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<
  privateRoutesProps
> = ({ component: Component, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {({ isAuthorized }) => (
        <Route
          {...rest}
          render={props =>
            isAuthorized ? (
              <Component />
            ) : (
              <Redirect to="/signin"></Redirect>
            )
          }
        />
      )}
    </AuthContext.Consumer>
  );
};

export default PrivateRoute;
