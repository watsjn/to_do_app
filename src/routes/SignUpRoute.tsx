import React, { useContext } from 'react';
import UserContext from '../context/user.context';
import { Redirect } from 'react-router-dom';
import SignUp from '../components/signUp/SignUp';

const SignUpRoute: React.FC = () => {
  const { user } = useContext(UserContext);

  return user && user.email ? (
    <Redirect to="/" />
  ) : (
    <SignUp />
  );
};

export default SignUpRoute;
