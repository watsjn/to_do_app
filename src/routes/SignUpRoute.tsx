import React from 'react';
import AuthContext from '../AuthContext';
import { Redirect } from 'react-router-dom';
import SignUp from '../components/signUp/SignUp';

const SignUpRoute: React.FC = () => (
  <AuthContext.Consumer>
    {({ isAuthorized }) =>
      isAuthorized ? <Redirect to="/" /> : <SignUp />
    }
  </AuthContext.Consumer>
);

export default SignUpRoute;
