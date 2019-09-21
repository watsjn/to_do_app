import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../context/user.context';

interface privateRoutesProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<privateRoutesProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        user && user.email ? (
          <Component />
        ) : (
          <Redirect to="/signin"></Redirect>
        )
      }
    />
  );
};

export default PrivateRoute;
