import React, { useState } from 'react';
import UserContext, {
  UserContextProps,
} from '../../context/user.context';
import { UserInterface } from '../../interfaces/UserInterface';

const UserProvider: React.FC = ({ children }) => {
  const setUser = (user: UserInterface) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUserDetails({ user: user });
  };

  const savedUser = localStorage.getItem('user');

  const userState: UserContextProps = {
    user: savedUser
      ? JSON.parse(savedUser)
      : { email: '', token: '' },
    setUser,
  };

  const [userDetails, setUserDetails] = useState<any>(
    userState,
  );

  return (
    <UserContext.Provider value={userDetails}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
