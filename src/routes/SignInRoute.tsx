import React, { useContext } from 'react';
import UserContext from '../context/user.context';
import { Redirect } from 'react-router-dom';
import SignIn from '../components/signIn/SignIn.component';

const SignInRoute: React.FC = () => {
  const { user } = useContext(UserContext);

  return user && user.email ? (
    <Redirect to="/" />
  ) : (
    <SignIn />
  );
};

export default SignInRoute;
