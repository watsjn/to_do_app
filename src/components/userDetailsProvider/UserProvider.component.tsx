import React, { useState } from 'react';
import UserContext, {
  UserContextProps,
} from '../../context/user.context';
import { UserInterface } from '../../interfaces/UserInterface';

const UserProvider: React.FC = ({ children }) => {
  const setUser = (user: UserInterface) => {
    setUserDetails((prevState: UserContextProps) => {
      return { user, ...prevState };
    });
  };

  const signUpUser = (user: object): void | object => {
    fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const userState: UserContextProps = {
    user: { email: '', token: '' },
    setUser,
    signUpUser,
  };

  const [userDetails, setUserDetails] = useState(userState);

  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
