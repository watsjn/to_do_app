import * as React from 'react';
import AuthContext from '../AuthContext';
import { Redirect } from 'react-router-dom';
import SignIn from '../components/signIn/SignIn';

const SignInRoute: React.FC = () => (
  <AuthContext.Consumer>
    {({ isAuthorized }) =>
      isAuthorized ? (
        <Redirect to="/" />
      ) : (
        <SignIn />
      )
    }
  </AuthContext.Consumer>
);

export default SignInRoute;
